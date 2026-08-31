# Python-well explained & simple logic-O(nlogn)- greedy and heap

**Author:** since2020
**Votes:** 35
**Link:** [https://leetcode.com/problems/avoid-flood-in-the-city/solutions/697950/](https://leetcode.com/problems/avoid-flood-in-the-city/solutions/697950/)

---

Variables:
1. ```dic``` stores the raining day for each lake in ascending order.
2. ```to_empty``` is a Min-heap and records the lakes that are full and sorted in **urgency** order. Notably, lake ```i``` has the highest **urgency** means that lake ```i``` is currently full and will be rained in the most recent future among all other full lakes.
3. ```full``` is a HashSet used to record the full lakes for efficient queries. ```lake in full``` could be replaced by ```lake in to_empty``` yet the time complexity is ```O(1)``` vs. ```O(n)```.

Logics:
We dry lakes in the order of **urgency** - Greedy.
Iterating through days, when day ```i``` is raining on lake ```lake```, if ```lake``` is already full, simply return ```[]```; else, push the next raining day for ```lake``` to ```to_empty``` to queue it for drying.
When day ```i``` is sunny, dry the most **urgent** lake referring to ```to_empty```. Remember to remove it from ```full```.

Python code is as follows:
```
class Solution:
    def avoidFlood(self, rains: List[int]) -> List[int]:
        dic = collections.defaultdict(list)
        ret = [-1] * len(rains)
        to_empty = [] # index
        full = set([])
        for day,lake in enumerate(rains):
            dic[lake].append(day)
        
        for i in range(len(rains)):
            lake = rains[i]
            if lake:
                if lake in full:
                    return []
                full.add(lake)
                dic[lake].pop(0)
                if dic[lake]:
                    heapq.heappush(to_empty,dic[lake][0])
            else:
                if to_empty:
                    ret[i] = rains[heapq.heappop(to_empty)]
                    full.remove(ret[i])
                else:
                    ret[i] = 1
        return ret
```

Or we can get rid of ```full``` and take advantage of ```dic```, not big difference tho.
```
class Solution:
    def avoidFlood(self, rains: List[int]) -> List[int]:
        dic = collections.defaultdict(list)
        ret = [-1] * len(rains)
        to_empty = [] # index
        
        for day,lake in enumerate(rains):
            dic[lake].append(day)
        
        for i in range(len(rains)):
            lake = rains[i]
            if lake:
                if dic[lake] and dic[lake][0] < i:
                    return []
                if dic[lake] and len(dic[lake])>1:
                    heapq.heappush(to_empty,dic[lake][1])
            else:
                if to_empty:
                    ret[i] = rains[heapq.heappop(to_empty)]
                    dic[ret[i]].pop(0)
                else:
                    ret[i] = 1
        return ret
```