<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CategoriasRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"Categoria_listado:read"},"swagger_definition_name"="Lectura"},
 *     denormalizationContext={"groups"={"Categoria_listado:write"},"swagger_definition_name"="Escritura"},
 * )
 * @ORM\Entity(repositoryClass=CategoriasRepository::class)
 */
class Categoria
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"manga_listado:read","Categoria_listado:read","Categoria_listado:write"})
     */
    private $Nombre;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"Categoria_listado:read","Categoria_listado:write"})
     */
    private $Decripcion;

    /**
     * @ORM\OneToMany(targetEntity=Manga::class, mappedBy="Categoria")
     * @Groups({"Categoria_listado:read","Categoria_listado:write"})
     */
    private $mangaLists;

    public function __construct()
    {
        $this->mangaLists = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->Nombre;
    }

    public function setNombre(string $Nombre): self
    {
        $this->Nombre = $Nombre;

        return $this;
    }

    public function getDecripcion(): ?string
    {
        return $this->Decripcion;
    }

    public function setDecripcion(?string $Decripcion): self
    {
        $this->Decripcion = $Decripcion;

        return $this;
    }

    /**
     * @return Collection|Manga[]
     */
    public function getMangaLists(): Collection
    {
        return $this->mangaLists;
    }

    public function addMangaList(Manga $mangaList): self
    {
        if (!$this->mangaLists->contains($mangaList)) {
            $this->mangaLists[] = $mangaList;
            $mangaList->setCategoria($this);
        }

        return $this;
    }

    public function removeMangaList(Manga $mangaList): self
    {
        if ($this->mangaLists->contains($mangaList)) {
            $this->mangaLists->removeElement($mangaList);
            // set the owning side to null (unless already changed)
            if ($mangaList->getCategoria() === $this) {
                $mangaList->setCategoria(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->Nombre;
    }
}
