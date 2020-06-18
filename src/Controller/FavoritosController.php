<?php

namespace App\Controller;

use App\Entity\Favoritos;
use App\Form\FavoritosType;
use App\Repository\FavoritosRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/favoritos")
 */
class FavoritosController extends AbstractController
{

    /**
     * @Route("/{id}", name="favoritos_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Favoritos $favorito): Response
    {
        if ($this->isCsrfTokenValid('delete'.$favorito->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($favorito);
            $entityManager->flush();
        }

        return $this->redirectToRoute('favoritos_index');
    }
}
