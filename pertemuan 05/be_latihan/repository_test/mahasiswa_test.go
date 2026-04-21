package repository_test

import (
	"be_latihan/config"
	"be_latihan/model"
	"be_latihan/repository"
	"fmt"
	"testing"
	"time"
)

func setupTest(t *testing.T) {
	config.InitDB()

	// Auto migrate biar tabel pasti ada
	err := config.GetDB().AutoMigrate(&model.Mahasiswa{})
	if err != nil {
		t.Fatalf("Migration failed: %v", err)
	}
}

func TestInsertMahasiswa(t *testing.T) {
	setupTest(t)

	npm := time.Now().UnixNano()

	mhs := model.Mahasiswa{
		NPM:    npm,
		Nama:   "Test User",
		Prodi:  "Informatika",
		Alamat: "Bandung",
		Email:  "testuser@mail.com",
		Hobi:   []string{"Coding"},
		NoHP:   "081234567890",
	}

	_, err := repository.InsertMahasiswa(&mhs)
	if err != nil {
		t.Errorf("Insert failed: %v", err)
	}
	fmt.Printf("INSERTED NPM: %d\n", npm)
}

func TestGetAllMahasiswa(t *testing.T) {
	setupTest(t)

	data, err := repository.GetAllMahasiswa()
	if err != nil {
		t.Errorf("GetAll failed: %v", err)
	}

	if len(data) == 0 {
		t.Errorf("Expected data, got empty")
	}
	fmt.Printf("DATA DI TABLE: %+v\n", data)
}

func TestGetMahasiswaByNPM(t *testing.T) {
	setupTest(t)

	// Insert dulu supaya ada data
	npm := time.Now().UnixNano()
	mhs := model.Mahasiswa{
		NPM:    npm,
		Nama:   "Find User",
		Prodi:  "Informatika",
		Alamat: "Jakarta",
		Email:  "finduser@mail.com",
		Hobi:   []string{"Reading"},
		NoHP:   "089876543210",
	}
	repository.InsertMahasiswa(&mhs)

	result, err := repository.GetMahasiswaByNPM(npm)
	if err != nil {
		t.Errorf("GetByNPM failed: %v", err)
	}

	if result.NPM != npm {
		t.Errorf("Expected %d, got %d", npm, result.NPM)
	}
	fmt.Printf("DATA DITEMUKAN: %+v\n", result)
}

func TestUpdateMahasiswa(t *testing.T) {
	setupTest(t)

	// Insert dulu supaya ada data
	npm := time.Now().UnixNano()
	mhs := model.Mahasiswa{
		NPM:    npm,
		Nama:   "Before Update",
		Prodi:  "Informatika",
		Alamat: "Bandung",
		Email:  "before@mail.com",
		Hobi:   []string{"Coding"},
		NoHP:   "081111111111",
	}
	repository.InsertMahasiswa(&mhs)

	_, err := repository.UpdateMahasiswa(npm, &model.Mahasiswa{
		Nama:   "New Namez",
		Prodi:  "SI",
		Alamat: "Jakarta",
		Hobi:   []string{"Gaming"},
		NoHP:   "082222222222",
	})

	if err != nil {
		t.Errorf("Update failed: %v", err)
	}
	fmt.Printf("UPDATE BERHASIL untuk NPM: %d\n", npm)
}

func TestDeleteMahasiswa(t *testing.T) {
	setupTest(t)

	// Insert dulu supaya ada data untuk dihapus
	npm := time.Now().UnixNano()
	mhs := model.Mahasiswa{
		NPM:    npm,
		Nama:   "Delete User",
		Prodi:  "Informatika",
		Alamat: "Surabaya",
		Email:  "delete@mail.com",
		Hobi:   []string{"Swimming"},
		NoHP:   "083333333333",
	}
	repository.InsertMahasiswa(&mhs)

	err := repository.DeleteMahasiswa(npm)
	if err != nil {
		t.Errorf("Delete failed: %v", err)
	}
	fmt.Printf("DELETE BERHASIL untuk NPM: %d\n", npm)
}
