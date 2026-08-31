# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5178821/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5178821/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maximumValueSum(_ nums: [Int], _ k: Int, _: [[Int]]) -> Int {
        var minPositiveDiff: Int = .max
        var maxNegativeDiff: Int = .min
        var changedSum: Int = .zero
        var increasedNumCount: Int = .zero
        for num in nums {
            let changedNum = num ^ k
            let diff = changedNum - num

            if diff > .zero {
                increasedNumCount += 1
                minPositiveDiff = min(minPositiveDiff, diff)
                changedSum += changedNum
            } else {
                maxNegativeDiff = max(maxNegativeDiff, diff)
                changedSum += num
            }
        }

        if increasedNumCount % 2 == .zero {
            return changedSum
        } else {
            return max(changedSum - minPositiveDiff, changedSum + maxNegativeDiff)
        }
    }
}
```