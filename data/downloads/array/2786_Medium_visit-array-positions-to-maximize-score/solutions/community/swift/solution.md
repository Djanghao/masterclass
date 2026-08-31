# Swift iteration with memoization

**Author:** sewangoh127
**Votes:** 0
**Link:** [https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/4254721/](https://leetcode.com/problems/visit-array-positions-to-maximize-score/solutions/4254721/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {

    func maxScore(_ nums: [Int], _ x: Int) -> Int {

        //iteration with memoization
        //first dimension - num index
        //second dimension - first element = sum, second element = parity (0-even, 1-odd)
        var dpArr = Array<[Int]>(repeating: 
        Array<Int>(repeating: 0, count: 2),
        count: nums.count)

        for (i, num) in nums.enumerated().reversed() {
            let isEven = num % 2 == 0
            guard i != nums.count - 1 else {
                if isEven {
                    dpArr[i][0] = num
                } else {
                    dpArr[i][1] = num
                }
                continue
            }

            let nextNumEven = dpArr[i+1][0]
            let nextNumOdd = dpArr[i+1][1]

            if isEven {
                // even
                let bestEven = max(nextNumEven + num, nextNumOdd + num - x)
                dpArr[i][0] = bestEven
                dpArr[i][1] = nextNumOdd
            } else {
                // odd
                let bestOdd = max(nextNumEven + num - x, nextNumOdd + num)
                dpArr[i][0] = nextNumEven
                dpArr[i][1] = bestOdd
            }
        }

        return nums[0] % 2 == 0 ? dpArr[0][0] : dpArr[0][1]
    }
}
```