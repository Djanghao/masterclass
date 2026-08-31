# Official Solution

**Link:** [https://leetcode.com/problems/short-encoding-of-words/solution/](https://leetcode.com/problems/short-encoding-of-words/solution/)

---

[TOC]

---
### Approach #1: Store Prefixes [Accepted]

**Intuition**

First, let's remove the duplicate strings since it is not optimal to include two or more of the same string in the final answer. We can do this with a set.

Next, let's handle the suffix relationship.

In this article, a "proper suffix" will refer to a suffix that is not an empty string and not equal to the string itself.

An observation is that if the word `X` is a proper suffix of `Y`, then it does not need to be considered, as the encoding of `Y` in the reference string will also encode `X`.  For example, if `"me"` and `"time"` are in `words`, we can discard `"me"` without changing the answer.

If a word `Y` does not have any other word `X` (in the list of `words`) that is a proper suffix of `Y`, then `Y` must be part of the reference string.

Thus, the goal is to remove words from the list such that no word is a proper suffix of another.  The final answer would be `sum(word.length + 1 for word in words)`.

**Algorithm**

Since a word has at most 6 proper suffixes (as `words[i].length <= 7`), let's iterate over all of them.  For each proper suffix, we'll try to remove it from our `words` list.  For efficiency, we'll make `words` a set.

**Implementation**

<iframe src="https://leetcode.com/playground/Z8Dj9oFn/shared" frameBorder="0" width="100%" height="293" name="Z8Dj9oFn"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\sum w_i^2)$$, where $$w_i$$ is the length of `words[i]`.

* Space Complexity: $$O(\sum w_i)$$, the space used in storing suffixes.

---
### Approach #2: Trie [Accepted]

**Intuition**

As in *Approach #1*, the goal is to remove words that are proper suffixes of another word in the list.

**Algorithm**

To find whether different words have the same suffix, let's put them backwards into a trie (prefix tree).  For example, if we have `"time"` and `"me"`, we will put `"emit"` and `"em"` into our trie.

After, the leaves of this trie (nodes with no children) represent words that have no proper suffix, and we will count `sum(word.length + 1 for word in words)`.

**Implementation**
    
<iframe src="https://leetcode.com/playground/BGN8P3v3/shared" frameBorder="0" width="100%" height="500" name="BGN8P3v3"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\sum w_i)$$, where $$w_i$$ is the length of `words[i]`.

* Space Complexity: $$O(\sum w_i)$$, the space used by the trie.