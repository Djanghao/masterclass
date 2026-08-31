# Official Solution

**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solution/](https://leetcode.com/problems/number-of-matching-subsequences/solution/)

---

[TOC]

---
### Approach #1: Brute Force [Time Limit Exceeded]

**Intuition and Algorithm**

Let's try to check separately whether each word `words[i]` is a subsequence of `S`.

For every such `word`, we try to find the first occurrence of `word[0]` in `S`, then from that point on try to find the first occurrence of `word[1]`, and so on.

<iframe src="https://leetcode.com/playground/D9ZmBjxc/shared" frameBorder="0" width="100%" height="378" name="D9ZmBjxc"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\text{words.length} * S\text{.length} + \sum_i \text{words[i].length})$$.  For each word, our `subseq` check on word `words[i]` may take time complexity $$O(S\text{.length} + \text{words[i].length})$$.

* Space Complexity: $$O(1)$$.  (In Java, our space complexity is $$O(S\text{.length} + \text{max(words[i].length)})$$, but can be made to be $$O(1)$$ with a pointer based implementation.)

---
### Approach #2: Next Letter Pointers [Accepted]

**Intuition**

Since the length of `S` is large, let's think about ways to iterate through `S` only once, instead of many times as in the brute force solution.

We can put words into buckets by starting character.  If for example we have `words = ['dog', 'cat', 'cop']`, then we can group them `'c' : ('cat', 'cop'), 'd' : ('dog',)`.  This groups words by what letter they are currently waiting for.  Then, while iterating through letters of `S`, we will move our words through different buckets.

For example, if we have a string like `S = 'dcaog'`:

* `heads = 'c' : ('cat', 'cop'), 'd' : ('dog',)` at beginning;
* `heads = 'c' : ('cat', 'cop'), 'o' : ('og',)` after `S[0] = 'd'`;
* `heads = 'a' : ('at',), 'o' : ('og', 'op')` after `S[0] = 'c'`;
* `heads = 'o' : ('og', 'op'), 't': ('t',)` after `S[0] = 'a'`;
* `heads = 'g' : ('g',), 'p': ('p',), 't': ('t',)` after `S[0] = 'o'`;
* `heads = 'p': ('p',), 't': ('t',)` after `S[0] = 'g'`;

**Algorithm**

Instead of a dictionary, we'll use an array `heads` of length `26`, one entry for each letter of the alphabet.  For each letter in `S`, we'll take all the words waiting for that letter, and have them wait for the next letter in that word.  If we use the last letter of some word, it adds 1 to the answer.

For another description of this algorithm and a more concise implementation, please see @StefanPochmann's excellent forum post [here]( https://leetcode.com/problems/number-of-matching-subsequences/discuss/117634/Efficient-and-simple-go-through-words-in-parallel-with-explanation/).

<iframe src="https://leetcode.com/playground/cvU9s2Zv/shared" frameBorder="0" width="100%" height="500" name="cvU9s2Zv"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(S\text{.length} + \sum_i \text{words[i].length})$$.

* Space Complexity: $$O(\text{words.length})$$.  (In Java, our additional space complexity is $$O(\sum_i \text{words[i].length})$$, but can be made to be $$O(\text{words.length})$$ with a pointer based implementation.)