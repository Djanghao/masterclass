# Python 3 | Sweep Line, Sorting | Explanation

**Author:** idontknoooo
**Votes:** 36
**Link:** [https://leetcode.com/problems/brightest-position-on-street/solutions/1494223/](https://leetcode.com/problems/brightest-position-on-street/solutions/1494223/)

---

### Explanation
- Sweep line probelm. Try [253. Meeting Room II](https://leetcode.com/problems/meeting-rooms-ii/) if you haven't.
- The **brightest** will be on end of a light's coverage. We only need to consider the end (left & right).
- Procedures:
	- Take a dictionary
		- For left edge index, `+1` on `index`, meaning starting from this `index`, light starts covering
		- For right edge index, `-1` on `index + 1`, because right end is also covered by current light, the next index (`index+1`) won't be covered.
	- Iterate the sorted dictionary entries
	- Keep counting current covered lights and save the brightest (with largest count `cur`) light
- Time Complexity: `O(NlogN)` because of sorting
- Space Complexity: `O(N)` for saving ends of each light
### Implementation
```
class Solution:
    def brightestPosition(self, lights: List[List[int]]) -> int:
        d = collections.defaultdict(int)
        for i, dis in lights:
            d[i-dis] += 1                             # index at left-end starts covering
            d[i+dis+1] -= 1                           # next index of right-end stops covering
        cur, max_idx, max_val = 0, -1, -sys.maxsize
        for idx, val in sorted(d.items()):            # sort by key would be sufficient
            cur += val
            if cur > max_val:                         # count maximum brightness
                max_val, max_idx = cur, idx
        return max_idx
```