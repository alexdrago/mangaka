<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use App\Repository\MangaListRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use Symfony\Component\Serializer\Annotation\SerializedName;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"manga_listado:read"},"swagger_definition_name"="Lectura"},
 *     denormalizationContext={"groups"={"manga_listado:write"},"swagger_definition_name"="Escritura"},
 *     shortName="Mangas",
 *     attributes={
 *          "pagination_items_per_page"=10
 *     }
 * )
 * @ORM\Entity(repositoryClass=MangaListRepository::class)
 * @ApiFilter(
 *     SearchFilter::class,
 *     properties={"Nombre":"partial",
 *     PropertyFilter::class})
 */
class MangaList
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"manga_listado:read"})
     */
    private $id;

    /**
     * Nombre del manga
     * @ORM\Column(type="string", length=255)
     * @Groups({"manga_listado:read","manga_listado:write","Categoria_listado:read"})
     */
    private $Nombre;

    /**
     * Autor del manga
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"manga_listado:read","manga_listado:write"})
     */
    private $Autor;

    /**
     * Descripcion del manga.
     * @Groups({"manga_listado:read"})
     * @ORM\Column(type="string", length=400, nullable=true)
     */
    private $Descripcion;

    /**
     * Imagen de portada del manga
     *
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"manga_listado:read","manga_listado:write"})
     */
    private $Portada;

    /**
     * @ORM\ManyToOne(targetEntity=CategoriasList::class, inversedBy="mangaLists")
     * @Groups({"manga_listado:read"})
     */
    private $Categoria;

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
            return $this->Descripcion;
        }
        return substr($this->Descripcion, 0, 40).'...';
    }

    public function getPortada(): ?string
    {
        return $this->Portada;
    }

    public function setPortada(?string $Portada): self
    {
        $this->Portada = $Portada;

        return $this;
    }

    public function getCategoria(): ?CategoriasList
    {
        return $this->Categoria;
    }

    public function setCategoria(?CategoriasList $Categoria): self
    {
        $this->Categoria = $Categoria;

        return $this;
    }
}
