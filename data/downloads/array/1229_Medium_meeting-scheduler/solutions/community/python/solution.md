# Python 3: create intersections, find suitable. Approach suitable for novice users

**Author:** michaelkareev
**Votes:** 2
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/1182534/](https://leetcode.com/problems/meeting-scheduler/solutions/1182534/)

---

**Idea**:
Instead of solving the problem in one step, it is easier to solve it in two.
1. Let's create a list of lists ```candidates``` that will contain intersections of ```slots1``` and ```slots2```.
2. Let's iterate over this list and see if there is an intersection wide enough to fit our ```duration```.

How can we build ```candidates```?
Initialize two pointers ```a``` and ```b``` to process ```slots1``` and ```slots2```.
An intersection is defined by the max starting point and by the min ending point.
Then move pointers accordingly.

Finally check every element in ```candidates```.
```

def minAvailableDuration(slots1, slots2, duration):
    if not slots1 or not slots2: return []
    slots1 = sorted(slots1, key = lambda x:x[0])
    slots2 = sorted(slots2, key = lambda x:x[0])
    candidates, res = [], []
    a, b = 0, 0
    while a < len(slots1) and b < len(slots2):
        st = max(slots1[a][0], slots2[b][0])
        end = min(slots1[a][1], slots2[b][1])
        if st <= end:
            candidates.append([st, end])
        if slots1[a][1] < slots2[b][1]:
            a += 1
        else:
            b += 1
    if len(candidates) == 0:
        return res
    for candidate in candidates:
        if candidate[1] - candidate[0] >= duration:
            res.append(candidate[0])
            res.append(candidate[0] + duration)
            break
    return res
```