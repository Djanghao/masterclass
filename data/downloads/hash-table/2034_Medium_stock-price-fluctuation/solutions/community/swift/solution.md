# Easy

**Author:** pallavi_joshi_mobile
**Votes:** 0
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/5882741/](https://leetcode.com/problems/stock-price-fluctuation/solutions/5882741/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []

class StockPrice {
    var stockPrice = [Int: Int]()

    init() { }
    
    func update(_ timestamp: Int, _ price: Int) {
        stockPrice[timestamp] = price
    }
    
    func current() -> Int {
        let latest = stockPrice.keys.max() ?? -1
        if let value = stockPrice[latest] { return value }
        return -1
    }
    
    func maximum() -> Int {
        return stockPrice.values.max() ?? 0
    }
    
    func minimum() -> Int {
        return stockPrice.values.min() ?? 0
    }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * let obj = StockPrice()
 * obj.update(timestamp, price)
 * let ret_2: Int = obj.current()
 * let ret_3: Int = obj.maximum()
 * let ret_4: Int = obj.minimum()
 */
```