# [Python3] dp

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1446619/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1446619/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/84115397f703f3005c3ae0d5d759f4ac64f65de4) for solutions of weekly 257.
```
class Solution:
    def firstDayBeenInAllRooms(self, nextVisit: List[int]) -> int:
        odd = [0]
        even = [1]
        for i in range(1, len(nextVisit)): 
            odd.append((even[-1] + 1) % 1_000_000_007)
            even.append((2*odd[-1] - odd[nextVisit[i]] + 1) % 1_000_000_007)
        return odd[-1] 
```