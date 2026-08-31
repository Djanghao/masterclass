# [Python3] freq table

**Author:** ye15
**Votes:** 5
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/1500343/](https://leetcode.com/problems/stone-game-ix/solutions/1500343/)

---

**Intuition**
Here, the specific numbers don't matter. Only the modulos do. 
In order for Alice to win, the sequence would be like 
1) 1(12)(12)...(12)2 with even number of 0's between first 1 and final 2
2) 1(12)(12)...(12)11 with odd number of 0's between first 1 and final 1

where 1's and 2's are interchangable due to symmetry. So the strategy is 
1) if there are even number of 0's, Alice would choose 1 or 2 whoever is less or equal frequent as long as they both exist. Without loss of generality, let's say 1 is less frequent. In this case, it is guranteed to be Bob's turn to place the last number 2 when they run out of 1's. 
2) if there are odd number of 0's, Alice would choose 1 or 2 whoever is more frequent. Let's say 1 is more frequent in the input. In this case, Alice need three extra 1's to win. Besides, it is not difficult to figure out that as long as there are three (or more) extra 1's Alice will win. 

```
class Solution:
    def stoneGameIX(self, stones: List[int]) -> bool:
        freq = defaultdict(int)
        for x in stones: freq[x % 3] += 1
        
        if freq[0]%2 == 0: return freq[1] and freq[2]
        return abs(freq[1] - freq[2]) >= 3
```