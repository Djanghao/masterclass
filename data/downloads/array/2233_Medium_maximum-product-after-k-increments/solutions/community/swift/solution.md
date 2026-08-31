# ✅ Accepted 100% | O(nlogn) | O(N)

**Author:** rnin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5353256/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5353256/)

---

# Intuition
We greedly add 1 to K least elements to get the max product

# Complexity
- Time complexity: O(NlogN)

- Space complexity: O(N)

# Code
```
import Collections

class Solution {
    func maximumProduct(_ nums: [Int], _ k: Int) -> Int {
        var minHeap = Heap<Int>(nums)
        var result = 1
        let mod = Int(pow(10.0, 9.0) + 7)

        for _ in 0..<k { minHeap.insert(minHeap.removeMin() + 1) }

       for element in minHeap.unordered {
            result = (result * element) % mod
       }

        return result % mod
    }
}
```