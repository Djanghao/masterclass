# [Python3] simulation

**Author:** ye15
**Votes:** 25
**Link:** [https://leetcode.com/problems/watering-plants/solutions/1589030/](https://leetcode.com/problems/watering-plants/solutions/1589030/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/b5ca73e6f7d317e9f30f7e67a499b0bf489ec019) for the solutions of weekly 268. 
```
class Solution:
    def wateringPlants(self, plants: List[int], capacity: int) -> int:
        ans = 0
        can = capacity
        for i, x in enumerate(plants): 
            if can < x: 
                ans += 2*i
                can = capacity
            ans += 1
            can -= x
        return ans 
```