# Official Solution

**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solution/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solution/)

---

[TOC]

## Solution

---

### Approach 1: Using Hash Table

#### Intuition

We want to find the longest common prefix between numbers in two arrays. A prefix is formed from the digits of a number, starting from the left. To solve this, the key observation is that the prefix of a number can be reduced by removing its last digit repeatedly. By storing these reduced forms, we can efficiently check for common prefixes.

> Note: In this context, a "prefix" refers to the sequence of digits that starts at the beginning of an integer and can be any length up to the full length of that integer. For example, 12 is a prefix of 123. A common prefix is one that appears at the start of both integers from `arr1` and `arr2`.

The idea is to first create a hash table to hold all possible prefixes of the numbers from the first array (`arr1`). For each number in `arr1`, we break it down digit by digit, storing every prefix form (by dividing it by 10). This way, the hash table contains all possible digit patterns that could match any part of a number in `arr2`.

Next, for each number in `arr2`, we try to match it against the prefixes stored in the hash table. We keep reducing the number, removing digits from the end, until we find a match. Once we find a match, we compute the length of that prefix by counting its digits. The process repeats for all numbers in `arr2`, and we track the longest common prefix found across all comparisons.

Rather than comparing each number digit by digit across both arrays, we reduce the problem to prefix matching by storing all prefixes in a hash table and checking against it.

#### Algorithm

- Step 1: Build Prefixes from `arr1`:
  - Initialize an empty set `arr1Prefixes` to store all prefixes derived from `arr1`.
  - Iterate over each value `val` in `arr1`:
    - While `val` is not in `arr1Prefixes` and `val` is greater than 0:
      - Add `val` to `arr1Prefixes` (storing `val` as a prefix).
      - Update `val` to the next shorter prefix by removing the last digit (`val /= 10`).

- Step 2: Find the Longest Matching Prefix in `arr2`:
  - Initialize `longestPrefix` to 0 to keep track of the length of the longest common prefix found.
  - Iterate over each value `val` in `arr2`:
    - While `val` is not in `arr1Prefixes` and `val` is greater than 0:
      - Reduce `val` by removing the last digit (`val /= 10`).
    - If `val` is greater than 0 (i.e., a matching prefix is found):
      - Update `longestPrefix` to the maximum of its current value and the length of the matched prefix (calculated using `log10(val) + 1`).

- Return the length of the longest common prefix found.

#### Implementation

<iframe src="https://leetcode.com/playground/bhmjPra9/shared" frameBorder="0" width="100%" height="500" name="bhmjPra9"></iframe>

#### Complexity Analysis

Let $m$ be the length of `arr1`, $n$ be the length of `arr2`, $M$ be the maximum value in `arr1`, and $N$ be the maximum value in `arr2`.

- Time Complexity: $O(m \cdot \log_{10} M + n \cdot \log_{10} N)$
  
    For each number in `arr1`, we repeatedly divide the number by 10 to generate its prefixes. Since dividing a number by 10 reduces the number of digits logarithmically, this process takes $O(\log_{10} M)$ for each number in `arr1`. Hence, for $m$ numbers, the total time complexity is $O(m \cdot \log_{10} M)$.

    Similarly, for each number in `arr2`, we reduce it by repeatedly dividing it by 10 to check if it matches any prefix in the set. This also takes $O(\log_{10} N)$ for each number in `arr2`. Hence, for $n$ numbers, the total time complexity is $O(n \cdot \log_{10} N)$.

    Overall, the total time complexity is $O(m \cdot \log_{10} M + n \cdot \log_{10} N)$.

- Space Complexit: $O(m \cdot \log_{10} M)$

    Each number in `arr1` contributes $O(\log_{10} M)$ space to the set, as it generates prefixes proportional to the number of digits (logarithmic in the value of the number with base 10). With $m$ numbers in `arr1`, the total space complexity for the set is $O(m \cdot \log_{10} M)$.

    The algorithm uses constant space for variables like `longestPrefix` and loop variables, so this doesn’t contribute significantly to the space complexity.

    Thus, the total space complexity is $O(m \cdot \log_{10} M)$.

---

### Approach 2: Trie

#### Intuition

