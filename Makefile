snx:
	npm run codegen:snx
	npm run build:snx
	env-cmd npm run deploy:snx

.PHONY: snx