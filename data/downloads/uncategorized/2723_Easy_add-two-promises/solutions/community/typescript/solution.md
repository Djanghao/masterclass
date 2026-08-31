# Easy Solution (with step by step explanation)

**Author:** alekseyvy
**Votes:** 5
**Link:** [https://leetcode.com/problems/add-two-promises/solutions/4236780/](https://leetcode.com/problems/add-two-promises/solutions/4236780/)

---

# Intuition
we will use Promise all and await to solve this problem
# Approach
we destructure result of awaiting promise all into p1 and p2 and then return sum of them
# Complexity
- Time complexity:
O(1)
- Space complexity:
O(1)
# Code
```
type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    // destructure result of await promise all into p1 and p2
	const [p1, p2] = await Promise.all([promise1, promise2]);
    // return sum of p1 and p2
    return p1 + p2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
```