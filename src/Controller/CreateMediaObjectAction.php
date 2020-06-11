<?php

namespace App\Controller;

use App\Entity\MediaObject;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

final class CreateMediaObjectAction
{
    public function __invoke(Request $request): MediaObject
    {
        $uploadedFile = $request->files->get('file');
        if (!$uploadedFile) {
            throw new BadRequestHttpException('Algun "Archivo" es requerido.');
        }

        $mediaObject = new MediaObject();
        $mediaObject->setFile($uploadedFile);

        return $mediaObject;
    }
}
