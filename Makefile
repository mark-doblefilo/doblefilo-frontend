IMAGE_NAME	:= doblefilo_frontend
.PHONY: build dev stop

build:
	@docker-compose build

dev: #Dev Docker
	@docker-compose up -d --build
	@echo "\e[31m[DEV]\e[39m Docker container is now \033[0;32mrunning\033[0m. localhost:3001"

stop: #Dev Stop
	@docker-compose stop
	@echo "\e[31m[DEV]\e[39m Docker container is now \033[0;31mstopped\033[0m."

prod: #Prod Docker
	@docker-compose -f docker-compose.prod.yml up -d --build
	@echo "\e[32m[PROD]\e[39m Docker container is now \033[0;32mrunning\033[0m."