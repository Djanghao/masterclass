# Big Maps

**Author:** raineser
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/4898378/](https://leetcode.com/problems/design-movie-rental-system/solutions/4898378/)

---


# Code
```
use std::collections::{HashMap, BTreeSet, BTreeMap};

struct MovieRentingSystem {
    //current movies able to be rented 
    movies:HashMap<i32, BTreeMap<i32, BTreeSet<i32>>>, //movie -> price -> shops 
    
    //the price of each movie at a shop
    shop: HashMap<i32, HashMap<i32, i32>>, //shop -> movie -> price 
    
    //Movies currently rented 
    cheapest: BTreeMap<i32,BTreeSet<(i32,i32)>> //price -> (shop,movie)
}

impl MovieRentingSystem {
    fn new(n: i32, entries: Vec<Vec<i32>>) -> Self {
        let mut shops: HashMap<i32, HashMap<i32, i32>> = HashMap::new();
        
        let movies = entries.into_iter().fold(HashMap::new(), |mut map, values| {
            let shop = values[0];
            let movie = values[1];
            let price = values[2];

            shops.entry(shop).or_insert(HashMap::new()).insert(movie, price);
            map.entry(movie).or_insert(BTreeMap::new()).entry(price).or_insert(BTreeSet::new()).insert(shop);
            map
        } );

        Self{movies: movies, shop: shops, cheapest: BTreeMap::new()}
    }
    
    fn search(&self, movie: i32) -> Vec<i32> {
        let mut result = vec![];
        if let Some(m) = self.movies.get(&movie) {
            for (key,value) in m.iter() {
                for entry in value.iter() {
                    result.push(entry.clone());
                    if result.len() == 5 {
                        return result;
                    }
                }
            }
        }
        result
    }
    
    fn rent(&mut self, shop: i32, movie: i32) {
        let price = self.shop.get(&shop).unwrap().get(&movie).unwrap().clone(); 
        self.movies.get_mut(&movie).unwrap().get_mut(&price).unwrap().remove(&shop);
        self.cheapest.entry(price).or_insert(BTreeSet::new()).insert((shop,movie));
    }
    
    fn drop(&mut self, shop: i32, movie: i32) {
        let price = self.shop.get(&shop).unwrap().get(&movie).unwrap().clone(); 
        self.cheapest.get_mut(&price).unwrap().remove(&(shop,movie));
        self.movies.entry(movie).or_insert(BTreeMap::new()).entry(price).or_insert(BTreeSet::new()).insert(shop);
    }
    
    fn report(&self) -> Vec<Vec<i32>> {
        let mut result = vec![];
        for (key,value) in self.cheapest.iter() {
            for item in value.iter() {
                result.push(vec![item.0,item.1]);
                if result.len() == 5 {
                    return result;
                }
            }
        }
        result
    } 
}