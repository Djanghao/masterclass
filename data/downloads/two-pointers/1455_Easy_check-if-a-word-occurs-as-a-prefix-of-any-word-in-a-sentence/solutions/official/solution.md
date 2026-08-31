# Official Solution

**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solution/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solution/)

---

[TOC]

## Solution

---

### Overview

We need to determine if a given search word is a prefix of any word in a sentence. If it is, we return the 1-based index of the first matching word. If no match is found, we return -1.

Let’s first define what a prefix is: it’s the starting portion of a word. For example, in the word `"burger"`, the string `"burg"` is a prefix. Given a sentence like `"I love eating burger"` and a search word `"burg"`, we need to identify whether any word in the sentence begins with `"burg"`. In this example, the word `"burger"` starts with `"burg"`, and it is the fourth word in the sentence, so the correct output would be `4`.

---

### Approach 1: Brute Force

#### Intuition

The simplest way to check if `searchWord` is a prefix of any word in the sentence is by directly comparing each word with `searchWord`.

We can start by splitting the sentence into individual words. Since words in the sentence are separated by single spaces, we can use space as the delimiter to split the sentence into a list of words. While we might generally need to handle extra spaces or leading/trailing spaces carefully, the problem guarantees that words are separated by single spaces, so these edge cases are not a concern here.

Next, we iterate through the list of words, comparing each word's prefix with `searchWord`. We use a nested loop to compare characters of the word and `searchWord` up to the length of `searchWord`. If all characters match, we return the 1-based index of the word. If no word matches, we return `-1`.

#### Algorithm

- Initialize an empty `wordsList` to store the words in the sentence.
- Initialize an empty `currentWord` to build words as we traverse the sentence.

- For each `character` in `sentence`:
  - If the `character` is not a space, append it to `currentWord`.
  - If the `character` is a space and `currentWord` is not empty:
    - Add `currentWord` to `wordsList`.
    - Reset `currentWord` to an empty string.

- After processing the sentence, if `currentWord` is not empty, add it to `wordsList` (handles the last word).

- For each word in `wordsList` (indexed by `wordIndex`):
  - If the length of the current word is greater than or equal to the length of `searchWord`:
    - Compare each character in `searchWord` with the corresponding character in the current word.
    - If all characters match:
      - Return `wordIndex + 1` (1-based index of the matching word).

- If no word matches `searchWord` as a prefix, return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/EHZG3vUK/shared" frameBorder="0" width="100%" height="500" name="EHZG3vUK"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input string `sentence`, $m$ be the size of the input string `searchWord`, $k$ be the average length of words in `sentence`, and $w$ be the total number of words in `sentence` such that $w \cdot k = n$.

- Time complexity: $O(n + w \cdot m)$ 

    The first part of the algorithm involves iterating over the `sentence` to split it into words, which requires traversing all $n$ characters. Each character is processed exactly once to either build a word or identify word boundaries (spaces). This step has a time complexity of $O(n)$.  

    The second part involves checking whether each word in the `wordsList` starts with the `searchWord`. For each of the $w$ words, we compare up to $m$ characters with `searchWord`. In the worst case, all $w$ words are of length $m$ or more, making this step $O(w \cdot m)$. Adding both parts together, the total time complexity becomes $O(n + w \cdot m)$.  

- Space complexity: $O(n)$ 

    The `wordsList` vector stores all the words from `sentence`, and the total memory required to hold these words is proportional to the size of the input string $n$. Additionally, the `currentWord` string temporarily holds one word at a time during the processing, requiring $O(k)$ space, but this is reused and does not add extra memory. Other variables, such as the loop counters and boolean flags, require constant space $O(1)$. Hence, the overall space complexity is $O(n)$.

---

### Approach 2: Two Pointer

#### Intuition

Instead of splitting the sentence into words first, we can directly iterate through the sentence while keeping track of the current word's position. This way, we can avoid storing all words in memory and instead process the sentence in a single pass. We skip over spaces to find the start of each word and then check if the word starts with the `searchWord`.

To do this, we use a two-pointer approach: the first pointer keeps track of where we are in the sentence, and the second pointer tracks how far we’ve matched the `searchWord`. If a match is found, we immediately return the current word's position. If no match is found by the end of the sentence, we return `-1`.

This is particularly efficient for large sentences, as it avoids the overhead of storing and managing a list of words.

</br>

!?!../Documents/1455/1455_two_pointer.json:770,445!?!

