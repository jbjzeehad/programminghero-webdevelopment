clear screen;

drop table orderinfo;
	
create table orderinfo(oid number, name varchar2(20), contact number, model varchar2(20),cc number);

insert into orderinfo values(1,'Fabiha',01234567895,'Toyota',1798);
insert into orderinfo values(2,'Zeehad',01268455413,'Ferrari,6500');
insert into orderinfo values(3,'Zerin',01234439672,'Premio,1850');
insert into orderinfo values(4,'Jubayer',01234738462,'BMW,3500');
insert into orderinfo values(5,'Hasib',01272486989,'Mercedes Benz,5500');
insert into orderinfo values(6,'Shahed',01247689289,'Mitsubishi,2500');
insert into orderinfo values(7,'Minhaz',01234322456,'Range Rover,4000');
insert into orderinfo values(8,'Hasan',01235963485,'Suzuki,2800');

commit;
select * from orderinfo;