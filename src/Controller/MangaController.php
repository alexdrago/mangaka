<?php

namespace App\Controller;

use App\Entity\Manga;
use App\Repository\MangaRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/manga")
 */
class MangaController extends AbstractController
{
    /**
     * @Route("/", name="manga_index", methods={"GET"})
     */
    public function index(PaginatorInterface $paginator,MangaRepository $mangaRepository,Request $request): Response
    {
        $allMangas = $mangaRepository->findAll();
        $mangas=$paginator->paginate($allMangas,$request->query->getInt("pagina",1),10); //paginamos

        return $this->render('manga/index.html.twig', [
            'mangas' => $mangas,
        ]);
    }

    /**
     * @Route("/{id}", name="manga_show", methods={"GET"})
     */
    public function show(Manga $manga): Response
    {
        return $this->render('manga/show.html.twig', [
            'manga' => $manga,
        ]);
    }

}
