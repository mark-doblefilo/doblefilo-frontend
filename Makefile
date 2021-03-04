IMAGE_NAME	:= doblefilo_frontend
.PHONY: build dev stop

build:
	@docker-compose build

dev: #Dev Docker
	@docker-compose up -d --build
	@echo "\e[41m[DEV]\e[49m Docker container is now \033[0;32mrunning\033[0m. localhost:3001"

stop: #Dev Stop
	@docker-compose stop
	@echo "\e[41m[DEV]\e[49m Docker container is now \033[0;31mstopped\033[0m."