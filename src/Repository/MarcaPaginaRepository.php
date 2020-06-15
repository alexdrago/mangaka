<?php

namespace App\Repository;

use App\Entity\MarcaPagina;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MarcaPagina|null find($id, $lockMode = null, $lockVersion = null)
 * @method MarcaPagina|null findOneBy(array $criteria, array $orderBy = null)
 * @method MarcaPagina[]    findAll()
 * @method MarcaPagina[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MarcaPaginaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MarcaPagina::class);
    }

    // /**
    //  * @return MarcaPagina[] Returns an array of MarcaPagina objects
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
    public function findOneBySomeField($value): ?MarcaPagina
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
