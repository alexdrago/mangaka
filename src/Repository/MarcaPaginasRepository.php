<?php

namespace App\Repository;

use App\Entity\MarcaPaginas;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MarcaPaginas|null find($id, $lockMode = null, $lockVersion = null)
 * @method MarcaPaginas|null findOneBy(array $criteria, array $orderBy = null)
 * @method MarcaPaginas[]    findAll()
 * @method MarcaPaginas[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MarcaPaginasRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MarcaPaginas::class);
    }

    // /**
    //  * @return MarcaPaginas[] Returns an array of MarcaPaginas objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MarcaPaginas
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
