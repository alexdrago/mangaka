<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200521102724 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE categorias_list (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(50) NOT NULL, decripcion VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE manga_list ADD categoria_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE manga_list ADD CONSTRAINT FK_1B9C11523397707A FOREIGN KEY (categoria_id) REFERENCES categorias_list (id)');
        $this->addSql('CREATE INDEX IDX_1B9C11523397707A ON manga_list (categoria_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE manga_list DROP FOREIGN KEY FK_1B9C11523397707A');
        $this->addSql('DROP TABLE categorias_list');
        $this->addSql('DROP INDEX IDX_1B9C11523397707A ON manga_list');
        $this->addSql('ALTER TABLE manga_list DROP categoria_id');
    }
}
