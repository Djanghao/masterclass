# Official Solution

**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solution/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solution/)

---

[TOC]

## Solution
    
---

### Approach 1: Greedy

#### Intuition

Our task is to modify a string so that every consecutive occurrence of `0`s and `1`s has an even length. Since the length of the string itself is even, we can be confident that a solution exists.

To tackle this, we can loop through each character in the string while keeping track of the current sequence's length. If we reach the end of a sequence and its length is even, we can simply move on to the next sequence. 

If we find that the sequence has an odd length, we will flip the last bit of that sequence to make it even. It's important to note that flipping the last bit will add an additional bit to the next sequence. So, we need to account for this when calculating the length of the upcoming sequence.

The total number of flips we have to make before we reach the end of the string is our required answer.
</br>

<details>
<summary>A proof by contradiction of the greedy approach</summary>

Let's assume there exists a better solution that requires fewer flips by flipping some bit other than the last bit in at least one odd-length sequence.
Consider an odd-length sequence $S_1$ of length $k$, where $k$ is odd. This sequence is followed by another sequence $S_2$.

Let $S_1 = {b_1, b_2, ..., b_k}$ where all bits are same (either all 0s or all 1s)

Let $S_2$ starts with a different bit than $S_1$

Two possible approaches for making $S_1$ even-length:
- Case A: Flip the last bit ($b_k$)
- Case B: Flip any other bit ($b_i$ where $i < k$)


Analysis of Case A (Flipping last bit):

$S_1$ becomes length ($k-1$). The flipped bit becomes part of $S_2$

$\therefore$ Cost: 1 flip.


Analysis of Case B (Flipping non-last bit):

$S_1$ is split into two sequences of even length but a non-terminal bit of length 1 (odd) remains. To remove this, further flips are needed. 

$\therefore$ Cost: More than 1 flip.

Therefore, our assumption that there exists a better solution must be false.
</details>

#### Algorithm

- Initialize variables: 
  - `currentChar` to the first character of the input string.
  - `consecutiveCount` to 0 to track the count of consecutive same characters.
  - `minChangesRequired` to 0 to store the minimum changes needed.
- Iterate through each character in the input string:
  - If the current character matches `currentChar`:
    - Increment `consecutiveCount` by 1 and skip to the next iteration.
  - If `consecutiveCount` is even:
    - Set `consecutiveCount` to 1 to start a new sequence with the current character.
  - If `consecutiveCount` is odd:
    - Set `consecutiveCount` to 0.
    - Increment `minChangesRequired` by 1 as we need to change the current character.
  - Update `currentChar` to the current character for the next iteration.
- Return `minChangesRequired` as the final answer.

#### Implementation

<iframe src="https://leetcode.com/playground/VpiP4nhe/shared" frameBorder="0" width="100%" height="500" name="VpiP4nhe"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `s`.

- Time complexity: $O(n)$

    The algorithm iterates through each character in `s` exactly once. At each iteration, we perform constant time operations - checking character equality, modulo operation, and incrementing counters. 
    
    Thus, the time complexity is $O(n)$. 

- Space complexity: $O(1)$

    The algorithm uses only three variables regardless of the input size. These do not grow with the input size.   

    Thus, the space complexity of the algorithm is constant ($O(1)$).

---

### Approach 2: Greedy (Optimized)

#### Intuition

We can make the implementation much more concise by making a key observation: any even-length sequence can be split into pairs of two characters. This is the smallest valid even sequence we can have. If we can organize the entire string into pairs where both characters are the same — either both '0's or both '1's — we'll end up with a beautiful string. This is illustrated in the diagram below:

![](../Figures/2914/pairs.png)

To put this idea into practice, we’ll look at the string two characters at a time. If the two characters in each pair are the same, we can move on without any changes. If they don’t match, we know that one of the bits will need to be flipped to make them identical. 

We’ll keep a counter to track how many bits we’ve flipped throughout the process. At the end, we can return this count, giving us the total number of changes needed to create a beautiful string.

#### Algorithm

- Initialize a variable `minChangesRequired` to 0 to track the number of changes needed.
- Iterate through the string with step size 2 to handle pairs of characters. For each pair of adjacent characters:
   - Compare if the characters are different. If they are:
     - Increment `minChangesRequired` by 1.
- Return `minChangesRequired` as the final answer.

#### Implementation

<iframe src="https://leetcode.com/playground/MqATuMqd/shared" frameBorder="0" width="100%" height="412" name="MqATuMqd"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input string `s`.

* Time complexity: $O(n)$

    The algorithm iterates through the input string using a step size of $2$. We examine each pair exactly once, performing $n/2$ comparisons in total. Each comparison takes constant time. 
    
    Thus, the time complexity is $O(n)$. 

* Space complexity: $O(1)$

    No additional space is used which scales with the input size, so the space complexity remains constant.

---