# TypeScript || Greedy

**Author:** YouSam84
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3985626/](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3985626/)

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
```
function minTaps(n: number, ranges: number[]): number {
    const maxTapEnd: number[] = new Array(n + 1).fill(0);

    for (let i = 0; i < ranges.length; i++) {
        const start = Math.max(0, i - ranges[i]);
        const end = i + ranges[i];

        maxTapEnd[start] = Math.max(maxTapEnd[start], end);
    }

    let currTapEnd = maxTapEnd[0];
    let nextTapEnd = -1;
    let taps = 1;

    if (currTapEnd === 0)
        return -1;

    if (currTapEnd >= n)
        return taps;

    for (let i = 1; i <= n; i++) {
        if (nextTapEnd < maxTapEnd[i] && maxTapEnd[i] > currTapEnd && i <= currTapEnd)
            nextTapEnd = maxTapEnd[i];

        if (i === currTapEnd && nextTapEnd === -1)
            return -1;

        if (i === currTapEnd) {
            taps++;
            currTapEnd = nextTapEnd;
            nextTapEnd = -1;
        }

        if (currTapEnd >= n)
            return taps;
    }

    return -1;
}
```