<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MarcaPaginasRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ApiResource(normalizationContext={"groups"={"MarPag_listado:read"},"swagger_definition_name"="Lectura"},
 *     denormalizationContext={"groups"={"MarPag_listado:write"},"swagger_definition_name"="Escritura"})
 * @ORM\Entity(repositoryClass=MarcaPaginasRepository::class)
 * @ApiFilter(SearchFilter::class,properties={"Usuario":"exact"})
 */
class MarcaPaginas
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"manga_listado:read","Categoria_listado:read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"manga_listado:read",
     *     "Categoria_listado:read",
     *     "MarPag_listado:read","MarPag_listado:write"})
     */
    private $Usuario;

    /**
     * @Groups({"user:read","MarPag_listado:read","MarPag_listado:write"})
     * @ORM\ManyToOne(targetEntity=Capitulo::class)
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

    public function getCapitulo(): ?Capitulo
    {
        return $this->Capitulo;
    }

    public function setCapitulo(?Capitulo $Capitulo): self
    {
        $this->Capitulo = $Capitulo;

        return $this;
    }
}
