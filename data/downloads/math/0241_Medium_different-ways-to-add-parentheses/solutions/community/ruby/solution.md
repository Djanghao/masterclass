# 💡 100% Easy Solution | Recursive Approach with Memorization 🧠🚀

**Author:** dev-shahadat
**Votes:** 39
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5806909/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/5806909/)

---

# \uD83D\uDE80 Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The provided solution leverages a **divide-and-conquer** strategy with **memoization** to efficiently compute all possible outcomes from a given expression involving numbers and operators (`+`, `-`, `*`). Here's a breakdown of the process:
# \uD83D\uDEE0\uFE0F Approach
<!-- Describe your approach to solving the problem. -->
The implementation of the solution adopts a divide-and-conquer strategy and utilizes Python's built-in memorization technique using the cache decorator from the functools module. This strategy is laid out in the recursive dfs function. Here is how the solution unfolds:

1. **Memoization:** A memoization hash (`memo`) stores previously computed results for sub-expressions, allowing us to avoid redundant calculations.
2. **Operators Dictionary**: The dictionary `OPERATIONS` maps operators to their corresponding lambda functions for execution:
   - `'-' => lambda { |x, y| x - y }`
   - `'+' => lambda { |x, y| x + y }`
   - `'*' => lambda { |x, y| x * y }`
3. **Recursive Helper - `dfs(exp)`**: This function processes each sub-expression. It splits the expression at operators and computes the results for both sides recursively, then combines the results according to the operator found.
4. **Is Number Check - `is_number?(str)`**: This function checks if the given string is a valid number by matching it against a regex for digits.
5. **Base Case**: If the expression is a simple number (i.e., no operators), it is returned as a list containing that number.
6. **Recursive Case**: The expression is scanned character-by-character:
   - When an operator is encountered (`+`, `-`, `*`), the expression is split into two sub-expressions.
   - `dfs` is called on both the left and right sub-expressions.
   - All results from the left are combined with all results from the right using the operator. 


By systematically considering every split at each operator and recursively solving smaller problems, the function finally returns a list of all possible results for the initial expression.

## \u2705 Example Walkthrough
Let\u2019s consider the expression `"2*3-4*5"`. The recursion breaks it down like this:

1. Split at the first `*`:  
   - Left side: `"2"`
   - Right side: `"3-4*5"`
   
2. Recursively solve for `"3-4*5"`:
   - Split at `-`:  
     - Left side: `"3"`
     - Right side: `"4*5"`

3. Solve for `"4*5"`:
   - Result: `4 * 5 = 20`

4. Combine:  
   - Results of `"3-20"`: `3 - 20 = -17`
   
5. Combine with the left side:  
   - Results of `"2*-17"`: `2 * -17 = -34`
6. The final result list will be `[-34]`.


# \uD83D\uDCCA Complexity
- **Time Complexity**:  
   The overall complexity is $$O(n\xB2 * 2\u207F)$$. Each operator in the expression can create two recursive branches, and combining their results takes `O(n)` time.

- **Space Complexity**:  
   The space complexity is $$O(2\u207F)$$ due to the memoization of sub-expression results and the recursive stack depth.

# Code
```ruby []
# @param {String} expression
# @return {Integer[]}

# A memoization hash to store previously calculated results for subexpressions.
$memo = {}

OPERATIONS = {
  '-' => lambda { |x, y| x - y },
  '+' => lambda { |x, y| x + y },
  '*' => lambda { |x, y| x * y }
}

def diff_ways_to_compute(expression)
  dfs(expression)
end

# Recursive function to compute all possible results from the input expression.
def dfs(exp)
  # If the result of this subexpression is already computed, return it.
  return $memo[exp] if $memo.key?(exp)

  results = []

  # Check if the expression is a simple number.
  if is_number?(exp)
    results << exp.to_i
    return results
  end

  # Iterate over each character of the expression.
  (0...exp.length).each do |i|
    c = exp[i]
    
    # Check if the current character is an operator.
    if OPERATIONS.key?(c)
      # Recursively solve the subexpression to the left of the operator.
      left_results = dfs(exp[0...i])
      # Recursively solve the subexpression to the right of the operator.
      right_results = dfs(exp[(i+1)..-1])

      # Combine the results from both subexpressions based on the operator.
      left_results.each do |a|
        right_results.each do |b|
          # Apply the corresponding lambda function based on the operator.
          results << OPERATIONS[c].call(a, b)
        end
      end
    end
  end

  # Store the computed results in the memoization hash before returning.
  $memo[exp] = results
  results
end

def is_number?(str)
  str.match?(/^\\d+$/)
end
```
```javascript []
/**
 * @param {string} expression
 * @return {number[]}
 */

const memo = {};

const OPERATIONS = {
  '-': (x, y) => x - y,
  '+': (x, y) => x + y,
  '*': (x, y) => x * y
};

var diffWaysToCompute = function(expression) {
  return dfs(expression);
};

// Recursive function to compute all possible results from the input expression.
function dfs(exp) {
  // If the result of this subexpression is already computed, return it.
  if (memo[exp]) {
    return memo[exp];
  }

  const results = [];

  // Check if the expression is a simple number.
  if (isNumber(exp)) {
    results.push(parseInt(exp));
    return results;
  }

  // Iterate over each character of the expression.
  for (let i = 0; i < exp.length; i++) {
    const c = exp[i];
    
    // Check if the current character is an operator.
    if (OPERATIONS[c]) {
      // Recursively solve the subexpression to the left of the operator.
      const leftResults = dfs(exp.substring(0, i));
      // Recursively solve the subexpression to the right of the operator.
      const rightResults = dfs(exp.substring(i + 1));

      // Combine the results from both subexpressions based on the operator.
      for (let a of leftResults) {
        for (let b of rightResults) {
          // Apply the corresponding function based on the operator.
          results.push(OPERATIONS[c](a, b));
        }
      }
    }
  }

  // Store the computed results in the memoization object before returning.
  memo[exp] = results;
  return results;
}

function isNumber(str) {
  return /^\\d+$/.test(str);
}
```