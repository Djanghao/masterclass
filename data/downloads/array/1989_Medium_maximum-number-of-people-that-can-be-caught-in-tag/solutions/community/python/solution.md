# Python 3 | Greedy, Symmetrical One Pass, O(N) time, O(1) space | Explanation

**Author:** idontknoooo
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/1439814/](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/solutions/1439814/)

---

### Intuition
When seeing `dist` being there, I know it has something to do with eliminating the outdated elements. It can surely be solved using a `deque`, but I decided to give it a second thought and it turns out that I found something different.

The code turned out to be highly symmetrical and easy to understand.

### Explanation
- There are only `0` and `1` in the `team`, if `0` is not seen, then you must be seeing `1`, vice versa
- Based on above knowledge, we will approach the question with a __*Greedy*__ way, that is:
	- Always catch the earliest possible __*not_it*__ with the earliest possible __*it*__
- For example:
	- `team = [1,0,0,0,0,1,1,0,0,0,1], dist = 2`
	- Catch *not_it* at `i = 1` with _it_ at `i = 0`
	- Catch *not_it* at `i = 3` with _it_ at `i = 5`
	- Catch *not_it* at `i = 4` with _it_ at `i = 6`
	- Catch *not_it* at `i = 8` with _it_ at `i = 10`
	- Why not catch *not_it* at `i = 7` with *it* at `i = 10`? Because `dist = 2`.
- How to eliminate the outdated *it* or *not_it*?
	- Sure, an intuitive way is to use `double-ended queue (deque)`, but in this scenario, it's a bit overkill
	- Because here we care about _**how many**_ rather than _**which one**_, so we just need to make sure the count of *it* or *not_it* are in the range of `[0, dist]` (inclusive)
- Time Complexity: `O(N)`
- Space Complexity: `O(1)`
### Implementation
```
class Solution:
    def catchMaximumAmountofPeople(self, team: List[int], dist: int) -> int:
        not_it = it = ans = 0
        for _, is_it in enumerate(team):
            if is_it:                   # if is `it`
                if not_it > 0:          #     if there are some non-caught `not_it`, try catch it
                    not_it -= 1
                    ans += 1            #     and count people caught
                else:
                    it += 1             #     if there are no non-caught `not_it`, increase count of `it`
            else:                       # it not `it`
                if it > 0:              #     if there are enough "catch quota" leftover, use them (catch `not_it` before previous index)
                    it -= 1 
                    ans += 1            #     decrease count of `it` and count people caught
                else:                   
                    not_it += 1         #     if there are no quota to catch `not_it`, increase count of `not_it`
            not_it = min(not_it, dist)  # eliminate outdated `not_it` by limiting its count under `dist`
            it = min(it, dist)          # eliminate outdated `it` by limiting its count under `dist`
        return ans
```