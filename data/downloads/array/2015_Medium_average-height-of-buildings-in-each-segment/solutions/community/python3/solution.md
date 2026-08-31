# Python 3 | Clean, Sweep Line, Sorting, O(NlogN) | Explanation

**Author:** idontknoooo
**Votes:** 3
**Link:** [https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/1482095/](https://leetcode.com/problems/average-height-of-buildings-in-each-segment/solutions/1482095/)

---

### Explanation
- This question is a variation of the typical `sweep line` question like [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/).
- I would recommend to try out [253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/solution/) first, as the intuition of my solution is coming from the second official solution of it.
- Please see more explanation with the code comments below
- Time: `O(NlogN)` because of sorting
- Space: `O(N)` due to the use of `entries`
### Implementation
```
class Solution:
    def averageHeightOfBuildings(self, buildings: List[List[int]]) -> List[List[int]]:
        entries = []
        for s, e, h in buildings:                                # sweep line build
            entries.append((s, h))                               # positive height `h` means starting block of a building
            entries.append((e, -h))                              # negative height `-h` means ending block of a building
        entries.sort()                                           # sort
        entries.append([0, 0])                                   # add a dummy last node for edge case
        n, ans = len(entries), []
        prev, prev_idx = None, None                              # prev: previous average, prev_idx: lower bound index with same average
        i = cur = cnt = 0                                        # i: index of `entries`, cur: prefix sum to `i`, cnt: number of buildings
        while i < n-1:
            while i < n-1 and entries[i][0] == entries[i+1][0]:  # keep reading info at the same index
                idx, h = entries[i]
                cnt += 1 if h > 0 else -1                        # cnt number of building
                cur += h                                         # prefix sum
                i += 1
            else:                                                # always read one step when either (after while loop) or (never going in the while loop)
                idx, h = entries[i]
                cnt += 1 if h > 0 else -1
                cur += h
                i += 1
            if not cnt:                                          # cnt can be `0` when leaving all visited building, e.g. [[1,2,1],[5,6,1]]
                ans.append([prev_idx, idx, prev])                # thus, we will append segment here
                prev = prev_idx = None                           # since we will be starting a new segment, we need to set `prev` and `prev_idx` to None, like the initial condition
                continue                                         # no need going any further when `cnt == 0`
            avg = cur // cnt                                     # calculate average 
            if prev != avg:                                      # when prev != avg, meaning building height differs, we need to record a segment
                if prev:                                         # only if `prev` is not None, to handle scenarios like `prev = None, avg = 1`
                    ans.append([prev_idx, idx, prev])
                prev, prev_idx = avg, idx                        # update `prev` and `prev_idx`
        return ans            
```