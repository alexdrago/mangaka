<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FavoritosRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Annotation\ApiFilter;



/**
 * @ApiResource(
 *     collectionOperations={"get", "post"},
 *     itemOperations={"get", "put", "delete"={"method"="DELETE"}},
 *     normalizationContext={"groups"={"Fav_listado:read"},"swagger_definition_name"="Lectura"},
 *     denormalizationContext={"groups"={"Fav_listado:write"},"swagger_definition_name"="Escritura"})
 * @ORM\Entity(repositoryClass=FavoritosRepository::class)
 * @ApiFilter(SearchFilter::class,properties={"usuario":"exact"})
 *
 */
class Favoritos
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @groups({"user:read","Fav_listado:read"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="favoritos")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"Fav_listado:read","Fav_listado:write"})

     */
    private $User;

    /**
     * @ORM\ManyToOne(targetEntity=Manga::class, inversedBy="favoritos")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"user:read","user:write","Fav_listado:read","Fav_listado:write"})
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
