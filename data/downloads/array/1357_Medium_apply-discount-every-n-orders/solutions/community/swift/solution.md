# Apply Discount Every n orders

**Author:** tolgai
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-discount-every-n-orders/solutions/4227713/](https://leetcode.com/problems/apply-discount-every-n-orders/solutions/4227713/)

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
```

class Cashier {
     private let n: Int
    private let discount: Int
    private let products: [Int]
    private let prices: [Int]
    
    private var customerCount: Int = 0
    
    init(_ n: Int, _ discount: Int, _ products: [Int], _ prices: [Int]) {
        self.n = n
        self.discount = discount
        self.products = products
        self.prices = prices
    }
    
     func getBill(_ product: [Int], _ amount: [Int]) -> Double {
        
        let zippedArray = zip(product, amount)
        let calculate = zippedArray
            .map { prices[getIndex(item: $0.0)] * $0.1}
            .reduce(0, +)
        
        customerCount += 1
        
        return isDiscountEnable ?  calculateDiscount(with: Double(calculate)) : Double(calculate)
            
    }
    
    func getIndex(item: Int) -> Int {
        return products.firstIndex(where: { $0 == item }) ?? 0
    }
    
    func calculateDiscount(with calculate: Double) -> Double {
        return calculate * (Double((100 - discount)) * 0.01)
    }
    
    var isDiscountEnable: Bool {
        return customerCount % n == 0
    }
}

/**
 * Your Cashier object will be instantiated and called as such:
 * let obj = Cashier(n, discount, products, prices)
 * let ret_1: Double = obj.getBill(product, amount)
 */
```