# Official Solution

**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solution/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solution/)

---

[TOC]  

## Solution

---

### Approach: Tries

#### Intuition

We are given an array of strings called `words`. Our task is to find the score for each string, where the score is defined as the number of times a string appears as a prefix for all strings in `words`. We need to return an array where each element is the total score of the corresponding string in `words`.

One way to approach this is by using a hashmap to store the frequency of each prefix. We would count how often each prefix appears and then sum these counts for each string. However, this method can be improved with a trie data structure.

A trie, or prefix tree, helps in searching for prefixes efficiently. If you are not familiar with tries, it would be useful to review an introduction to tries, such as the one in the [Implement trie prefix tree](https://leetcode.com/problems/implement-trie-prefix-tree/solution). For now, we'll assume you have a basic understanding of tries.

A trie is a tree where each node represents a character. The path from the root to a leaf node forms a complete word. This structure is effective for problems involving prefix matching because all descendants of a node share the same prefix. This aligns with our goal of counting matching prefixes.

To implement this, we start by building a trie and inserting each prefix of every string into the trie, character by character. We will keep track of how many times each prefix appears.

![fig](../Figures/2416/Slide2.png)

We need to find the total of all these counts for all prefixes of every string in `words`. Therefore, we can iterate through the `words` array, iterate through the prefixes of all strings, appending one character at a time, and calculate the running sum for the count value of these prefixes. Store these running sum values in an array and return it as the answer. Checkout the example below to understand the counting process:

![fig](../Figures/2416/Slide1.png)

#### Algorithm

`TrieNode Structure`

- Each `TrieNode` has two properties:
    - `next`: An array of size 26 (for lowercase English letters) to store pointers to child nodes.
    - `cnt`: An integer value initialized to `0` to store the count of words that pass through the node.
- The constructor initializes all elements in the `next` array to `null` and `cnt` to `0`.

`Insert(string word)`

- Starts from the `root` node.
- For each character `c` in the word:
  - Calculate the index corresponding to the character (`c - 'a'`).
  - If the child node at the calculated index doesn't exist, create a new `TrieNode` and assign it to that index.
  - Increment the count (`cnt`) for the child node.
  - Move to the child node.

`Count(string s)`

- Starts iterating from the `root` node.
- Initialize an integer `ans` to store the sum of prefix counts.
- For each character `c` in the string `s`:
  - Calculate the index corresponding to the character (`c - 'a'`).
  - Add the `cnt` value of the child node at the calculated index to `ans`.
  - Move to the child node.
- Return `ans`.

`Main function - sumPrefixScores(words)`

- For each `word` in `words`:
    - Call `Insert(word)`.
- Initialize an array `scores` of size equal to the number of words, with all elements set to `0`.
- For each `word` in `words`:
    - Store `Count(word)` in `scores[i]`.
- Return the `scores` array.

#### Implementation

<iframe src="https://leetcode.com/playground/25cczCT5/shared" frameBorder="0" width="100%" height="500" name="25cczCT5"></iframe>

#### Complexity Analysis

Let $N$ be the size of `words` array, and $M$ be the average length of the strings in `words`.

- Time complexity: $O(N \cdot M)$

    The insert operation takes $O(length)$ time for a string of size `length`. The total time taken to perform the insert operations on the strings of the `words` array is given by $O(N \cdot M)$.

    Similarly, the count operation takes $O(length)$ time for a string of size `length`. The total time taken to perform the count operations on the strings of the `words` array is given by $O(N \cdot M)$.

    Therefore, the total time complexity is given by $O(N \cdot M)$.
   
- Space complexity: $O(N \cdot M)$
   
    The insert operation takes $O(length)$ space for a string of size `length`. The total space taken to perform the insert operations on the strings of the `words` array is given by $O(N \cdot M)$.

    The count operation does not use any additional space. Therefore, the total time complexity is given by $O(N \cdot M)$.

---