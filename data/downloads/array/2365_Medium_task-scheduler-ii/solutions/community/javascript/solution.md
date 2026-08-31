# Array Solution EASY TO READ IN 7 lines [Typescript] Time: O(N) Space: O(N)

**Author:** lolimdumbwataboutu
**Votes:** 1
**Link:** [https://leetcode.com/problems/task-scheduler-ii/solutions/4349573/](https://leetcode.com/problems/task-scheduler-ii/solutions/4349573/)

---

# Intuition

I found the other guy's typescript solution to be absolutely horrendous to read so here's a better solution for y'all.

# Approach

Pretty straight forward at each step:
1. increment the timer. If the buffer is greater, use that value instead
2. set the next buffer value for that task to the current time + space offset

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function taskSchedulerII(tasks: number[], space: number): number {
    const buffer = [];
    let time = 0;
    for (const task of tasks) {
        time = Math.max(time, buffer[task] ?? 0) + 1;
        buffer[task] = time + space;
    }
    return time;
};
```