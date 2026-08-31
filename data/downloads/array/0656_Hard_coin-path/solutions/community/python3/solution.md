# True O(N) solution, beats 100%, Python

**Author:** kaathewise
**Votes:** 1
**Link:** [https://leetcode.com/problems/coin-path/solutions/3311054/](https://leetcode.com/problems/coin-path/solutions/3311054/)

---

# Intuition
Let's forget for a second about the lexicographical order and try to answer a simpler question: **how much does it cost to get to the end?**

It's a classical use-case for a monotonic queue. We can go from left to right and fill an array `cost[i]`, with the minimal cost of getting to index `i`, and `cost[n-1]` will be the answer. By definition, `cost[i] = min(cost[i-maxJump:i]) + coins[i]`, which reduces this problem to a [sliding window minimum](https://www.nayuki.io/page/sliding-window-minimum-maximum-algorithm) problem.

Now the tricky question is how to also output the *correct* path with the minimal cost. I am not sure if it is possible as a simple modification of the above algorithm, but we can do this instead:

1. Calculate the `cost[i]` of getting from index `i` to the end, by applying the sliding window minimum from right to left.
2. Going from left to right, jump to the earliest index that has minimal cost of reaching the end.

# Complexity
- Time complexity: *O(n)*

- Space complexity: *O(n)*

# Code
```
class Solution:
    def cheapestJump(self, coins: List[int], maxJump: int) -> List[int]:
        if coins[-1] == -1: return []
        n = len(coins)

        # 1. We will go from right to left, calculating cost of getting to the end.
        cost = [inf]*n
        cost[-1] = 0

        # Monotonic queue for indices that we've seen so far.
        # From head to tail indices are decreasing, and the cost of getting from
        # them to the end is increasing.
        queue = deque([n-1])
        for i in range(n-2, -1, -1):
            if coins[i] == -1: continue
            # Remove indices that are too far
            while queue and queue[0] > i + maxJump:
                queue.popleft()
            # No indices left, means there was a large gap of -1s
            if not queue: return []
            # We should always jump to the head of the queue, because it has lowest cost
            cost[i] = coins[i] + cost[queue[0]]
            # Remove items from the tail that are worse than current,
            # i.e. they have higher cost and longer to go.
            while queue and cost[queue[-1]] >= cost[i]:
                queue.pop()
            queue.append(i)
        min_cost = cost[0]
        if min_cost == inf: return []

        # 2. Now that we know the cost of getting to the end from each index,
        # we should simply pick the first index that has the optimal cost each time.
        ans = []
        for i in range(n):
            if cost[i] == min_cost:
                ans.append(i+1)
                min_cost -= coins[i]
        return ans
        
        
        
```