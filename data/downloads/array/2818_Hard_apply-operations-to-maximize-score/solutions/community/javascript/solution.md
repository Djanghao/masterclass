# 🔥 Javascript | Monotonic Stack |  Maximising Score with Prime Factors | Time: O(n * log n)🔥

**Author:** manish_mohan
**Votes:** 2
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3903753/](https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3903753/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The approach revolves around recognizing the significance of prime factors in determining the scores of elements. By using a monotonic stack to select elements with higher prime factor scores and efficiently calculating reachable counts, you can strategically choose elements to maximize the final score within the given limit. The key lies in breaking down the problem into manageable steps and leveraging prime factorization techniques along with the monotonic stack to arrive at an efficient solution.
# Approach
<!-- Describe your approach to solving the problem. -->

- **Prime Factorization**: Start by understanding that the key to calculating the score of each element lies in its prime factors. More distinct prime factors contribute to a higher score.

- **Prime Factor Count**: Create a function that calculates the count of distinct prime factors for a given number. This function will help in determining the prime factor score of each element.

- **Monotonic Stack**: Use a monotonic stack to efficiently identify elements with higher scores. Iterate through the elements and maintain a stack. Whenever an element with a larger prime factor count is encountered, pop elements from the stack with lower prime factor counts. This ensures that the stack only contains elements that can contribute to a higher score.

- **Reachable Count**: While building the monotonic stack, calculate the reachable count for each element. This count represents the number of elements that can be selected from the current position to achieve the highest possible score.

- **Sort and Pair**: Pair each element with its reachable count and sort these pairs in descending order based on the element's value. This sorting ensures that we prioritize elements with higher scores.

- **Modular Exponentiation**: Implement modular exponentiation to prevent integer overflow during calculations involving large numbers.

- **Iterative Selection**: Iterate through the sorted pairs and select elements one by one. For each element, choose the maximum number of elements that can be selected without exceeding the available limit k. Use modular exponentiation to update the result at each step.

# Complexity
## Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Calculating prime factor counts for each element takes O(n * sqrt(m)) time, where n is the number of elements and m is the maximum element value.
- Constructing the monotonic stack and calculating reachable counts takes O(n) time.
- Sorting the pairs and iterative selection takes O(n * log n) time.
Modular exponentiation operations take O(log m) time.
- Overall Time comlexity **O(n * log n)**

## Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- The space complexity mainly depends on the storage of factors, count, stack, and pairs arrays, each taking O(n) space.
- Additional space is required for storing intermediate variables, -
- resulting in an overall space complexity of **O(n)**

# Code
```

/**
 * Function to calculate the maximum score based on prime factors and constraints.
 * @param {number[]} nums - Array of integers.
 * @param {number} k - Integer representing available operations.
 * @return {number} - Maximum score modulo 10^9 + 7.
 */
 const maximumScore = (nums, k) => {
  const n = nums.length;
  const factors = Array(n).fill(0);  // To store prime factors count for each number
  const count = Array(n).fill(0);    // To store the count of reachable elements for each element

  // Calculate prime factors count for each number
  for (let i = 0; i < n; i++) {
    factors[i] = primeFactors(nums[i]);
  }

  const stack = [-1];  // Monotonic stack to keep track of elements in decreasing order of factors
  let curr = 0;

  // Calculate the count of reachable elements for each element
  for (let i = 0; i < n; i++) {
    while (stack[stack.length - 1] !== -1 && factors[stack[stack.length - 1]] < factors[i]) {
      curr = stack.pop();
      count[curr] = (curr - stack[stack.length - 1]) * (i - curr);
    }
    stack.push(i);
  }

  // Process any remaining elements in the stack
  while (stack[stack.length - 1] !== -1) {
    curr = stack.pop();
    count[curr] = (curr - stack[stack.length - 1]) * (n - curr);
  }

  // Create an array of pairs containing elements and their corresponding reachable count
  const pairs = Array(n);
  for (let i = 0; i < n; i++) {
    pairs[i] = [nums[i], count[i]];
  }

  // Sort the pairs in descending order of elements
  pairs.sort((a, b) => b[0] - a[0]);

  let res = BigInt(1);
  const mod = BigInt(1e9 + 7);

  // Calculate the maximum score using modPow and available moves
  for (let i = 0; i < pairs.length && k > 0; i++) {
    const curr = Math.min(pairs[i][1], k);
    res = (res * modPow(BigInt(pairs[i][0]), BigInt(curr), mod)) % mod;
    k -= curr;
  }

  return Number(res);  // Convert the result to a regular number before returning
}

/**
 * Function to calculate modular exponentiation.
 * @param {bigint} x - Base.
 * @param {bigint} y - Exponent.
 * @param {bigint} m - Modulus.
 * @return {bigint} - Result of modular exponentiation.
 */
function modPow(x, y, m) {
  if (y === 0n) {
    return 1n;
  }
  let p = modPow(x, y / 2n, m) % m;
  p = (p * p) % m;
  if (y % 2n === 0n) {
    return p;
  }
  return (p * x) % m;
}

/**
 * Function to calculate the count of prime factors for a number.
 * @param {number} num - Input number.
 * @return {number} - Count of prime factors for the input number.
 */
function primeFactors(num) {
  let count = 0;
  let factor = 2;
  const end = Math.sqrt(num);

  while (num > 1 && factor <= end) {
    let inc = false;
    while (num % factor === 0) {
      if (!inc) {
        count++;
        inc = true;
      }
      num /= factor;
    }
    factor++;
  }

  if (num > 1) {
    count++;
  }

  return count;
}


```