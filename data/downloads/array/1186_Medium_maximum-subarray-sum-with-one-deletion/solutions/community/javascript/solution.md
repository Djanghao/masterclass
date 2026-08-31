# My Solution In JavaScript🥰

**Author:** M33N4N
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/3928940/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/3928940/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I solved the problem by iterating through the array of integers. For each element, I calculated two values: maxSumWithDeletion, which represents the maximum sum with the possibility of deleting one element, and maxSumWithoutDeletion, which represents the maximum sum without any deletion. I updated these values based on the current element and the previous values, ensuring that at each step, I consider whether it's better to include the current element or start a new subarray. The final result is the maximum of these values and is returned as the answer. This approach efficiently handles the constraints and variations in the array to find the maximum sum with the given conditions.

# Approach
<!-- Describe your approach to solving the problem. -->
The approach I used to solve the problem is based on dynamic programming. Dynamic programming is a technique where you break down a problem into smaller subproblems and solve each subproblem only once, storing the results in a way that avoids redundant calculations.

In this specific problem, I used two variables, maxSumWithDeletion and maxSumWithoutDeletion, to keep track of the maximum sum considering the possibility of deleting one element and without deleting any element, respectively. I iterated through the array of integers and at each step, I updated these variables based on the current element and the previous values. This way, I considered the best choice between keeping the current element in the subarray or starting a new subarray.

By updating these variables in each iteration and keeping track of the maximum sum found so far in the result variable, I ensured that I found the maximum sum for a non-empty subarray with at most one element deletion.

This approach allows for an efficient way of finding the maximum sum while considering the given conditions and constraints of the problem.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the provided code is **O(n)**, where n is the length of the input array. This is because the code iterates through the array once, performing constant-time operations at each iteration.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the code is **O(1)**, which means it uses a constant amount of extra space regardless of the size of the input array. This is because the code only uses a few variables (maxSumWithoutDeletion, maxSumWithDeletion, and result) to store intermediate results, and the space they occupy does not depend on the input size.

# Code
```
/**
 * @param {number[]} arr
 * @return {number}
 */
function maximumSum(arr) {
  let n = arr.length;
  let maxSumWithoutDeletion = arr[0];
  let maxSumWithDeletion = 0;
  let result = arr[0];

  for (let i = 1; i < n; i++) {
    maxSumWithDeletion = Math.max(maxSumWithoutDeletion, maxSumWithDeletion + arr[i]);
    maxSumWithoutDeletion = Math.max(maxSumWithoutDeletion + arr[i], arr[i]);
    result = Math.max(result, maxSumWithoutDeletion, maxSumWithDeletion);
  }

  return result;
}
```
![Screenshot 2023-08-19 042259.png](./images/0.png)
