# Python two deques

**Author:** hongta
**Votes:** 28
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3298114/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3298114/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use two deques to store all people entering and exiting before current time. Use a `prev_state` to record the previous state. Update `prev_state` , `cur_time` and `ans` once a person passes the door.

We need only two previous states, i.e. 0 and 1, because if the door was not used, it can be treated as someone exited the door. If `prev_state == 0` and no one uses the door at `cur_time`, we update `prev_state` to 1.

# Code
```
class Solution:
    def timeTaken(self, arrival: List[int], state: List[int]) -> List[int]:
        enter_pool, exit_pool = deque(),deque()
        cur_time = 0
        prev_state = 1
        i = 0
        ans = [0 for _ in range(len(arrival))]
        while i < len(arrival) or enter_pool or exit_pool:
            while i < len(arrival) and arrival[i] <= cur_time:
                if state[i] == 0:
                    enter_pool.append(i)
                else:
                    exit_pool.append(i)
                i += 1
            if prev_state == 1:
                if exit_pool:
                    ans[exit_pool.popleft()] = cur_time
                elif enter_pool:
                    ans[enter_pool.popleft()] = cur_time
                    prev_state = 0
            else:
                if enter_pool:
                    ans[enter_pool.popleft()] = cur_time
                elif exit_pool:
                    ans[exit_pool.popleft()] = cur_time
                    prev_state = 1
                else:
                    prev_state = 1
            cur_time += 1
        return ans
```