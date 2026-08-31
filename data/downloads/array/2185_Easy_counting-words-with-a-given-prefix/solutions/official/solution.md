# Official Solution

**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solution/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

#### Intuition

Given the small constraints of the problem where `words.length` $\leq$ 100 (the array contains at most 100 words) and `words[i].length`, `pref.length` $\leq$ 100 (each word and the prefix can be up to 100 characters long), a brute-force approach is viable. This approach involves checking each word in the `words` list to see if it starts with `pref`. We can do this using two pointers, one for the current word and one for `pref`, both starting at index 0.

To implement this logic, we iterate through the list of words and for each word, compare its characters with the corresponding characters in `pref` up to the length of `pref`. If at any point the characters don't match or if the word's length is smaller than the length of `pref`, we stop checking that word and move to the next one.

The counter is incremented only when the prefix matches entirely. Finally, after examining all the words in the list, the counter holds the number of words that have `pref` as their prefix, which is returned as the result.

#### Algorithm

For the main method `prefixCount`:
- Initialize a variable `count` to `0` to track the number of strings with the given prefix.
- Iterate through each string in the input array `words`. For each string:
  - Add the result of `hasPrefix` to `count`.
- Return the final count.

For the helper method `hasPrefix`:
- Initialize a variable `itr` to track the current character position being compared.
- Start a loop that continues while `itr` is less than both the length of `str` and `pref`:
  - Compare characters at position `itr` in both strings.
  - If characters don't match, return `0` immediately as the prefix is not found.
- After the loop ends, check if `itr` equals the length of `pref`.
  - If not equal, return `0` as the string was too short to contain the prefix.
- Return `1` indicating the prefix was found.

#### Implementation

<iframe src="https://leetcode.com/playground/fnFNU5E6/shared" frameBorder="0" width="100%" height="500" name="fnFNU5E6"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `words` and $m$ be the length of the prefix string `pref`.

- Time complexity: $O(n \cdot m)$

    The outer loop in `prefixCount` iterates through each string in the array `words`, which takes $O(n)$ operations. 
    
    For each string, we call `hasPrefix` which compares characters until it reaches the end of the prefix or finds a mismatch. In the worst case, this character comparison takes $O(m)$ operations. 
    
    Therefore, the total time complexity is $O(n \cdot m)$.

- Space complexity: $O(1)$

    The algorithm only uses a constant amount of extra space regardless of the input size. We only store the counter variables `count` and `itr`. No additional data structures are created that grow with the input size. Thus, the space complexity is constant, $O(1)$.

---

### Approach 2: Built-In Methods

#### Intuition

Matching prefixes is an extremely common task in programming. Because of this, most popular programming languages provide built-in methods to handle prefix matching. These built-in methods have been thoroughly tested and optimized over time, making them more reliable and efficient than custom-written code.

For this reason, it's generally better to use these built-in methods rather than writing our own implementation. Let's look at some popular built-in methods that we can use for this problem:

##### Java
1. `String.startsWith(String prefix)` 
   Checks if the string begins with the specified prefix.

2. `Stream.filter(Predicate<T> predicate)`  
   Filters elements in a stream based on a given condition (e.g., checking if a string starts with a prefix).

3. `String.substring(int beginIndex, int endIndex)`
   Extracts a substring from a string, which can be compared manually to check for a prefix.

##### C++
1. `std::string::find` (or `std::string::rfind`)  
   Finds the position of the first or last occurrence of a substring and is commonly used to check if it occurs at the start.

2. `std::string::substr(size_t pos, size_t len)`  
   Extracts a substring starting at a position, which can be used to compare the prefix manually.

3. `std::mismatch` (from `<algorithm>`)  
   Compares elements of two ranges (e.g., a prefix and the beginning of a string) and determines if they match.

##### Python3
1. `str.startswith(prefix)`  
   Directly checks if the string starts with the specified prefix.

2. `filter(function, iterable)`  
   Applies a function (e.g., a lambda checking `startswith`) to an iterable and filters elements that match.

3. `any()` and `all()` (combined with slicing)  
   Can be used to validate whether a prefix condition holds across a collection.

#### Algorithm

- Initialize a variable `count` to `0` to track the number of strings with the given prefix.
- Iterate through each string `word` in the input array `words`:
  - Check if `word` starts with the given prefix using the built-in string method `startsWith`.
    - If so, increment the `count` by 1.
- After examining all strings, return the final count.

#### Implementation

<iframe src="https://leetcode.com/playground/4ShBo4Ab/shared" frameBorder="0" width="100%" height="259" name="4ShBo4Ab"></iframe>

#### Complexity Analysis

Let $n$ be the length of the input array `words` and $m$ be the length of the prefix string `pref`.

- Time complexity: $O(n \cdot m)$

    The outer loop iterates through each string in the array `words`, which takes $O(n)$ operations. For each string, the `startsWith` method needs to compare characters until it reaches the end of the prefix or finds a mismatch. In the worst case, this comparison takes $O(m)$ operations. 
    
    Thus, the total time complexity is $O(n \cdot m)$.

