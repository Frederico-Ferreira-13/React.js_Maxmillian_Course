import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { title, image, address, description } = data;

        const client = await MongoClient.connect(
            'mongodb+srv://fferreiraexpo_db_user:iDjLm4oAQIkV7eHy@cluster0.6rp8ct7.mongodb.net/meetups?retryWrites=true&w=majority'
        );

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;