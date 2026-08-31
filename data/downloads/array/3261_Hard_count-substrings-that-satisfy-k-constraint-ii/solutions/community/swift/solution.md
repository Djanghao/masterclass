# Optimal Solution | Beats 100% | Swift

**Author:** jainsoumya647
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5688600/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5688600/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: (n + Q)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func countKConstraintSubstrings(_ s: String, _ k: Int, _ queries: [[Int]]) -> [Int] {
        let n = s.count
        let str = Array(s)
        var leftMost = [Int](repeating: 0, count: n)
        var i = 0, j = 0
        var oneCount = 0, zeroCount = 0
        while j < n {
            if str[j] == "1" {
                oneCount += 1
            } else {
                zeroCount += 1
            }
            while zeroCount > k && oneCount > k {
                if str[i] == "1" {
                    oneCount -= 1
                } else {
                    zeroCount -= 1
                }
                i += 1
            }
            leftMost[j] = i
            j += 1
        }
        var rightMost = [Int](repeating: 0, count: n)
        oneCount = 0
        zeroCount = 0
        i = n-1
        j = n-1
        while j >= 0 {
            if str[j] == "1" {
                oneCount += 1
            } else {
                zeroCount += 1
            }
            while zeroCount > k && oneCount > k {
                if str[i] == "1" {
                    oneCount -= 1
                } else {
                    zeroCount -= 1
                }
                i -= 1
            }
            rightMost[j] = i
            j -= 1
        }

        var prefixSum = [0]
        for i in 1..<n {
            prefixSum.append(prefixSum[i-1] + i - leftMost[i] + 1)
        }
        // print(prefixSum)
        var result = [Int]()
        for query in queries {
            let low = query[0]
            let high = query[1]
            let validRightIndex = min(high, rightMost[low])
            let length = validRightIndex - low + 1
            var res = (length * (length + 1)) / 2
            res += prefixSum[high] - prefixSum[validRightIndex]
            result.append(res)
        }
        
        return result
    }
}
```