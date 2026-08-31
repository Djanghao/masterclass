# Official Solution

**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solution/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solution/)

---

## Solution

---

### Approach 1: Stack

#### Intuition

The most important point in the problem description is that the given string is a valid parentheses string (VPS). This means there will always be a matching closing bracket for every opening bracket. Hence, we don't need to check the validity of the given expression. Since the nesting depth depends only on the bracket counts, we can ignore the rest of the characters, such as integers and operators.

The maximum nesting depth is equal to the maximum number of open brackets at a time. The stack data structure is the first choice in solving brackets matching problems. In this approach, we will use a stack to store the opening brackets. Whenever we reach a closing bracket, we will pop one bracket from the stack. Since the string is always valid, we don't have to check if the stack is empty. After each iteration, we will check the size of the stack and update the variable `ans` if the size is more than the value of `ans`.

#### Algorithm

1. Initialize a variable `ans` to `0`. This will store the maximum nesting depth so far.
2. Initialize an empty stack `st`.
3. Iterate over the characters in the string `s`, for each character `c`:

    - If `c` is equal to `(`, add it to the stack `st`.
    - If `c` is equal to `)`, pop one element from the stack `st`.
    - Update `ans` as the max of `ans` and `st.size()`.
4. Return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/VVGe6qYi/shared" frameBorder="0" width="100%" height="378" name="VVGe6qYi"></iframe>

#### Complexity Analysis

Here, $N$ is the number of characters in the string `s`.

* Time complexity: $O(N)$

  We are iterating over each character in the string `s`, and hence the time complexity will be equal to $O(N)$.

* Space complexity: $O(N)$

  The size of the stack can grow up to $\frac{N}{2}$ for strings like `(((())))`, and hence the space complexity of this approach will be $O(N)$.

---

### Approach 2: Counter variable

#### Intuition

The above approach is easily extendable to cases where the input has brackets of multiple types like `[]`, `()`, and `{}`. It is also useful if the input is invalid because we can match the current closing bracket with the previous one, even if they are different types.

However, the problem here is a very specific use case where the string will only have brackets of type `()` and will always be valid. Hence, using a stack is not necessary. Instead, we can use a variable to keep the count of open brackets and compare it with the variable `ans` to track the maximum nesting depth. For every open bracket `(`, we will increment the variable `openBrackets`, and for every closing bracket, we will decrement it (it will never be negative as the string is valid).

![fig](../Figures/1614/1614A.png)

#### Algorithm

1. Initialize a variable `ans` to `0`. This will store the maximum nesting depth so far.
2. Initialize a variable `openBrackets` to `0`. This will store the current open brackets count.
3. Iterate over the characters in the string `s`, for each character `c`:

    - If `c` is equal to `(`, increment the counter `openBrackets`.
    - If `c` is equal to `)`, decrement the counter `openBrackets`.
    - Update `ans` as the max of `ans` and `openBrackets`.
4. Return `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/TRPZUwje/shared" frameBorder="0" width="100%" height="378" name="TRPZUwje"></iframe>

#### Complexity Analysis

Here, $N$ is the number of characters in the string `s`.

* Time complexity: $O(N)$

  We are iterating over each character in the string `s`, and hence the time complexity will be equal to $O(N)$.

* Space complexity: $O(1)$

  The only variables we require are `openBrackets` and `ans`. Hence, the space complexity is constant.

---