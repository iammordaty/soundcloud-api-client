const SoundCloud = require('soundcloud-api-client');

const client_id = 'your-client-id';
const soundcloud = new SoundCloud({ client_id });

const params = {
    q: 'recorded live at',
    genres: [ 'house', 'tech-house', 'techno' ].join(','),
    'bpm[from]': 125,
    'bpm[to]': 130,
    'duration[from]': 1800000
};

console.log('Searching for tracks with following params:', JSON.stringify(params));

soundcloud.get('/tracks', params).then(tracks => {
    console.log(`Found ${tracks.length} tracks:\n`);

    tracks.forEach(({ user, title }) => console.log(`* ${user.username} – ${title}`));
}).catch(e => console.error('An error occurred:', e.message));
