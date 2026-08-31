# JS - Simple solution with two pointers.

**Author:** MikeSparrow
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/3003390/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/3003390/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Declare `max` and `prev` variable.

Loop over the array, if current turget isn't `0` and both points aren't the same then check the max distance between.

Make the current pointer the prev pointer.

```
var captureForts = function(forts) {
    let max = 0, prev = 0;
    forts.forEach((fort, idx) => {
        if (fort) {
            if (forts[prev] &&  fort != forts[prev]) {
                max = Math.max(max, (idx - prev - 1))
            }
            prev = idx;
        }
    })
    return max;
};
```