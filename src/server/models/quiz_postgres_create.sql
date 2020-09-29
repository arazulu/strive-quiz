CREATE TABLE "user" (
	"_id" serial NOT NULL,
	"q1" varchar(500) NOT NULL,
	"q2" varchar(500) NOT NULL,
	"q3" varchar(500) NOT NULL,
	"q4" varchar(500) NOT NULL,
	"q5" varchar(500) NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




