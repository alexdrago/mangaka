<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Manga
 *
 * @ORM\Table(name="Manga", uniqueConstraints={@ORM\UniqueConstraint(name="Nomble_UNIQUE", columns={"Nomble"})})
 * @ORM\Entity
 */
class Manga
{
    /**
     * @var int
     *
     * @ORM\Column(name="idManga", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idmanga;

    /**
     * @var string
     *
     * @ORM\Column(name="Nomble", type="string", length=45, nullable=false)
     */
    private $nomble;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Autor", type="string", length=45, nullable=true)
     */
    private $autor;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Descripcion", type="string", length=400, nullable=true)
     */
    private $descripcion;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Portada", type="string", length=50, nullable=true)
     */
    private $portada;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="User", mappedBy="mangaIdmanga")
     */
    private $user;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Categoria", inversedBy="mangaIdmanga")
     * @ORM\JoinTable(name="manga_has_categoria",
     *   joinColumns={
     *     @ORM\JoinColumn(name="Manga_idManga", referencedColumnName="idManga")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="Categoria_Nombre", referencedColumnName="Nombre")
     *   }
     * )
     */
    private $categoriaNombre;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->user = new \Doctrine\Common\Collections\ArrayCollection();
        $this->categoriaNombre = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
