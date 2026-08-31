# BTreeMap , HashSet and HashMap

**Author:** raineser
**Votes:** 0
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/4501186/](https://leetcode.com/problems/stock-price-fluctuation/solutions/4501186/)

---




# Complexity
- Time complexity: log(n)

# Code
```
use std::collections::{HashMap, BTreeMap, HashSet};

struct StockPrice {

    prices: HashMap<i32,i32>,
    curr: i32, //key
    ord_prices: BTreeMap<i32, i32>,
    set: HashSet<i32>
  
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl StockPrice {

    fn new() -> Self {

        StockPrice{prices: HashMap::new(), curr: 0, ord_prices: BTreeMap::new(), set: HashSet::new()}

    }
    
    fn update(&mut self, timestamp: i32, price: i32) {
        if self.prices.contains_key(&timestamp) {

            let val = self.prices.get(&timestamp).unwrap();

            match self.ord_prices.get_mut(&val) {

                Some(x) => {

                    if *x > 1 {
                        *x -= 1;
                    } else {
                        self.ord_prices.remove(&val);
                        self.set.remove(&val);
                    }
                },
                None => {}
            }
        } 

        if self.set.contains(&price) {

            match self.ord_prices.get_mut(&price) {
                
                Some(x) => {
                    *x += 1;
                }, 
                None => {}
            }

        } else {

            self.ord_prices.insert(price, 1);
            self.set.insert(price);
        }

        self.prices.insert(timestamp, price);
       
        if timestamp > self.curr {
            self.curr = timestamp; 
        }
    }
    
    fn current(&self) -> i32 {
        
        self.prices.get(&self.curr).unwrap().clone()
    }
    
    fn maximum(&self) -> i32 {
        self.ord_prices.last_key_value().unwrap().0.clone()
    }
    
    fn minimum(&self) -> i32 {
        self.ord_prices.first_key_value().unwrap().0.clone()
    }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * let obj = StockPrice::new();
 * obj.update(timestamp, price);
 * let ret_2: i32 = obj.current();
 * let ret_3: i32 = obj.maximum();
 * let ret_4: i32 = obj.minimum();
 */
```