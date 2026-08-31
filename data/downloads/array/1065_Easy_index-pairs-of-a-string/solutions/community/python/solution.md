# Python3 Simple text find with loop, faster than 100%

**Author:** mrjerryho
**Votes:** 13
**Link:** [https://leetcode.com/problems/index-pairs-of-a-string/solutions/304350/](https://leetcode.com/problems/index-pairs-of-a-string/solutions/304350/)

---

```class Solution:
    def indexPairs(self, text: str, words: List[str]) -> List[List[int]]:
        res = []
        for word in words:
            i = text.find(word)
            while i != -1:
                res.append((i, i+len(word)-1))
                i = text.find(word, i+1)
        res.sort()
        return [[i,j] for i,j in res]