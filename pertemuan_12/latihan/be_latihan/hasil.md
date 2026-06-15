PS C:\Users\nural\Downloads\be-latihan> go test ./repository_test/ -run ^TestInsertMahasiswa$ -v
=== RUN   TestInsertMahasiswa
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL

2026/04/12 21:23:19 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[380.633ms] [rows:1] SELECT count(*) FROM information_schema.tables WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND table_type = 'BASE TABLE'

2026/04/12 21:23:20 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[269.411ms] [rows:1] SELECT CURRENT_DATABASE()

2026/04/12 21:23:20 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[270.313ms] [rows:-] SELECT c.column_name, c.is_nullable = 'YES', c.udt_name, c.character_maximum_length, c.numeric_precision, c.numeric_precision_radix, c.numeric_scale, c.datetime_precision, 8 * typlen, c.column_default, pd.description, c.identity_increment FROM information_schema.columns AS c JOIN pg_type AS pgt ON c.udt_name = pgt.typname LEFT JOIN pg_catalog.pg_description as pd ON pd.objsubid = c.ordinal_position AND pd.objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = c.table_name AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = c.table_schema)) where table_catalog = 'postgres' AND table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa'

2026/04/12 21:23:20 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[247.195ms] [rows:-] SELECT constraint_name FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa' AND constraint_type = 'UNIQUE'

2026/04/12 21:23:21 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[247.408ms] [rows:-] SELECT c.column_name, constraint_name, constraint_type FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa'

2026/04/12 21:23:21 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[249.433ms] [rows:-] SELECT a.attname as column_name, format_type(a.atttypid, a.atttypmod) AS data_type
                FROM pg_attribute a JOIN pg_class b ON a.attrelid = b.oid AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA())
                WHERE a.attnum > 0 -- hide internal columns
                AND NOT a.attisdropped -- hide deleted columns
                AND b.relname = 'mahasiswa'

2026/04/12 21:23:21 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[268.015ms] [rows:0] SELECT description FROM pg_catalog.pg_description WHERE objsubid = (SELECT ordinal_position FROM information_schema.columns WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND column_name = 'npm') AND objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = 'mahasiswa' AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA()))

2026/04/12 21:23:22 C:/Users/nural/Downloads/be-latihan/repository/mahasiswa_repository.go:18 SLOW SQL >= 200ms        
[492.153ms] [rows:1] INSERT INTO "mahasiswa" ("npm","nama","prodi","alamat","email","hobi","no_hp") VALUES ('1776003802428901800','Test User','Informatika','Bandung','testuser@mail.com','{"Coding"}','081234567890')
INSERTED NPM: 1776003802428901800
--- PASS: TestInsertMahasiswa (4.21s)
PASS
ok      pertemuan4-backend/repository_test      (cached)
PS C:\Users\nural\Downloads\be-latihan> go test ./repository_test/ -run ^TestGetAllMahasiswa$ -v
=== RUN   TestGetAllMahasiswa
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL

2026/04/12 21:27:58 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[386.316ms] [rows:1] SELECT count(*) FROM information_schema.tables WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND table_type = 'BASE TABLE'

2026/04/12 21:27:58 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[267.545ms] [rows:1] SELECT CURRENT_DATABASE()

2026/04/12 21:27:58 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[289.851ms] [rows:-] SELECT c.column_name, c.is_nullable = 'YES', c.udt_name, c.character_maximum_length, c.numeric_precision, c.numeric_precision_radix, c.numeric_scale, c.datetime_precision, 8 * typlen, c.column_default, pd.description, c.identity_increment FROM information_schema.columns AS c JOIN pg_type AS pgt ON c.udt_name = pgt.typname LEFT JOIN pg_catalog.pg_description as pd ON pd.objsubid = c.ordinal_position AND pd.objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = c.table_name AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = c.table_schema)) where table_catalog = 'postgres' AND table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa'

2026/04/12 21:27:59 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[288.262ms] [rows:-] SELECT constraint_name FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa' AND constraint_type = 'UNIQUE'

2026/04/12 21:27:59 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[278.929ms] [rows:-] SELECT c.column_name, constraint_name, constraint_type FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa'

2026/04/12 21:27:59 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[299.999ms] [rows:-] SELECT a.attname as column_name, format_type(a.atttypid, a.atttypmod) AS data_type
                FROM pg_attribute a JOIN pg_class b ON a.attrelid = b.oid AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA())
                WHERE a.attnum > 0 -- hide internal columns
                AND NOT a.attisdropped -- hide deleted columns
                AND b.relname = 'mahasiswa'

