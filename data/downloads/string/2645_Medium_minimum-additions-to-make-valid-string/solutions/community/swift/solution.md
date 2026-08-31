# Swift linear solution O(n)

**Author:** AndreevIVdev
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3426386/](https://leetcode.com/problems/minimum-additions-to-make-valid-string/solutions/3426386/)

---

**Code:**
```
class Solution {
    func addMinimum(_ word: String) -> Int {
        let word = Array(word)
        var i = 0
        var j = 0
        var res = 0
        let letters: [Character] = ["a", "b", "c"]

        while i < word.count {
            if word[i] == letters[j] {
                i += 1
            } else {
                res += 1
            }
            j += 1
            j %= letters.count
        }

        if j != 0 {
            res += letters.count - j
        }

        return res
    }
}
```
