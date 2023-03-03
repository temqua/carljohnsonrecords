deploy:
	docker-compose up --build -d 

deploy-dev: 
	docker-compose -f ./docker-compose.debug.yml up --build -d