Instead of using a set, we build a Trie to store all numbers from `arr1` in a trie form that allows for efficient prefix lookups.

A [Trie](https://leetcode.com/explore/learn/card/trie/) can store digit sequences. Each path in the Trie represents a sequence of digits that corresponds to a prefix. As we insert each number from `arr1`, we break it down into individual digits and store them along a path in the Trie. This allows us to quickly check if a number from `arr2` shares a prefix with any number from `arr1`.

For every number in `arr2`, we traverse the Trie digit by digit. The traversal stops when a digit doesn't match, and we count how many digits we managed to match as the length of the common prefix. Like the first approach, we repeat this process for all numbers in `arr2` and track the longest common prefix.

Instead of reducing numbers manually like in the first approach, the Trie helps us handle digit sequences directly, which makes the solution both elegant and efficient. It avoids the need to store all possible prefixes explicitly, focusing instead on a structured search through the Trie.

![Trie](../Figures/3043/3043_trie.png)

#### Algorithm

- `Trie` class:
  - Initialize the `Trie` with a root node, which is an instance of `TrieNode`.

  - Inner `TrieNode` class:
    - Each `TrieNode` has an array `children` of size 10 (for digits 0-9), initialized to null in the constructor to represent an empty node.

  - Initialize the `Trie` with a root node, which is an instance of `TrieNode`.

  - `insert` function:
    - Convert the integer `num` to its string representation `numStr`.
    - Iterate over each character `digit` in `numStr`:
      - Convert `digit` to its integer index `idx`.
      - If `node.children[idx]` is null, create a new `TrieNode` and assign it to `node.children[idx]`.
      - Move to the child node at `node.children[idx]`.
    - Insert all digits of `num` into the Trie.

  - `findLongestPrefix` function:
    - Convert the integer `num` to its string representation `numStr`.
    - Initialize `len` to 0 to keep track of the length of the common prefix.
    - Iterate over each character `digit` in `numStr`:
      - Convert `digit` to its integer index `idx`.
      - If `node.children[idx]` exists, increment `len` and move to the child node at `node.children[idx]`.
      - If `node.children[idx]` is null, break the loop as the prefix match ends.
    - Return `len` which represents the length of the longest common prefix.

- `longestCommonPrefix` function:
  - Create an instance of `Trie`.
  - Insert all numbers from `arr1` into the Trie.
  - Initialize `longestPrefix` to 0.
  - For each number `num` in `arr2`:
    - Call `trie.findLongestPrefix(num)` to find the length of the longest prefix for `num` in the Trie.
    - Update `longestPrefix` with the maximum value between `longestPrefix` and the result from `findLongestPrefix`.
  - Return `longestPrefix` as the result, which is the length of the longest common prefix between numbers in `arr1` and `arr2`.

#### Implementation

<iframe src="https://leetcode.com/playground/m4uCV6pd/shared" frameBorder="0" width="100%" height="500" name="m4uCV6pd"></iframe>

#### Complexity Analysis

Let $m$ be the length of `arr1`, $n$ be the length of `arr2`.

- Time Complexity: $O(m \cdot d + n \cdot d) = O(m + n)$
  
    For each number in `arr1`, we insert it into the Trie by processing each digit. Since each number has up to $d$ digits, inserting a single number takes $O(d)$ time. Therefore, inserting all $m$ numbers from `arr1` into the Trie takes $O(m \cdot d)$ time.

    For each number in `arr2`, we check how long its prefix matches with any prefix in the Trie. This involves traversing up to $d$ digits of the number, which takes $O(d)$ time per number. For all $n$ numbers in `arr2`, the time complexity for this step is $O(n \cdot d)$.

    Overall, the total time complexity is $O(m \cdot d + n \cdot d) = O(m + n)$

- Space Complexity: $O(m \cdot d) = O(m)$

    Each node in the Trie represents a digit (0-9), and each number from `arr1` can contribute up to $d$ nodes. Thus, the total space used by the Trie for storing all prefixes is $O(m \cdot d)$.

    The algorithm uses constant space for variables like `longestPrefix` and loop variables, which is negligible compared to the space used by the Trie.

    Thus, the total space complexity is $O(m \cdot d) = O(m)$.

---