2026/04/12 21:28:00 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[284.160ms] [rows:0] SELECT description FROM pg_catalog.pg_description WHERE objsubid = (SELECT ordinal_position FROM information_schema.columns WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND column_name = 'npm') AND objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = 'mahasiswa' AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA()))

2026/04/12 21:28:01 C:/Users/nural/Downloads/be-latihan/repository/mahasiswa_repository.go:11 SLOW SQL >= 200ms        
[269.957ms] [rows:9] SELECT * FROM "mahasiswa"
DATA DI TABLE: [{NPM:1776001964314859000 Nama:Test User Prodi:Informatika Alamat:Bandung Email:testuser@mail.com Hobi:[Coding] NoHP:081234567890} {NPM:1776001972100110300 Nama:Find User Prodi:Informatika Alamat:Jakarta Email:finduser@mail.com Hobi:[Reading] NoHP:089876543210} {NPM:1776001976377050400 Nama:New Namez Prodi:SI Alamat:Jakarta Email:before@mail.com Hobi:[Gaming] NoHP:082222222222} {NPM:1776002327906144300 Nama:Test User Prodi:Informatika Alamat:Bandung Email:testuser@mail.com Hobi:[Coding] NoHP:081234567890} {NPM:1776002350651721700 Nama:Find User Prodi:Informatika Alamat:Jakarta Email:finduser@mail.com Hobi:[Reading] NoHP:089876543210} {NPM:1776003656748258500 Nama:Test User Prodi:Informatika Alamat:Bandung Email:testuser@mail.com Hobi:[Coding] NoHP:081234567890} {NPM:1776003690195173000 Nama:Find User Prodi:Informatika Alamat:Jakarta Email:finduser@mail.com Hobi:[Reading] NoHP:089876543210} {NPM:1776003703094044300 Nama:New Namez Prodi:SI Alamat:Jakarta Email:before@mail.com Hobi:[Gaming] NoHP:082222222222} {NPM:1776003802428901800 Nama:Test User Prodi:Informatika Alamat:Bandung Email:testuser@mail.com Hobi:[Coding] NoHP:081234567890}]
--- PASS: TestGetAllMahasiswa (4.64s)
PASS
ok      pertemuan4-backend/repository_test      4.974s
PS C:\Users\nural\Downloads\be-latihan> go test ./repository_test/ -run ^TestGetMahasiswaByNPM$ -v
=== RUN   TestGetMahasiswaByNPM
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL

2026/04/12 21:28:30 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[401.863ms] [rows:1] SELECT count(*) FROM information_schema.tables WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND table_type = 'BASE TABLE'

2026/04/12 21:28:30 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[300.640ms] [rows:1] SELECT CURRENT_DATABASE()

2026/04/12 21:28:30 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[265.662ms] [rows:-] SELECT c.column_name, c.is_nullable = 'YES', c.udt_name, c.character_maximum_length, c.numeric_precision, c.numeric_precision_radix, c.numeric_scale, c.datetime_precision, 8 * typlen, c.column_default, pd.description, c.identity_increment FROM information_schema.columns AS c JOIN pg_type AS pgt ON c.udt_name = pgt.typname LEFT JOIN pg_catalog.pg_description as pd ON pd.objsubid = c.ordinal_position AND pd.objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = c.table_name AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = c.table_schema)) where table_catalog = 'postgres' AND table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa'

2026/04/12 21:28:31 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[287.412ms] [rows:-] SELECT constraint_name FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa' AND constraint_type = 'UNIQUE'

2026/04/12 21:28:31 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[287.587ms] [rows:-] SELECT c.column_name, constraint_name, constraint_type FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa'

2026/04/12 21:28:31 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[391.440ms] [rows:-] SELECT a.attname as column_name, format_type(a.atttypid, a.atttypmod) AS data_type
                FROM pg_attribute a JOIN pg_class b ON a.attrelid = b.oid AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA())
                WHERE a.attnum > 0 -- hide internal columns
                AND NOT a.attisdropped -- hide deleted columns
                AND b.relname = 'mahasiswa'

2026/04/12 21:28:32 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[293.185ms] [rows:0] SELECT description FROM pg_catalog.pg_description WHERE objsubid = (SELECT ordinal_position FROM information_schema.columns WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND column_name = 'npm') AND objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = 'mahasiswa' AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA()))

