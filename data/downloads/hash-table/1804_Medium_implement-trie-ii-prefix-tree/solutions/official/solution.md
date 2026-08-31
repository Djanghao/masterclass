# Official Solution

**Link:** [https://leetcode.com/problems/implement-trie-ii-prefix-tree/solution/](https://leetcode.com/problems/implement-trie-ii-prefix-tree/solution/)

---

[TOC]

## Solution

--- 

### Overview
This problem is a follow-up to [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/description/). We highly recommend readers solve that problem first. In this article, we will assume you have already solved that problem.

First lets talk about the difference between the two problems.

1. **Implement Trie (Prefix Tree):**
   This problem focuses on building a basic Trie data structure and implementing its core functionalities. The core methods include inserting words into the Trie and searching for words or prefixes. It's a foundational problem that tests your ability to create and manipulate a Trie.

2. **Implement Trie II (Prefix Tree):**
   This problem takes the concept of a Trie a step further and introduces more advanced operations that involve computing counts based on certain conditions. The methods include counting the number of words that start with a given prefix and counting the total number of words that match a given word. Additionaly, this problem requires you to erase a word from the trie. This problem not only requires a solid understanding of basic Trie operations but also challenges you to optimize counting operations by cleverly using counters and taking advantage of the Trie's structure to reduce unnecessary traversal.

---

### Approach: 


#### Intuition

Let's think through each method one by one.

**countWordsEqualTo**:
The first question is how do we count the number of occurrences of a word? We keep track of the count using an integer counter. If there is one instance of the word "xxx" we set the counter to 1. If we encounter the same word again, we increment the counter by 1, and so on. Next, where should we store this integer? We can store this integer as an attribute of each Trie node. This way, each node holds the count of words that end on it. We must initialize the counter to 0 for each new Trie node, which means no words end on it initially. For each call to `countWordsEqualTo`, we'll start at the root and traverse through the nodes, following the path that corresponds to the characters of the word we're looking for. Along the way, we'll be checking whether the links are present and navigating deeper into the Trie. Once you've reached the end of the word, you'll use an integer counter `words_ending_here` stored at that node to determine how many times the word appears in the dataset.

**countWordsStartingWith**:
Again, how do we count the number of words starting with a specific prefix? At each node we can keep a track of the number of words that can be found by continuing along that path. To do this, when inserting a word in to the trie, we traverse the Trie starting from the root and follow the path defined by the prefix. At each node, we increment a counter to keep track of how many words can be found by continuing along that path. Similar to the previous case, we store this counter as an attribute of each Trie node. It represents the count of words that start with the prefix leading to that node. As done in `countWordsEqualTo`, we initialize the counter to 0 for each new Trie node. This counter reflects how many words share the prefix corresponding to given node's path.

**insert**:
When you're inserting a new word into the Trie, think of it as carving a new path in the maze. Each character in the word represents a step along that path, and each step you take creates a new node in the Trie. Starting from the root, each character in the word corresponds to a step along this path. With each step, the `words_starting_here` counter is increased for given node, indicating how many words can be found by continuing along that path. Once the end of the word is reached, the `words_ending_here` counter is incremented on the last node to keep track of word occurrences.

**erase**:
The `erase` method is about removing one instance of the given word from the Trie while maintaining the structure and counters. You'll traverse the Trie following the characters of the word to be erased. However, as you traverse, you'll also decrement each `words_starting_here` by 1 along the path, as the removed instance no longer contributes to the count of paths passing through the nodes. Once you've reached the end of the given word, you'll decrement the `words_ending_here` counter to reflect its removal. In essence, this process ensures that the counters and structure of the Trie are correctly updated after removing an instance.

Based on the requirements of the problem we can conclude that we will need each Trie Node to have three attributes. An array to store the children of give node. An integer counter `words_starting_here` to find the number of complete words that can be found if we continue along this path. An integer counter `words_ending_here` to find the number of words that end on this node.

Here's what it will look like when we perform the following `insert` operations on the trie:
1. `insert` "apps"
2. `insert` "bowl"
3. `insert` "app"
4. `insert` "bow"
5. `insert` "cat"

!?!../Documents/1804/implement_trie_II.json:2250,3000!?!

Here's what it will look like when we perform the following `countWordsStartingWith` operations on the trie:
1. `countWordsStartingWith` "ap"
2. `countWordsStartingWith` "catch"

!?!../Documents/1804/implement_trie_II_startswith.json:2250,3000!?!

Here's what it will look like when we perform the following `countWordsEqualTo` operation on the trie:
1. `countWordsEqualTo` "app"

!?!../Documents/1804/implement_trie_II_ending.json:2250,3000!?!

Here's what it will look like when we perform the following `erase` operations on the trie:
1. `erase` "app"
2. `erase` "cat"

!?!../Documents/1804/implement_trie_II_erase.json:2250,3000!?!

#### Algorithm

1. **TrieNode class:**
   - `links`: An array of size 26 (representing the English lowercase letters), where each index represents a character and holds a reference to the next TrieNode corresponding to that character.
   - `words_ending_here`: A counter that keeps track of how many words end at this node. This helps in the `countWordsEqualTo` method.
   - `words_starting_here`: A counter that keeps track of how many words pass through this node or its descendants. This is useful for the `countWordsStartingWith` method.

2. **Trie class:**
   - `init`: Initializes the Trie by creating a root TrieNode.

   - `insert`: Inserts a word into the Trie:
     - Traverse through each `character` of the word.
     - Calculate the index of `character` by subtracting the ASCII value of 'a' from the ASCII value of `character`.
     - If `character's` corresponding link in the current node is None, create a new TrieNode and link it.
     - Move to the node corresponding to `character`.
     - Increment the `words_starting_here` counter in the node corresponding to `character` to mark the path of the inserted word.
     - Continue this process till you reach the end of the word.
     - After the traversal, increment the `words_ending_here` counter of the last node to indicate the word's occurrence.

   - `countWordsEqualTo`: Counts the number of instances of a word in the Trie:
     - Traverse through each `character` of the target word.
     - Calculate the index of `character` as before.
     - If `character's` corresponding link in the current node is None, the word is not present in the Trie, so return 0.
     - Otherwise, move to the node corresponding to `character` and repeat the process.
     - After the traversal, return the `words_ending_here` count of the last node.

   - `countWordsStartingWith`: Counts the number of words in the Trie with a given prefix:
     - Traverse through each `character` of the prefix.
     - Calculate the index of `character` as before.
     - If `character's` corresponding link in the current node is None, there are no words with this prefix, so return 0.
     - Otherwise, move to the node corresponding to `character` using the corrsponding link and repeat the process.
     - After the traversal, return the `words_starting_here` counter of the last node.

   - `erase`: Erases one instance of the given word from the Trie:
     - Traverse through each `character` of the word to be erased.
     - Calculate the index of `character` as before.
     - Decrement the `words_starting_here` counter in each node to remove the path of one instance of the erased word.
     - Move to the next node and repeat the process.
     - After the traversal, decrement the counter `words_ending_here` of the last node by 1 to reflect the removal of one instance of the given word.


#### Implementation


<iframe src="https://leetcode.com/playground/oHjh2kST/shared" frameBorder="0" width="100%" height="500" name="oHjh2kST"></iframe>

#### Complexity Analysis

Let $N$ be the maximum length of a word or a prefix.
Let $M$ be the number of calls.

* Time complexity: $O(N)$. The time complexity for each method is $O(N)$ since we iterate over the characters of the word.

* Space complexity: $O(N \cdot M)$. Each character can create a new node in the trie when the `insert` method is called. For a word of length $N$ we will create at most $N$ TrieNodes. If there are $M$ words inserted into the trie we will have to create at most $N \cdot M$ TrieNodes.

---