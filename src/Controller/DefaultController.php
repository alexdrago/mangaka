<?php

namespace App\Controller;

use App\Entity\Manga;
use Symfony\Component\HttpFoundation\Request;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="inicio")
     */
    public function indexAction(Request $request, PaginatorInterface $paginator)
    {
        $allMangas=null; //Mangas a mostrar

        if (empty($_GET) or (isset($_GET['page']) and sizeof($_GET)==1)) {

            $allMangas = $this->getDoctrine()
                ->getRepository(Manga::class)
                ->findAll();
        }

        $mangas=$paginator->paginate($allMangas,$request->query->getInt("pagina",1),4); //paginamos

        return $this->render('principal/index.html.twig',["mangas"=>$mangas]);
/*       return $this->render('principal/index.html.twig');*/
    }
}