2026/04/12 21:28:33 C:/Users/nural/Downloads/be-latihan/repository/mahasiswa_repository.go:18 SLOW SQL >= 200ms        
[592.205ms] [rows:1] INSERT INTO "mahasiswa" ("npm","nama","prodi","alamat","email","hobi","no_hp") VALUES ('1776004113031314700','Find User','Informatika','Jakarta','finduser@mail.com','{"Reading"}','089876543210')

2026/04/12 21:28:33 C:/Users/nural/Downloads/be-latihan/repository/mahasiswa_repository.go:25 SLOW SQL >= 200ms        
[290.288ms] [rows:1] SELECT * FROM "mahasiswa" WHERE npm = '1776004113031314700' ORDER BY "mahasiswa"."npm" LIMIT 1    
DATA DITEMUKAN: {NPM:1776004113031314700 Nama:Find User Prodi:Informatika Alamat:Jakarta Email:finduser@mail.com Hobi:[Reading] NoHP:089876543210}
--- PASS: TestGetMahasiswaByNPM (5.05s)
PASS
ok      pertemuan4-backend/repository_test      5.392s
PS C:\Users\nural\Downloads\be-latihan> go test ./repository_test/ -run ^TestUpdateMahasiswa$ -v  
=== RUN   TestUpdateMahasiswa
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL

2026/04/12 21:29:19 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[371.457ms] [rows:1] SELECT count(*) FROM information_schema.tables WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND table_type = 'BASE TABLE'

2026/04/12 21:29:19 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[268.675ms] [rows:1] SELECT CURRENT_DATABASE()

2026/04/12 21:29:20 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[276.052ms] [rows:-] SELECT c.column_name, c.is_nullable = 'YES', c.udt_name, c.character_maximum_length, c.numeric_precision, c.numeric_precision_radix, c.numeric_scale, c.datetime_precision, 8 * typlen, c.column_default, pd.description, c.identity_increment FROM information_schema.columns AS c JOIN pg_type AS pgt ON c.udt_name = pgt.typname LEFT JOIN pg_catalog.pg_description as pd ON pd.objsubid = c.ordinal_position AND pd.objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = c.table_name AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = c.table_schema)) where table_catalog = 'postgres' AND table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa'

2026/04/12 21:29:20 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[278.314ms] [rows:-] SELECT constraint_name FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa' AND constraint_type = 'UNIQUE'

2026/04/12 21:29:21 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[586.454ms] [rows:-] SELECT c.column_name, constraint_name, constraint_type FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa'

2026/04/12 21:29:21 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[273.726ms] [rows:-] SELECT a.attname as column_name, format_type(a.atttypid, a.atttypmod) AS data_type
                FROM pg_attribute a JOIN pg_class b ON a.attrelid = b.oid AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA())
                WHERE a.attnum > 0 -- hide internal columns
                AND NOT a.attisdropped -- hide deleted columns
                AND b.relname = 'mahasiswa'

2026/04/12 21:29:21 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[275.924ms] [rows:0] SELECT description FROM pg_catalog.pg_description WHERE objsubid = (SELECT ordinal_position FROM information_schema.columns WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND column_name = 'npm') AND objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = 'mahasiswa' AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA()))

2026/04/12 21:29:22 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[468.472ms] [rows:0] SELECT description FROM pg_catalog.pg_description WHERE objsubid = (SELECT ordinal_position FROM information_schema.columns WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND column_name = 'hobi') AND objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = 'mahasiswa' AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA()))

2026/04/12 21:29:23 C:/Users/nural/Downloads/be-latihan/repository/mahasiswa_repository.go:18 SLOW SQL >= 200ms        
[610.422ms] [rows:1] INSERT INTO "mahasiswa" ("npm","nama","prodi","alamat","email","hobi","no_hp") VALUES ('1776004162963302700','Before Update','Informatika','Bandung','before@mail.com','{"Coding"}','081111111111')

2026/04/12 21:29:23 C:/Users/nural/Downloads/be-latihan/repository/mahasiswa_repository.go:35 SLOW SQL >= 200ms        
[258.258ms] [rows:1] SELECT * FROM "mahasiswa" WHERE npm = '1776004162963302700' ORDER BY "mahasiswa"."npm" LIMIT 1    

