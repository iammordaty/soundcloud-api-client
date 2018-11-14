const SoundCloud = require('..');

const client_id = process.env.SOUNDCLOUD_CLIENT_ID;
const soundcloud = new SoundCloud({ client_id });

const username = 'jodywisternoff';
const limit = 10;
const offset = 0;

soundcloud.get(`/users/${username}/comments`, { limit, offset }).then(comments => {
    console.log(`${limit} newest ${username} comments:`, "\n");

    comments.forEach(comment => console.log(`* ${comment.body}`));
}).catch(e => console.warn('An error occurred:', e.message));
