use school;
create table professor (
`id` bigint NOT NULL AUTO_INCREMENT,
`nome` varchar(45) NOT NULL,
PRIMARY KEY(`id`)
) ENGINE= InnoDB;

create table curso (
`id` bigint NOT NULL AUTO_INCREMENT,
`nome` varchar(45) NOT NULL,
`nr_anos` int(11),
PRIMARY KEY(`id`)
) ENGINE= InnoDB;

create table disciplina (
`id` bigint NOT NULL AUTO_INCREMENT,
`ano` int(11),
`curso_id` bigint,
`nome` varchar(45),
`professor_id` bigint,
PRIMARY KEY(`id`),
CONSTRAINT fk_profdisc
	FOREIGN KEY (`professor_id`)
    REFERENCES professor(`id`),
CONSTRAINT fk_cursodisc
	FOREIGN KEY (`curso_id`)
    REFERENCES curso(`id`)
) ENGINE= InnoDB;

create table aluno (
`id` bigint NOT NULL AUTO_INCREMENT,
`nome` varchar(45),
`disciplina_id` bigint,
PRIMARY KEY(`id`),
CONSTRAINT fk_alunodisc
	FOREIGN KEY (`disciplina_id`)
    REFERENCES disciplina(`id`)
) ENGINE= InnoDB;