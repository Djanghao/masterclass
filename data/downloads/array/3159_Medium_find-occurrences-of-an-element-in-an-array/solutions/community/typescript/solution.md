# Simple typescript solution beats 98% users

**Author:** sdarnadeem
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5368063/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5368063/)

---

![image.png](./images/0.png)


# Code
```
function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
    let occOfX = [];

    // traverse the array and get the indexes of the occurance of the number x;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === x) occOfX.push(i)
    }
    let res = [];

    // traverse the queries array
    for (let query of queries) {
        let occ = occOfX[query - 1];
        // if the element exits push index
        if (occ || occ === 0) res.push(occ)
        // otherwise push -1
        else res.push(-1)
    }
    return res;

};
```