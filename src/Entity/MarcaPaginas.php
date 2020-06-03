<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MarcaPaginasRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=MarcaPaginasRepository::class)
 */
class MarcaPaginas
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $Usuario;

    /**
     * @ORM\ManyToOne(targetEntity=CapitulosList::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $Capitulo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsuario(): ?User
    {
        return $this->Usuario;
    }

    public function setUsuario(?User $Usuario): self
    {
        $this->Usuario = $Usuario;

        return $this;
    }

    public function getCapitulo(): ?CapitulosList
    {
        return $this->Capitulo;
    }

    public function setCapitulo(?CapitulosList $Capitulo): self
    {
        $this->Capitulo = $Capitulo;

        return $this;
    }
}