- Space complexity: $O(1)$

    The algorithm only uses a constant amount of extra space regardless of the input size. We only store the counter variable `count`. No additional data structures are created that grow with the input size. 
    
    Therefore, the space complexity is constant, $O(1)$.

---

### Approach 3: Trie

#### Intuition

The process of matching characters sequentially from the beginning aligns perfectly with the concept of a Trie. A Trie is a specialized tree-like data structure designed to handle strings efficiently, especially for operations like prefix searches, word insertions, and word lookups.

Each node in a Trie represents a single character, and the path from the root node to any other node forms a prefix or a word. 

Usually a Trie is used in two below ways:

1. Insertion: When inserting a word into the Trie, we start at the root and traverse down the tree, creating new nodes for each character of the word if they don't already exist. At the end of the word, we mark the final node to signify the completion of the word.

2. Search for a Prefix: To check if a word starts with a given prefix, we simply traverse the Trie following the nodes corresponding to each character of the prefix. If we can traverse all characters successfully, the prefix exists in the Trie.

For example, if we built a Trie using the `words` array in Example 1 of the problem description, this is how it would look like:

![](../Figures/2185/trie.png)

What makes Tries particularly powerful is their ability to efficiently handle prefix-based operations. Think about how you use autocomplete on your phone - as you type each character, it quickly suggests words that start with those letters. Tries are thus a natural choice for problems involving prefixes or auto-completion. By structuring the characters hierarchically, they allow for fast and intuitive access to any subset of stored strings.

Our version of the Trie has a unique feature - instead of just marking where words end, we keep count of how many words share each prefix. For example, if three words begin with `"cat"`, then after we reach `'t'` in the Trie, that node would show a count of 3.

To build this solution, we start by designing our Trie structure. Each node needs two essential pieces: links to its children (representing the next possible characters) and the count variable. Since we're working with lowercase English letters, we can use an array of size 26 for the links, where each index represents a character (a = 0, b = 1, etc.). This array approach gives us constant-time access to child nodes.

When adding words to our Trie, we follow a path determined by each character in the word. If we're adding `"cat"`, we start at the root and follow (or create) links for `'c'`, then `'a'`, then `'t'`. The crucial part is incrementing the count at each node we visit. This means that after adding `"cat"`, `"car"`, and `"carpet"`, the node for `'r'` would have a count of 2 (for `"car"` and `"carpet"`), while the node for `'t'` would have a count of 1.

The counting process becomes straightforward once our Trie is built. To find how many words start with a prefix, we simply navigate the Trie following the characters of our prefix. If we can follow the entire prefix, the count at the final node gives us our answer. However, if we can't follow the complete prefix (a link is missing), we know no words start with that prefix, so we return 0.

> For a more comprehensive understanding of tries, check out the [Trie Explore Card 🔗](https://leetcode.com/explore/learn/card/trie/). This resource provides an in-depth look at the trie data structure, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

Main method `prefixCount`:
- Initialize a variable `count` to 0 to track the count of matching strings.
- Create a new instance of the Trie data structure.
- Iterate through each string in the input array `words` and add it to the Trie.
- Return the result of counting strings with the given prefix using `countPrefix`.

For the Trie Node structure:
- Initialize 
  - an array `links` of size `26` to store pointers to child nodes (one for each lowercase letter).
  - a variable `count` to track the number of strings that share the prefix up to this node.

For the `addWord` method:
- Start at the root node of the Trie.
- For each character in the input word:
  - Convert the character to an array index (0-25).
  - If no node exists for this character, create a new node.
  - Move to the child node.
  - Increment the `count` at the current node to track prefix frequency.
   
For the `countPrefix` method:
- Start at the root node of the Trie.
- For each character in the prefix string:
  - Convert the character to an array index.
  - If no node exists for this character, return `0` as the prefix doesn't exist.
  - Move to the child node.
- Return the `count` stored at the final node, which represents the number of strings containing this prefix.

#### Implementation

<iframe src="https://leetcode.com/playground/LsCe8agi/shared" frameBorder="0" width="100%" height="500" name="LsCe8agi"></iframe>

#### Complexity Analysis

Let $n$ be the total number of strings in the input array `words`, $l$ be the maximum length of any string in `words`, and $m$ be the length of the prefix string `pref`.

- Time complexity: $O(n \cdot l + m)$

    The algorithm has two main phases. In the first phase, we build the Trie by inserting all words. For each word of maximum length $l$, we perform $l$ operations to add each character. Since we have $n$ words, building the Trie takes $O(n \cdot l)$ time. 
    
    In the second phase, searching for the prefix takes $O(m)$ operations. 
    
    Thus, the total time complexity is $O(n \cdot l + m)$.

- Space complexity: $O(n \cdot l)$

    The space complexity is determined by the size of the Trie structure. In the worst case, when there are no common prefixes among the words, each character of each word will require a new node. Each node contains a fixed-size array of $26$ pointers and a `count` variable. With $n$ words of maximum length $l$, the Trie can contain up to $O(n \cdot l)$ nodes. Therefore, the space complexity is $O(n \cdot l)$.

---