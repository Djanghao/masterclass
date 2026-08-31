# 🔥 [Python 3] 2 solutions: Heap and Sort

**Author:** yourick
**Votes:** 26
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/3572770/](https://leetcode.com/problems/relative-ranks/solutions/3572770/)

---

# Sorting:
```
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        rank = ["Gold Medal", "Silver Medal", "Bronze Medal"] + list(map(str, range(4, len(score) + 1)))
        place = sorted(score, reverse = True)
        d = dict(zip(place, rank))

        return [d.get(s) for s in score]

```
# Heap:
```
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        maxHeap = []
        for i, s in enumerate(score):
            heappush(maxHeap, (-s, i))
        
        res = [0] * len(score)
        place = 1
        while maxHeap:
            pos = heappop(maxHeap)[1]
            if place > 3:
                rank = str(place)
            elif place == 1:
                rank = "Gold Medal"
            elif place == 2:
                rank = "Silver Medal"
            elif place == 3:
                rank = "Bronze Medal"
            
            res[pos] = rank
            place +=1
            
        return res

```