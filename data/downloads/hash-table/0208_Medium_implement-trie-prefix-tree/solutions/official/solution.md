# Official Solution

**Link:** [https://leetcode.com/problems/implement-trie-prefix-tree/solution/](https://leetcode.com/problems/implement-trie-prefix-tree/solution/)

---

## Summary

This article is intended for intermediate users. It covers the Trie (Prefix Tree) data structure and its common operations.

## Solution

### Applications

A Trie (pronounced "try") or Prefix Tree is a tree data structure used to efficiently retrieve a key from a dataset of strings. Here are some of its key applications:

1. [Autocomplete](https://en.wikipedia.org/wiki/Autocomplete)
   
   ![Google Suggest](./images/0.png){:width="539px"}
   
   *Figure 1. Google Suggest in action.*

2. [Spell Checker](https://en.wikipedia.org/wiki/Spell_checker)
   
   ![Spell Checker](./images/1.png){:width="400px"}
   
   *Figure 2. A spell checker is used in a word processor.*

3. [IP Routing (Longest Prefix Matching)](https://en.wikipedia.org/wiki/Longest_prefix_match)
   
   ![IP Routing](./images/2.gif){:width="539px"}
   
   *Figure 3. The longest prefix matching algorithm uses Tries in IP routing to select an entry from a forwarding table.*

4. [T9 Predictive Text](https://en.wikipedia.org/wiki/T9_(predictive_text))
   
   ![T9 Predictive Text](./images/3.jpg)
   
   *Figure 4. T9, which stands for Text on 9 keys, was used on phones to input text in the late 1990s.*

5. [Solving Word Games](https://en.wikipedia.org/wiki/Boggle)
   
   ![Boggle](./images/4.png){:width="350px"}
   
   *Figure 5. Tries are used to solve Boggle efficiently by pruning the search space.*

While other data structures like balanced trees and hash tables can be used to search for words, Tries offer advantages in certain operations:

- Prefix Searches: Tries excel in finding all keys with a common prefix.
- Lexicographical Ordering: They allow efficient enumeration of keys in lexicographical order.
- Space Efficiency: For keys with common prefixes, Tries use less space compared to hash tables, which can suffer from hash collisions and increased search times as they grow.

### Trie Node Structure

A Trie is a rooted tree where each node has the following attributes:

- Up to $R$ links to its children, with each link corresponding to one of $R$ possible character values. In this article, we assume $R = 26$ for lowercase Latin letters.
- A boolean field indicating whether the node marks the end of a key or is just a prefix.

![Representation of a key in a Trie](./images/5.png){:width="539px"}

*Figure 6. Representation of the key "leet" in a Trie.*

<iframe src="https://leetcode.com/playground/abxCjqna/shared" frameBorder="0" width="100%" height="500" name="abxCjqna"></iframe>

### Insertion of a Key into a Trie

To insert a key into a Trie, follow these steps:

1. Start at the root and search for a link corresponding to the first character of the key.
   - If the link exists, move to the child node and repeat for the next character.
   - If the link does not exist, create a new node and link it to the parent node.
2. Continue until you reach the last character of the key, then mark the final node as an end node.

![Insertion of keys into a Trie](./images/6.png){:width="539px"}

*Figure 7. Insertion of keys into a Trie.*

<iframe src="https://leetcode.com/playground/HtVzSrsP/shared" frameBorder="0" width="100%" height="429" name="HtVzSrsP"></iframe>

Complexity Analysis

- Time Complexity: $O(m)$, where $m$ is the length of the key. Each operation involves examining or creating a node until the end of the key.
- Space Complexity: $O(m)$. In the worst case, each newly inserted key might require adding $m$ new nodes, resulting in $O(m)$ space usage.

### Search for a Key in a Trie

To search for a key in a Trie:

1. Start at the root and examine the current node for a link corresponding to the key's character.
   - If the link exists, move to the next node and continue searching.
   - If the link does not exist:
     - If there are remaining characters and the current node is marked as `isEnd`, return true.
     - If there are remaining characters but no valid path, or if no characters are left but the node is not marked as `isEnd`, return false.

![Search for a key in a Trie](./images/7.png){:width="539px"}

*Figure 8. Search for a key in a Trie.*

<iframe src="https://leetcode.com/playground/6YJ29e5F/shared" frameBorder="0" width="100%" height="500" name="6YJ29e5F"></iframe>

Complexity Analysis

- Time Complexity: $O(m)$. Each step involves searching for the next character of the key, requiring $m$ operations in the worst case.
- Space Complexity: $O(1)$.

### Search for a Key Prefix in a Trie

To search for a key prefix:

1. Traverse the Trie from the root until the end of the prefix or until it is no longer possible to continue the path.
2. Unlike searching for a full key, when you reach the end of the prefix, return true. The `isEnd` mark is not considered because you are only checking for a prefix.

![Search for a key prefix in a Trie](./images/8.png){:width="539px"}

*Figure 9. Search for a key prefix in a Trie.*

<iframe src="https://leetcode.com/playground/h9bDZ67Q/shared" frameBorder="0" width="100%" height="225" name="h9bDZ67Q"></iframe>

Complexity Analysis

- Time Complexity: $O(m)$.
- Space Complexity: $O(1)$.

## Practice Problems

Here are some problems to practice using the Trie data structure:

1. [Add and Search Word - Data Structure Design](https://leetcode.com/problems/add-and-search-word-data-structure-design/) - A direct application of Trie.
2. [Word Search II](https://leetcode.com/problems/word-search-ii/) - Similar to Boggle.

---