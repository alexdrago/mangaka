<?php

namespace App\Repository;

use App\Entity\CategoriasList;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method CategoriasList|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategoriasList|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategoriasList[]    findAll()
 * @method CategoriasList[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoriasListRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategoriasList::class);
    }

    // /**
    //  * @return CategoriasList[] Returns an array of CategoriasList objects
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
    public function findOneBySomeField($value): ?CategoriasList
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
