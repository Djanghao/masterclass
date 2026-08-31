# Official Solution

**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solution/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solution/)

---

[TOC]

## Solution

---

### Overview

We start with a string `s` composed of lowercase English letters and parentheses. Our goal is to reverse the substrings enclosed within each pair of matching parentheses, starting from the innermost pair and working our way outward. Ultimately, we want to produce a string without any parentheses that reflects these reversals.

To tackle this problem, we need to simulate the process of reversing characters within the parentheses. This can be approached either iteratively or recursively, but the key challenge is to manage the parentheses and the elements between them effectively.

First, let's understand the role of each parenthesis:
- An opening parenthesis `(` signals the start of a section that will eventually be reversed.
- A closing parenthesis `)` signals the end of such a section.

Given that parentheses might be nested, we can't simply reverse the substrings as we encounter them. Instead, we need to start with the innermost pairs. This requires a mechanism to pair each opening parenthesis with its corresponding closing parenthesis and then reverse the substrings when we've identified the innermost pairs.

To achieve this, we use a stack to keep track of the indices of the opening parentheses. When we encounter a closing parenthesis, we pop the last index from the stack, which gives us the position of the matching opening parenthesis. By keeping track of these positions, we can navigate back and forth within the string.

---

### Approach 1: Straightforward Way

#### Intuition

To achieve the proper reversal, we use a stack data structure to keep track of the indices of the opening parentheses. Each time we encounter an opening parenthesis `(`, we push the current length of our result string onto the stack. This length serves as a marker, indicating the start position of the substring that will need to be reversed once we find its corresponding closing parenthesis `)`.

When we encounter a closing parenthesis `)`, we pop the last index from the stack. This index represents the position of the matching opening parenthesis for the current closing parenthesis. Using this index, we know exactly where the substring that needs to be reversed begins. We then proceed to reverse the substring in the result string from this start position (obtained from the stack) to the current end of the result string.

By keeping track of these positions using the stack, we can efficiently navigate back and forth within the string to perform the necessary reversals. This approach ensures that we correctly handle nested parentheses by always reversing the innermost pairs first before moving outward, ultimately producing the desired output string.

In a nutshell, we can summarize the approach into two parts:
1. Traversal and Processing:
    - As we iterate through the string `s`, we check each character:
        - For `(`: We push the current length of the result onto the stack.
        - For `)`: We pop the top of the stack to get the index of the corresponding `(`, then reverse the substring in the result from this index to the end.
        - For any other character: We append it to the result.

2. Handle Closing Parentheses:
    - When we encounter a closing parenthesis, we pop the last index from the stack. This index marks the corresponding opening parenthesis.
    - We then reverse the substring in the result from this index to the current end. This reversal handles the innermost section of the string first.
    - After processing all characters in the string `s`, our result contains the desired string.

#### Algorithm

- Initialize an empty stack `openParenthesesIndices` to track reversal start points and an empty string `result` to build the output.

- For each character `currentChar` in the input string:
   - If `'('`, push `result`'s length to `openParenthesesIndices` to mark a potential reversal start.
   - If `')'`, pop from `openParenthesesIndices` and reverse `result` from the popped index to perform the required reversal.
   - Otherwise, append `currentChar` to `result` to build the string.

- Return `result` as the final string with all reversals applied.

> Note: Since this problem uses a stack, you can also try to solve the problem recursively. Recursion and stack-based solutions are often interchangeable because function call stacks can mimic the behavior of explicit stacks.

#### Implementation

<iframe src="https://leetcode.com/playground/8RuEpGhA/shared" frameBorder="0" width="100%" height="500" name="8RuEpGhA"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string.

- Time complexity: $O(n^2)$

    The algorithm iterates through each character of the input string once. For each character, we have three cases:
    - If it's `(`, we push its index or the starting position where the reversal takes place to the stack. This is $O(1)$.
    - If it's `)`, we pop from the stack and reverse a portion of the `result` string. Popping is $O(1)$.
        - The reverse operation can take up to $O(n)$ time in the worst case (when we reverse the entire string).
    - For other characters, we append to the `result` string, which is typically $O(1)$ (amortized).

    The worst-case scenario occurs when we have to reverse large portions of the string multiple times. In the worst case, we might end up reversing the entire string for each closing parenthesis. Therefore, the overall time complexity is $O(n^2)$ in the worst case.

- Space complexity: $O(n)$

    The algorithm uses a stack to store the indices of opening parentheses. In the worst case (when all characters are opening parentheses), this could take $O(n)$ space. The reverse function typically doesn't use extra space proportional to the input size. Therefore, the overall space complexity is $O(n)$.

---

### Approach 2: Wormhole Teleportation technique

