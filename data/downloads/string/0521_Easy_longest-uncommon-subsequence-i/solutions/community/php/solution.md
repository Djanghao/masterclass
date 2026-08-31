# PHP - One line solution

**Author:** akarabudka
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/5706845/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/5706845/)

---

```
class Solution {
    function findLUSlength($a, $b) {
        return $a === $b ? -1 : max(strlen($a), strlen($b));
    }
}
```