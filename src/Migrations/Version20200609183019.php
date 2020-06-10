<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200609183019 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE manga ADD portada_id INT DEFAULT NULL, DROP portada');
        $this->addSql('ALTER TABLE manga ADD CONSTRAINT FK_765A9E03D5CB4078 FOREIGN KEY (portada_id) REFERENCES media_object (id)');
        $this->addSql('CREATE INDEX IDX_765A9E03D5CB4078 ON manga (portada_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE manga DROP FOREIGN KEY FK_765A9E03D5CB4078');
        $this->addSql('DROP INDEX IDX_765A9E03D5CB4078 ON manga');
        $this->addSql('ALTER TABLE manga ADD portada LONGBLOB DEFAULT NULL, DROP portada_id');
    }
}
