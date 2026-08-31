# Swift one liner

**Author:** diogosouza
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/4504063/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/4504063/)

---

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
class Solution {
    func partitionArray(_ nums: [Int], _ k: Int) -> Int {
        // one liner: 
        // nums.sorted().reduce(into: (Int.min, 0)) { $0 = $1 > $0.0 + k ? ($1, $0.1 + 1) : $0 }.1
        
        nums
            .sorted()
            .reduce(into: (min: Int.min, count: 0)) { result, number in
                result = number > result.min + k ? (number, result.count + 1) : result
            }
            .count
    }
}

```