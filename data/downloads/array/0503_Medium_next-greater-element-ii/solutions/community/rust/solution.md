# ✅ [JS/Rust] Brute Force & Stack Approaches w/ explanation 🔥

**Author:** ad0x99
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/5082090/](https://leetcode.com/problems/next-greater-element-ii/solutions/5082090/)

---

\uD83D\uDC4D **In the event that you found my solution to be beneficial, I would be most grateful if you would consider upvoting it. This action would serve as a significant motivator for me to continue providing additional solutions in the future.** \uD83D\uDE46\u200D\u2642\uFE0F

---

# Brute Force Approach

1. We initialize a variable `n` to store the length of the original nums array. This value will be used for loop boundaries and calculations.

2. We initialize a new array `arr` of the same size as nums and fills it with `-1`s.This array arr will eventually store the next greater element for each element in nums (or `-1` if none exists).

3. In the outer loop, we iterate through each element.

4. In the nested loop, we iterate through elements starting from the next element (`j = i + 1`) after the current element (`i`). It continues as long as j is within the combined length (`i + n`) considering the circular nature of the array. However, we use the modulo operator `(%)` to keep j within the actual bounds of nums (`0 to n-1`).

    - 4.1: If the element at index `j % n` in nums is greater than the current element (nums[i]). We assign the value of the greater element (`nums[j % n]`) to the corresponding index `i` in the arr array. This indicates that `nums[j % n]` is the next greater element for nums[i].

    - 4.2: Since a greater element has been found, we exit the loop.

5. After iterating through all elements in nums, we return the `result` array.

# Complexity
- Time complexity: `O(n ^ 2)`, where `n` is the number of elements in the `nums` array

- Space complexity: `O(n)`, where `n` is the number of elements in the `result` array

# Code

```javascript []
const nextGreaterElements = (nums) => {
  let n = nums.length;
  let result = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < i + n; j++) {
      if (nums[j % n] > nums[i]) {
        result[i] = nums[j % n];
        break;
      }
    }
  }

  return result;
};
```
```rust []
impl Solution {
    pub fn next_greater_elements(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        let mut result = vec![-1; n];

        for i in 0..n {
            for j in i + 1..i + n {
                if nums[j % n] > nums[i] {
                    result[i] = nums[j % n];
                    break;
                }
            }
        }

        result
    }
}
```

---

# Monotonic Stack Approach - Left to Right Iteration

The idea is using a stack to keep track the next potential greater element to compare in each iteration.

- The stack helps keep track of potential next greater element candidates encountered earlier in the loop.
- The while loop ensures that only elements smaller than the current element (`nums[currentIndex]`) remain on the stack.
- By popping smaller elements from the stack, we effectively prioritize finding the first greater element encountered for each element in the original `nums` array.

1. We initialize an array `result` of the same size as the `nums` array and fills it with `-1s`. This will store the next greater element for each element in `nums`.

2. We create an empty stack (`stack`) to temporarily hold indices of elements that might be potential candidates for being the next greater element.

3. We store the length of the nums array (`n`) for later use.

4. In the outer loop, we iterate twice the length (`2 * n`) of the original nums array. This allows the algorithm to consider each element and its potential next greater element within a combined circular array.

5. Inside the loop, we calculate the "circular index" (`currentIndex`). The modulo operation (`%`) ensures we wrap around to the beginning of the nums array if the index (`i`) reaches its length (`n`). This creates the circular behavior needed for considering elements beyond the original array size.

6. As long as there are indices in the stack, and the top element of the stack is less than the current element.
    - 6.1: We remove the top element from the stack.

    - 6.2: And we assign the value of the greater element to the corresponding index (`topElement`) in the result array. This indicates that `nums[currentIndex]` is the next greater element for the element previously represented by `topElement`.

7. After processing the current element, we push the current element's index onto the stack. This is because `nums[currentIndex]` itself might be the next greater element for elements encountered later in the loop.

8. After iterating through the combined array `twice`, the `result` array contains the next greater element for each element in the original nums array (or `-1` if none exists). We return the `result` array.

# Complexity
- Time complexity: `O(2n)` + `O(2n)` = `O(4n)` = `O(n)` - because we iterate through the array `twice`, once in the main loop and once in the while loop inside it.

- Space complexity: `O(n)` - where `n` is the length of `result`

# Code

```javascript []
const nextGreaterElements = (nums) => {
  const n = nums.length;
  let result = new Array(n).fill(-1);
  let stack = [];

  for (let i = 0; i < 2 * n; i++) {
    let currentIndex = i % n;

    while (
      stack.length > 0 &&
      nums[stack[stack.length - 1]] < nums[currentIndex]
    ) {
      let topElement = stack.pop();
      result[topElement] = nums[currentIndex];
    }

    stack.push(currentIndex);
  }

  return result;
};
```
```rust []
impl Solution {
    pub fn next_greater_elements(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        let mut result: Vec<i32> = vec![-1; n];
        let mut stack: Vec<usize> = Vec::new();

        for i in 0..2 * n {
            let current_index = i % n;

            while !stack.is_empty() && nums[stack[stack.len() - 1]] < nums[current_index] {
                let top_element = stack.pop().unwrap();
                result[top_element] = nums[current_index]
            }

            stack.push(current_index);
        }

        result
    }
}
```

---

# Monotonic Stack Approach - Right to Left Iteration

The same approach as above solution, but instead of iterating from the beginning to the end of the array, we iterate reversely. And with the stack, we will store the actual value of the current element instead of its index.

Explain the loop:

1. We iterate in a reverse order from `2 * n` down to `-1`. And we use a `currentIndex` to access elements within the actual array boundaries (0 to n-1).

2. We calculate the actual index within the original array using the modulo operator `(%).` Since the loop iterates through `2 * n` values, the modulo operation ensures we wrap around and access elements within the array size (`n`).

3. As long as there are elements in the stack.
    - 3.1: If the element on top of the stack is less than or equal to the current element, we remove the element from the stack because it's not a potential next greater element for any future element (since it's less than or equal to the current element).

    - 3.2: Otherwise, If the element on top of the stack is greater than the current element, we assign the value on top of the stack (the greater element) to the corresponding index in the result array, indicating it's the next greater element for `array[currentIndex]`, and we exit the inner loop as the next greater element has been found for the current element.

