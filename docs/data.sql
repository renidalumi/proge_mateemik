
INSERT INTO `mydb`.`users` (`id`, `eesNimi`, `pereNimi`, `email`, `password`, `role`) VALUES ('1', 'Admin', 'Admin', 'admin@admin.ee', '$2b$10$eqqC/z5dIGdcKMuvtkCHvuBZ2SwVR3r891pzBydvQzmZYguP14knS', 'Admin');
INSERT INTO `mydb`.`users` (`id`, `eesNimi`, `pereNimi`, `email`, `password`) VALUES ('2', 'Mari', 'Kari', 'mari@kari.ee', '$2b$10$lpBNgij.Kje.X/7Ril.q8O6KvUISKMGA1hVmP8mtiKRUpjNS1/GIW');

INSERT INTO `mydb`.`varvid` (`id`, `varv`, `vaartus`, `kaevarv`, `kaeVaartus`, `users_id`) VALUES ('1', 'roosa', '1', 'lilla', '9', '1');
INSERT INTO `mydb`.`varvid` (`id`, `varv`, `vaartus`, `kaevarv`, `kaeVaartus`, `users_id`) VALUES ('2', 'punane', '2', 'oraanž', '8', '2');
INSERT INTO `mydb`.`varvid` (`id`, `varv`, `vaartus`, `kaevarv`, `kaeVaartus`, `users_id`) VALUES ('3', 'hall', '3', 'pruun', '7', '1');
INSERT INTO `mydb`.`varvid` (`id`, `varv`, `vaartus`, `kaevarv`, `kaeVaartus`, `users_id`) VALUES ('4', 'sinine', '4', 'roheline', '6', '2');
INSERT INTO `mydb`.`varvid` (`id`, `varv`, `vaartus`, `kaevarv`, `kaeVaartus`, `users_id`) VALUES ('5', 'kollane', '5', 'kollane', '5', '2');
INSERT INTO `mydb`.`varvid` (`id`, `varv`, `vaartus`, `kaevarv`, `kaeVaartus`, `users_id`) VALUES ('6', 'roheline', '6', 'sinine', '4', '1');
INSERT INTO `mydb`.`varvid` (`id`, `varv`, `vaartus`, `kaevarv`, `kaeVaartus`, `users_id`) VALUES ('7', 'pruun', '7', 'hall', '3', '2');
INSERT INTO `mydb`.`varvid` (`id`, `varv`, `vaartus`, `kaevarv`, `kaeVaartus`, `users_id`) VALUES ('8', 'oraanž', '8', 'punane', '2', '1');
INSERT INTO `mydb`.`varvid` (`id`, `varv`, `vaartus`, `kaevarv`, `kaeVaartus`, `users_id`) VALUES ('9', 'lilla', '9', 'roosa', '1', '2');
INSERT INTO `mydb`.`varvid` (`users_id`) VALUES ('');