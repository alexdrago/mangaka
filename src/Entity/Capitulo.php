<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Capitulo
 *
 * @ORM\Table(name="Capitulo", indexes={@ORM\Index(name="fk_Capitulo_Manga_idx", columns={"Manga_idManga"})})
 * @ORM\Entity
 */
class Capitulo
{
    /**
     * @var string
     *
     * @ORM\Column(name="Titulo", type="string", length=45, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $titulo;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="Actualizacion", type="date", nullable=true)
     */
    private $actualizacion;

    /**
     * @var \Manga
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="Manga")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="Manga_idManga", referencedColumnName="idManga")
     * })
     */
    private $mangaIdmanga;


}
