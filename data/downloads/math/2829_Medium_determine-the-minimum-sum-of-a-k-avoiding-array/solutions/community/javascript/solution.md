# Easy to Understand | Fully Explained 💯 | JavaScript🔥💯

**Author:** RockAdil
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3934527/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3934527/)

---

# Intuition
The problem aims to calculate the sum of the first 'n' positive integers while avoiding pairs of integers that sum up to a given value 'k'. The challenge is to construct an array of integers that satisfies these conditions and then calculate the sum of the modified array.


# Approach
1. Array Initialization: An array named k_avoidingArr is initialized to store the sequence of positive integers from 1 to 'n'.

2. Pairs Avoidance: The code then loops through each element in the array using two nested loops. The outer loop is controlled by the index i, and the inner loop is controlled by the index j. The purpose of these loops is to check for pairs of integers that sum up to the given value 'k'.

3. Pair Sum Check: Inside the inner loop, the code checks if the sum of k_avoidingArr[i] and k_avoidingArr[j] is equal to 'k'. If such a pair is found, the code proceeds with the following steps:

    - The next integer in sequence (i.e., k_avoidingArr[k_avoidingArr.length - 1] + 1) is added to the array to ensure that future pairs won't sum up to 'k'.
    - The element at index j is removed from the array to avoid using it in future calculations.
    - Both loop counters i and j are reset to 0 and i + 1, respectively, to recheck pairs from the beginning of the array.
4. Sum Calculation: Once all the necessary modifications have been made to the array to avoid pairs summing to 'k', the code calculates the sum of the modified array using the reduce() function.
# Complexity
- Time complexity: `O(n^3)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// This function calculates the sum of the first 'n' positive integers,
// while avoiding pairs of integers that sum up to 'k'.

var minimumSum = function (n, k) {
  // Initialize an array to store the sequence of integers.
  let k_avoidingArr = [];

  // Populate the array with integers from 1 to 'n'.
  for (let i = 1; i <= n; i++) {
    k_avoidingArr.push(i);
  }

  // Loop through the array to find pairs that sum up to 'k' and modify the array accordingly.
  for (let i = 0; i < k_avoidingArr.length; i++) {
    for (let j = i + 1; j < k_avoidingArr.length; j++) {
      if (k_avoidingArr[i] + k_avoidingArr[j] === k) {
        // If a pair is found that sums up to 'k', the next integer is added to the array.
        // The 'j' element is removed to avoid using it in the future calculations.
        // Loop counters are reset to recheck pairs from the beginning of the array.
        k_avoidingArr.push(k_avoidingArr[k_avoidingArr.length - 1] + 1);
        k_avoidingArr.splice(j, 1);
        i = 0;
        j = i + 1;
        continue;
      }
    }
  }

  // Calculate and return the sum of the modified array.
  return k_avoidingArr.reduce((a, b) => (a += b));
};

```