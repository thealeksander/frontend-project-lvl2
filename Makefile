lint: #запускает eslint
	npx eslint
install: #установка npm ci
	npm ci
test: #запуск тестов
	npx jest
test-coverage: #проверка на покрытия кода
	npx jest --coverage