# Python beats 100%

**Author:** lzhjiuzhi
**Votes:** 12
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/404816/](https://leetcode.com/problems/single-row-keyboard/solutions/404816/)

---

Using dic to record the index or word.

```'class Solution:
    def calculateTime(self, keyboard: str, word: str) -> int:
        d = {}
        for i in range(len(keyboard)):
            d[keyboard[i]] = i
        res = 0
        temp = 0
        for c in word:
            res += abs(d[c]-temp)
            temp = d[c]
        return res
		```
		
	