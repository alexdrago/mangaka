<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserLeeCapitulo
 *
 * @ORM\Table(name="user_lee_Capitulo", indexes={@ORM\Index(name="fk_user_has_Capitulo_Capitulo1_idx", columns={"Capitulo_Titulo", "Capitulo_Manga_idManga"}), @ORM\Index(name="fk_user_has_Capitulo_user1_idx", columns={"user_id"})})
 * @ORM\Entity
 */
class UserLeeCapitulo
{
    /**
     * @var \Capitulo
     *
     * @ORM\ManyToOne(targetEntity="Capitulo")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="Capitulo_Titulo", referencedColumnName="Titulo"),
     *   @ORM\JoinColumn(name="Capitulo_Manga_idManga", referencedColumnName="Manga_idManga")
     * })
     */
    private $capituloTitulo;

    /**
     * @var \User
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     * @ORM\OneToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * })
     */
    private $user;


}
