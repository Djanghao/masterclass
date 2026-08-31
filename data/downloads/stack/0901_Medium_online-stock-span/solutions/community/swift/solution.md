# swift solution

**Author:** aske0115
**Votes:** 1
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/2795380/](https://leetcode.com/problems/online-stock-span/solutions/2795380/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class StockSpanner {

    private var stock: [Int] = []
    init() {
        
    }
    
    func next(_ price: Int) -> Int {
        stock.append(price)
        var count = 0
        for i in stride(from: stock.count - 1, through: 0 , by: -1) {
            if stock[i] <= price {
                count += 1
            } else {
                break
            }
        }
        return count
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * let obj = StockSpanner()
 * let ret_1: Int = obj.next(price)
 */
```