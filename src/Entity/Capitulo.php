<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CapitulosRepository;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"Capitulos_listado:read"},"swagger_definition_name"="Lectura"},
 *     denormalizationContext={"groups"={"Capitulos_listado:write"},"swagger_definition_name"="Escritura"},
 *     shortName="Capitulos",
 *     attributes={
 *          "pagination_items_per_page"=10
 *     }
 * )
 * @ORM\Entity(repositoryClass=CapitulosRepository::class)
 */
class Capitulo
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"manga_listado:read","Capitulos_listado:write","Capitulos_listado:read"})
     */
    private $Nombre;

    /**
     * @ORM\Column(type="date")
     * @Groups({"Capitulos_listado:write","Capitulos_listado:read"})
     */
    private $Fecha;

    /**
     * @ORM\ManyToOne(targetEntity=Manga::class, inversedBy="Capitulos")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"Capitulos_listado:write","Capitulos_listado:read"})
     */
    private $Manga;

    /**
     * @ORM\OneToMany(targetEntity=Pagina::class, mappedBy="Capitulo", orphanRemoval=true)
     */
    private $paginas;

    public function __construct()
    {
        $this->paginas = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->Nombre;
    }

    public function setNombre(?string $Nombre): self
    {
        $this->Nombre = $Nombre;

        return $this;
    }

    public function getFecha(): ? DateTimeInterface
    {
        return $this->Fecha;
    }

    public function setFecha( DateTimeInterface $Fecha): self
    {
        $this->Fecha = $Fecha;

        return $this;
    }

    public function getManga(): ?Manga
    {
        return $this->Manga;
    }

    public function setManga(?Manga $Manga): self
    {
        $this->Manga = $Manga;

        return $this;
    }

    /**
     * @return Collection|Pagina[]
     */
    public function getPaginas(): Collection
    {
        return $this->paginas;
    }

    public function addPagina(Pagina $pagina): self
    {
        if (!$this->paginas->contains($pagina)) {
            $this->paginas[] = $pagina;
            $pagina->setCapitulo($this);
        }

        return $this;
    }

    public function removePagina(Pagina $pagina): self
    {
        if ($this->paginas->contains($pagina)) {
            $this->paginas->removeElement($pagina);
            // set the owning side to null (unless already changed)
            if ($pagina->getCapitulo() === $this) {
                $pagina->setCapitulo(null);
            }
        }

        return $this;
    }
}
