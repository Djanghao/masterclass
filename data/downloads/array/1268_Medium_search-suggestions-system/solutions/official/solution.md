# Official Solution

**Link:** [https://leetcode.com/problems/search-suggestions-system/solution/](https://leetcode.com/problems/search-suggestions-system/solution/)

---

[TOC]

## Solution

---

### Approach 1: Binary Search

**Intuition**

Since the question asks for the result in a sorted order, let's start with sorting `products`.
An advantage that comes with sorting is `Binary Search`, we can binary search for the prefix. Once we locate the first match of prefix, all we need to do is to add the next 3 words into the result (if there are any), since we sorted the words beforehand.

**Algorithm**

1. Sort the input `products`.
2. Iterate each character of the `searchWord` adding it to the `prefix` to search for.
3. After adding the current character to the `prefix` binary search for the `prefix` in the input.
4. Add next 3 strings from the current binary search `start` index till the prefix remains same.
5. Another optimization that can be done is reducing the binary search space to current `start` index (This is due to the fact that adding more characters to the prefix will make the next search result's index be at least > current search's index).

<iframe src="https://leetcode.com/playground/NCPdFYJE/shared" frameBorder="0" width="100%" height="500" name="NCPdFYJE"></iframe>

**Complexity Analysis**

* Time complexity : $$O(nlog(n)) + O(mlog(n))$$. Where `n` is the length of `products` and `m` is the length of the search word. Here we treat string comparison in sorting as  $$O(1)$$.  $$O(nlog(n))$$ comes from the sorting and $$O(mlog(n))$$ comes from running `binary search` on products `m` times.

  * In Java there is an additional complexity of $$O(m^2)$$ due to Strings being immutable, here `m` is the length of `searchWord`.

* Space complexity : Varies between $$O(1)$$ and $$O(n)$$ where `n` is the length of `products`, as it depends on the implementation used for sorting. We ignore the space required for output as it does not affect the algorithm's space complexity. See [Internal details of std::sort](https://www.geeksforgeeks.org/internal-details-of-stdsort-in-c/).
Space required for output is $$O(m)$$ where `m` is the length of the search word.


<br />

---

### Approach 2: Trie + DFS

**Intuition**

Whenever we come across questions with multiple strings, it is best to think if [Trie](https://en.wikipedia.org/wiki/Trie) can help us. What we need here is a way to search for all the words with given prefix, this is a well known problem that trie can solve. The question also asks for a sorted results, if you look closely a trie word is represented by it's preorder traversal. It is also worth noting that a preorder traversal of a trie will always result in a sorted traversal of results, thus all we need to do is limit the word traversal to 3.

Questions using Trie:

[79. Word Search](https://leetcode.com/problems/word-search)

[211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure)

![diff](../Figures/1268/Trie.png)
*Figure 1. A trie made from `words`*


**Algorithm**

1. Create a Trie from the given products input.
2. Iterate each character of the `searchWord` adding it to the `prefix` to search for.
3. After adding the current character to the `prefix` traverse the `trie` pointer to the node representing `prefix`.
4. Now traverse the tree from `curr` pointer in a preorder fashion and record whenever we encounter a complete word.
5. Limit the result to 3 and return `dfs` once reached this limit.
6. Add the words to the final result.

<iframe src="https://leetcode.com/playground/RSAV9EQc/shared" frameBorder="0" width="100%" height="500" name="RSAV9EQc"></iframe>

**Complexity Analysis**

* Time complexity : $$O(M)$$ to build the `trie` where `M` is total number of characters in `products` For each `prefix` we find its representative node in $$O(\text{len(prefix)})$$ and dfs to find at most 3 words which is an `O(1)` operation. Thus the overall complexity is dominated by the time required to build the `trie`.

  * In Java there is an additional complexity of $$O(m^2)$$ due to Strings being immutable, here `m` is the length of `searchWord`.

* Space complexity : $$O(26n)=O(n)$$. Here `n` is the number of nodes in the `trie`. `26` is the alphabet size.
Space required for output is $$O(m)$$ where `m` is the length of the search word.

</br>