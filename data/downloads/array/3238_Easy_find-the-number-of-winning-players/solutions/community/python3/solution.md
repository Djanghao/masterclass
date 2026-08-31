# Python 3 || 2 lines, Counter  ||

**Author:** Spaulding_
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5580983/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5580983/)

---


```
class Solution:
    def winningPlayerCount(self, n: int, pick: List[List[int]]) -> int:

        ctr = Counter(map(tuple,pick))

        return len({player for (player,_), count in ctr.items() if count > player})
```
[https://leetcode.com/problems/find-the-number-of-winning-players/submissions/1343258032/](https://leetcode.com/problems/find-the-number-of-winning-players/submissions/1343258032/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(pick)`.