# Nasty Bruteforce TS Approach

**Author:** CainTheMeister
**Votes:** 0
**Link:** [https://leetcode.com/problems/24-game/solutions/3671711/](https://leetcode.com/problems/24-game/solutions/3671711/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Generate Permutations: The code starts by generating all possible permutations of the given cards. It does this by recursively permuting the elements and storing each permutation in an array.

2. Evaluate Permutations: For each generated permutation, the code evaluates if it can form an expression that evaluates to 24.

3. Evaluating an Expression: The evaluation process involves selecting two numbers from the permutation and applying each of the four operators (+, -, *, /) to them. It checks all possible combinations of numbers and operators to form an expression.

4. Recursive Evaluation: If the expression doesn't evaluate to 24, the code recursively evaluates the remaining numbers in the permutation. This recursive evaluation continues until the expression evaluates to 24 or there are no more numbers remaining.

5. Termination Condition: The recursion terminates when there is only one number left in the permutation. At this point, the code checks if the remaining number equals 24 (with a small margin of error due to the EPSILON value).

6. Return Result: The code returns true if it finds a permutation that evaluates to 24 and false if none of the permutations satisfy the condition.


# Approach
<!-- Describe your approach to solving the problem. -->

Brute-force D: 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The overall time complexity of the code is $O(N! * N^3)$, dominated by the generation of permutations.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The overall space complexity of the code is $O(N!)$, dominated by the space required to store the permutations. 
# Code
```
function judgePoint24(cards: number[]): boolean {
  // The target value is 24.
  const TARGET = 24;

  // Epsilon value for floating point comparison.
  const EPSILON = 1e-6;

  // The operators that can be used.
  const OPERATORS = ['+', '-', '*', '/'];

  // Helper function to generate permutations.
  // This function takes an array of numbers, a partial permutation, a boolean array
  // to track which numbers have been used, and a list of permutations as input.
  // The function recursively generates all permutations of the input array and
  // adds them to the list of permutations.
  function generatePermutations(nums: number[], perm: number[], used: boolean[], result: number[][]): void {
    // If the permutation is complete, then add it to the list of permutations.
    if (perm.length === nums.length) {
      result.push([...perm]);
      return;
    }

    // For each number that has not been used, add it to the permutation and
    // recursively generate all permutations of the remaining numbers.
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      perm.push(nums[i]);
      generatePermutations(nums, perm, used, result);
      perm.pop();
      used[i] = false;
    }
  }

  // Helper function to evaluate expressions.
  // This function takes an array of numbers and returns true if the expression
  // evaluates to 24 and false otherwise.
  function evaluate(nums: number[]): boolean {
    // If the array only has one number, then check if the number is close to 24.
    if (nums.length === 1) {
      return Math.abs(nums[0] - TARGET) < EPSILON;
    }

    // For each pair of numbers in the array, try all possible operations.
    // If any of the operations result in an expression that evaluates to 24,
    // then return true.
    const len = nums.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const a = nums[i];
        const b = nums[j];
        const remaining = nums.filter((_, index) => index !== i && index !== j);

        for (const operator of OPERATORS) {
          // If the operator is commutative, then try both orders.
          if (operator === '+' || operator === '*') {
            const result = operator === '+' ? a + b : a * b;
            if (evaluate([...remaining, result])) {
              return true;
            }

            const result2 = operator === '+' ? b + a : b * a;
            if (evaluate([...remaining, result2])) {
              return true;
            }
          } else {
            // If the operator is not commutative, then only try one order.
            if (Math.abs(b) > EPSILON && evaluate([...remaining, a - b])) {
              return true;
            }

            if (Math.abs(a) > EPSILON && evaluate([...remaining, a / b])) {
              return true;
            }
          }
        }
      }
    }

    // The expression does not evaluate to 24.
    return false;
  }

  // Generate permutations of the input numbers.
  const permutations: number[][] = [];
  generatePermutations(cards, [], new Array(cards.length).fill(false), permutations);

  // Check each permutation.
  for (const permutation of permutations) {
    if (evaluate(permutation)) {
      return true;
    }
  }

  // The expression does not evaluate to 24.
  return false;
}
```