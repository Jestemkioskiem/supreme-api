var supreme = require('./index') || require('supreme-api');

// Find Product Based on Keywords
const keywords = "Sumo Tee";
const style = 'Black';
const category = 'new';

// supreme.seek(category, keywords, style, (product, err) => {
//     if (err) {
//         console.log(err);
//         return err;
//     }
//     console.log(product);
// });


// supreme.getItems('new', (product, err) => {
//     if (err) {
//         console.log(err);
//         return err;
//     }
//     console.log(product);
// });

supreme.getItem('http://www.supremenewyork.com/shop/shirts/f4w8koltz/eyam8bv3g', (item, err) => {
    if (err) {
        console.log(err);
        return err;
    }
    console.log(item);
});
