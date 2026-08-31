# Official Solution

**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solution/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solution/)

---

[TOC]

## Solution

--- 

### Approach: Greedy + Stack

#### Intuition

We are provided a push sequence of a stack and we need to find the smallest lexicographical pop sequence. Consider the top element $c$ of the stack and the smallest character $\textit{minCharacter}$ remaining in the string $s$:

- If $c < \textit{minCharacter}$, then the top element of the stack must be popped to ensure the smallest possible pop sequence.
- If $c > \textit{minCharacter}$, then the top element should be retained, and we should continue pushing characters until we encounter $\textit{minCharacter}$, ensuring the minimum lexicographical sequence.
- If $c = \textit{minCharacter}$, then the top element must also be popped to achieve the smallest sequence. This is because we can pop $c$ now, and later push and pop $\textit{minCharacter}$, resulting in two consecutive minimal characters in the output. Otherwise, if we wait and only pop $\textit{minCharacter}$ later, we’ll end up with just one occurrence, and subsequent characters will be greater than or equal to it.

Following this greedy approach, we push characters onto the stack one by one. After each push, we update $\textit{minCharacter}$ to be the smallest character remaining in the string and compare it with the stack’s top. If the condition allows, we pop from the stack; otherwise, we continue the loop. Finally, we return the resulting string.

#### Implementation

<iframe src="https://leetcode.com/playground/Rh72Ugq9/shared" frameBorder="0" width="100%" height="500" name="Rh72Ugq9"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $s$, and let $|\Sigma|$ denote the size of the character set.

- Time complexity: $O(n + |\Sigma|)$.
  
  We first count the frequency of each character in the string, which takes $O(n)$ time. Then, we iterate through the string once, performing constant-time stack operations and updating the minimum character tracker, which involves at most $|\Sigma|$ steps across the entire process. Therefore, the total time complexity is $O(n + |\Sigma|)$.
  
- Space complexity: $O(n)$.
  
  We use a hash map to store character frequencies and a stack to simulate the operations. Both the hash map and the stack require at most $O(n)$ space.