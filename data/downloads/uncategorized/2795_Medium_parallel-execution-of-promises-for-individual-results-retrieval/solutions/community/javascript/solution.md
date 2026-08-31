# Simple Javascript

**Author:** rnotappl
**Votes:** 1
**Link:** [https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/solutions/3828875/](https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/solutions/3828875/)

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
/**
 * @param {Array<Function>} functions
 * @return {Promise}
 */
var promiseAllSettled = function(functions) {
     return new Promise((resolve,reject) => {
        let count = 0;
        const res = Array(functions.length);
        functions.forEach((fn,index) => {
            fn().then((result) => {
                res[index] = {'status':"fulfilled","value":result};
                if (++count === res.length) resolve(res);
            },
            (error) => {
                res[index] = {'status':"rejected","reason":error};
                if (++count === res.length) resolve(res);
            })

        })


    })
    
    
};


/**
 * const functions = [
 *    () => new Promise(resolve => setTimeout(() => resolve(15), 100))
 * ]
 * const time = performance.now()
 *
 * const promise = promiseAllSettled(functions);
 *              
 * promise.then(res => {
 *     const out = {t: Math.floor(performance.now() - time), values: res}
 *     console.log(out) // {"t":100,"values":[{"status":"fulfilled","value":15}]}
 * })
 */
```