# Official Solution

**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solution/](https://leetcode.com/problems/find-and-replace-pattern/solution/)

---

[TOC]

## Solution
---
### Approach 1: Two Maps

**Intuition and Algorithm**

If say, the first letter of the pattern is `"a"`, and the first letter of the word is `"x"`, then in the permutation, `"a"` must map to `"x"`.

We can write this bijection using two maps: a forward map $$\text{m1}$$ and a backwards map $$\text{m2}$$.

$$
\text{m1} : \text{"a"} \rightarrow \text{"x"}
$$
$$
\text{m2} : \text{"x"} \rightarrow \text{"a"}
$$

Then, if there is a contradiction later, we can catch it via one of the two maps.  For example, if the `(word, pattern)` is `("aa", "xy")`, we will catch the mistake in $$\text{m1}$$ (namely, $$\text{m1}(\text{"a"}) = \text{"x"} = \text{"y"}$$).  Similarly, with `(word, pattern) = ("ab", "xx")`, we will catch the mistake in $$\text{m2}$$.

<iframe src="https://leetcode.com/playground/RmhRAKfM/shared" frameBorder="0" width="100%" height="480" name="RmhRAKfM"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N * K)$$, where $$N$$ is the number of words, and $$K$$ is the length of each word.

* Space Complexity:  $$O(N * K)$$, the space used by the answer.
<br />
<br />


---
### Approach 2: One Map

**Intuition and Algorithm**

As in *Approach 1*, we can have some forward map $$\text{m1} : \mathbb{L} \rightarrow \mathbb{L}$$, where $$\mathbb{L}$$ is the set of letters.  

However, instead of keeping track of the reverse map $$\text{m2}$$, we could simply make sure that every value $$\text{m1}(x)$$ in the codomain is reached at most once.  This would guarantee the desired permutation exists.

So our algorithm is this: after defining $$\text{m1}(x)$$ in the same way as *Approach 1* (the forward map of the permutation), afterwards we make sure it reaches distinct values.

<iframe src="https://leetcode.com/playground/bWFzJCRp/shared" frameBorder="0" width="100%" height="497" name="bWFzJCRp"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N * K)$$, where $$N$$ is the number of words, and $$K$$ is the length of each word.

* Space Complexity:  $$O(N * K)$$, the space used by the answer.
<br />
<br />