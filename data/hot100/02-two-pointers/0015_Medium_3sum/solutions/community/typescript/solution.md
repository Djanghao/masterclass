# ✔This solution is explained step by step

**Author:** AbdallahSabri
**Votes:** 7
**Link:** [https://leetcode.com/problems/3sum/solutions/3386484/](https://leetcode.com/problems/3sum/solutions/3386484/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Let's go through the code step by step:

1. We start by sorting the input array in ascending order, so that we can use two pointers to find the triplets.
2. We initialize an empty array to hold the `result`.
3. We loop through the array, and for each element at index i, we use two pointers (`j` and `k`) to find all possible triplets that sum to zero.
4. We skip duplicates by checking if the current element is equal to the previous element (`nums[i] === nums[i - 1]`).
5. We set the left pointer `j` to `i + 1` and the right pointer k to the last element in the array (`nums.length - 1`).
6. We enter a while loop that continues as long as `j` is less than `k`.
7. Inside the loop, we calculate the `sum` of the current triplet (`nums[i] + nums[j] + nums[k]`).
8. If the `sum` is equal to zero, we add the triplet to the result array and skip duplicates by moving j and k to the next distinct elements (`nums[j] !== nums[j + 1]` and `nums[k] !== nums[k - 1]`, respectively).
9. If the `sum` is less than zero, we move the left pointer `j` to the right.
10. If the `sum` is greater than zero, we move the right pointer `k` to the left.
11. After we exit the while loop, we move to the next distinct element (`nums[i] !== nums[i + 1]`).
12. Finally, we return the result array.


# Code
```
function threeSum(nums: number[]): number[][] {

  nums.sort((a, b) => a - b); // sort the input array
  const result: number[][] = []; // initialize the result array

  for (let i = 0; i < nums.length - 2; i++) { // iterate through the array
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

    let j = i + 1; // initialize the left pointer
    let k = nums.length - 1; // initialize the right pointer

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) { // check if we found a triplet that sums to zero
        result.push([nums[i], nums[j], nums[k]]);
        while (j < k && nums[j] === nums[j + 1]) j++; // skip duplicates
        while (j < k && nums[k] === nums[k - 1]) k--; // skip duplicates
        j++; // move the left pointer to the right
        k--; // move the right pointer to the left
      } else if (sum < 0) { // if the sum is less than zero, move the left pointer to the right
        j++;
      } else { // if the sum is greater than zero, move the right pointer to the left
        k--;
      }
    }
  }

  return result; // return the result array
}

```