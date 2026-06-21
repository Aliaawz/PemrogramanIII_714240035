package config

var allowedOrigins = []string{
	"http://localhost:5173",
	"http://localhost:3000",
	"http://127.0.0.1:3000",
}

func GetAllowedOrigins() []string {
	return allowedOrigins
}