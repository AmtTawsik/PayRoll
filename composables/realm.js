import * as Realm from "realm-web";


export const useRealmApp = () => {
	const appId = useRuntimeConfig().public.APP_ID;

	let currentUser;
	let app;

	if(!app) {
		app = new Realm.App({
			id: appId,
		});
	}

	// if(app.currentUser) {
	// 	currentUser = app.currentUser;
	// }


	// const loginApiKey = async () => {
	// 	const apiKey = useRuntimeConfig().public.USER_API_KEY;
	// 	const credentials = Realm.Credentials.apiKey(apiKey);

	// 	return await app.logIn(credentials);
	// };

	const userLogin = async (email, password) => {
		if(email.length > 0  && password.length > 0) {
			const credentials = Realm.Credentials.emailPassword(
				email,
				password
			);

			let user = await app.logIn(credentials);
			console.log("User when login: ", user);

			currentUser = user;

			return true;
		}
	}

	if (!currentUser) {
		// currentUser = loginApiKey();
		currentUser = app.currentUser;
	}

	async function getRecords(dbName, colName) {
		if (currentUser === null) return null;

		const mongo = currentUser.mongoClient("mongodb-atlas");
		const collection = mongo.db(dbName).collection(colName);

		let result;

		await collection.find({}).then((data) => {
			console.log(data);
			result = data;
		});

		return result;
	}

	async function addRecordToDB(dbName, colName, record) {
		if (currentUser === null) return null;

		const mongo = currentUser.mongoClient("mongodb-atlas");
		const collection = mongo.db(dbName).collection(colName);

		let result;

		await collection.insertOne(record).then((data) => {
			console.log(data);
			result = data;
		});

		return result;
	}

	async function updateRecordFromDB(dbName, colName, record) {
		if (currentUser === null) return null;

		const mongo = currentUser.mongoClient("mongodb-atlas");
		const collection = mongo.db(dbName).collection(colName);

		let result;

		await collection.updateOne({ _id: record._id }, record).then((data) => {
			console.log(data);
			result = data;
		});

		return result;
	}

	async function deleteRecordFromDB(dbName, colName, id) {
		if (currentUser === null) return null;

		const mongo = currentUser.mongoClient("mongodb-atlas");
		const collection = mongo.db(dbName).collection(colName);

		let result;

		await collection.deleteOne({ _id: id }).then((data) => {
			console.log(data);
			result = data;
		});

		return result;
	}

	return {
		app,
		Realm,
		userLogin,
		currentUser,
		// loginApiKey,
		getRecords,
		addRecordToDB,
		updateRecordFromDB,
		deleteRecordFromDB,
	};
};
