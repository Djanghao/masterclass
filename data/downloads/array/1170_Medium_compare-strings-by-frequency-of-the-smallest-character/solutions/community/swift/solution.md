# swift beats 100%

**Author:** Zhanadilll
**Votes:** 0
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/5021275/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/5021275/)

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
```
class Solution {
    func numSmallerByFrequency(_ queries: [String], _ words: [String]) -> [Int] {
        var res = [Int]()
        var wordFreqs = [Int]()
        for word in words {
            wordFreqs.append(helper(word))
        }
        for query in queries {
            var count = 0
            let queryFreq = helper(query)
            for freq in wordFreqs {
                if queryFreq < freq {
                    count += 1
                }
            }
            res.append(count)
        }

        return res
    }

    func helper(_ str: String) -> Int {
        let arr = Array(str).sorted()

        let first = arr[0]
        var res = 0
        for i in arr {
            if i == first {
                res += 1
            } else {
                return res
            }
        }

        return res
    }
}
```