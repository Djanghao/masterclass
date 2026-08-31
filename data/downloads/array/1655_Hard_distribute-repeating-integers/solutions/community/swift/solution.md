# 352 ms Beats 100.00% | TC & SC explained

**Author:** subhankar_acharya
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-repeating-integers/solutions/5667687/](https://leetcode.com/problems/distribute-repeating-integers/solutions/5667687/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

When solving the problem of distributing integers to meet specific quantities, my first thought was to break the problem down into smaller, manageable parts. The key observation is that we need to distribute occurrences of each integer in such a way that the quantities requested by customers are met. Given that this problem involves multiple combinations, a recursive approach with backtracking can efficiently explore possible distributions.
# Approach
<!-- Describe your approach to solving the problem. -->

Counting Occurrences:

1. Start by counting how many times each integer appears in the given list (nums). This gives us the capacity of each "bucket" of integers.

2. Sorting for Optimization:
- Sort the quantity array in descending order to maximize the chances of fulfilling larger requests first, which helps in pruning unnecessary recursive calls earlier.
3. Backtracking with Recursion:
-Use a recursive function to attempt to satisfy each customer's request using the available counts. If a request is satisfied, the count is reduced accordingly, and we move on to the next request.
- If a configuration does not work, the function backtracks by restoring the previous state and trying a different combination.
4. Base Case:
- The recursion terminates successfully when all customer requests have been satisfied, i.e., when we've processed all elements in the quantity array.
Result:
5. If all requests can be satisfied by any combination of distributions, the function returns true; otherwise, it returns false.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(mlogm)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n+m)$$
# Code
```swift []
class Solution {
    func canDistribute(_ nums: [Int], _ quantity: [Int]) -> Bool {
        var countMap = [Int:Int] ()
        for num in nums {
            countMap[num, default: 0] += 1
        }
        var counts = [Int]()
        for (_, value) in countMap {
            counts.append(value)
        }
        
        // For early pruning
        let sortedQuantity = quantity.sorted(by: >)
        
        return canDistributeHelper(&counts, sortedQuantity, 0)
    }

    func canDistributeHelper(_ counts: inout [Int], _ quantity: [Int], _ ithCustomer: Int) -> Bool {
        // Base case
        if ithCustomer == quantity.count {
            return true
        }
        
        for idX in 0..<counts.count {
            if counts[idX] >= quantity[ithCustomer] {
                counts[idX] -= quantity[ithCustomer]
                if canDistributeHelper(&counts, quantity, ithCustomer + 1) {
                    return true
                }
                counts[idX] += quantity[ithCustomer] // backtrack
            }
        }
        
        return false
    }
}
```