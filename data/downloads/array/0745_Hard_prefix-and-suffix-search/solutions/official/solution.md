# Official Solution

**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solution/](https://leetcode.com/problems/prefix-and-suffix-search/solution/)

---

[TOC]

### Approach #1: Trie + Set Intersection [Time Limit Exceeded]

**Intuition and Algorithm**

We use two tries to separately find all words that match the prefix, plus all words that match the suffix. Then, we try to find the highest-weight element in the intersection of these sets.

Of course, these sets could still be large, so we might TLE if we aren't careful.

<iframe src="https://leetcode.com/playground/kYz9yLtz/shared" frameBorder="0" width="100%" height="500" name="kYz9yLtz"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(NK + Q(N+K))$$ where $$N$$ is the number of words, $$K$$ is the maximum length of a word, and $$Q$$ is the number of queries. If we use memoization in our solution, we could produce tighter bounds for this complexity, as the complex queries are somewhat disjoint.

* Space Complexity: $$O(NK)$$, the size of the tries.

---
### Approach #2: Paired Trie [Accepted]

**Intuition and Algorithm**

Say we are inserting the word `apple`.  We could insert `('a', 'e'), ('p', 'l'), ('p', 'p'), ('l', 'p'), ('e', 'a')` into our trie. Then, if we had equal length queries like `prefix = "ap", suffix = "le"`, we could find the node `trie['a', 'e']['p', 'l']` in our trie.  This seems promising.

What about queries that aren't equal?  We should just insert them like normal. For example, to capture a case like `prefix = "app", suffix = "e"`, we could create nodes `trie['a', 'e']['p', None]['p', None]`.

After inserting these pairs into our trie, our searches are straightforward.

<iframe src="https://leetcode.com/playground/HUwJpYcH/shared" frameBorder="0" width="100%" height="500" name="HUwJpYcH"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(NK^2 + QK)$$ where $$N$$ is the number of words, $$K$$ is the maximum length of a word, and $$Q$$ is the number of queries.

* Space Complexity: $$O(NK^2)$$, the size of the trie.

---
### Approach #3: Trie of Suffix Wrapped Words [Accepted]

**Intuition and Algorithm**

Consider the word `'apple'`. For each suffix of the word, we could insert that suffix, followed by `'#'`, followed by the word, all into the trie.

For example, we will insert `'#apple', 'e#apple', 'le#apple', 'ple#apple', 'pple#apple', 'apple#apple'` into the trie.  Then for a query like `prefix = "ap", suffix = "le"`, we can find it by querying our trie for `le#ap`.

<iframe src="https://leetcode.com/playground/EQGJp4E3/shared" frameBorder="0" width="100%" height="500" name="EQGJp4E3"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(NK^2 + QK)$$ where $$N$$ is the number of words, $$K$$ is the maximum length of a word, and $$Q$$ is the number of queries.

* Space Complexity: $$O(NK^2)$$, the size of the trie.