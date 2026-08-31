# Python O(n)  modified from Shortest Word Distance

**Author:** dominicslw
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/1655605/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/1655605/)

---

```class Solution:
    def shortestWordDistance(self, wordsDict: List[str], word1: str, word2: str) -> int:
        ans = len(wordsDict)
        first = -1
        second = -1
        for idx,word in enumerate(wordsDict):
            if word==word1:
                prev = first# we use prev to record the last idx of same word
                first = idx
            if word==word2:
                if word != word1:
                    second = idx
                else:
                    second = prev
            if first !=-1 and second !=-1:
                ans = min(ans,abs(second-first))
        return ans
