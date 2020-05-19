<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MangaListRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=MangaListRepository::class)
 */
class MangaList
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Nombre;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $Autor;

    /**
     * @ORM\Column(type="string", length=400, nullable=true)
     */
    private $Descripcion;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $Portada;

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

    public function getPortada(): ?string
    {
        return $this->Portada;
    }

    public function setPortada(?string $Portada): self
    {
        $this->Portada = $Portada;

        return $this;
    }
}
