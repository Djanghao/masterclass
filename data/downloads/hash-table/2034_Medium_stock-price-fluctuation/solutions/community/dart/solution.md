# Solution min-heap and max-heap ⭐⭐

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/5522513/](https://leetcode.com/problems/stock-price-fluctuation/solutions/5522513/)

---



# Code
```
import 'dart:collection';

class StockPrice {
  int latestTimestamp = -1;
  int latestPrice = -1;
  Map<int, int> timestampToPrice = {};
  SplayTreeMap<int, int> priceCounts = SplayTreeMap();

  StockPrice();

  void update(int timestamp, int price) {
    // Check if the timestamp already exists
    if (timestampToPrice.containsKey(timestamp)) {
      int oldPrice = timestampToPrice[timestamp]!;
      // Decrement the count of the old price
      priceCounts[oldPrice] = priceCounts[oldPrice]! - 1;
      if (priceCounts[oldPrice] == 0) {
        priceCounts.remove(oldPrice);
      }
    }
    
    // Update the timestamp with the new price
    timestampToPrice[timestamp] = price;
    // Increment the count of the new price
    if (priceCounts.containsKey(price)) {
      priceCounts[price] = priceCounts[price]! + 1;
    } else {
      priceCounts[price] = 1;
    }

    // Update the latest price and timestamp if necessary
    if (timestamp >= latestTimestamp) {
      latestTimestamp = timestamp;
      latestPrice = price;
    }
  }

  int current() {
    return latestPrice;
  }

  int maximum() {
    return priceCounts.lastKey()!;
  }

  int minimum() {
    return priceCounts.firstKey()!;
  }
}
```