# Python 3 | Clean, Simple Stack | Explanation

**Author:** idontknoooo
**Votes:** 28
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/863039/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/863039/)

---

### Explanation
- Split a function call to 2 different type of states
	- Before nested call was made
	- After nested call was made
- Record time spent on these 2 types of states
- e.g. for `n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]`
	- Initially stack is empty, then it will record `[[0, 0]]` meaning function `0` start at timestamp `0`
	- Then nested call happens, we record time spent on function `0` in `ans`, then append to stack
		- record time spent before nested call `ans[s[-1][0]] += timestamp - s[-1][1]`
	- now stack has `[[0, 0], [1, 2]]`
	- when a `end` is met, pop top of stack and record time as `timestamp - s.pop()[1] + 1`
	- now stack is back to `[[0, 0]]`, but before we end this iteration, we need to update the start time of this record
		- because time spent on it before nested call is recorded, so now it's like a new start
		- update start time: `s[-1][1] = timestamp+1`
### Implementation
```
class Solution:
    def exclusiveTime(self, n: int, logs: List[str]) -> List[int]:
        helper = lambda log: (int(log[0]), log[1], int(log[2])) # to covert id and time to integer
        logs = [helper(log.split(':')) for log in logs]         # convert [string] to [(,,)]
        ans, s = [0] * n, []                                    # initialize answer and stack
        for (i, status, timestamp) in logs:                     # for each record
            if status == 'start':                               # if it's start
                if s: ans[s[-1][0]] += timestamp - s[-1][1]     # if s is not empty, update time spent on previous id (s[-1][0])
                s.append([i, timestamp])                        # then add to top of stack
            else:                                               # if it's end
                ans[i] += timestamp - s.pop()[1] + 1            # update time spend on `i`
                if s: s[-1][1] = timestamp+1                    # if s is not empty, udpate start time of previous id; 
        return ans
```