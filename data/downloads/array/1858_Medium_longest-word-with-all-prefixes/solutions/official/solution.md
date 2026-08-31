# Official Solution

**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solution/](https://leetcode.com/problems/longest-word-with-all-prefixes/solution/)

---

[TOC]

## Solution
    
---

### Approach 1: Hash Set

#### Intuition

The brute force method for checking if a word contains all its prefixes involves testing each prefix against the `words` array. This method has two major inefficiencies:

1. Searching through the `words` array repeatedly to see if a word exists is slow.
2. Checking every prefix of a word leads to a quadratic time complexity, which is unsuitable for our constraints.

To improve this, we need to streamline the checking process. Hash sets are a good solution as they provide constant time lookups. If you’re not familiar with hash sets, you can review this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/hash-table/183/combination-with-other-algorithms/).

Next, we should sort the `words` array lexicographically. This sorting ensures that as we process each word, we’ve already seen all shorter words, which helps us determine if any prefix exists.

Another key improvement is that if a word’s prefix up to the second-to-last letter is valid (meaning all its own prefixes are present), the entire word is valid. This means we don't need to check all prefixes of a word; we only need to verify whether its immediate prefix exists in `words` and is itself valid.

To apply this, we use the hash set to store valid words. As we process each word, we check if its immediate prefix is in the hash set. If it is, the word is valid and we add it to the hash set. We keep track of the longest valid word found so far with the variable `longestValidWord`. During our scan, if we find a longer valid word, it replaces the current `longestValidWord`. If a valid word has the same length as `longestValidWord`, we do not replace it, as the initial sorting ensures that the lexicographically smallest word is already stored.

At the end of our iteration, `longestValidWord` will be the longest word that contains all its prefixes present in the array.

#### Algorithm

- Sort the input array `words` lexicographically in ascending order.
- Initialize a hash set `validWords` to store the valid words during iteration.
- Initialize a String variable `longestValidWord` to an empty string.
- Iterate through each word in the sorted `words` array:
  - Check if the current word's length is `1` or if its prefix exists in `validWords`.
  - If either condition is `true`, add the current word to `validWords`.
  - If the length of the current word is greater than the length of `longestValidWord`, update `longestValidWord` to the current word.
- Return `longestValidWord` as the result.

#### Implementation

<iframe src="https://leetcode.com/playground/mQChP4fL/shared" frameBorder="0" width="100%" height="500" name="mQChP4fL"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `words` array and $l$ be the length of the longest word.

- Time complexity: $O(l \cdot n \cdot \log n)$

    Sorting the array takes $O(l \cdot n \cdot \log n)$ time. The $l$ is due to the string comparisons during sorting.
    
    The algorithm iterates through the `words` array in linear time. For each word, the substring and set operations take $O(l)$ time.

    Thus, the overall time complexity of the algorithm is $O(l \cdot n \cdot \log n + n \cdot l) = O(l \cdot n \cdot \log n)$.

- Space complexity: $O(n \cdot l + S)$

    In the worst case, the hash set can store all the words in the `words` array. If the length of the longest word is $l$, the space taken by the hash set is $O(n \cdot l)$.

    The space taken by the sorting algorithm ($S$) depends on the language of implementation:
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
    - In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.

---

### Approach 2: Trie

#### Intuition

A Trie, or prefix tree, is a useful data structure for storing and searching strings. In a Trie, each node represents a character, and the path from the root to a node represents a string prefix. This makes it efficient for checking prefixes. By building a Trie from our list of words, we can quickly verify if a word has all its prefixes in the original array. To learn more about Tries and how they are implemented, check out this LeetCode [Explore Card](https://leetcode.com/explore/learn/card/trie/). For those who haven't implemented a Trie before, solving the [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/description/) problem would be an excellent starting point before tackling this challenge. 

In this discussion, we'll focus on how to leverage a Trie in our approach rather than delving into the details of Trie insertion, which are common across Trie problems. Our strategy using a Trie involves two main steps: building the Trie and then utilizing it to find our answer.

The first step is building a Trie from the input array of words. As we insert each word, we mark its final character to indicate the end of a word. This lets us differentiate between complete words and mere prefixes of longer words.

Here's how the Trie would look for Example 2 of the problem description:

![](../Figures/1858/trie.png)

Next, we create a `hasAllPrefixes` method in the Trie. This method will check whether a word has all its prefixes as individual words in the Trie. For each character in the word, we check if the corresponding node in the Trie marks the end of a word. If it does, that prefix exists as a complete word. We continue checking each character until we’ve processed the entire word.

As we go through the list of words, we use a variable `longestValidWord` to track the longest valid word we've found. Once we’ve checked every word in the array using the Trie, `longestValidWord` will hold the longest word that has all its prefixes present in the array.

#### Algorithm

Main method `longestWord`:

- Initialize a Trie data structure `trie`.
- Initialize a String variable `longestValidWord` to an empty string.
- Insert all words from the input array into the Trie.
- Iterate through each word in the input `words` array:
  - Check if all prefixes of the current word exist in the Trie using the `hasAllPrefixes` method.
  - If all prefixes exist, compare the current word with `longestValidWord`:
    - If the current word is longer, update `longestValidWord`.
    - If the lengths are equal, update `longestValidWord` if the current word is lexicographically smaller.
- Return `longestValidWord` as the result.

Helper class `Trie`:

- Define a nested `TrieNode` class:
  - Initialize a `TrieNode` array `children` of size 26 for each lowercase letter.
  - Initialize a boolean variable`isEndOfWord` to mark complete words.

- Initialize a `TrieNode` as the `root` of the Trie.

- Implement the `insert` method in the `Trie` class:
  - Start from the `root` node.
  - For each character in the word:
    - Calculate the index based on the character.
    - If no `TrieNode` exists at this index in the current node's `children` array, create a new `TrieNode`.
    - Move to the `TrieNode` at the index.
  - Mark the last node as the end of a word.

- Implement the `hasAllPrefixes` method in the `Trie` class:
  - Start from the `root` node.
  - For each character in the word:
    - Move to the corresponding child node.
    - If the node doesn't exist or is not marked as the end of a word, return `false`.
  - Return `true` if all prefixes exist and are valid words.

#### Implementation

<iframe src="https://leetcode.com/playground/iak4i5Wt/shared" frameBorder="0" width="100%" height="500" name="iak4i5Wt"></iframe>

#### Complexity Analysis

Let $n$ be the length of the `words` array and $l$ be the length of the longest word.

* Time complexity: $O(n \cdot l)$

    The algorithm iterates over all the words and inserts each one into the Trie. The time complexity for this part is $O(n \cdot l)$.

    To find the longest word, the algorithm iterates over each word again, taking $O(n)$ time. For each word, it does a running check on all its prefixes, which takes $O(l)$ time. So, the time taken to check all prefixes is $O(n \cdot l)$.

    Thus, the overall time complexity of the algorithm is $2 \cdot O(n \cdot l) = O(n \cdot l)$. 

* Space complexity: $O(n \cdot l)$

    In the worst case, when all words are unique and have no common prefixes, we can have up to $n \cdot l$ nodes. Each node has an array of $26$ pointers and a boolean flag. Thus, the total space complexity of the algorithm is $O(26 \cdot n \cdot l) = O(n \cdot l)$.

---