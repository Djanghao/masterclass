# Simplest Typescript / Javascript - O(m * unpaintedIndexesLength)

**Author:** gourav_gunjan
**Votes:** 4
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/1833463/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/1833463/)

---

Created a solution with small hint. How do you directly move to empty interval?
Simple solution - Use a array, and set the end value for all the items you have painted.
We also use the benefit of javascript array. If the index is not yet populated, it is undefined by default, but doesnt throw any error. Also we need not get any max size. We can simply set value of any index in javascript.

For given test case -  `[[1,4],[4,7],[5,8]]`
* 1st Pass
Array becomes`[undefined,4,4,4]`
* 2nd Pass
Array becomes `[undefined,4,4,4,7,7,7]`
* 3rd pass
Array becomes `[undefined,4,4,4,7,7,7,8]` <- Notice that when pointer would come to 5, it will directly move to correct index.

### Solution
```
function amountPainted(paint: number[][]): number[] {
    let paintedMap = [];
    const res: number[] = [];
    for (let [s, e] of paint) {
        let c = 0;
        for (let p = s; p < e; p++) {
            if (paintedMap[p] === undefined) {
                c++;
                paintedMap[p] = e;
            } else {
				// directly move to next index
                p = paintedMap[p] - 1;
            }
        }
        res.push(c);
    }
    return res;
};
```