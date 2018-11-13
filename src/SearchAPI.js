


// Generate a unique token for storing your bookshelf data on the backend server.
export const googleMapsAPIKey = "AIzaSyC_FpCwCWMQhy9MbxsVtGdTXTUxvpmgC_c";
const fsClientId = "SQ4LMCKWOTEWZAF4V3KJUJ2NMEIPLWI3YURWQ0YDL3WGFPOW";
const fsClientSecret = "KYCJRFDIDN4HYPGKF2VFC1OZNO40SVR4HUJYL1IXNU3HYZZM";

export const getHours = () =>
    fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${fsClientId}&client_secret=${fsClientSecret}&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee`)
        .then(res => res.json())
        .catch(function () {
            console.log("hmmmmmm");
        });


export const getTips = (id) =>
    fetch(`https://api.foursquare.com/v2/venues/${id}/?client_id=${fsClientId}&client_secret=${fsClientSecret}&v=20180323&tips&sort=recent&?limit=3`)
        .then(res => res.json())
        .catch(function () {
            console.log("hmmmmmm");
        });

// const headers = {
//     'Accept': 'application/json',
//     'Authorization': token
// }

// export const get = (bookId) =>
//     fetch(`${api}/books/${bookId}`, { headers })
//         .then(res => res.json())
//         .then(data => data.book)

// export const getAll = () =>
//     fetch(`${api}/books`, { headers })
//         .then(res => res.json())
//         .then(data => data.books)

// export const update = (book, shelf) =>
//     fetch(`${api}/books/${book.id}`, {
//         method: 'PUT',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ shelf })
//     }).then(res => res.json())

// export const search = (query) =>
//     fetch(`${api}/search`, {
//         method: 'POST',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ query })
//     }).then(res => res.json())
//         .then(data => data.books)
