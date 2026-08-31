# Python 3   ||   9 lines,  map & pairwise   ||   T/S: 90% / 80%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4383184/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/solutions/4383184/)

---

Pretty much the typical solution, but initially mapping the characters in word to their `ord` before executing the algorithm.
```
class Solution:
    def removeAlmostEqualCharacters(self, word: str) -> int:
        
        word = map(ord,word)
        adj_eq, ans = False, 0

        for a,b in pairwise(word):
            if adj_eq or abs(a-b) > 1:
                adj_eq = False
                continue

            adj_eq = True
            ans+= 1
        
        return ans
```
[https://leetcode.com/problems/remove-adjacent-almost-equal-characters/submissions/1295272867/](https://leetcode.com/problems/remove-adjacent-almost-equal-characters/submissions/1295272867/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(word)`.



