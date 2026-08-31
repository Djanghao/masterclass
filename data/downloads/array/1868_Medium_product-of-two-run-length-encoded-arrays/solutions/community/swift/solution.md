# Simple solution with no extra space.

**Author:** TimeIsEverything
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/4712264/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/4712264/)

---

# Complexity
- Time complexity: O(M + N)

- Space complexity: O(1)

# Code
```
class Solution {
    func findRLEArray(_ encoded1: [[Int]], _ encoded2: [[Int]]) -> [[Int]] {
        let m = encoded1.count
        let n = encoded2.count
        guard m > 0 && n > 0 else {
            return []
        }

        var res = [[Int]]()

        // Indexes
        var index1 = 0, index2 = 0
        // These variables maintain how much frequency is already taken / used up
        var taken1 = 0, taken2 = 0
        while index1 < m && index2 < n {
            let prod = encoded1[index1][0] * encoded2[index2][0]
            let freq1 = encoded1[index1][1] - taken1
            let freq2 = encoded2[index2][1] - taken2

            let freq: Int
            if freq1 > freq2 {
                freq = freq2
                index2 += 1
                taken1 += freq2
                taken2 = 0
            } else if freq1 < freq2 {
                freq = freq1
                index1 += 1
                taken1 = 0
                taken2 += freq1
            } else {
                freq = freq1
                index1 += 1
                index2 += 1
                taken1 = 0
                taken2 = 0
            }

            if let last = res.last, last[0] == prod {
                res[res.count - 1][1] += freq
            } else {
                res.append([prod, freq])
            }
        }

        return res
    }
}
```