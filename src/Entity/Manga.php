<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use App\Repository\MangaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;

/**
 * @ApiResource(
 *     collectionOperations={"get", "post"},
 *     itemOperations={"get", "put", "delete"},
 *
 *     normalizationContext={"groups"={"manga_listado:read"},"swagger_definition_name"="Lectura"},
 *     denormalizationContext={"groups"={"manga_listado:write"},"swagger_definition_name"="Escritura"},
 *
 *     shortName="Mangas",
 *     attributes={
 *          "pagination_items_per_page"=10
 *     }
 * )
 * @ORM\Entity(repositoryClass=MangaRepository::class)
 * @ApiFilter(
 *     SearchFilter::class,
 *     properties={"Nombre":"partial",
 *     PropertyFilter::class})
 *
 */
class Manga
{
    /**
     * Idenficador del manga
     *
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"manga_listado:read","user:read"})
     */
    private $id;

    /**
     * Nombre del manga
     *
     * Nombre del manga
     * @ORM\Column(type="string", length=255)
     * @Groups({"manga_listado:read","manga_listado:write","Categoria_listado:read"})
     */
    private $Nombre;

    /**
     *
     * Autor del manga
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"manga_listado:read","manga_listado:write"})
     */
    private $Autor;

    /**
     *
     * Descripcion del manga.
     * @Groups({"manga_listado:read"})
     * @ORM\Column(type="string", length=1000, nullable=true)
     */
    private $Descripcion;


    /**
     * Categoria a la que pertenece el manga
     * @ORM\ManyToOne(targetEntity=Categoria::class, inversedBy="mangaLists")
     * @Groups({"manga_listado:read"})
     */
    private $Categoria;

    /**
     * Coleccion de Capitulos que forman el manga
     * @ORM\OneToMany(targetEntity=Capitulo::class, mappedBy="Manga", orphanRemoval=true)
     * @Groups({"manga_listado:read"})
     */
    private $Capitulos;

    /**
     * Los marcadores de favoritos que he recibido
     * @ORM\OneToMany(targetEntity=Favoritos::class, mappedBy="Manga", orphanRemoval=true)
     */
    private $favoritos;

    /**
     * Portada del manga
     * @ORM\OneToOne(targetEntity=MediaObject::class, cascade={"persist", "remove"})
     * @Groups({"manga_listado:read","manga_listado:write"})
     *
     */
    private $Portada;

    public function __construct()
    {
        $this->Capitulos = new ArrayCollection();
        $this->favoritos = new ArrayCollection();
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

    public function getAutor(): ?string
    {
        return $this->Autor;
    }

    public function setAutor(?string $Autor): self
    {
        $this->Autor = $Autor;

        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->Descripcion;
    }


    public function setDescripcion(?string $Descripcion): self
    {
        $this->Descripcion = $Descripcion;

        return $this;
    }

    /**
     * Descripcion del manga.
     *
     * @Groups({"manga_listado:write"})
     * @SerializedName("Descripcion")
     */
    public function setTextDescripcion(?string $Descripcion): self
    {
        $this->Descripcion = nl2br($Descripcion);

        return $this;
    }

    /**
     * Descripcion corta
     * @Groups({"manga_listado:write"})
     */
    public function getDescriptionCorta(): string
    {
        if (strlen($this->Descripcion) < 40) {
            return $this->Descripcion . "";
        }
        return substr($this->Descripcion, 0, 40) . '...';
    }


    public function getCategoria(): ?Categoria
    {
        return $this->Categoria;
    }

    public function setCategoria(?Categoria $Categoria): self
    {
        $this->Categoria = $Categoria;

        return $this;
    }

    /**
     * @return Collection|Capitulo[]
     */
    public function getCapitulos(): Collection
    {
        return $this->Capitulos;
    }

    public function addCapitulo(Capitulo $capitulo): self
    {
        if (!$this->Capitulos->contains($capitulo)) {
            $this->Capitulos[] = $capitulo;
            $capitulo->setManga($this);
        }

        return $this;
    }

    public function removeCapitulo(Capitulo $capitulo): self
    {
        if ($this->Capitulos->contains($capitulo)) {
            $this->Capitulos->removeElement($capitulo);
            // set the owning side to null (unless already changed)
            if ($capitulo->getManga() === $this) {
                $capitulo->setManga(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Favoritos[]
     */
    public function getFavoritos(): Collection
    {
        return $this->favoritos;
    }
    /**
     * Busca dentro del manga si un usuario lo tiene en favoritos. Si lo encuentra devuelve el id y si no un 0.
     * @return int
     */

    public function userIsLiked(int $idUsuario): ?int
    {
        foreach ($this->favoritos as $favor) {
            if ($favor->getUsuario()->id == $idUsuario) {
                return $favor->getId();
            }
        }
        return 0;
    }

    public function addFavorito(Favoritos $favorito): self
    {
        if (!$this->favoritos->contains($favorito)) {
            $this->favoritos[] = $favorito;
            $favorito->setManga($this);
        }

        return $this;
    }

    public function removeFavorito(Favoritos $favorito): self
    {
        if ($this->favoritos->contains($favorito)) {
            $this->favoritos->removeElement($favorito);
            // set the owning side to null (unless already changed)
            if ($favorito->getManga() === $this) {
                $favorito->setManga(null);
            }
        }

        return $this;
    }

    public function getPortada(): ?MediaObject
    {
        return $this->Portada;
    }

    public function setPortada(?MediaObject $Portada): self
    {
        $this->Portada = $Portada;

        return $this;
    }
    public function __toString()
    {
        return $this->getNombre();
    }
}
