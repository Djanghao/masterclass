# Official Solution

**Link:** [https://leetcode.com/problems/string-compression-ii/solution/](https://leetcode.com/problems/string-compression-ii/solution/)

---

[TOC]

## Solution

---

### Overview

There are a few more characteristics of this problem that hint to us that DP is a viable first approach. If we consider building the string one character at a time, for each character we will have a choice, we can either keep it or delete it, and we need to choose the optimal action. Each of these choices will lead us to another subproblem. Furthermore, whether we are allowed to delete a character depends on if we have already deleted k characters, so our current options are affected by our past decisions. These are both characteristics of problems that can be solved using dynamic programming.

The final clue given to us is that the problem is asking us to "find the minimum length of the run-length encoded version of s after deleting at most k characters," which means that this is an optimization problem. Whenever a problem asks us to minimize or maximize a result based on a given set of rules, we should always include dynamic programming in our list of approaches to consider. Here, we will demonstrate how to solve this problem using dynamic programming.


---

### Approach 1: Dynamic Programming

#### Intuition

Let us traverse symbols from left to right, adding symbol by symbol. Then we require the following pieces of information to fully describe the current state.

- `idx`: Index of the current symbol
- `lastChar`: The last symbol we have in our compression
- `lastCharCount`: The number of `lastChar` we have considered
- `k`: The number of symbols we are still allowed to delete

We will discuss these states in more detail later.

#### Algorithm

Let us consider the example `abbbcc` and take `k = 3`. We traverse over the symbols from left to right and for each symbol, we decide whether to take it or not. This leaves us with the state: `(string, left to take)`. We can represent our possible states as binary trees, where for the left children are where we take symbols and for the right, we do not take them. Notice that we can not have a negative value of `k`. Also if we look at all levels of this tree, there will be just too many options to deal with: $$2^n$$ (where $$n$$ is the length of the given string). Notice however that there will be a lot of repeating subproblems, which is a good indicator of dynamic programming. For example, `(ab, 2)` and `(b, 1)` are both repeated in the image below. If we go even deeper in the tree, we will have even more repetitions.

<img src="../Figures/1531/1531_1.png">

Now we need to understand what parameters to use to define each DP state. We need several of them:
1. First is the number of symbols we have already traversed. We need it to know the next symbol to be processed.
2. The last letter that was added to the compressed string that we are building. This is so that we can decide how the compression will change if a new symbol is added.
3. The count of the last letter. Imagine that we have compression `a3b5`. If we add one more `b`, our compression will become `a3b6`. We need to be careful with several cases. When we have, say, `a3` compression, and we add a `b`, then we will now have `a3b`. Also if we have `a3b9` and we add one more `b`, then we will have `a3b10`. Similarly, `a3b99` will change to `a3b100` after addition of a `b`. Notice that when the count of the last letter is 0, 1, 9, or 99, **the length of the compression will change**. However, when the count of the last letter is anything else, **the length of the compression will not change**. 
4. Finally, we need to keep track of how many symbols we are still allowed to delete.

The result that we will return for each state will be the minimum length of the compressed string: which is exactly what we were asked to find.

Now, let us discuss how our states will be connected with each other. Let us say that we have already compressed the string `abbcaaa` so far. The following image discusses the options that we have for the next character.

<img src="../Figures/1531/1531_2.png">

1. We can delete a new symbol, then we increase `i` by one and decrease `k` by one.
2. We decide to take a new symbol, then there are two possibilities:
   1. This symbol is equal to the last symbol in compression, then the total length of compression will not change, except when the frequency of the last symbol is `1`, `9` or `99`.
   2. This symbol is not equal to the last symbol in compression, then the total length will increase by one.

#### Implementation

1. **Python implementation details**. In python, we can use the functionality of `@cache`, which will do all the job of memoization for us.
2. **Java implementation details**. There is no such alternative in Java. So, we can build a DP table, but it will lead to bad complexity and a possibility of TLE. If we use a table with size $n \times n \times k \times 26$, then the time and space complexities will be $O(26n^2k)$, which is worse than the allowed complexity (see complexity analysis for more details). So one of the alternative ways to avoid this is to use a `HashMap`, where we compress our tuples of `4` elements to one.

<iframe src="https://leetcode.com/playground/HZTDpHTc/shared" frameBorder="0" width="100%" height="500" name="HZTDpHTc"></iframe>

#### Complexity Analysis

* Time complexity: $$O(nk^2)$$.

Each recursive call will require only constant time, so we can calculate our time complexity as `O(1)` times the number of recursive calls made. Since we are using memoization, the number of recursive calls will be proportional to the number of DP states.

Each DP state is defined as `(idx, last, cnt, k)`, so we can calculate the number of DP states as the product of the number of possible values for each parameter. There will be $$n$$ possible values for idx, $$A$$ possible values for last, where $$A = 26$$ is the size of the alphabet, $$n$$ possible values for cnt, and $$k$$ possible values for k. Thus, there are $$O(An^2k)$$ possible DP states. 

However we can tighten our upper bound and get rid of $A$ in our complexity. Let us look at pairs `(last, cnt)` and check how many of them we have. Consider the case `aaababbbcc`. Then for letter `a` we can have states `(a, 1), (a, 2), (a, 3)` and `(a, 4)`, because we have only `4` letters `a` in our string and after deletions we can not have more. We have states `(b, 1), (b, 2), (b, 3), (b, 4), (c, 1), (c, 2)`. Notice that some of these states can not be reached, because we do not have enough deletions. But what we know for sure is that the total number of pairs `(last, cnt)` is not more than $$n$$. Now we can adjust our analysis and we have:

1. When we consider our states, we have $n$ options to choose index
2. We have $n$ options in total to choose a pair `(l, lc)`, because for each letter the maximum length is the frequency of this letter.
3. We have $k + 1$ options to choose how many elements we need to delete: it can be `(0, ..., k)`.

Also we have at most `2` transitions from one state to another and it makes total time complexity $$O(nk^2)$$.

* Space complexity: $$O(nk^2)$$.
We already found the number of states when we calculated time complexity, here is the same reasoning.

<br/>

---