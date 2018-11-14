

export const googleMapsAPIKey = "AIzaSyC_FpCwCWMQhy9MbxsVtGdTXTUxvpmgC_c";
const vegGuideRoot = 'https://www.vegguide.org';


const headers = {
    'Accept': 'application/json',
    "User-Agent": "SaltLakeVegetarianTest"
}

export const getShortDescription = (id) =>
    fetch(`${vegGuideRoot}/entry/${id}`, { headers })
        .then(res => res.json())
        .then(data => data.short_description)


        //I quiered too much  foursquare blocked me. :(
// const fsClientId = "SQ4LMCKWOTEWZAF4V3KJUJ2NMEIPLWI3YURWQ0YDL3WGFPOW";
// const fsClientSecret = "KYCJRFDIDN4HYPGKF2VFC1OZNO40SVR4HUJYL1IXNU3HYZZM";

// export const getHours = () =>
//     fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${fsClientId}&client_secret=${fsClientSecret}&v=20180323&limit=1&ll=40.7243,-74.0018&query=coffee`)
//         .then(res => res.json())
//         .catch(function () {
//             console.log("hmmmmmm");
//         });


// export const getTips = (id) =>
//     fetch(`https://api.foursquare.com/v2/venues/${id}/tips/?sort=recent&limit=3&client_id=${fsClientId}&client_secret=${fsClientSecret}&v=20180323`)
//         .then(res => res.json())
//         .then(data => data.response.tips.items[0].text)
//         .catch(err => console.log(err));
