# Official Solution

**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solution/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

#### Intuition

We need to find how many words in the given array contain only characters from the allowed string. To do this, we will go through each word in the array and check if it meets the condition.

We'll use a counter variable, `consistentCount`, to keep track of how many words meet the condition. For each word, we'll check every character it contains. If all the characters in a word are present in the `allowed` string, we'll count that word as consistent and increase our counter.

After checking all the words, we'll return the value of `consistentCount` as the result.

#### Algorithm

- Initialize a variable `consistentCount` to store the number of consistent strings found.
- Iterate through each `word` in the `words` array:
  - Initialize a boolean variable `isWordConsistent` to `true`.
  - Start an inner loop to iterate through each character in the current `word`:
    - Set a boolean variable `isCharAllowed` to `false`, assuming the character is not allowed until found in the `allowed` string.
    - Start another inner loop to iterate through each character in `allowed`:
      - Compare the current character from the word with each character in `allowed`.
      - If a match is found, set `isCharAllowed` to `true` and break out of the inner loop.
    - If `isCharAllowed` is still `false`, set `isWordConsistent` to `false` and break out of the character checking loop.
  - If `isWordConsistent` is `true`, increment `consistentCount` by 1.
- Return the final value of `consistentCount` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/BgxN2SHK/shared" frameBorder="0" width="100%" height="500" name="BgxN2SHK"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the lengths of `allowed` and `words`, respectively. 

- Time complexity: $O(m \cdot n \cdot k)$

    The outermost loop iterates through each word in the `words` array, which has $n$ elements. This contributes $O(n)$ to our time complexity.

    For each word, the algorithm iterates through its characters. If we denote the length of the longest word as $k$, this inner loop has a complexity of $O(k)$.

    For each character in a word, in the worst case, we may need to search through the entire allowed string, taking $O(m)$ time.

    Thus, the overall time complexity of the algorithm is $O(m \cdot n \cdot k)$.

- Space complexity: $O(1)$

    The algorithm does not use any data structures that scale with input space. Thus, the space complexity is constant.

---

### Approach 2: Boolean Array

#### Intuition

To solve this problem efficiently, we need a better way to check if a string is consistent. The brute-force approach was slow because we kept checking each character against the `allowed` string. We need a faster method.

The key idea is to use a boolean array to mark which characters are allowed. Since we're only dealing with lowercase English letters, we need an array of size 26. Each index in the array will correspond to a character based on its ASCII value.

Each character has an integer representation called its ASCII value. For example, `a` has an ASCII value of 97, `b` is 98, and so on until `z`, which is 122. We can map each character to an index from 0 to 25 by subtracting the ASCII value of `a` from the character's ASCII value. For example, `c` maps to index 2 because the difference between the ASCII values of `c` (99) and `a` (97) is 2.

With this setup, we can loop through each character in every word and check in constant time whether that character is allowed. If any character's index in our boolean array is `false`, the word isn't consistent. If all characters are marked `true`, we increase our counter of consistent words.

#### Algorithm

- Initialize a boolean array `isAllowed` of size `26` to store which characters are allowed.
- Iterate through each character in the `allowed` string:
  - Mark the corresponding index in `isAllowed` as `true`.
- Initialize a variable `consistentCount` to store the number of consistent strings.
- Iterate through each `word` in the `words` array:
  - Set a boolean variable `isConsistent` to `true`.
  - Iterate through each character in `word`:
    - Check if the current character is allowed by accessing the corresponding index in `isAllowed`:
      - If not allowed, set `isConsistent` to `false` and break the inner loop.
  - If `isConsistent` is `true`, increment `consistentCount`.
- Return the final value of `consistentCount` as the result.
  
#### Implementation

<iframe src="https://leetcode.com/playground/7GakEK9c/shared" frameBorder="0" width="100%" height="500" name="7GakEK9c"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the lengths of `allowed` and `words`, respectively. 

- Time complexity: $O(m + n \cdot k)$

    The algorithm iterates over each character in `allowed` to mark it as `true`, which takes $O(m)$ time.

    The algorithm then iterates through each character of each word in the `words` array. If $k$ is the length of the longest word, the overall time complexity of this portion is $O(n \cdot k)$.

    Thus, the time complexity of the algorithm is $O(m) + O(n \cdot k) = O(m + n \cdot k)$.

- Space complexity: $O(1)$

    The only additional space used by the algorithm is the `isAllowed` array, which has a constant length of $26$. 

---

### Approach 3: Hash Set

#### Intuition

An alternative data structure that allows us to quickly check whether a given element exists or not is a hash set.  If you're new to hash sets, this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/1130/) provides a detailed explanation.

We'll start by creating a hash set called `allowedChars` and fill it with characters from the `allowed` string. This set will act as our lookup table for permitted characters. A key benefit of using a set over a boolean array is its flexibility: a boolean array always has 26 slots, even if `allowed` has fewer characters. A set, on the other hand, adjusts to only use the space it needs.

