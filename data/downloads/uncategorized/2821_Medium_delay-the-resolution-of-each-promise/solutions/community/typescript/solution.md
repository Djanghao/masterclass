# simple solution

**Author:** Lmontana
**Votes:** 0
**Link:** [https://leetcode.com/problems/delay-the-resolution-of-each-promise/solutions/4310103/](https://leetcode.com/problems/delay-the-resolution-of-each-promise/solutions/4310103/)

---

# Approach
Since we needed to return a "transformation"of the original functions I used map to turn every function into a function that returns a promise that will resolve after x time using a timeout.


# Code
```
type Fn = () => Promise<any>

function delayAll(functions: Fn[], ms: number): Fn[] {
    return functions.map((elem) => () => new Promise((resolve) => {
        setTimeout(() => {
            resolve(elem())
        }, ms);
    }))
};
```