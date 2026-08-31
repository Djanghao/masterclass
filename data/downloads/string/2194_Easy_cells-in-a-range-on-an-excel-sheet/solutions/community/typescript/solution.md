# Simple Typescript Solution beats 80%

**Author:** sdarnadeem
**Votes:** 1
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/5129338/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/5129338/)

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
![Screenshot from 2024-05-08 14-31-19.png](./images/0.png)

# Code
```
function cellsInRange(s: string): string[] {
      const numOfRows = s.charCodeAt(3) - s.charCodeAt(0) + 1;
    const numOfColumns = Number(s[4]) - Number(s[1]) + 1;
    const startFrom = Number(s[1])
    const result : string[] = [];
    let currAlphCount = 0;
    let currAlp = s[0]
    for (let i = 0; i < numOfColumns * numOfRows; i++) {
        if (currAlphCount < numOfColumns) {
            result.push(`${currAlp}${startFrom + currAlphCount}`)
            currAlphCount++;

        } else {
            currAlp = String.fromCharCode(currAlp.charCodeAt(0) + 1)
            result.push(`${currAlp}${startFrom}`)
            currAlphCount = 1;

        }
    }
    return result;
};
```