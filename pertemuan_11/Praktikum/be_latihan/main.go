package main

import (
	"be_latihan/config"
	"be_latihan/model"
	"be_latihan/router"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	// CORS middleware agar frontend bisa akses API
	app.Use(cors.New(cors.Config{
	AllowOrigins: strings.Join(config.GetAllowedOrigins(), ","),
	AllowMethods: "GET,POST,PUT,DELETE,OPTIONS",
	AllowHeaders: "Origin,Content-Type,Accept,Authorization",
}))

	config.InitDB()

	// AutoMigrate membuat tabel berdasarkan Struct secara otomatis
	config.GetDB().AutoMigrate(&model.Mahasiswa{}, &model.User{})

	// Setup routes
	router.SetupRoutes(app)

	app.Listen(":3000")
}