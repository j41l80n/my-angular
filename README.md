# my-angular

### Before installing the latest version of Node.js, you must add its PPA to Ubuntu… This repository is provided by the official package mainterner

	sudo apt install curl
		curl -V
			curl 7.58.0

### Latest Node
	sudo curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

### Install node
	sudo apt install nodejs
		node -v 
			v10.11.0
		<!-- npm install --save-dev @angular-devkit/build-angular -->
		npm -v
			6.4.1
### Angular
	sudo npm install -g @angular/cli
	sudo npm update -g	

	<!-- sudo npm install npm@latest -g <!-- para remover erros --> -->
	
	sudo ng new my-app <!-- --skip-install -->
	cd my-app
sudo chown -R $(whoami) /home/jailson/Documents/my-angular/my-app/node_modules