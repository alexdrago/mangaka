<?php

namespace App\Repository;

use App\Entity\Manga;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Manga|null find($id, $lockMode = null, $lockVersion = null)
 * @method Manga|null findOneBy(array $criteria, array $orderBy = null)
 * @method Manga[]    findAll()
 * @method Manga[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MangaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Manga::class);
    }


     /**
      * @return Manga[] Returns an array of Manga objects order by value
      */

    public function findAllOrd($value)
    {
        return $this->createQueryBuilder('m')
            ->orderBy('m.'.$value, 'DESC')
            ->getQuery()
            ->getResult()
        ;
    }
    /**
     * @return Manga[] Returns an array of Manga objects order by value
     */
    public function Actualizados()
    {
        $em = $this->getEntityManager();
        $qb = $em->createQueryBuilder()
            ->select('m')->
            from('App\Entity\Manga', 'm')
            ->innerJoin('m.Capitulos', 'c')
            ->where('c.Manga = m.id')
            ->orderBy("c.Fecha","DESC");




        $consulta=$qb->getQuery();

        return $consulta->execute();
    }




    /*
    public function findOneBySomeField($value): ?Manga
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
