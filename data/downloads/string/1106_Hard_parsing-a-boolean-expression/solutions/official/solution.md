# Official Solution

**Link:** [https://leetcode.com/problems/parsing-a-boolean-expression/solution/](https://leetcode.com/problems/parsing-a-boolean-expression/solution/)

---

[TOC]

## Solution

--- 

### Overview

We need to evaluate a boolean expression that follows specific rules. These rules allow for expressions that include literals for `true` ('t') and `false` ('f'), as well as logical operations like NOT ('!'), AND ('&'), and OR ('|'). The goal is to reduce the expression by applying these operations step by step until we arrive at either `true` or `false`.

For example, consider the expression `&(|(f))`. We first evaluate the OR expression inside the parentheses. Since it's `|(f)`, it results in `false`. Now, the expression becomes `&(f)`, which is an AND operation. Since there's only one `f`, the result is `false`.

<details> 

<summary> HINT </summary>

Start by identifying the innermost expression enclosed in parentheses and work your way outward, applying the relevant logical operation each time.

</details>

---

### Approach 1: String Manipulation

#### Intuition

We need to find the deepest part of the expression, which is usually within the innermost parentheses. We search for the last operator in the string because it likely corresponds to the most nested part. Once we locate it, we grab everything between that operator and its closing parenthesis. This forms a subexpression that we can evaluate independently.

For example, in `&(t, |(f, t))`, we first look inside the `|` operator since it is nested within the `&`. Evaluating `|(f, t)` tells us that, because one of the values is `t`, the result of this subexpression is `t`. We then replace `|(f, t)` with `t`, reducing the problem to `&(t, t)`. Finally, we evaluate the `&`, which returns `t` since both values are true.

This makes sense in smaller steps, but since we are creating new strings each time we reduce an expression, it becomes slow as the expression grows. Each time we replace a subexpression, we are dealing with the entire string again, which is inefficient.

#### Algorithm

- Start a loop that continues until the length of `expression` is greater than 1:
  - Find the position of the last logical operator (`!`, `&`, or `|`) in the `expression` and store it in `start`.
  - Find the position of the corresponding closing parenthesis `)` that matches the last operator, and store it in `end`.
  - Extract the substring `subExpr` from `expression` that includes the operator and the values enclosed in parentheses.

- Call `evaluateSubExpr(subExpr)` to evaluate the subexpression:
  - In `evaluateSubExpr`, extract the operator from `subExpr`.
  - Get the values by taking the substring from index 2 to the second-to-last character.
  - Depending on the operator:
    - If it’s `!`, return `'f'` if the first value is `'t'`, otherwise return `'t'`.
    - If it’s `&`, return `'f'` if any value is `'f'`, otherwise return `'t'`.
    - If it’s `|`, return `'t'` if any value is `'t'`, otherwise return `'f'`.

- Replace the evaluated `subExpr` in `expression` with the result (either `'t'` or `'f'`).

- After simplifying the expression completely, return `true` if the remaining character in `expression` is `'t'`; otherwise, return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/cgASQu5Z/shared" frameBorder="0" width="100%" height="500" name="cgASQu5Z"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `expression` string.

- Time complexity: $O(n^2)$

    The while loop continues while the length of the `expression` is greater than 1. In the worst case, we might evaluate every subexpression multiple times, leading to a total of $O(n)$ iterations. Within each iteration, the operations `find_last_of`, `find`, and `substr` each can take up to $O(n)$ time in the worst case. Hence, the overall time complexity becomes $O(n^2)$.

- Space complexity: $O(n)$

    The space complexity primarily comes from the storage of substrings created during the evaluation of subexpressions. The `subExpr` variable holds a substring of the `expression`, and the maximum length of `subExpr` can be up to $O(n)$. Additionally, the recursive calls to `evaluateSubExpr` can lead to stack space usage, but since we don't have deep recursion (the depth is limited by the number of operations in the expression), it does not significantly affect the space complexity. Thus, the overall space complexity is $O(n)$.

---

### Approach 2: Recursive 

#### Intuition

Similar to the previous approach, we check character by character. When we come across a boolean value (`t` or `f`), we can immediately return it as the result. However, when we see an operator like `!`, `&`, or `|`, we know it controls what comes inside the parentheses following it. We skip the opening parenthesis and move into the subexpression. 

For the `!` operator, we expect one boolean value. We simply negate this value and return the opposite. For `&`, we know all values inside must be true for the result to be true, so we evaluate each one, stopping if we find an `f`. The `|` operator works similarly, but we stop as soon as we find a `t`.

Take the expression `&(t, |(f, t))` as an example. We first encounter `&`, which tells us we need to evaluate everything inside the parentheses. We then encounter `|`, which tells us to evaluate its inner subexpression. When we find that one of the values is `t`, we return `t` for the `|` part. Now the expression simplifies to `&(t, t)`, which evaluates to `t`.

Here we don’t repeat work or manipulate the string like in the previous approach, making it a little more efficient.

#### Algorithm

- Initialize `index` to `0` and call the `evaluate` function with the current expression and index.

- In the `evaluate` function:
    - Read the current character from `expression` at `index`, and increment `index` by 1.

  - Base cases:
    - If the character is 't' (true), return `true`.
    - If the character is 'f' (false), return `false`.

  - Handle the NOT operation ('!(...)'):
    - If the character is '!', increment `index` to skip the '('.
    - Recursively evaluate the inner expression and negate the result (using `!`), then increment `index` to skip the ')'.
    - Return the negated result.

  - Handle the AND ('&(...)') and OR ('|(...)') operations:
    - Initialize an array `values` to store the results of subexpressions.
    - Increment `index` to skip the '('.
    - While the current character is not ')':
      - If the character is not a comma, recursively evaluate the subexpression and add the result to `values`.
      - If the character is a comma, increment `index` to skip it.
    - After exiting the loop, increment `index` to skip the ')'.

  - Manual AND operation:
    - If the character is '&', iterate through `values`.
      - If any value is `false`, return `false`.
    - If all values are `true`, return `true`.

  - Manual OR operation:
    - If the character is '|', iterate through `values`.
      - If any value is `true`, return `true`.
    - If all values are `false`, return `false`.

  - Return `false` at the end of the function (this point should never be reached).


#### Implementation

<iframe src="https://leetcode.com/playground/Wd8HfyHL/shared" frameBorder="0" width="100%" height="500" name="Wd8HfyHL"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `expression` string.

- Time complexity: $O(n)$

    We traverse the entire expression string at most once, as each character is processed sequentially. Each recursive call to `evaluate` processes one character and the calls return only when the entire expression is evaluated. Therefore, in the worst case, where all characters are involved in the expression, the time complexity is linear in terms of the size of the expression.

- Space complexity: $O(n)$

    The space complexity arises from the recursion stack due to the depth of the recursive calls. In the worst case, if the expression is deeply nested, the recursion depth can reach up to $n$, leading to a stack space usage of $O(n)$. 
    
    Additionally, the space used by the `values` can also contribute to the space complexity, but its size depends on the number of boolean values being evaluated at each level, which is bounded by the size of the expression. Thus, the overall space complexity remains $O(n)$.

---

### Approach 3: Using Stack

#### Intuition

Instead of recursion, we can use a stack to simulate the nested structure of the expression. The stack will keep track of what we are currently evaluating, allowing us to process each part of the expression step by step without making recursive function calls.

Iterate from left to right and as we encounter operators, boolean values, and parentheses, we push them onto the stack. When we find a closing parenthesis `)`, we know we’ve reached the end of a subexpression. At this point, we pop values off the stack until we reach the matching opening parenthesis `(`. These popped values form the subexpression, and we can now evaluate it.

For example, with the expression `&(t, |(f, t))`, we first push `&` onto the stack, followed by `t`. When we encounter `|`, we push it and continue with `f` and `t`. Once we find the closing parenthesis for the `|` subexpression, we pop `t` and `f` off the stack and evaluate `|`. Since one value is `t`, the result of this subexpression is `t`, which we push back onto the stack. Finally, we continue by evaluating the `&` operator with the remaining values on the stack.

The internal working is extremely similar to [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/) problem, if you haven't solved it, then it's recommended to solve it.

#### Algorithm

- Initialize a stack `st` to hold characters as we parse the expression.

- Traverse the entire `expression`:
  - If the current character is `')'`, it indicates the end of a subexpression:
    - Initialize a array `values` to collect all values inside the parentheses.
    - While the top of the stack is not `'('`, pop characters from the stack into `values`.
    - Pop the `'('` from the stack.
    - Pop the operator from the top of the stack.

    - Call `evaluateSubExpr(op, values)` to evaluate the subexpression:
      - Push the result back onto the stack.

  - If the current character is not a comma, push it onto the stack.

- After traversing the expression, the final result will be on the top of the stack.

- Return `true` if the top of the stack is `'t'`, indicating that the expression evaluates to `true`, otherwise return `false`.

- The `evaluateSubExpr` function evaluates a subexpression based on the operator and the list of values:
  - If the operator is `'!'`, return `'f'` if the first value is `'t'`, otherwise return `'t'`.
  - If the operator is `'&'`, iterate through the values:
    - Return `'f'` if any value is `'f'`, otherwise return `'t'`.
  - If the operator is `'|'`, iterate through the values:
    - Return `'t'` if any value is `'t'`, otherwise return `'f'`.

#### Implementation

<iframe src="https://leetcode.com/playground/KJueFSYj/shared" frameBorder="0" width="100%" height="500" name="KJueFSYj"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `expression` string.

- Time complexity: $O(n)$

    We traverse the `expression` string once, processing each character in $O(1)$ time. The only significant work happens when we encounter a closing parenthesis `)`, where we collect values from the stack until we reach the corresponding opening parenthesis `(`. In the worst case, all characters in the expression may contribute to these operations, but each character is processed only once. Thus, the overall time complexity is linear.

- Space complexity: $O(n)$

    The space complexity primarily depends on the stack used to store the characters of the expression and the temporary storage for values inside parentheses. In the worst case, the stack can hold all characters of the expression, resulting in $O(n)$ space. Additionally, when processing nested operations, temporary storage might also hold up to $n$ characters, leading to the same $O(n)$ space complexity.

---

### Approach 4: Optimized Stack

#### Intuition

Instead of pushing every character onto the stack, we focus only on the meaningful elements—operators, boolean values, and parentheses—while ignoring commas, which don’t affect the result.

We still push operators and boolean values onto the stack as we read the expression. But when we encounter a closing parenthesis, we start evaluating the subexpression immediately by popping values off the stack. The key improvement here is that we can stop early if the result becomes obvious. For instance, with the `&` operator, if we find a `f` while popping values, we know the result of the subexpression is `f` and can stop without checking the rest. Similarly, for the `|` operator, finding a `t` allows us to stop early.

Consider the expression `&(t, |(f, t))`. As before, we push `&` and `t`, then `|`, followed by `f` and `t`. When we pop values for the `|` subexpression, we immediately know the result is `t` because one of the values is `t`. We push `t` back onto the stack and continue with the `&` operator, which evaluates to `t` because both values are true.

!?!../Documents/1106/op_stack.json:1025,755!?!

#### Algorithm

- Initialize an empty stack `st` to keep track of operators and boolean values.

- Traverse through each character in the `expression`:
  - If the current character is a comma `,` or an open parenthesis `(`, skip it (continue to the next character).
  
  - If the current character is a boolean value (`t` for true, `f` for false) or an operator (`!`, `&`, `|`), push it onto the stack.

  - If the current character is a closing parenthesis `)`:
    - Initialize two boolean flags: `hasTrue` and `hasFalse` to track the presence of true and false values within the parentheses.

    - Process the values inside the parentheses:
      - While the top of the stack is not an operator (`!`, `&`, `|`):
        - Pop the top value from the stack and check:
          - If it is `t`, set `hasTrue` to `true`.
          - If it is `f`, set `hasFalse` to `true`.

    - After processing values, pop the operator from the top of the stack.
    - Evaluate the subexpression based on the operator:
      - If the operator is `!`, push `f` if `hasTrue` is `true`; otherwise, push `t`.
      - If the operator is `&`, push `f` if `hasFalse` is `true`; otherwise, push `t`.
      - If the operator is `|`, push `t` if `hasTrue` is `true`; otherwise, push `f`.

- After processing the entire expression, the final result will be at the top of the stack:
  - Return `true` if the top of the stack is `t`, otherwise return `false`.

#### Implementation

<iframe src="https://leetcode.com/playground/SarqEB82/shared" frameBorder="0" width="100%" height="500" name="SarqEB82"></iframe>

#### Complexity Analysis

Let $n$ be the size of the `expression` string.

- Time complexity: $O(n)$

    We traverse each character in the `expression` string once. For each character, operations like pushing to and popping from the stack are $O(1)$ operations. Therefore, the overall time complexity is linear in terms of the length of the input string.

- Space complexity: $O(n)$

    The maximum space used by the stack occurs when every character in the `expression` is a boolean value or an operator without any closing parentheses. In the worst case, all characters might be pushed onto the stack, resulting in a space complexity of $O(n)$. This includes the storage for the stack itself, which could potentially hold all the characters of the expression.

---