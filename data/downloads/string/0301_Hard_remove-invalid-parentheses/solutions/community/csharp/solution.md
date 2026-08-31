# C# - Recursion And Backtracking With Explanation

**Author:** saberzero1
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/3688555/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/3688555/)

---

## Table of Contents

- [Explanation](#explanation)
- [Approach](#approach)
- [Complexity](#complexity)
- [Code](#code)

# Explanation

The program uses [Backtracking](https://en.wikipedia.org/wiki/Backtracking) and [Recursion](https://en.wikipedia.org/wiki/Recursion_(computer_science))

<details>
<summary>Click here for an explanation about <strong>Backtracking</strong></summary>
<blockquote><p>A backtracking algorithm is a type of search algorithm that is used for solving optimization and constraint satisfaction problems. It works by first exploring all possible paths through the problem solution space, and then systematically eliminating those paths that cannot lead to a valid solution.</p>

<p>At each step of the backtracking process, the algorithm examines the current configuration to determine if it satisfies all constraints and if it is a valid solution. If not, the algorithm will "backtrack" by undoing any previous decisions and trying a different path. This process is repeated until a is found or all paths have been exhausted.</p>

<p>Backtracking algorithms are commonly used in puzzle applications such as Sudoku and the Eight Queens Puzzle. They can also be applied to more complex problems such as network routing and scheduling. The key advantage of backtracking algorithms is their ability to search through a large solution space efficiently by eliminating unproductive paths early on.</p></blockquote>
</details>

<details>
<summary>Click here for an explanation about <strong>Recursion</strong></summary>
<blockquote><p>A recursion algorithm is a programming technique that involves calling a function within itself. In other words, the function keeps calling itself until it reaches a base case or condition that stops the recursion. Recursion is used to solve problems that can be broken down into smaller sub-problems, and where the solution to the original problem depends on the solutions to the sub-problems.</p>

<p>One use case for recursion is in traversing data structures like trees, where a node may have multiple child nodes, which in turn may have their own child nodes. Recursion can also be used in numerical methods, such as the Fibonacci sequence or factorials.</p>

<p>However, it is important to be cautious when using recursion as it can lead to unwanted outcomes such as infinite loops or stack overflows if not implemented correctly. It is also generally less efficient than iteration, which is where a loop is used to repeat a process until a certain condition is met.</p></blockquote>
</details>

# Approach

1. First, we handle the edge case where the input string `s` is empty. In this case, we add an empty string to the list of valid expressions and return it.
2. We count the number of misplaced parentheses in the input string `s`. We iterate through each character of the string and maintain counters for misplaced open parentheses `misplacedOpen` and misplaced closing parentheses `misplacedClose`. Whenever we encounter a closing parenthesis without a corresponding open parenthesis, we increment `misplacedClose`. If we find an open parenthesis without a corresponding closing parenthesis, we increment `misplacedOpen`. These counts represent the minimum number of parentheses that need to be removed to make the string valid.
3. We use a recursive helper function `GenerateExpressions` to generate all valid expressions with the minimum number of removals. The function takes parameters such as the input string `s`, the current index, counts of misplaced open and closing parentheses, the current count of open parentheses, an expression list to store the generated expression, and a HashSet to store the unique valid expressions.
4. The `GenerateExpressions` function works as follows:
    - Base case: If the current index reaches the end of the string (index == s.Length), we check if the counts of misplaced open and closing parentheses are both zero. If they are, it means we have a valid expression. We convert the expression list to a string and add it to the HashSet of valid expressions.
    - Recursive cases:
      - If the current character is not a parenthesis `currentChar != '(' && currentChar != ')'`, we add it to the expression list and recursively call the function for the next index.
      - If the current character is a misplaced opening parenthesis `currentChar == '(' && misplacedOpen > 0` or a misplaced closing parenthesis `currentChar == ')' && misplacedClose > 0`, we can remove it by decrementing the corresponding misplaced count and recursively calling the function for the next index.
      - If the current character is a valid parenthesis (either an opening parenthesis with a corresponding count of open parentheses or a closing parenthesis with a count of open parentheses greater than zero), we add it to the `expression` list and adjust the open count accordingly. Then, we recursively call the function for the next index.
      - After each recursive call, we remove the last character from the expression list to backtrack and explore other possibilities.
5. Finally, we convert the HashSet of valid expressions to a List and return it as the result.

# Complexity

- Time complexity: $$O(2^M * N)$$

Let $$N$$ be the length of the input string `s`. In the worst case, the number of recursive calls is exponential. Each recursive call processes one character of the string and performs constant-time operations. Therefore, the overall time complexity is $$O(2^M * N)$$, where $$M$$ is the number of misplaced parentheses $$(M <= N)$$.

- Space complexity: $$O(2^M + N)$$

The space required for the HashSet `validExpressions` is proportional to the number of unique valid expressions generated, which can be at most $$2^M$$. The recursion depth is limited by the length of the input string, so the maximum depth is $$N$$. The additional space used by the recursive calls and the `expression` list is proportional to the recursion depth, which is $$N$$. Therefore, the overall space complexity is $$O(2^M + N)$$.

# Code
```
using System.Collections.Generic;

public class Solution {
    public IList<string> RemoveInvalidParentheses(string s) {
        HashSet<string> validExpressions = new HashSet<string>();

        // Edge case: empty string
        if (s == null || s.Length == 0) {
            validExpressions.Add("");
            return new List<string>(validExpressions);
        }

        // Count the number of misplaced parentheses
        int misplacedOpen = 0;
        int misplacedClose = 0;

        foreach (char c in s) {
            if (c == '(') {
                misplacedOpen++;
            } else if (c == ')') {
                if (misplacedOpen > 0) {
                    misplacedOpen--;
                } else {
                    misplacedClose++;
                }
            }
        }

        // Recursive helper function to generate valid expressions
        GenerateExpressions(s, 0, misplacedOpen, misplacedClose, 0, new List<char>(), validExpressions);

        return new List<string>(validExpressions);
    }

    private void GenerateExpressions(string s, int index, int misplacedOpen, int misplacedClose, int openCount, List<char> expression, HashSet<string> validExpressions) {
        // Base case: reached the end of the string
        if (index == s.Length) {
            if (misplacedOpen == 0 && misplacedClose == 0) {
                validExpressions.Add(new string(expression.ToArray()));
            }
            return;
        }

        char currentChar = s[index];

        // Case 1: Skip the current character
        if (currentChar != '(' && currentChar != ')') {
            expression.Add(currentChar);
            GenerateExpressions(s, index + 1, misplacedOpen, misplacedClose, openCount, expression, validExpressions);
            expression.RemoveAt(expression.Count - 1);
        } else {
            // Case 2: Remove the current character
            if ((currentChar == '(' && misplacedOpen > 0) || (currentChar == ')' && misplacedClose > 0)) {
                GenerateExpressions(s, index + 1, misplacedOpen - (currentChar == '(' ? 1 : 0), misplacedClose - (currentChar == ')' ? 1 : 0), openCount, expression, validExpressions);
            }

            // Case 3: Keep the current character
            expression.Add(currentChar);

            if (currentChar == '(') {
                GenerateExpressions(s, index + 1, misplacedOpen, misplacedClose, openCount + 1, expression, validExpressions);
            } else if (openCount > 0) {
                GenerateExpressions(s, index + 1, misplacedOpen, misplacedClose, openCount - 1, expression, validExpressions);
            }

            expression.RemoveAt(expression.Count - 1);
        }
    }
}
```