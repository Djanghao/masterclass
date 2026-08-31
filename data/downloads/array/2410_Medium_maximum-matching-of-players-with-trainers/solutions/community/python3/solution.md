# python 3   ||  8 lines, heap   ||   T/S: 82% / 84%

**Author:** Spaulding_
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/2594478/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/2594478/)

---

```
class Solution:
    def matchPlayersAndTrainers(self, players:  List[int], 
                                      trainers: List[int]) -> int:
        ans = 0
        trainers.sort()
        heapify(players)

        for t in trainers:

            if players and players[0] <= t:
                heappop(players)

                ans+= 1

        return ans
```
[https://leetcode.com/problems/maximum-matching-of-players-with-trainers/submissions/1288419118/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/submissions/1288419118/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*) / , in which *N* ~ `len(players)`.