#### Intuition

The previous approach used the reverse function, causing multiple reversals on the same string and resulting in $O(n^2)$ time complexity. To optimize this, we can rethink the problem using the concept of 'wormholes/jumping' for paired parentheses.

> According to Wikipedia, a [wormhole](https://en.wikipedia.org/wiki/Wormhole) can be visualized as a tunnel with two ends at separate points in spacetime (i.e., different locations, different points in time, or both).

To achieve this, we use two passes through the input string:

1. Pairing Parentheses (First Pass):
In the first pass, we use a stack (`opened`) to keep track of the indices of opening parentheses and a pair list to store the indices of matching parentheses.
As we iterate through the string, we can come across two scenarios:
    - When we encounter an opening parenthesis `'('`, we push its index onto the `opened` stack.
    - When we encounter a closing parenthesis `')'`, we:
        - Pop the top index from the `opened` stack (this is the index of the matching opening parenthesis).
        - Create bidirectional links in the pair list between the current closing parenthesis and its matching opening parenthesis.

2. Traversing and Building Result (Second Pass):
Now, we can traverse the string as we know all the entry and exit points of parenthesis. So, we traverse using two variables:
`currIndex`: the current position in the string
`direction`: the direction of traversal (1 for forward, -1 for backward)

As we iterate through the string:
- If the current character is a parenthesis (either `'('` or `')'`):
    - We "teleport/jump" to its matching parenthesis using the pair list.
    - We reverse the direction of traversal.
- If the current character is not a parenthesis:
    - We add it to our result string.
- We move to the next position by adding the current direction (`direction`) to our position (`currIndex`).

The key concept in this approach is treating paired parentheses as 'wormholes'. When encountering a parenthesis, we imagine jumping through a wormhole to its match and reversing our direction. This effectively reverses the order of characters within each pair of parentheses without actually reversing the string.

```
forward ->  ( ... ( ... ) ... )  <- backward
             ^     ^    ^     ^
             |     |    |     |
             A-----B----b-----a
                  wormholes
```

See the above art and observe: When we hit the opening parenthesis(`A`), we jump to its closing pair(`a`) and start moving backward. When we hit the closing parenthesis(`b`) while moving backward, we jump to its opening pair and start moving forward again(`B`). This motion will ultimately lead to our result string without using the reverse function. Reducing the time complexity to $O(n)$.

#### Algorithm

- First Pass: Pair up parentheses
   - Initialize `openParenthesesIndices` stack and `pair` vector to establish "wormhole" connections.
   - For each character:
     - If `'('`, push its index to `openParenthesesIndices` to remember its position.
     - If `')'`, pop from `openParenthesesIndices` and link both indices in `pair` to create the "wormhole".

- Second Pass: Build the result string
   - Initialize `result` string, `currIndex`, and `direction` to traverse and build the result.
   - While `currIndex` < input length:
     - If `'('` or `')'`, jump through the "wormhole" using `pair` and reverse `direction` to simulate reversal.
     - Otherwise, append the character to `result` to build the result.
     - Move `currIndex` by `direction` to continue traversal.

- Return `result` as the final string with all reversals simulated.

The algorithm is visualized below:

!?!../Documents/1190/approach2.json:975,652!?!

#### Implementation

<iframe src="https://leetcode.com/playground/WmYTuZxs/shared" frameBorder="0" width="100%" height="500" name="WmYTuZxs"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string.

* Time complexity: $O(n)$

    We iterate through the string once to pair up parentheses using a stack. Each character is processed once, resulting in $O(n)$ time complexity.

    After pairing, we iterate through the string again to construct the final result string. During this pass, each character is processed once, and we navigate through pairs in constant time. This results in another $O(n)$ time complexity.

    Converting a `StringBuilder` to a `String` in Java using `toString()` takes $O(n)$ time, where `n` is the length of the `StringBuilder`. Joining elements of a list into a string in Python using `''.join()` also takes $O(n)$ time. Combined, the total time complexity is $O(n)$.

* Space complexity: $O(n)$

    We use a stack to track indices of opening parentheses. In the worst case, the stack may hold up to $O(n/2)$ elements (when all are opening parentheses), resulting in $O(n)$ space complexity. An array `pair` of size `n` is used to store indices of matching parentheses. This contributes $O(n)$ space complexity.

    Converting a `StringBuilder` to a `String` in Java generally does not increase space complexity beyond the size of the resulting string itself. However, `StringBuilder` internally manages a character array whose size might be slightly larger than the resulting string due to its capacity management strategy. The additional space complexity for `''.join()` in Python is $O(n)$, accounting for the space needed to store the new string object.

    Therefore, the total space complexity is $O(n)$.

---