<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MarcaPaginaRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"MarPag_listado:read"},"swagger_definition_name"="Lectura"},
 *     denormalizationContext={"groups"={"MarPag_listado:write"},"swagger_definition_name"="Escritura"})
 * @ORM\Entity(repositoryClass=MarcaPaginaRepository::class)
 * @ApiFilter(SearchFilter::class,properties={"usuario":"exact"})
 */
class MarcaPagina
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"manga_listado:read","Categoria_listado:read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="marcaPagina")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"manga_listado:read",
     *     "Categoria_listado:read",
     *     "MarPag_listado:read","MarPag_listado:write"})
     */
    private $usuario;

    /**
     * @ORM\ManyToOne(targetEntity=Capitulo::class, inversedBy="marcaPaginas")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"user:read","MarPag_listado:read","MarPag_listado:write"})
     */
    private $capitulo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsuario(): ?User
    {
        return $this->usuario;
    }

    public function setUsuario(?User $usuario): self
    {
        $this->usuario = $usuario;

        return $this;
    }

    public function getCapitulo(): ?Capitulo
    {
        return $this->capitulo;
    }

    public function setCapitulo(?Capitulo $capitulo): self
    {
        $this->capitulo = $capitulo;

        return $this;
    }
    public function __toString()
    {
        return $this->id."";
    }
}
