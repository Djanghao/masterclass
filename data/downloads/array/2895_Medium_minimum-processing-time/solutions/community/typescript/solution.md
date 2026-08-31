# Sort | easy to understand

**Author:** VasliSaidmuradov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-processing-time/solutions/4152835/](https://leetcode.com/problems/minimum-processing-time/solutions/4152835/)

---

# Complexity
- Time complexity: O(nlog(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minProcessingTime(processorTime: number[], tasks: number[]): number {
    processorTime.sort((a, b) => a - b);
    tasks.sort((a, b) => b - a);

    const n: number = processorTime.length;
    const m: number = tasks.length;

    let res: number = 0;
    let k: number = 0;

    for (let i = 0; i < m; i += 4) {
        const j: number = i;
        const p: number = processorTime[k];
        res = Math.max(res, p + tasks[i], p + tasks[i + 1], p + tasks[i + 2], p + tasks[i + 3]);
        k++;
    }

    return res;
};
```