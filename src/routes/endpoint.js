const stats = {
    Rock: 0,
    'Pop music': 0,
    'Popular music': 0,
    'Rhythm and blues': 0,
    'Classical music': 0,
    'Country music': 0,
    'Hip hop music': 0,
    Jazz: 0,
    Blues: 0,
    'Folk music': 0,
    'Electronic music': 0,
    'Electronic dance music': 0,
    'Heavy metal': 0,
    'Alternative rock': 0,
    'Soul music': 0,
    'Dance music': 0,
    Singing: 0,
    'Indie rock': 0,
    'Latin music': 0,
    'Pop rock': 0,
    Funk: 0,
    'Punk rock': 0,
    'Musical theatre': 0,
    Reggae: 0,
    'Easy listening': 0,
    'New-age music': 0,
    Techno: 0,
    'Vocal music': 0,
    Dubstep: 0,
    'Experimental music': 0,
    'House music': 0,
    'Psychedelic rock': 0,
    'Ambient music': 0,
    'World music': 0,
    Disco: 0,
    'Industrial music': 0,
    Grunge: 0,
    Instrumental: 0,
    Electro: 0,
    'Trance music': 0,
    'Avant-garde': 0,
    'New wave': 0,
    Rapping: 0,
    'Contemporary R\'B': 0,
    Ska: 0,
    'Progressive rock': 0,
    'Gospel music': 0,
    'Adult contemporary music': 0,
    'J-pop': 0,
    Opera: 0,
    'Hardcore punk': 0,
}

export function get() {
    return {
        body: stats
    }
}

export async function post({request}) {
    const genre = await request.text();
    stats[genre]++;
    return {
        body: stats
    }
}