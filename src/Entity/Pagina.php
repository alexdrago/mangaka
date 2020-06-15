<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\PaginaRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=PaginaRepository::class)
 */
class Pagina
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var MediaObject|null
     * @ORM\ManyToOne(targetEntity=MediaObject::class)
     * @ORM\JoinColumn(nullable=true)
     * @ApiProperty(iri="http://schema.org/image")
     */
    private $Imagen;

    /**
     * @ORM\ManyToOne(targetEntity=Capitulo::class, inversedBy="paginas")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Capitulo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImagen()
    {
        return $this->Imagen;
    }

    public function setImagen($Imagen): self
    {
        $this->Imagen = $Imagen;

        return $this;
    }

    public function getCapitulo(): ?Capitulo
    {
        return $this->Capitulo;
    }

    public function setCapitulo(?Capitulo $Capitulo): self
    {
        $this->Capitulo = $Capitulo;

        return $this;
    }
    public function __toString()
    {
        return $this->getId().$this->getCapitulo();
    }
}
