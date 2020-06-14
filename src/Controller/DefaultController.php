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
                ->findAllOrd('id');


        }

        $mangas=$paginator->paginate($allMangas,$request->query->getInt("pagina",1),10); //paginamos


        $mangasActualizados=null; //Mangas a mostrar

            $allMangas = $this->getDoctrine()
                ->getRepository(Manga::class)
                ->Actualizados();


        $mangasActualizados=$paginator->paginate($allMangas,$request->query->getInt("pagina",1),10); //paginamos

        return $this->render('principal/index.html.twig',["mangas"=>$mangas,"Actualizados"=>$mangasActualizados]);
/*       return $this->render('principal/index.html.twig');*/
    }
}
