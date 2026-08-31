# Typescript solution with O(n) Time Complexity

**Author:** sdarnadeem
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/5332571/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/5332571/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const map: Record<string, number> = {};
    let res = [];
    let count = 0;

    for (let i = 0; i < A.length; i++) {
         if (map[B[i]] === 1) {
            map[B[i]] = 2
        }

        if (map[A[i]] === 1) {
            map[A[i]] = 2
        }
        if (!map[A[i]]) {
            map[A[i]] = 1
        }

        if (!map[B[i]]) {
            map[B[i]] = 1
        }

       
        if (A[i] === B[i]) {
            count++;
            res.push(count)
            continue;
        }
        if (map[A[i]] === 2) count++;
        if (map[B[i]] === 2) count++;

        res.push(count)

    }
    return res;

};
```