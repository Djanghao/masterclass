# Bottom up approach (Thanks to Aditya verma)

**Author:** sudhatiwari22
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/5808102/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/5808102/)

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
class Solution {
    
    func minScoreTriangulation(_ values: [Int]) -> Int {
            
        var memo = Array(repeating: Array(repeating: -1, count: values.count), count: values.count)

        func helper(_ array: [Int], _ i: Int, _ j: Int) -> Int {
            if i >= j {
                return 0
            }

            var minScore = Int.max

            if memo[i][j] != -1 {
                return memo[i][j]
            }

            for k in i..<(j) {
                let temp = helper(array, i, k) + 
                            helper(array, k + 1, j) + 
                            (array[i - 1] * array[k] * array[j])
                if temp < minScore {
                    minScore = min(minScore, temp)
                    memo[i][j] = minScore
                }

            }

            return memo[i][j]

        }
       
       
        return helper(values, 1, values.count - 1)
    }
}
```