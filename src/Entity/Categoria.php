<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
<<<<<<< HEAD:src/Entity/MangaList.php
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
=======
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

>>>>>>> Api:src/Entity/Categoria.php
 */
class Categoria
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"manga_listado:read"})
     */
    private $id;

    /**
<<<<<<< HEAD:src/Entity/MangaList.php
     * Nombre del manga
     * @ORM\Column(type="string", length=255)
     * @Groups({"manga_listado:read","manga_listado:write"})
=======
     * @ORM\Column(type="string", length=50)
     * @Groups({"manga_listado:read","Categoria_listado:read","Categoria_listado:write"})
>>>>>>> Api:src/Entity/Categoria.php
     */
    private $Nombre;

    /**
<<<<<<< HEAD:src/Entity/MangaList.php
     * Autor del manga
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"manga_listado:read","manga_listado:write"})
=======
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"Categoria_listado:read","Categoria_listado:write"})
>>>>>>> Api:src/Entity/Categoria.php
     */
    private $Decripcion;

    /**
<<<<<<< HEAD:src/Entity/MangaList.php
     * Descripcion del manga
     * @Groups({"manga_listado:read"})
     * @ORM\Column(type="string", length=400, nullable=true)
=======
     * @ORM\OneToMany(targetEntity=Manga::class, mappedBy="Categoria")
     * @Groups({"Categoria_listado:read","Categoria_listado:write"})
>>>>>>> Api:src/Entity/Categoria.php
     */
    private $mangaLists;

<<<<<<< HEAD:src/Entity/MangaList.php
    /**
     * Imagen de portada del manga
     *
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"manga_listado:read","manga_listado:write"})
     */
    private $Portada;
=======
    public function __construct()
    {
        $this->mangaLists = new ArrayCollection();
    }
>>>>>>> Api:src/Entity/Categoria.php

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

<<<<<<< HEAD:src/Entity/MangaList.php

    public function setDescripcion(?string $Descripcion): self
=======
    public function addMangaList(Manga $mangaList): self
>>>>>>> Api:src/Entity/Categoria.php
    {
        if (!$this->mangaLists->contains($mangaList)) {
            $this->mangaLists[] = $mangaList;
            $mangaList->setCategoria($this);
        }

        return $this;
    }

<<<<<<< HEAD:src/Entity/MangaList.php
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
=======
    public function removeMangaList(Manga $mangaList): self
>>>>>>> Api:src/Entity/Categoria.php
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
