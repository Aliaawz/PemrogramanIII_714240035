package model

type Response struct {
	Message string      `json:"message" example:"detail pesan"`
	Data    interface{} `json:"data,omitempty"`
	Error   string      `json:"error,omitempty" example:"detail error"`
}

type Response200 struct {
	Message string      `json:"message" example:"berhasil"`
	Data    interface{} `json:"data,omitempty"`
}

type Response201 struct {
	Message string      `json:"message" example:"berhasil dibuat"`
	Data    interface{} `json:"data,omitempty"`
}

type Response401 struct {
	Message string `json:"message" example:"unauthorized: token tidak valid atau kadaluarsa"`
	Error   string `json:"error,omitempty" example:"detail error"`
}

type Response403 struct {
	Message string `json:"message" example:"forbidden: anda tidak memiliki akses"`
	Error   string `json:"error,omitempty" example:"detail error"`
}
