<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CapitulosListRepository;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=CapitulosListRepository::class)
 */
class CapitulosList
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $Nombre;

    /**
     * @ORM\Column(type="date")
     */
    private $Fecha;

    /**
     * @ORM\ManyToOne(targetEntity=MangaList::class, inversedBy="Capitulos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Manga;

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

    public function getManga(): ?MangaList
    {
        return $this->Manga;
    }

    public function setManga(?MangaList $Manga): self
    {
        $this->Manga = $Manga;

        return $this;
    }
}
