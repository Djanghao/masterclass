# Python BFS faster than 97%

**Author:** bac2qh
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-empty-slots/solutions/3528625/](https://leetcode.com/problems/k-empty-slots/solutions/3528625/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- at the begining your have no light turned on and let's say that's equivalent to closest turned on light to the left at -math.inf and ... right at math.inf 
- now at day 0 you turn on light i, let's say that means you broke the previous [-math.inf, math.inf] to two segments, [-math.inf, i], [i+1, math.inf]
- every day you create another piece of segments and you can think it as a parent segment leading to two child segments 
- This then becomes a tree and you can traverse it with BFS for the shortest path (earilest day)

# Approach

some details
- when you are working on segment [left, right, day] and the light turned on that day is not within [left, right], keep this segment untouched 
- when you are working on a segment [left, right, day] and right - left < target distance, discard this segment 

# Complexity
- Time complexity: 
    - This tree as N levels with nodes incrementing by 1 each level 
    - sum([1, 2, 3, 4 .. .n]) = (1 + n) * n / 2 = O(n^2)

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: same as above 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def kEmptySlots(self, bulbs: List[int], k: int) -> int:
        Q = [[-math.inf, math.inf, 0]]
        while Q: 
            frontier = []
            for l, r, day in Q: 
                if day == len(bulbs) or r - l - 1 < k: 
                    continue 
                turn_on_index = bulbs[day] - 1
                if r - l - 1 == k:
                    return day 
                if turn_on_index <= l or turn_on_index >= r: 
                    frontier.append([l, r, day+1])
                else: 
                    frontier.append([l, turn_on_index, day+1])
                    frontier.append([turn_on_index, r, day+1])
            Q = frontier 
        return -1 
```