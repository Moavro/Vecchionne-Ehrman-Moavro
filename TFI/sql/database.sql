create schema botines_db;

use botines_db;

create table usuarios (
id int unsigned primary key auto_increment,
email varchar(100) not null,
usuario varchar(100) not null,
contraseña varchar(100) not null, 
foto_perfil varchar(100) null,
fecha_nacimiento date,
dni int not null,

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

create table productos(
id int unsigned primary key auto_increment,
usuario_id int unsigned,
nombre varchar(100) not null, 
descripcion varchar(500) not null, 
fecha_carga date,

foreign key (usuario_id) references usuarios(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

create table comentarios(
id int unsigned primary key auto_increment,
usuario_id int unsigned, 
producto_id int unsigned,
comentario varchar(300) not null,

foreign key(usuario_id) references usuarios(id),
foreign key(producto_id) references productos(id),

createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

insert into usuarios(id, email, usuario, contraseña, foto_perfil, fecha_nacimiento, dni) values(default, "tufobarra12@gmail.com", "tufobarra12", "1234", "/images/user/perfil.jfif", "2000-09-04","45487253");
insert into usuarios(id, email, usuario, contraseña, foto_perfil, fecha_nacimiento, dni) values(default, "tufito13@gmail.com", "tufito13", "2234", "/images/user/perfil.jfif", "2001-08-07","45487100");
insert into usuarios(id, email, usuario, contraseña, foto_perfil, fecha_nacimiento, dni) values(default, "tufarini14@gmail.com", "tufarini14", "3234", "/images/user/perfil.jfif", "2002-07-02","45487960");
insert into usuarios(id, email, usuario, contraseña, foto_perfil, fecha_nacimiento, dni) values(default, "tufan15@gmail.com", "tufan15", "4234", "/images/user/perfil.jfif", "2003-03-06","45487980");
insert into usuarios(id, email, usuario, contraseña, foto_perfil, fecha_nacimiento, dni) values(default, "tufarina16@gmail.com", "tufarina16", "5234", "/images/user/perfil.jfif", "2004-05-04","45487483");

insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 1, "Nike Phantom", "Botines que te ayudan a encontrar el toque perfecto", "2020-01-01");
insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 2, "Nike Vapor", "Domina el balon con estos botines Adidas de corte bajo", "2020-01-01");
insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 3, "Adidas Predator Edge", "Domina el balon con estos botines Adidas sin cordones", "2020-01-01");
insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 4, "Adidas Goleto VIII", "Botines para pasto sintetico hechos parcialmente con contenido reciclado", "2020-01-01");
insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 5, "Adidas Speedportal", "Botines para terreno blando que te ayudan a controlar cada parte de tu juego", "2020-01-01");
insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 4, "Adidas Nemeziz", "Controla cada jugada con estos botines Adidas", "2020-01-01");
insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 3, "New Balance Furon", "Logra tu mejor jugada conn estos botines hechos en parte con materiales reciclados", "2020-01-01");
insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 2, "New Balance Tekela", "Botines veloces inspirados en Messi hechos parcialmente con materiales reciclados", "2020-01-01");
insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 1, "New Balance Furon V7", "Domina los partidos sobre terreno firme con estos botines lleno de colores", "2020-01-01");
insert into productos(id, usuario_id, nombre, descripcion, fecha_carga) values(default, 5, "Adidas Copa Pure", "Mejora tu juego con los suaves botines sinteticos de Adidas x Classic Lego", "2020-01-01");

insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 1, 1, "Estoy muy contento con mi nueva compra de botines de fútbol.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 2, 1, "Estoy muy impresionado con estos botines Nike. Son muy cómodos y se ajustan bien a mis pies.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 3, 1, "La marca Nike es líder en la fabricación de calzado deportivo y estos botines no son una excepción.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 4, 1, "Me encanta cómo estos botines Nike mejoran mi velocidad y agilidad en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 5, 2, "Estos botines Nike tienen un gran aspecto y diseño moderno.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 1, 2, "Estos botines Nike se sienten muy ligeros en mis pies, lo que mejora mi rendimiento en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 2, 2, "La suela de los botines Nike proporciona una gran tracción en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 3, 2, "Me gusta la sensación de control del balón que me brindan estos botines Nike.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 4, 3, "Me encantan estos botines Adidas. Son muy cómodos y duraderos.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 5, 3, "La marca Adidas es sinónimo de calidad y estos botines no son una excepción.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 1, 3, "Los botines Adidas tienen un gran diseño y aspecto en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 2, 3, "La calidad de los materiales utilizados en estos botines Adidas es impresionante.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 3, 4, "La suela de los botines Adidas proporciona un agarre excepcional en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 4, 4, "Estos botines Adidas son muy livianos, lo que mejora mi velocidad en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 5, 4, "Me gusta cómo los botines Adidas se ajustan a mis pies y brindan una gran sensación de control del balón.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 1, 4, "Los botines Adidas son muy cómodos y me permiten jugar durante largos períodos sin dolor en los pies.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 2, 5, "Estos botines Adidas son muy resistentes al desgaste.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 3, 5, "Me gusta el estilo y la combinación de colores de estos botines Adidas.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 4, 5, "La calidad de los materiales utilizados en estos botines Adidas es impresionante.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 5, 5, "Me gusta cómo los botines Adidas se ajustan a mis pies y brindan una gran sensación de control del balón.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 1, 6, "Me gusta el estilo y la combinación de colores de estos botines Adidas.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 2, 6, "Los botines Adidas son muy cómodos y me permiten jugar durante largos períodos sin dolor en los pies.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 3, 6, "Me gusta cómo los botines Adidas se ajustan a mis pies y brindan una gran sensación de control del balón.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 4, 6, "La calidad de los materiales utilizados en estos botines Adidas es impresionante.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 5, 7, "Estoy muy satisfecho con mi compra de estos botines de fútbol, y los recomendaría a cualquier jugador que busque mejorar su juego.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 1, 7, "Los botines tienen un buen equilibrio entre la comodidad y el rendimiento, lo que es importante para mí como jugador de fútbol.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 2, 7, "Me impresiona la calidad de construcción de estos botines, y siento que durarán mucho tiempo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 3, 7, "Estos botines ofrecen una excelente protección para los pies, lo que me da tranquilidad al jugar en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 4, 8, "Me encanta el diseño elegante y atractivo de estos botines.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 5, 8, "Los botines se ven y se sienten increíbles en el campo, y realmente me dan una ventaja.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 1, 8, "Estos botines ofrecen una excelente protección para los pies, lo que me da tranquilidad al jugar en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 2, 8, "Me impresiona la calidad de construcción de estos botines, y siento que durarán mucho tiempo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 3, 9, "Me encanta el diseño elegante y atractivo de estos botines.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 4, 9, "Los botines se ven y se sienten increíbles en el campo, y realmente me dan una ventaja.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 5, 9, "Estos botines ofrecen una excelente protección para los pies, lo que me da tranquilidad al jugar en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 1, 9, "Me impresiona la calidad de construcción de estos botines, y siento que durarán mucho tiempo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 2, 10, "Los botines Adidas son muy cómodos y me permiten jugar durante largos períodos sin dolor en los pies.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 3, 10, "La suela de los botines Adidas proporciona un agarre excepcional en el campo.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 4, 10, "Me gusta cómo los botines Adidas se ajustan a mis pies y brindan una gran sensación de control del balón.");
insert into comentarios(id, usuario_id, producto_id, comentario) values (default, 5, 10, "La calidad de los materiales utilizados en estos botines Adidas es impresionante.");