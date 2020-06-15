<?php

namespace App\Controller;

use App\Entity\Capitulo;
use App\Form\CapituloType;
use App\Repository\CapitulosRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/capitulo")
 */
class CapituloController extends AbstractController
{
    /**
     * @Route("/{id}", name="capitulo_show", methods={"GET"})
     */
    public function show(Capitulo $capitulo): Response
    {
        return $this->render('capitulo/show.html.twig', [
            'capitulo' => $capitulo,
        ]);
    }

}
