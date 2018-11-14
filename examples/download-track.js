const SoundCloud = require('..');

const client_id = process.env.SOUNDCLOUD_CLIENT_ID;
const soundcloud = new SoundCloud({ client_id });

const slugify = string => string.toString().toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-');

const trackId = 313004551;

soundcloud.get(`/tracks/${trackId}`).then(track => {
    const { id, title, stream_url } = track;
    const slug = slugify(title);
    const filename = `${slug}.mp3`;

    console.log(`Downloading track #${id} (${title}) to ${filename}...`);

    soundcloud.download(stream_url, filename)
        .then(() => console.log('Done!'))
        .catch(e => console.log('Saving failed: ', e.message));
}).catch(e => console.warn('An error occurred:', e.message));
