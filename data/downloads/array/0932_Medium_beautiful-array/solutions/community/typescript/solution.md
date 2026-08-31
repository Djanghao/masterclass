# TS solution , divide and conquer

**Author:** shuvenduoffline
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-array/solutions/2116653/](https://leetcode.com/problems/beautiful-array/solutions/2116653/)

---

```
function beautifulArray(n: number): number[] {
        if(n === 1) return [1];
        return beautifulArray(Math.floor(n/2) + Math.floor(n%2))
            .map((num : number) => 2 * num -1)
            .concat(beautifulArray(Math.floor(n/2)).map((num : number) => 2 * num));
};
```