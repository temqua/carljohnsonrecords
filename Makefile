deploy:
	docker-compose up --build -d 

delete:
	docker-compose down -v