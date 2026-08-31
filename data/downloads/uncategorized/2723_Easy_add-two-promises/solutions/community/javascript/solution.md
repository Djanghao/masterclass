# ✔️Easy Solution✔️2723. Add Two Promises✔️Level up🚀your JS skills 🚀

**Author:** Vikas-Pathak-123
**Votes:** 437
**Link:** [https://leetcode.com/problems/add-two-promises/solutions/3698863/](https://leetcode.com/problems/add-two-promises/solutions/3698863/)

---

# Intuition:
The goal of the task is to create a new promise that resolves with the sum of the values from two given promises.
# Approach:
Use `Promise.all()` method along with `await` to wait for both promises to resolve. Once they resolve, their values are retrieved and stored in the variables `value1` and `value2`. Finally, a new promise is returned with the sum of `value1` and `value2`.
# Complexity:
- Time complexity: 
The time complexity is determined by the longest running promise since the `Promise.all()` method waits for both promises to resolve concurrently. Therefore, the time complexity can be considered as O(max(promise1 time, promise2 time)).

- Space complexity:
 The space complexity is constant, as the code does not create any additional data structures or use additional memory that scales with the input size.
Therefore, the space complexity can be considered as O(1).

![image.png](./images/0.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A
```

# Code
``` JS []
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  // Wait for both promises to resolve and retrieve their values
  const [value1, value2] = await Promise.all([promise1, promise2]);

  // Return a new promise that resolves with the sum of the values
  return value1 + value2;
};

// // Example usage:
// var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
// var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

// addTwoPromises(promise1, promise2)
//   .then(console.log); // Output: 7
```


<img src="https://media.giphy.com/media/Xd6WrGsyh1su7X0ZGF/giphy.gif" width="40">

# Please Comment\uD83D\uDC4D\uD83D\uDC4D 
```
Thanks for visiting my solution comment below if you like it.\uD83D\uDE0A
```

