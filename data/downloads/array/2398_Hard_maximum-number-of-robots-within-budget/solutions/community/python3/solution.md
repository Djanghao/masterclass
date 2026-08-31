# Sliding window + monothonic queue - O(n)

**Author:** vladyslav_strilkov
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/4781933/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/4781933/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a typical sliding window problem with monothonic queue approach on top

# Approach
<!-- Describe your approach to solving the problem. -->
- Iterate through array and try to find the best valid length using sliding window approach
- Keep max element in monothonically decreasing queue 
- Every time the budget is overreached move your left pointer. Also popleft() from the beginning of queue in case if left index is equal
- Calclate max best length


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) - monothonic queue

# Code
```
class Solution:
    def maximumRobots(self, chargeTimes: List[int], runningCosts: List[int], budget: int) -> int:
        queue = deque()
        left = best_length = curr = 0

        for right in range(len(chargeTimes)):
        	curr += runningCosts[right]
        	while queue and chargeTimes[queue[-1]] < chargeTimes[right]:
        		queue.pop()

        	queue.append(right)

        	while queue and (chargeTimes[queue[0]] + (right - left + 1) * curr) > budget:
        		if queue[0] == left:
        			queue.popleft()
        		curr -= runningCosts[left]
        		left += 1

        	best_length = max(best_length, right - left + 1)

        return best_length
```