2026/04/12 21:29:24 C:/Users/nural/Downloads/be-latihan/repository/mahasiswa_repository.go:39 SLOW SQL >= 200ms        
[556.371ms] [rows:1] UPDATE "mahasiswa" SET "nama"='New Namez',"prodi"='SI',"alamat"='Jakarta',"hobi"='{"Gaming"}',"no_hp"='082222222222' WHERE "npm" = '1776004162963302700'
UPDATE BERHASIL untuk NPM: 1776004162963302700
--- PASS: TestUpdateMahasiswa (6.26s)
PASS
ok      pertemuan4-backend/repository_test      6.602s
PS C:\Users\nural\Downloads\be-latihan> go test ./repository_test/ -run ^TestDeleteMahasiswa$ -v
=== RUN   TestDeleteMahasiswa
✅ Koneksi ke PostgreSQL (Supabase) BERHASIL

2026/04/12 21:29:44 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[357.952ms] [rows:1] SELECT count(*) FROM information_schema.tables WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND table_type = 'BASE TABLE'

2026/04/12 21:29:44 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[252.607ms] [rows:1] SELECT CURRENT_DATABASE()

2026/04/12 21:29:44 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[275.877ms] [rows:-] SELECT c.column_name, c.is_nullable = 'YES', c.udt_name, c.character_maximum_length, c.numeric_precision, c.numeric_precision_radix, c.numeric_scale, c.datetime_precision, 8 * typlen, c.column_default, pd.description, c.identity_increment FROM information_schema.columns AS c JOIN pg_type AS pgt ON c.udt_name = pgt.typname LEFT JOIN pg_catalog.pg_description as pd ON pd.objsubid = c.ordinal_position AND pd.objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = c.table_name AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = c.table_schema)) where table_catalog = 'postgres' AND table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa'

2026/04/12 21:29:45 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[296.612ms] [rows:-] SELECT constraint_name FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa' AND constraint_type = 'UNIQUE'

2026/04/12 21:29:45 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[264.498ms] [rows:-] SELECT c.column_name, constraint_name, constraint_type FROM information_schema.table_constraints tc JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_catalog, table_name, constraint_name) JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema AND tc.table_name = c.table_name AND ccu.column_name = c.column_name WHERE constraint_type IN ('PRIMARY KEY', 'UNIQUE') AND c.table_catalog = 'postgres' AND c.table_schema = CURRENT_SCHEMA() AND c.table_name = 'mahasiswa'

2026/04/12 21:29:45 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[279.901ms] [rows:-] SELECT a.attname as column_name, format_type(a.atttypid, a.atttypmod) AS data_type
                FROM pg_attribute a JOIN pg_class b ON a.attrelid = b.oid AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA())
                WHERE a.attnum > 0 -- hide internal columns
                AND NOT a.attisdropped -- hide deleted columns
                AND b.relname = 'mahasiswa'

2026/04/12 21:29:46 C:/Users/nural/Downloads/be-latihan/repository_test/mahasiswa_test.go:16 SLOW SQL >= 200ms
[264.328ms] [rows:0] SELECT description FROM pg_catalog.pg_description WHERE objsubid = (SELECT ordinal_position FROM information_schema.columns WHERE table_schema = CURRENT_SCHEMA() AND table_name = 'mahasiswa' AND column_name = 'npm') AND objoid = (SELECT oid FROM pg_catalog.pg_class WHERE relname = 'mahasiswa' AND relnamespace = (SELECT oid FROM pg_catalog.pg_namespace WHERE nspname = CURRENT_SCHEMA()))

2026/04/12 21:29:47 C:/Users/nural/Downloads/be-latihan/repository/mahasiswa_repository.go:18 SLOW SQL >= 200ms        
[500.753ms] [rows:1] INSERT INTO "mahasiswa" ("npm","nama","prodi","alamat","email","hobi","no_hp") VALUES ('1776004186992055500','Delete User','Informatika','Surabaya','delete@mail.com','{"Swimming"}','083333333333')

2026/04/12 21:29:48 C:/Users/nural/Downloads/be-latihan/repository/mahasiswa_repository.go:48 SLOW SQL >= 200ms        
[537.558ms] [rows:1] DELETE FROM "mahasiswa" WHERE npm = '1776004186992055500'
DELETE BERHASIL untuk NPM: 1776004186992055500
--- PASS: TestDeleteMahasiswa (4.85s)
PASS
ok      pertemuan4-backend/repository_test      5.169s