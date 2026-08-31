# Math solution

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3645834/](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/solutions/3645834/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: **O(n^2)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:**O(n^2)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func numOfWays(_ nums: [Int]) -> Int {
        let mod = 1000000007
        let n = nums.count
        if n <= 2 { return 0 }
        
        // generate pascal triangle
        var pascal = Array(repeating: Array(repeating: 0, count: n), count: n)
        for i in 0..<n {
            pascal[i][0] = 1
            pascal[i][i] = 1
        }
        for i in 2..<n {
            for j in 1..<i {
                pascal[i][j] = (pascal[i-1][j] + pascal[i-1][j-1]) % mod
            }
        }
        
        
        func helper(_ arr: [Int]) -> Int {
            let m = arr.count
            if m <= 2 { return 1 }
            let root = arr[0]
            var left = [Int]()
            var right = [Int]()
            for num in arr {
                if num < root {
                    left.append(num)
                } else if num > root {
                    right.append(num)
                }
            }
            let leftLen = left.count
            let rightLen = right.count
            let leftAns = helper(left) % mod
            let rightAns = helper(right) % mod
            return (((pascal[leftLen + rightLen][leftLen] * leftAns) % mod) * rightAns) % mod
        }
                
        return helper(nums) - 1
    }
}
```