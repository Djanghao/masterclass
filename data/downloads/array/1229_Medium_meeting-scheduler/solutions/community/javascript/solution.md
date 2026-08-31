# JavaScript human readable solution (two pointers)

**Author:** ChaoWan_2021
**Votes:** 7
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/541999/](https://leetcode.com/problems/meeting-scheduler/solutions/541999/)

---

```
var minAvailableDuration = function(slots1, slots2, duration) {
    const sortFunc = (a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
    slots1.sort(sortFunc);
    slots2.sort(sortFunc);
    let i = 0, j = 0;
    while(i < slots1.length && j < slots2.length) {
        const firstStart = slots1[i][0], secondStart = slots2[j][0], firstEnd = slots1[i][1], secondEnd = slots2[j][1];
        const intersectStart = Math.max(firstStart, secondStart);
        const intersectEnd = Math.min(firstEnd, secondEnd);
        if(intersectStart + duration <= intersectEnd) {
            return [intersectStart, intersectStart + duration];
        } else if(firstEnd < secondEnd) {
            i++;
        } else {
            j++;
        }
    }
    return [];
};
```