deploy:
	docker-compose build --no-cache
	docker-compose up -d 

delete:
	docker-compose down -v