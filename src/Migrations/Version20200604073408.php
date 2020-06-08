<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200604073408 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE capitulo (id INT AUTO_INCREMENT NOT NULL, manga_id INT NOT NULL, nombre VARCHAR(50) DEFAULT NULL, fecha DATE NOT NULL, INDEX IDX_2BA5E28F7B6461 (manga_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categoria (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(50) NOT NULL, decripcion VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE favoritos (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, manga_id INT NOT NULL, INDEX IDX_1E86887FA76ED395 (user_id), INDEX IDX_1E86887F7B6461 (manga_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE manga (id INT AUTO_INCREMENT NOT NULL, categoria_id INT DEFAULT NULL, nombre VARCHAR(255) NOT NULL, autor VARCHAR(50) DEFAULT NULL, descripcion VARCHAR(400) DEFAULT NULL, portada LONGBLOB DEFAULT NULL, INDEX IDX_765A9E033397707A (categoria_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE marca_paginas (id INT AUTO_INCREMENT NOT NULL, usuario_id INT NOT NULL, capitulo_id INT NOT NULL, INDEX IDX_1B837F43DB38439E (usuario_id), INDEX IDX_1B837F4346DC5FAF (capitulo_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pagina (id INT AUTO_INCREMENT NOT NULL, capitulo_id INT NOT NULL, imagen LONGBLOB NOT NULL, INDEX IDX_3E8EDA6D46DC5FAF (capitulo_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE capitulo ADD CONSTRAINT FK_2BA5E28F7B6461 FOREIGN KEY (manga_id) REFERENCES manga (id)');
        $this->addSql('ALTER TABLE favoritos ADD CONSTRAINT FK_1E86887FA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE favoritos ADD CONSTRAINT FK_1E86887F7B6461 FOREIGN KEY (manga_id) REFERENCES manga (id)');
        $this->addSql('ALTER TABLE manga ADD CONSTRAINT FK_765A9E033397707A FOREIGN KEY (categoria_id) REFERENCES categoria (id)');
        $this->addSql('ALTER TABLE marca_paginas ADD CONSTRAINT FK_1B837F43DB38439E FOREIGN KEY (usuario_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE marca_paginas ADD CONSTRAINT FK_1B837F4346DC5FAF FOREIGN KEY (capitulo_id) REFERENCES capitulo (id)');
        $this->addSql('ALTER TABLE pagina ADD CONSTRAINT FK_3E8EDA6D46DC5FAF FOREIGN KEY (capitulo_id) REFERENCES capitulo (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE marca_paginas DROP FOREIGN KEY FK_1B837F4346DC5FAF');
        $this->addSql('ALTER TABLE pagina DROP FOREIGN KEY FK_3E8EDA6D46DC5FAF');
        $this->addSql('ALTER TABLE manga DROP FOREIGN KEY FK_765A9E033397707A');
        $this->addSql('ALTER TABLE capitulo DROP FOREIGN KEY FK_2BA5E28F7B6461');
        $this->addSql('ALTER TABLE favoritos DROP FOREIGN KEY FK_1E86887F7B6461');
        $this->addSql('ALTER TABLE favoritos DROP FOREIGN KEY FK_1E86887FA76ED395');
        $this->addSql('ALTER TABLE marca_paginas DROP FOREIGN KEY FK_1B837F43DB38439E');
        $this->addSql('DROP TABLE capitulo');
        $this->addSql('DROP TABLE categoria');
        $this->addSql('DROP TABLE favoritos');
        $this->addSql('DROP TABLE manga');
        $this->addSql('DROP TABLE marca_paginas');
        $this->addSql('DROP TABLE pagina');
        $this->addSql('DROP TABLE user');
    }
}
