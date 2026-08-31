# Official Solution

**Link:** [https://leetcode.com/problems/word-subsets/solution/](https://leetcode.com/problems/word-subsets/solution/)

---

[TOC]

## Solution

---

### Approach: Reduce to Single Word in B

#### Intuition  

If `b` is a subset of `a`, then say `a` is a superset of `b`.  Also, say $$N_{\text{"a"}}(\text{word})$$ is the count of the number of $$\text{"a"}$$'s in the word.

When we check whether a word `wordA` in `words1` is a superset of `wordB`, we are individually checking the counts of letters: that for each $$\text{letter}$$, we have $$N_{\text{letter}}(\text{wordA}) \geq N_{\text{letter}}(\text{wordB})$$.

Now, if we check whether a word `wordA` is a superset of all words $$\text{wordB}_i$$, we will check for each letter and each $$i$$, that $$N_{\text{letter}}(\text{wordA}) \geq N_{\text{letter}}(\text{wordB}_i)$$.  This is the same as checking $$N_{\text{letter}}(\text{wordA}) \geq \max\limits_i(N_{\text{letter}}(\text{wordB}_i))$$.

For example, when checking whether `"warrior"` is a superset of words `B = ["wrr", "wa", "or"]`,  we can combine these words in `B` to form a "maximum" word `"arrow"`, that has the maximum count of every letter in each word in `B`.

#### Algorithm

- Define a helper function `count(S)`:
  - Create an integer array `ans` of size 26 to store the frequency of each character in string `S`.
  - Iterate through each character `c` in `S`:
    - Increment the corresponding index in `ans` based on `c - 'a'`.
  - Return the `ans` array.

- Initialize an integer array `bmax` of size 26 to store the maximum frequency of each character across all strings in `words2`.
- Iterate through each string `b` in array `words2`:
  - Compute the character frequencies of `b` using the `count` function, storing the result in `bCount`.
  - For each character (index `i` from 0 to 25), update `bmax[i]` as the maximum of its current value and `bCount[i]`.

- Initialize an empty list `ans` to store the result.

- Iterate through each string `a` in array `words1`:
  - Compute the character frequencies of `a` using the `count` function, storing the result in `aCount`.
  - For each character (index `i` from 0 to 25):
    - If `aCount[i]` is less than `bmax[i]`, skip to the next string in `A`.
  - If all frequency conditions are satisfied, add `a` to the `ans` list.

- Return the list `ans`, which contains all universal strings from `words1`.

#### Implementation  

<iframe src="https://leetcode.com/playground/o2ZKR388/shared" frameBorder="0" width="100%" height="500" name="o2ZKR388"></iframe>

#### Complexity Analysis

Let $\mathcal{A}$ and $\mathcal{B}$ represent the total information in `words1` and `words2`, respectively.

- Time Complexity: $O(\mathcal{A} + \mathcal{B})$

    This accounts for processing all elements or data points in both inputs.

- Space Complexity: $O(1)$ or $O(A\text{.length})$

    Without considering the output space, the space complexity is $O(1)$, as no additional data structures are used. Including the output space, the complexity is $O(A\text{.length})$, since the output depends solely on `words1`.  

---