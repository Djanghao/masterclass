# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/4487066/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/4487066/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxOperations(_ nums: [Int], _ k: Int) -> Int {
        var unpaired = [Int: Int]()
        var result = 0
        for num in nums {
            let pair = k - num
            if let count = unpaired[pair], count > .zero {
                result += 1
                unpaired[pair] = count - 1
            } else {
                unpaired[num, default: .zero] += 1
            }
        }
        return result
    }
}

```