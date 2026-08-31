# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/5733871/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/5733871/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public int hardestWorker(int n, int[][] logs) {
    int maxDuration = 0;
    int employeeId = Integer.MAX_VALUE;
    int previousEndTime = 0;

    for (int[] log : logs) {
        int id = log[0];
        int leaveTime = log[1];
        int duration = leaveTime - previousEndTime;

        if (duration > maxDuration) {
            maxDuration = duration;
            employeeId = id;
        } else if (duration == maxDuration && id < employeeId) {
            employeeId = id;
        }

        previousEndTime = leaveTime;
    }

    return employeeId;
}
```
```javascript []
var hardestWorker = function(n, logs) {
    let maxDuration = 0;
    let employeeId = Infinity;
    let previousEndTime = 0;

    for (let i = 0; i < logs.length; i++) {
        let id = logs[i][0];
        let leaveTime = logs[i][1];
        let duration = leaveTime - previousEndTime;

        if (duration > maxDuration) {
            maxDuration = duration;
            employeeId = id;
        } else if (duration === maxDuration && id < employeeId) {
            employeeId = id;
        }

        previousEndTime = leaveTime;
    }

    return employeeId;
};
```
```typescript []
function hardestWorker(n: number, logs: number[][]): number {
    let maxDuration = 0;
    let employeeId = Number.MAX_VALUE;
    let previousEndTime = 0;

    for (let i = 0; i < logs.length; i++) {
        const id = logs[i][0];
        const leaveTime = logs[i][1];
        const duration = leaveTime - previousEndTime;

        if (duration > maxDuration) {
            maxDuration = duration;
            employeeId = id;
        } else if (duration === maxDuration && id < employeeId) {
            employeeId = id;
        }

        previousEndTime = leaveTime;
    }

    return employeeId;
};
```