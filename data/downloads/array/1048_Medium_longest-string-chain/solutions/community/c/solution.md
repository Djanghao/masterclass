# ✅ [C++/Python] Simple Solution w/ Explanation | DP

**Author:** r0gue_shinobi
**Votes:** 282
**Link:** [https://leetcode.com/problems/longest-string-chain/solutions/2153007/](https://leetcode.com/problems/longest-string-chain/solutions/2153007/)

---

Given an array of `words`, we need to find the length of the ***longest possible word chain***. I will use some terms whose definitions are given in the problem statement without explaining them here.

How should we approach this problem? \uD83E\uDD14
The first thing which comes into mind is **DP**. There are a few reasons for this thought.

- It asks for **longest** possible word chain, so it is an optimization problem.
- The chain is extended by adding a new word which only depends on the last word of the chain. So, it can be broken down into subproblems.

___
\u2705 **Solution I: Bottom-Up DP [Accepted]**

Generally, we need to think of a recursive relation in a DP problem and then optimize it. But here, it wasn't required. Can we start with the shortest word and try to build a chain starting with it? Let's think in this direction. We then need to find the next shortest word and so on. It could be expensive, so *sorting* the entire array based on length will help.

Let `prev` be the predecessor of a word. Building a successor from `prev` will be more expensive than building a predecessor from that word. The following example will make it clear:

```text
prev = "chain"
To build all possible successors, we need to add a letter anywhere in the word.
_ c _ h _ a _ i _ n _
We have 6 possible spaces and 26 possible letters, so a total of 6 * 26 possibilities.

Now, getting a predecessor from a word is a lot easier. Just remove a letter.
word = "chains"
pred = {"hains", "cains", "chins", "chans", "chais", "chain"}
```

So, for each word, we'll look for a predecessor. Wouldn't it be great if can have a *data structure* with the following two properties: 

- Can tell which of these predecessors are present in the array efficiently.
- Store size of the chain ending with that predecessor.

Turns out that we already have one. It is `unordered_map` in `C++` and `dictionary` in python.
**Example:**

```text
words = ["a","b","ba","bca","bda","bdca"]

1. word = "a", prev = "", dp = {"a": 1}; It means that ending with "a", the max size of chain is 1.
2. word = "b", prev = "", dp = {"a": 1, "b": 1}; It means that ending with "b", the max size of chain is 1.
3. word = "ba", prev = "a" or "b", dp = {"a": 1, "b": 1, "ba": 2}; It means that ending with "ba", the max size of chain is 2.
	Here, both "a" and "b" can be the predecessor. We are interested only in length not the actual chain!
4. word = "bca", prev = "ba", dp = {"a": 1, "b": 1, "ba": 2, "bca":3}; It means that ending with "bca", the max size of chain is 3.
5. word = "bda", prev = "ba", dp = {"a": 1, "b": 1, "ba": 2, "bca":3, "bda": 3}; It means that ending with "bda", the max size of chain is 3.
6. word = "bdca", prev = "bda" or "bca", dp = {"a": 1, "b": 1, "ba": 2, "bca":3, "bda": 3, "bdca": 4}; It means that ending with "bdca", the max size of chain is 4.
```

Now with these ideas in mind, we are ready to code!

<iframe src="https://leetcode.com/playground/WheZr2K3/shared" frameBorder="0" width="1080" height="380"></iframe>

- **Time Complexity:** `O(nlog(n) + nll)`
  - `O(nlog(n))` for sorting
  - `O(nll)`: `n` for each loop, `l` for inner loop and `l` for string concatenation.
- **Space Complexity:** `O(ns)`
  - `O(n)` for both sorting and storing in dictionary.
  - `O(ns)`: `s` for creating space for `prev`, `n` times. 
___
___
If you like the solution, please **upvote**! \uD83D\uDD3C
For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F
