import mongoose from 'mongoose';
import config from './config';
import { logger } from './libs/logger';

const env = 'db.js';

(async() => {
	try {
		const db = await mongoose.connect(config.mongodbURL,{
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
			// useFindAndModify: false,
			// useCreateIndex: true
		});
		logger.info({message:`database is connect to: ${db.connection.name}`, file: env});
		
	} catch (error) {
		logger.error(error);
	}
	
})();
