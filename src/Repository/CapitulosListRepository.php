<?php

namespace App\Repository;

use App\Entity\CapitulosList;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CapitulosList|null find($id, $lockMode = null, $lockVersion = null)
 * @method CapitulosList|null findOneBy(array $criteria, array $orderBy = null)
 * @method CapitulosList[]    findAll()
 * @method CapitulosList[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CapitulosListRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CapitulosList::class);
    }

    // /**
    //  * @return CapitulosList[] Returns an array of CapitulosList objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CapitulosList
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
