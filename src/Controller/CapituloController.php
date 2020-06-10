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
     * @Route("/", name="capitulo_index", methods={"GET"})
     */
    public function index(CapitulosRepository $capitulosRepository): Response
    {
        return $this->render('capitulo/index.html.twig', [
            'capitulos' => $capitulosRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="capitulo_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $capitulo = new Capitulo();
        $form = $this->createForm(CapituloType::class, $capitulo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($capitulo);
            $entityManager->flush();

            return $this->redirectToRoute('capitulo_index');
        }

        return $this->render('capitulo/new.html.twig', [
            'capitulo' => $capitulo,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="capitulo_show", methods={"GET"})
     */
    public function show(Capitulo $capitulo): Response
    {
        return $this->render('capitulo/show.html.twig', [
            'capitulo' => $capitulo,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="capitulo_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Capitulo $capitulo): Response
    {
        $form = $this->createForm(CapituloType::class, $capitulo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('capitulo_index');
        }

        return $this->render('capitulo/edit.html.twig', [
            'capitulo' => $capitulo,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="capitulo_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Capitulo $capitulo): Response
    {
        if ($this->isCsrfTokenValid('delete'.$capitulo->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($capitulo);
            $entityManager->flush();
        }

        return $this->redirectToRoute('capitulo_index');
    }
}
