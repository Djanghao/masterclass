# Detailed Explanation || Two Maps || C++ Clean Code

**Author:** i_QUaSaR
**Votes:** 33
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/1514279/](https://leetcode.com/problems/stock-price-fluctuation/solutions/1514279/)

---

***If you find this solution helpful do give it a like :)***

**Explanation :** 

Idea is to use map to keep track of prices and its count at various timestamps for stock. This map is used to get *minimum and maximum overall price* of stock till current timestamp. 

* We take 2 maps to track prices and timestamps :

	1. **`stock`** : This map has key as `timestamp` and value is `price` of stock at that timestamp. This will be used to `update()` price for given timestamp.

	2. **`prices`** : It has count of various `price` a stock can have at multiple timestamps. Since we can have same price at *different timestamps*. Thus, it stores the count of different timestamps this price is part of. 

* Now, to `update()` stock price, we have 2 cases : either we have a new timestamp, or else we can have new price for existing timestamp. 

	* **Case 1:** Here we simple need to add new entry in stock (timestamp) map as well as in stock prices map. 
	
	* **Case 2:** In this case we need since we already have a price for given timestamp and we need to update that. 
		* So here, we get `old price` from `stock` map for current timestam.
		* and then decrement 1 from the count of `old_price` in  prices map. 
		* And if anytime count reaches 0, we remove entry for that price from `prices` map. 
		* Rest we do same as we did in Case 1. i.e create new entry in stock and increment count in prices

		* Lets Dry run on some cases to get better understanding : 

				1. update(1, 10)  :  Here 1 is timestamp and 10 is price
						# prices : [ {10 -> 1} ]  
						# stock [  {1 -> 10} ]

				2. update(2, 5) : Here 2 is timestamp and 5 is price 
						# prices : [ {5 -> 1} , {10 -> 1} ]  
						# stock [  {1 -> 10} , {2 -> 5} ]

				3. update(5, 10) : Here 5 is timestamp and 10 is price 
					    -> here count of price = 10 will be incremented
						
						# prices : [ {5 -> 1} , {10 -> 2} ]   
						# stock [  {1 -> 10} , {2 -> 5} , {5 -> 10} ]

				4. update(1, 3) : Here 1 is timestamp and 3 is price , 
						-> since existing timestamp, so we have Case 2 here
						-> here we decrement count of price = 10, and increment count of price = 3
						
						# prices : [ {3 -> 1} , {5 -> 1} , {10 -> 1} ] 
						# stock [  {1 -> 3} , {2 -> 5} , {5 -> 10} ], update price for timestamp-1 to price = 3

				5. update(4, 2) : new timestamp and price, so create a new entry 
						# prices : [ {2 -> 1} {3 -> 1} , {5 -> 1} , {10 -> 1} ] 
						# stock [  {1 -> 3} , {2 -> 5} , {4 -> 2} , {5 -> 10} ]

* Also, to get current price we use a pair `currentStock`, which store `{timestamp, price}`. So everytime we get an update request, simple update this pair is current timestamp is less than the timestamp in request.

* Since we are using map to store `prices` so items are sorted by keys i.e prices. Thus, top element of map will give `minimum` price and bottom/last element will give us `maximum` price. 

# Code : 

```
class StockPrice {
    map<int, int> stock; 
    map<int, int> prices;
    pair<int, int> currentStock = {-1, -1};
public:
    
    StockPrice() {
        
    }
    
    void update(int timestamp, int price) {
	
		// Update current stock price if we get a new greater timestamp
        if(timestamp >= currentStock.first) {
            currentStock = {timestamp, price};
        }
        
        if(stock.find(timestamp) != stock.end()) {
			// Case 2
            int old_price = stock[timestamp];  // Get old price for timestamp
            
            prices[old_price]--;  // Reduce count 
            if(prices[old_price] == 0) prices.erase(old_price); // Remove if no timestamp has old price
        }
        
		// Case 1
        prices[price]++;  
        stocks[timestamp] = price;   
        
    }
    
    int current() {
        return currentStock.second;
    }
    
    int maximum() {
			return prices.rbegin()->first;  // GET last element
    }
    
    int minimum() {
        return prices.begin()->first; // Get first element
    }
};
```

**Complexity Analysis :** 

* **Time  :** 
	* `update()` : **O(N log N)** , N -> number of update() calls
	* `maximum()`, `minimum()` :  **O(1)** , since we can get top and bottom in contant time.
 
 * **Space :** : **O(2N)** , since we are using two maps for storing timestamp and prices entries.

Similar Problems :

* [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
 
***If you find this solution helpful do give it a like, it motivates me to write posts like this :)***