Next, we loop through each word in `words`. For each word, we'll check each character to see if it's in the set. If every character of the word is present, we increment our counter.

#### Algorithm
 
- Initialize a set `allowedChars` to store the allowed characters.
- Iterate through each character in the `allowed` string and add it to `allowedChars`.
- Initialize a variable `consistentCount` to store the number of consistent strings.
- Iterate through each `word` in the `words` array:
  - Set a boolean variable `isConsistent` to `true`.
  - Iterate through each character in `word`:
    - Check if the current character is contained in `allowedChars`:
      - If not, set `isConsistent` to `false` and break the inner loop.
  - If `isConsistent` is `true`, increment `consistentCount`.
- Return `consistentCount` as our answer.

#### Implementation

<iframe src="https://leetcode.com/playground/a9NZ47n5/shared" frameBorder="0" width="100%" height="500" name="a9NZ47n5"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the lengths of `allowed` and `words`, respectively. 

* Time complexity: $O(m + n \cdot k)$

    The algorithm loops over `allowed` to populate the `allowedChars` set, taking $O(m)$ time.

    The algorithm then iterates over each character of each word in the `words` array. If the $k$ is the length of the longest word, this takes $O(n \cdot k)$ time.

    Thus, the overall time complexity of the algorithm is $O(m) + O(n \cdot k) = O(m + n \cdot k)$.

* Space complexity: $O(m)$

    The `allowedChars` set can have a size of $m$ in the worst case (all characters in `allowed` are unique). All other variables take constant space.

    Thus, the space complexity of the algorithm is $O(m)$.

---

### Approach 4: Bit Manipulation

#### Intuition

In a binary number, each bit can be `0` or `1`. A boolean variable can be either `true` or `false`. The pattern is clear: each bit in a binary number can represent a boolean value. We can use this to show whether a character is in `allowed`. This representation is called a bitmask, which will work like the boolean array in the second approach, where each index stands for a character from `a` to `z`.

Since there are only 26 possible characters, a 32-bit integer will be enough for our bitmask. We need to perform two main operations with this bitmask:

1. Setting a bit: Each bit will show whether a character from `a` to `z` is present (`1`) or not (`0`). As in the second approach, the 0th bit will represent `a`, the 1st bit will represent `b`, and so on. To mark the presence of a character, we'll set the corresponding bit to `1`. To set a bit, we use Bitwise OR with `1` shifted left by that bit's position. For example, to set the 2nd bit in the binary number `1000010`, we use Bitwise OR with `1` shifted left by `2`. Here’s the pseudo-code for setting a bit for a character:

```
If c is the character to be marked:
mask = mask | (1 << (c - 'a'))
```

![](../Figures/1684/set.png)

2. Checking a bit: To see if a character is in `allowed`, we check the corresponding bit in the bitmask. We can isolate the bit by right-shifting the bitmask by the bit's position and then using Bitwise AND with `1`. If the result is `1`, the character is in `allowed`. For example, to check if the 2nd bit in `1000110` is set, we right-shift by `2` and use Bitwise AND with `1`. This gives us `1`, so the bit is set. Here’s the pseudo-code for this check:

```
If c is the character to be checked:
bit = (mask >> (c - 'a')) & 1
```

![](../Figures/1684/check.png)

Using these methods, we can check each character in a word to see if the word is consistent.

#### Algorithm

- Initialize a variable `allowedBits` to store the bitmask of allowed characters.
- Iterate through each character in the `allowed` string:
  - Set the corresponding bit in `allowedBits` for each character.
- Initialize a variable `consistentCount` to store the number of consistent strings.
- Iterate through each `word` in the `words` array:
  - Initialize a boolean variable `isConsistent` as `true`.
  - Iterate through each character in `word`:
    - Find the `bit` corresponding to the character in `allowedBits`.
    - If the bit is `0`: 
      - Set `isConsistent` to `false` and break the inner loop.
  - If `isConsistent` is `true`, increment `consistentCount`.
- Return the final value of `consistentCount` as the result. 

#### Implementation

<iframe src="https://leetcode.com/playground/Qjf37a9h/shared" frameBorder="0" width="100%" height="500" name="Qjf37a9h"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the lengths of `allowed` and `words`, respectively. 

- Time complexity: $O(m + n \cdot k)$

    Setting each bit for the characters in `allowed` takes $O(m)$ time.

    If $k$ is the length of the longest word, iterating through each character in each word of the `words` array takes $O(n \cdot k)$ time.

    Thus, the overall time complexity of the algorithm is $O(m) + O(n \cdot k) = O(m + n \cdot k)$.

- Space complexity: $O(1)$

    All variables used by the algorithm take constant space.  

---