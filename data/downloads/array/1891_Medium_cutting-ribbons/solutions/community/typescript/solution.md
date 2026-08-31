# 100% | Binary Search | Time: O(CN) | Space: O(1)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/cutting-ribbons/solutions/6134313/](https://leetcode.com/problems/cutting-ribbons/solutions/6134313/)

---

# Table of Contents

[toc]

# Binary Search

- Time complexity: $$O(CN)$$

Where $C = \\lceil\\log_2(\	ext{maxValue} - \	ext{minValue})\\rceil = \\lceil\\log_2(1e5 )\\rceil = \\lceil16.61\\rceil = 17$

- Space complexity: $$O(1)$$

[JavaScript](https://leetcode.com/problems/cutting-ribbons/submissions/1475708204/)

![JavaScript](./images/0.png)

```typescript []
const MIN_VALUE = 0;
const MAX_VALUE = 1e5;

function maxLength(ribbons: number[], k: number): number {
    const N = ribbons.length;
    if (N < 2) {
        return (N < 1) ? 0 : 0 | (ribbons[0] / k);
    }

    let min = MIN_VALUE;
    let max = MAX_VALUE;
    do {
        const mid = min + ((max - min) >> 1);
        let sum = 0;
        for (const ribbon of ribbons) {
            sum += Math.floor(ribbon / mid);
        }
        if (sum < k) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    } while (min <= max);

    return max;
};
```

```javascript []
const MIN_VALUE = 0;
const MAX_VALUE = 1e5;

/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
function maxLength(ribbons, k) {
    const N = ribbons.length;
    if (N < 2) {
        return (N < 1) ? 0 : 0 | (ribbons[0] / k);
    }

    let min = MIN_VALUE;
    let max = MAX_VALUE;
    do {
        const mid = min + ((max - min) >> 1);
        let sum = 0;
        for (const ribbon of ribbons) {
            sum += Math.floor(ribbon / mid);
        }
        if (sum < k) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    } while (min <= max);

    return max;
};
```