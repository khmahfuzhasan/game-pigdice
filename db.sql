drop TABLE reaction;
drop TABLE played;

CREATE TABLE reaction(
	id int(255) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    react varchar(255) NOT NULL,
    reactDate DATETIME NOT NULL DEFAULT NOW()
);
CREATE TABLE played(
	id int(255) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    playerOne VARCHAR(255) NOT NULL,
    playerTwo VARCHAR(255) NOT NULL,
    gamePoints Int(255) NOT NULL,
    reactDate DATETIME NOT NULL DEFAULT NOW()
);

INSERT INTO played(playerOne,playerTwo,gamePoints) VALUES('John','Mike',100);
INSERT INTO reaction(react) VALUES('loved');