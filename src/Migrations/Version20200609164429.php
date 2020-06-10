<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200609164429 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE media_object (id INT AUTO_INCREMENT NOT NULL, file_path VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pagina ADD imagen_id INT DEFAULT NULL, DROP imagen');
        $this->addSql('ALTER TABLE pagina ADD CONSTRAINT FK_3E8EDA6D763C8AA7 FOREIGN KEY (imagen_id) REFERENCES media_object (id)');
        $this->addSql('CREATE INDEX IDX_3E8EDA6D763C8AA7 ON pagina (imagen_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE pagina DROP FOREIGN KEY FK_3E8EDA6D763C8AA7');
        $this->addSql('DROP TABLE media_object');
        $this->addSql('DROP INDEX IDX_3E8EDA6D763C8AA7 ON pagina');
        $this->addSql('ALTER TABLE pagina ADD imagen LONGBLOB NOT NULL, DROP imagen_id');
    }
}
