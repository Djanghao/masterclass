# Simple Swift Solution / Sorting

**Author:** sphaerion
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4323234/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/4323234/)

---

# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    func maxCoins(_ piles: [Int]) -> Int {
        let piles = piles.sorted(by: >)
        var answer = 0

        for i in stride(from: 1, to: (piles.count * 2) / 3, by: 2) {
            answer += piles[i]
        }

        return answer
    }
}
```