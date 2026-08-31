# typescript, easy to understand - w/ comments

**Author:** carti
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/853089/](https://leetcode.com/problems/build-an-array-with-stack-operations/solutions/853089/)

---

```
function buildArray(target: number[], n: number): string[] {
    // result
    const res: string[] = [];
    // pointer for target numbers (so we know which ones we need still)
    let ptr = 0;
    // iterate from 1 to n
    for (let i = 1; i < n + 1; i++) {
        // check if this is the number we need
        if (target[ptr] === i) {
            res.push('Push');
            // check if ptr reached end of target, and increment
            if (++ptr === target.length) return res;
        } else {
            // we didn't need this number, so simulate a Push then Pop
            res.push('Push', 'Pop');
        }
    }

    return res;
}
```
