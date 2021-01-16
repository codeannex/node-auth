export class Container {
	services: any;
	
	constructor() {
		this.services = {};
	}

	service(name: string, cb: any){
		Object.defineProperty(this, name, {
			get: () => {
				if(!this.services.hasOwnProperty(name)){
					this.services[name] = cb(this);
				}

				return this.services[name];
			},
			configurable: true,
			enumerable: true
		});

		return this;
	}
}
