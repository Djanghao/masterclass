# Python 3 | Sort, Greedy, Two Pointer | Explanations

**Author:** idontknoooo
**Votes:** 5
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/838928/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/838928/)

---

### Explanation
- Key Idea: since we can push boxes from both sides, the maximum box height we can push to warehouse `i` is decided by `max(min(rooms_on_the_left_side_of_i), min(rooms_on_the_right_side_of_i))`
- Then we do 2 for loops to find out the current maximum based on above logic
	- One loop from left to right, get the minimum
	- The other loop from right to left, get the minimum
- Then sort `height` and `boxes` reversely (large to small)
- Using two pointer & greedy, we can easily find out how many boxes can fit
	- Greedly, if a box can fit in warehouse, we count it as fit, then move on to the next box and room
	- Otherwise, move to next box (smaller than before) and check if it will fit the current room
### Implementation
```
class Solution:
    def maxBoxesInWarehouse(self, boxes: List[int], warehouse: List[int]) -> int:
        height, cur_min = [], sys.maxsize
        for room in warehouse:
            cur_min = min(cur_min, room)
            height.append(cur_min)
        cur_min, n = sys.maxsize, len(warehouse)
        for i, room in enumerate(warehouse[::-1]):
            cur_min = min(cur_min, room)
            height[n-1-i] = max(height[n-1-i], cur_min)
            
        height.sort(reverse=True)    
        boxes.sort(reverse=True)
        m, i, j, ans = len(boxes), 0, 0, 0
        while i < m and j < n:
            if height[j] >= boxes[i]: i, j, ans = i+1, j+1, ans+1
            else: i += 1
        return ans
```