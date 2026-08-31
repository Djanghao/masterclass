# Swift

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5457163/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/5457163/)

---

The main idea is to always consider the largest of (what is left of) w1 and w2 and merge its first character.

We implement a ```greater``` method because using ```>``` needs converting to ```String``` which is too expensive (TLE).

# Code
```
class Solution {
    func largestMerge(_ word1: String, _ word2: String) -> String {
        let word1 = Array(word1)
        let word2 = Array(word2)

        let (n1, n2) = (word1.count, word2.count)
        var (i1, i2) = (0, 0)

        var res = ""

        while i1 < n1 || i2 < n2 {
            if greater(i1, i2) {
                res.append(word1[i1])
                i1 += 1
            } else {
                res.append(word2[i2])
                i2 += 1               
            }
        }

        return res

        func greater(_ i1: Int, _ i2: Int) -> Bool {
            var i1 = i1, i2 = i2
            while i1 < n1 && i2 < n2 {
                let c1 = word1[i1], c2 = word2[i2]
                if c1 == c2 {
                    i1 += 1
                    i2 += 1
                } else {
                    return c1 > c2
                }
            }
            return i2 == n2
        }
    }
}
```