> For a more comprehensive understanding of the two-pointer technique, explore the [Two Pointer Explore Card 🔗](https://leetcode.com/explore/learn/card/array-and-string/205/array-two-pointer-technique/). This resource provides an in-depth look at the two-pointer approach, explaining its key concepts and applications with a variety of problems to solidify understanding of the pattern.

#### Algorithm

- Initialize `currentWordPosition` to 1 to keep track of the current word's position in the sentence.
- Initialize `currentIndex` to 0 to traverse the sentence character by character.
- Store the length of the sentence in `sentenceLength`.

- While `currentIndex` is less than `sentenceLength`:
  - Skip leading spaces:
    - While the current character is a space, increment `currentIndex` and also increment `currentWordPosition` to move to the next word.
  
  - Check if the current word starts with `searchWord`:
    - Initialize `matchCount` to 0 to track how many characters match `searchWord`.
    - While characters match between `sentence` and `searchWord`:
      - Increment `currentIndex` and `matchCount`.
    - If `matchCount` equals the length of `searchWord`, return `currentWordPosition` since a match is found.

  - Skip the rest of the current word:
    - While the current character is not a space, increment `currentIndex` to move to the end of the word.

- If no word in the sentence matches `searchWord` as a prefix, return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/PEcbcEFY/shared" frameBorder="0" width="100%" height="500" name="PEcbcEFY"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input string `sentence`, and $m$ be the size of the input string `searchWord`. 

- Time complexity: $O(n + w \cdot m)$ 

    The algorithm processes the input string `sentence` in a single pass. During this traversal, it skips spaces to identify the start of each word, checks for a prefix match between `searchWord` and the current word, and moves to the end of the word if there is no match. This traversal covers all $n$ characters in `sentence`.  

    Additionally, for each word in `sentence`, the algorithm compares up to $m$ characters with `searchWord` to check for a prefix match. In the worst case, this adds an $O(m)$ cost for the comparison. Since each word is processed exactly once, the prefix-checking step is effectively absorbed into the overall traversal of $n$, making the total time complexity $O(n + m)$.  

- Space complexity: $O(1)$ 

    The algorithm uses a constant amount of extra space. Variables like `currentWordPosition`, `currentIndex`, and `matchCount` are simple integers, and there are no auxiliary data structures (e.g., arrays) used to store intermediate results. Thus, the space complexity is $O(1)$.

---

### Approach 3: Using Built-In Function

#### Intuition

Now that we have explored the approaches where we handle strings manually, let's leverage built-in string libraries for more efficient and cleaner solutions. This will simplify our code and make it easier to understand and maintain.

##### For C++ Users

In C++, the `istringstream` class from the `<sstream>` library processes strings efficiently. It treats a string as a stream and extracts words using the `>>` operator. This avoids manual string splitting and space handling. The complexity of extracting words is $O(n)$, where `n` is the string length. To check if a word starts with a prefix, the `compare` function is used, which operates in $O(k)$, where `k` is the prefix length.

##### For Java Users

In Java, the `split` method from the `String` class divides a sentence into words in $O(n)$ time. The `startsWith` method, operating in $O(k)$, then checks if each word begins with the given prefix. This combination of `split` and `startsWith` ensures clean, efficient code without manual handling of spaces.

##### For Python3 Users

In Python3, the `split` method separates a sentence into words by whitespace in $O(n)$ time, while the `startswith` method checks prefixes in $O(k)$. Then proceed with the implementation.

#### Algorithm

- Initialize a string stream `sentenceStream` from the input `sentence` to tokenize the sentence.
- Initialize `currentWord` to store each word from the sentence as we process it.
- Initialize `wordPosition` to 1 to keep track of the position of the current word in the sentence.

- While there are words left in the sentence (i.e., `sentenceStream >> currentWord`):
  - Check if the current word's length is greater than or equal to `searchWord`'s length and if the current word starts with `searchWord`:
    - If true, return the current `wordPosition` (this is the first word that starts with `searchWord`).
  - Otherwise, increment `wordPosition` to check the next word.

- If no word matches, return `-1` to indicate that no word in the sentence starts with `searchWord`.

#### Implementation

<iframe src="https://leetcode.com/playground/LWE8FPtk/shared" frameBorder="0" width="100%" height="497" name="LWE8FPtk"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input string `sentence`, $m$ be the size of the input string `searchWord`, $k$ be the average length of words in `sentence`, and $w$ be the total number of words in `sentence` such that $w \cdot k = n$.

- Time complexity: $O(n + w \cdot m)$

    The algorithm first splits the `sentence` into individual words using built-in functions. This process involves iterating through all $n$ characters of the string once, resulting in a time complexity of $O(n)$.

    Next, for each word extracted from the sentence, the algorithm compares the first $m$ characters of the word with the `searchWord`. This comparison is done using a built-in function that checks the prefix of length $m$, which takes $O(m)$ time per word. Since there are $w$ words in the `sentence`, this part of the algorithm takes $O(w \cdot m)$ time.

    Combining both parts, the total time complexity of the algorithm is $O(n + w \cdot m)$.

- Space complexity: $O(n)$

    The algorithm uses built-in functions that process the input `sentence` directly, requiring $O(n)$ space to store the `sentence` string. The `currentWord` variable temporarily holds one word at a time, requiring $O(k)$ space, but this space is reused across iterations. Additionally, the algorithm uses constant space $O(1)$ for variables like `wordPosition`. Therefore, the overall space complexity is $O(n)$.

---

### Approach 4: Using Trie

#### Intuition

Instead of processing the entire sentence multiple times, we can use a data structure called a `Trie` (prefix tree). A `Trie` organizes words so that characters in common prefixes are shared, forming a tree-like structure. This makes it much faster and more efficient to search for prefixes, as both building the `Trie` and searching for a prefix can be done in linear time relative to the length of the `searchWord`.

To implement this, we start by creating an empty `Trie`, which is made up of nodes where each node represents a character. As we add each word from the sentence to the `Trie`, we also store the word’s position in the sentence. This is done by keeping a list of positions at each node that corresponds to a character in the word. Later, when we search for a prefix, we can quickly find all the words that match it using this stored information.
 
For each word in the sentence, we go through the `Trie` one character at a time. If a character is not already in the Trie, we create a new node for it. As we move through the `Trie`, we update the list at each node to keep track of which words pass through that character. By the end, the `Trie` will store all the words in the sentence, organized by their common prefixes.

Once the `Trie` is built, we can search for the `searchWord` by going through the `Trie` one character at a time. If we find all the characters of the `searchWord`, it means some words in the sentence start with that prefix. The list of word positions at the final node of the `searchWord` tells us which words match. If we can’t find the node for the `searchWord`, it means no word in the sentence starts with it.  

If we find matching words, we return the smallest position from the list of word positions. This tells us the first word in the sentence that starts with the `searchWord`. If no matches are found, we return `-1`.

#### Algorithm

- Initialize the `Trie` data structure with the root node.

- Add each word in the sentence to the Trie:
  - Split the sentence into words using an `istringstream`.
  - For each word, call `addToTrie(word, currentWordPosition)` to insert the word into the Trie, associating the word's position in the sentence with it.
  - Increment `currentWordPosition` for each word.

- Once all words are added to the Trie, check if the `searchWord` is a prefix of any word in the sentence:
  - Call `checkPrefix(searchWord)` to find the positions of words starting with the `searchWord` prefix.
  - If no words match the prefix, return `-1`.
  - Otherwise, return the smallest position (first occurrence) where the prefix is found in the list of positions.

- `addToTrie` function:
  - Start from the root node.
  - For each character `c` in the word:
    - If `c` is not found in the current node's children, create a new TrieNode for `c`.
    - Move to the child node corresponding to `c`.
    - Add the `currentWordPosition` to the node’s `currentWordPosition` list.

- `checkPrefix` function:
  - Start from the root node.
  - For each character `c` in the word:
    - If `c` is not found in the current node's children, return an empty list (no matching prefix).
    - Move to the child node corresponding to `c`.
  - Return the list of word positions stored in the node corresponding to the last character of the prefix.

#### Implementation

<iframe src="https://leetcode.com/playground/76kWke3Z/shared" frameBorder="0" width="100%" height="500" name="76kWke3Z"></iframe>

#### Complexity Analysis

Let $n$ be the size of the input string `sentence`, $m$ be the size of the input string `searchWord`, $k$ be the average length of words in `sentence`, and $w$ be the total number of words in `sentence` such that $w \cdot k = n$.

- Time complexity: $O(n + m) \approx O(n)$

    The algorithm involves splitting the `sentence` into words, which takes $O(n)$ time. Building the Trie structure involves inserting each word into the Trie, which takes $O(n)$ time in total (since each character is processed once). Checking the prefix of `searchWord` in the Trie takes $O(m)$ time, as it involves traversing the Trie for each character in `searchWord`. Thus, the overall time complexity is $O(n + m)$.

- Space complexity: $O(n)$

    The space complexity is dominated by the Trie structure, which stores all the words from the `sentence`. In the worst case, the Trie will store all characters of all words, resulting in $O(n)$ space. Additionally, the `words` list created by splitting the `sentence` also consumes $O(n)$ space. Therefore, the total space complexity is $O(n)$.

---