4. After processing the current element, we push the current element onto the stack. This is because current element might be the next greater element for some element encountered later in the loop (due to the circular nature).

5. We return the `result` array.

# Complexity
- Time complexity: `O(2n)` + `O(2n)` = `O(4n)` = `O(n)` - because we iterate through the array `twice`, once in the main loop and once in the while loop inside it.

- Space complexity: `O(n)` - where `n` is the length of `result`

# Code

```javascript []
const nextGreaterElements = (nums) => {
  const n = nums.length;
  let result = new Array(n).fill(-1);
  let stack = [];

  for (let i = 2 * n; i > -1; i--) {
    let currentIndex = i % n;
    let currentElement = nums[currentIndex];

    while (stack.length > 0) {
      let topElement = stack[stack.length - 1];

      if (topElement <= currentElement) {
        stack.pop();
      } else {
        result[currentIndex] = topElement;
        break;
      }
    }

    stack.push(currentElement);
  }

  return result;
};
```
```rust []
impl Solution {
    pub fn next_greater_elements(nums: Vec<i32>) -> Vec<i32> {
        let n = nums.len();
        let mut result: Vec<i32> = vec![-1; n];
        let mut stack: Vec<i32> = Vec::new();

        for i in (0..2 * n).rev() {
            let current_index = i % n;
            let current_element = nums[current_index];

            while !stack.is_empty() {
                let top_element = *stack.last().unwrap() as i32;

                if (top_element <= current_element) {
                    stack.pop();
                } else {
                    result[current_index] = top_element;
                    break;
                }
            }

            stack.push(current_element);
        }

        result
    }
}
```
