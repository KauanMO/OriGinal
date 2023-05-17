create database dbOri;

use dbOri;

create table Usuario (
	idUsuario int primary key auto_increment,
	username varchar(45) unique,
	senha varchar(200)
);

create table Ranking(
    idRanking int auto_increment,
    tempoJogo varchar(45),
    dataHora datetime default current_timestamp,
    acertos int,
    fkUser int,
    constraint fkUserRank foreign key (fkUser) references Usuario(idUsuario),
    constraint pkRanking primary key (idRanking, fkUser)
);

insert into Usuario values
    (null, 'Melissa', sha2('123456', 512)),
    (null, 'Kauan', sha2('123456', 512)),
    (null, 'Caua', sha2('123456', 512));

insert into Ranking values
    (null, '01:25', null, '5', 1),
    (null, '02:16', null, '8', 2),
    (null, '01:42', null, '2', 1),
    (null, '02:06', null, '10', 3);