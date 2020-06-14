<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200614160438 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE marca_pagina (id INT AUTO_INCREMENT NOT NULL, usuario_id INT NOT NULL, capitulo_id INT NOT NULL, INDEX IDX_8DB04800DB38439E (usuario_id), INDEX IDX_8DB0480046DC5FAF (capitulo_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE marca_pagina ADD CONSTRAINT FK_8DB04800DB38439E FOREIGN KEY (usuario_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE marca_pagina ADD CONSTRAINT FK_8DB0480046DC5FAF FOREIGN KEY (capitulo_id) REFERENCES capitulo (id)');
        $this->addSql('DROP TABLE marca_paginas');
        $this->addSql('ALTER TABLE capitulo CHANGE fecha fecha DATETIME NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE marca_paginas (id INT AUTO_INCREMENT NOT NULL, usuario_id INT NOT NULL, capitulo_id INT NOT NULL, INDEX IDX_1B837F43DB38439E (usuario_id), INDEX IDX_1B837F4346DC5FAF (capitulo_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE marca_paginas ADD CONSTRAINT FK_1B837F4346DC5FAF FOREIGN KEY (capitulo_id) REFERENCES capitulo (id)');
        $this->addSql('ALTER TABLE marca_paginas ADD CONSTRAINT FK_1B837F43DB38439E FOREIGN KEY (usuario_id) REFERENCES user (id)');
        $this->addSql('DROP TABLE marca_pagina');
        $this->addSql('ALTER TABLE capitulo CHANGE fecha fecha DATETIME DEFAULT NULL');
    }
}
