<?php

namespace App\Form;

use App\Entity\Manga;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;

class MangaType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('Nombre')
            ->add('Autor')
            ->add('Descripcion')
            ->add('Portada',FileType::class,
                [
                    'label'=>"Portada",
                    'mapped'=>false,
                    'required'=>false,
                    'constraints'=>[new File(['mimeTypes'=>['image/png', 'image/jpeg', 'image/gif'],
                        'mimeTypesMessage'=>'Solo se permiten imagenes'])]
                ])
            ->add('Categoria')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Manga::class,
        ]);
    }
}
