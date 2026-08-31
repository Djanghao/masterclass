# [Tiktok OA] - Javascript -Sort by end and pick up from end

**Author:** djslim
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/3286886/](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/3286886/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Similar to https://leetcode.com/problems/non-overlapping-intervals/description/

# Approach
<!-- Describe your approach to solving the problem. -->
Sort by end and keep picking up from end as it's the best choice to have max overlap (by this others will reuse it) with following slots

# Complexity
- Time complexity: $$O(NLogN)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function(tasks) {
    const maxTimeSlot = tasks.map(el => el[1]+1)
    const timeSlots = new Array(Math.max(...maxTimeSlot)).fill(false)
    tasks.sort((a,b) => a[1] - b[1])

    for(const task of tasks) {
        let [start, end, duration] = task

        for(let i = start; i <= end; i++) {
            duration -= Number(timeSlots[i])
        }

        let time = end

        while(duration > 0) {
            if(!timeSlots[time]) {
                timeSlots[time] = true
                duration--
            }
            time--
        }
    }
    return timeSlots.reduce((a,b) => a + Number(b), 0)
};
```