# TS JS solution with description

**Author:** tkachev0927
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/4300917/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/4300917/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Lets create map from first array in matrix because we need to find smollest common and it must be in first array in matrix.

Second feature will be comporison with index in cycle. It give us fact that it was found in previous rows. And we stop cycle when found item mat.length times


# Code
```
function smallestCommonElement(mat: number[][]): number {
    const firstRow: number[] = mat[0];
    const numMap: { [key: number]: number } = firstRow.reduce((acc, n) => (acc[n] = 1, acc), {});
    
    for(let i = 1; i < mat.length; i++) {
        const row = mat[i];
        for(const item of row) {
            const isItemInPreviousRows: boolean = numMap[item] === i;
            if (isItemInPreviousRows) numMap[item]++;
            const isFoundInAllRows = numMap[item] === mat.length;
            if (isFoundInAllRows) return item;
        }
    }

    return -1;
};
```