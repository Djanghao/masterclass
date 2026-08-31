# ✅ [JS] Two Pointers & HashMap Approaches w/ explanation

**Author:** ad0x99
**Votes:** 11
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/5058054/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/5058054/)

---

\uD83D\uDC4D **In the event that you found my solution to be beneficial, I would be most grateful if you would consider upvoting it. This action would serve as a significant motivator for me to continue providing additional solutions in the future.** \uD83D\uDE46\u200D\u2642\uFE0F

---


# Two Pointers Approach
1. We sort the array in `ascending order`.
2. We initialize the `left` pointer starts from the beginning of the array, and the `right` pointer starts at the end. We create a variable (`operations`) to keep track of the maximum number of valid pairs found so far.
3. As long as there are at least one pair to compare.

4. We calculate the sum of the current pairs (current left and current right)
    - 4.1: If we found a valid sum (current sum is equal to `k`), we update the operations result and moving left, and right pointers to the next pair.
    - 4.2: If the `current sum is less than target sum` (`k`), we increase the `left` pointer to get higher sum.
    - 4.3: Otherwise, if the `current sum is greater than target sum` (`k`), we decrease the `right` pointer to get lower sum.

5. After iterating through all numbers, we return the final `operations` value, which represents the maximum number of valid pairs found in the nums list that add up to the target sum k.

# Complexity
- Time complexity: `O(n log n)` + `O(n)` = `O(2n log n)` = `O(n log n)`
    - Sorting the array: `O(n log n)`
    - Iterating: `O(n)`

- Space complexity: `O(n)` - because we sort the array

# Code
```js
const maxOperations = (nums, k) => {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let operations = 0;

  while (left < right) {
    let currentSum = nums[left] + nums[right];

    if (currentSum === k) {
      operations += 1;
      left += 1;
      right -= 1;
    } else if (currentSum < k) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return operations;
};
```

---

# HashMap Approach
1. We create a new `Map` object. This will be used to store the frequency of each number encountered in the nums list. And, we initialize a variable `operations` to keep track of the maximum number of valid pairs found so far.
2. We iterate through each number (`num`) in the nums list.
    - 2.1: We calculate the complement for the current number. The complement is the number needed to add up to the target sum (`k`) with the current number (`num`).

3. Inside the loop, if the complement key already exists in the count map. This means another number with the value complement has already been encountered previously, and if the count for the complement is greater than `0`. We only want to consider pairs where we have a number available to form the sum.
    - 3.1: If the complement exists with a positive count, it means we can form a valid pair. We increment the operations counter by `1`.
    - 3.2: Since we used one instance of the complement, we decrement its count in the count map.
    - 3.3: Otherwise, if the complement wasn't found, it means this is the first time we've encountered the current number (`num`). We update its count in the count map. The `|| 0` part ensures that if the key (`num`) doesn't exist yet, its count is initialized to 0 before incrementing.

4. After iterating through all numbers, we return the final `operations` value, which represents the maximum number of valid pairs found in the nums list that add up to the target sum k.



# Complexity
- Time complexity: `O(n)`, where `n` is the number of elements in the array nums.

- Space complexity: `O(n)`, where `n` is the number of elements in the array nums. This is because we use a `Map` to store the count of each number in the array, which can potentially store all unique numbers in the array.

# Code
```js
const maxOperations = (nums, k) => {
  let count = new Map();
  let operations = 0;

  for (const num of nums) {
    let complement = k - num;

    if (count.has(complement) && count.get(complement) > 0) {
      operations += 1;
      count.set(complement, count.get(complement) - 1);
    } else {
      count.set(num, (count.get(num) || 0) + 1);
    }
  }

  return operations;
};
```