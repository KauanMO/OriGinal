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