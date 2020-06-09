<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="inicio")
     */
    public function indexAction()
    {
        //return $this->redirectToRoute('api_doc');
       return $this->render('Principal/index.html.twig');
    }
}
