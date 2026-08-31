# Detailed explanation. Important question.

**Author:** Rupdeep
**Votes:** 293
**Link:** [https://leetcode.com/problems/sleep/solutions/3406493/](https://leetcode.com/problems/sleep/solutions/3406493/)

---

# Explanation
Explanation:

1. The sleep function takes a positive integer millis as input.
2. It then creates a Promise that resolves after millis milliseconds using the setTimeout function.
3. The Promise is then awaited using the await keyword, which allows the function to pause execution until the Promise is resolved.

If you are not familar with 'await' then you may use 'return' instead like this:
return new Promise(resolve => setTimeout(resolve, millis));

# Code
```
/**
 * @param {number} millis
 */
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```
Please upvote if you found this helpful.