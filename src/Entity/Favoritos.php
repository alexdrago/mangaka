<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FavoritosRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource(
 *     normalizationContext={"groups"={"Fav_listado:read"},"swagger_definition_name"="Lectura"},
 *     denormalizationContext={"groups"={"Fav_listado:write"},"swagger_definition_name"="Escritura"})
 * @ORM\Entity(repositoryClass=FavoritosRepository::class)
 *
 */
class Favoritos
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="favoritos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $User;

    /**
     * @ORM\ManyToOne(targetEntity=Manga::class, inversedBy="favoritos")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"user:read"})
     */
    private $Manga;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?user
    {
        return $this->User;
    }

    public function setUser(?user $User): self
    {
        $this->User = $User;

        return $this;
    }

    public function getManga(): ?manga
    {
        return $this->Manga;
    }

    public function setManga(?manga $Manga): self
    {
        $this->Manga = $Manga;

        return $this;
    }
    public function __toString()
    {
        $manga=$this->getManga()->__toString();
        $User=$this->getUser()->__toString();

        return $manga."❤".$User;
    }
}
