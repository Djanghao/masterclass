# JS/TS Easy Solution 🚀🚀🚀

**Author:** Inayat_Ali
**Votes:** 4
**Link:** [https://leetcode.com/problems/image-smoother/solutions/4423241/](https://leetcode.com/problems/image-smoother/solutions/4423241/)

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
const imageSmoother = (img: number[][]): number[][] => {
    const m = img.length;
    const n = img[0].length;
    const result: number[][] = [];

    for (let i = 0; i < m; i++) {
        result[i] = [];
        for (let j = 0; j < n; j++) {
            const neighbors = [
                img[i - 1]?.[j - 1], img[i - 1]?.[j], img[i - 1]?.[j + 1],
                img[i]?.[j - 1], img[i]?.[j], img[i]?.[j + 1],
                img[i + 1]?.[j - 1], img[i + 1]?.[j], img[i + 1]?.[j + 1],
            ].filter(val => val !== undefined);
            const average = Math.floor(neighbors.reduce((acc, curr) => acc + curr, 0) / neighbors.length);
            result[i][j] = average;
        }
    }

    return result;
}

```