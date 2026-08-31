# PHP One-liner solution

**Author:** casshsu
**Votes:** 2
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1156611/](https://leetcode.com/problems/truncate-sentence/solutions/1156611/)

---

```
class Solution {
    function truncateSentence($s, $k) {
        return join(" ", array_slice(explode(" ", $s), 0, $k));
    }
}
```