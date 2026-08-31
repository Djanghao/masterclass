# Beats 100% of TypeScript users in Memory

**Author:** Moinketroa
**Votes:** 2
**Link:** [https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/solutions/4475537/](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/solutions/4475537/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I'm not using a counter to decide whether all the Promises are resolved or not. Instead I'm comparing my ```functionsResults``` array with the input ```functions``` array.
The problem is that comparing the length will not work as adding an element at index ```3``` of an empty array will result of a length of ```4```, with values of previous indexes set to ```null```.
So before comparing the length I'm filtering my ```functionsResults``` array.

HOWEVER, it's not a good practice at all. Since a Promise can indeed resolve a ```null``` value.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    const functionsResults: T[] = [];

    return new Promise((resolve, reject) => {
        for (let i = 0; i < functions.length; i++) {
            functions[i]().then((result) => {
                functionsResults[i] = result;

                if (functionsResults.filter(_ => _ !== null).length === functions.length) {
                    resolve(functionsResults);
                }
            }).catch(reject);
        }
    });
};
```