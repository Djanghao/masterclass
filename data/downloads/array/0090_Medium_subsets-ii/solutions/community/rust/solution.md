# ✅ [JS/Rust] Recursion & Backtracking + Bit Manipulation Approaches w/ explanation 🔥

**Author:** ad0x99
**Votes:** 1
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/5183657/](https://leetcode.com/problems/subsets-ii/solutions/5183657/)

---

**\uD83D\uDC4D In the event that you found my solution to be beneficial, I would be most grateful if you would consider upvoting it. This action would serve as a significant motivator for me to continue providing additional solutions in the future. \uD83D\uDE46\u200D\u2642\uFE0F**

---

# Recursion & Backtracking Approach

Mathematically, A list has n elements will have `2^n` subsets.

We want to iterate through each element and find the subsets within 2 scenarios.

    - The first case, we include the current element to find the possibility of subsets.
    - The second case, we find the possibility of subsets without the current element.

1. We initialize the result array to store a list of subsets as the result and the subset array to store the subset. And we sort the input array to group the duplicates together.

2. We recursively build the subsets using the buildSubset function.

3. **The base case**:
    - 3.1: If we're reached the end of the `nums` array, that means we're build a complete subset. We push the current subset into the result array.

4. **Recursion Exploration**: The first case, we include the current element
    - 4.1: We add the current element at the current index from `nums` to the `subset` array.
    - 4.2: We recursively call buildSubset with the `i + 1` to consider the next element in the `nums` array.
    - 4.3: After this recursive call finishes exploring possibilities with the current element included, we continue to the next step.

6. As long as the current element is the same as the next one, we want to `skip the duplicates` since we want to build a subset without duplicates.

6. **Backtracking**: The second case, we exclude the current element.
    - 6.1: We remove the current element that was just added to the `subset` in the previous step. Because we want to explore the possibility of subset without the current element.

7. Finally, we recursively call the buildSubset to explore the possibilities with the current element excluded.

# Complexity
- Time complexity: `O(n * 2^n)` - because for each element in the input array, we have two choices - either include it in the subset or not include it.

- Space complexity: `O(n)`

# Code
```javascript []
const subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b);
  let result = [];
  let subset = [];

  const buildSubset = (i) => {
    if (i === nums.length) {
      result.push([...subset]);
      return;
    }

    // Pick the current number and push into subset
    subset.push(nums[i]);
    buildSubset(i + 1, nums, subset, result);
    subset.pop();

    // Skip duplicates if the current element is the same as the next one
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i += 1;
    }

    // Don't pick the current number
    buildSubset(i + 1, nums, subset, result);
  };

  buildSubset(0);
  return result;
};
```
```rust []
impl Solution {
    pub fn subsets_with_dup(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut nums = nums.clone(); // Clone nums to avoid mutating the input directly
        nums.sort(); // Sort the array to handle duplicates

        let mut result: Vec<Vec<i32>> = Vec::new();
        let mut subset: Vec<i32> = Vec::new();

        fn build_subset(
            i: usize,
            nums: &Vec<i32>,
            subset: &mut Vec<i32>,
            result: &mut Vec<Vec<i32>>,
        ) {
            if i == nums.len() {
                result.push(subset.clone());
                return;
            }

            // Pick the current number
            subset.push(nums[i]);
            build_subset(i + 1, nums, subset, result);
            subset.pop();

            // Skip duplicates
            let mut next_i = i;
            while next_i + 1 < nums.len() && nums[next_i] == nums[next_i + 1] {
                next_i += 1;
            }

            // Don't pick the current number
            build_subset(next_i + 1, nums, subset, result);
        }

        build_subset(0, &nums, &mut subset, &mut result);
        result
    }
}
```

---

**\uD83D\uDC4D In the event that you found my solution to be beneficial, I would be most grateful if you would consider upvoting it. This action would serve as a significant motivator for me to continue providing additional solutions in the future. \uD83D\uDE46\u200D\u2642\uFE0F**

---

# Bit Manipulation Approach

Mathematically, A list has `n` elements will have `2^n` subsets.

1. We sort the array to group the duplicates together. And then, we initialize a result array to store the final subsets.

2. We iterate through all possible combinations of including/excluding elements from `0` to `2 ^ n (1 << n)` using the bitwise `left shift operator` (`<<`). This value represents the total number of possible subsets (considering each element can be included or excluded).

3. Inside the loop, we initialize a subset array to store the elements for the current subset.

4. The nested loop iterates through each element (`j`) in the original array (`nums`).
    - 4.1: We use bit manipulation to extract information about the current element (`j`) from the ith iteration value. (`(i >> j) & 1`)
    - 4.2: The `i >> j` operation performs a `right shift operation` on `i` by `j` positions. This essentially moves a hypothetical "`1`" bit `j` positions to the right within the binary representation of `i`.
    - 4.3: The `& 1` operation performs a bitwise `AND` with `1`. This isolates the `rightmost bit` after the shift, which will be 1 if the corresponding element (`j`) should be included in the subset based on the ith iteration value.
    - 4.4: We check if the extracted bit (`currentBit`) is `1`, it means the element at index `j` should be included in the current subset. We add the element at index `j` from the original nums array to the subset array.

5. After the inner loop finishes iterating through all elements, the subset array holds the elements for the current combination. We add the completed subset array to the result array, storing the current subset.

6. After the outer loop finishes iterating through all possible combinations (`2 ^ n` times), the result array will contain all subsets of the original `nums` array. But we have to do another step to remove the duplicates from the result array, and return the unique subset array.

7. Finally, we recursively call the `buildSubset` to explore the possibilities with the current element excluded.

# Complexity
- Time complexity: `O(2^n * n)` - because there are `2^n` possible subsets and for each subset, we iterate through the entire input array of length `n` to determine which elements to include in the subset.

- Space complexity: `O(2^n * n)` - because we are storing all possible subsets in the result array, each subset potentially containing up to n elements.

# Code
```javascript []
const subsetsWithDup = (nums) => {
  nums.sort((a, b) => a - b);

  let n = nums.length;
  let result = [];
  let powerOfTwo = 1 << n; // 2 ^ n

  for (let i = 0; i < powerOfTwo; i++) {
    let subset = [];

    for (let j = 0; j < n; j++) {
      // Get bit of the element at j index
      const currentBit = (i >> j) & 1;

      if (currentBit === 1) {
        subset.push(nums[j]);
      }
    }

    result.push(subset);
  }

  // Remove duplicates and return
  return removeDuplicates(result);
};

const removeDuplicates = (array) => {
  // Converting original array into string array
  const stringArray = array.map(JSON.stringify);
  // Using a Set to remove duplicates
  const uniqueStringArray = new Set(stringArray);
  // Converting the Set back to array and return
  return Array.from(uniqueStringArray, JSON.parse);
};
```
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn subsets_with_dup(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut nums = nums.clone(); // Clone nums to avoid mutating the input directly
        nums.sort(); // Sort the array to handle duplicates

        let n = nums.len(); 
        let mut result = Vec::new();
        let power_of_two = 1 << n; // 2 ^ n

        for i in 0..power_of_two {
            let mut subset = Vec::new();

            for j in 0..n {
                let currentBit = (i >> j) & 1;

                if currentBit == 1 {
                    subset.push(nums[j])
                }
            }

            result.push(subset);
        }

        return Self::remove_duplicates(result)
    }

    fn remove_duplicates(array: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut set = HashSet::new();

        for subset in array {
            set.insert(subset);
        }

        let unique_subsets: Vec<Vec<i32>> = set.into_iter().collect();
        unique_subsets
    }
}

```
