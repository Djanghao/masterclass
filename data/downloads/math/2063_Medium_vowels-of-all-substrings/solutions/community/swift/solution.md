# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/vowels-of-all-substrings/solutions/3430514/](https://leetcode.com/problems/vowels-of-all-substrings/solutions/3430514/)

---

```
class Solution {
    func countVowels(_ word: String) -> Int {

        let chs = Array(word)
        var res = 0

        for i in chs.indices
            where "aeiou".contains(chs[i]) {
                res += (chs.count - i) * (i + 1)
            }

        return res
    }
}
```