# Official Solution

**Link:** [https://leetcode.com/problems/subsets/solution/](https://leetcode.com/problems/subsets/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/816366561" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Overview: Solution Pattern

Let us first review the problems of Permutations / Combinations / Subsets, since they are quite similar to each other and there are some common strategies to solve them.

First, their solution space is often quite large:

- [Permutations](https://en.wikipedia.org/wiki/Permutation#k-permutations_of_n): $$N!$$. 

- [Combinations](https://en.wikipedia.org/wiki/Combination#Number_of_k-combinations): $$C_N^k = \frac{N!}{(N - k)! k!}$$

- Subsets: $$2^N$$, since each element could be absent or present. 

Given their exponential solution space, it is tricky to ensure that the generated solutions are _**complete**_ and _**non-redundant**_. It is essential to have a clear and easy-to-reason strategy.

There are generally three strategies to do it:

- Iterative

- Recursion/Backtracking

- Lexicographic generation based on the mapping between binary bitmasks and the corresponding permutations / combinations / subsets.

As one would see later, the third method could be a good candidate for the interview because it simplifies the problem to the generation of binary numbers, therefore it is easy to implement and verify that no solution is missing.

Besides, as a bonus, it generates lexicographically sorted output for the sorted inputs.


---
### Approach 1: Cascading

#### Intuition

Let's start from an empty subset in the output list. At each step, one takes a new integer into consideration and generates new subsets from the existing ones. 

![diff](../Figures/78/recursion.png)

#### Implementation

<iframe src="https://leetcode.com/playground/GfSoguWr/shared" frameBorder="0" width="100%" height="395" name="GfSoguWr"></iframe>

#### Complexity Analysis

* Time complexity: $$\mathcal{O}(N \times 2^N)$$ to generate all subsets and then copy them into the output list. 
    
* Space complexity: $$\mathcal{O}(N \times 2^N)$$. This is exactly the number of solutions for subsets multiplied by the number $$N$$ of elements to keep for each subset.  
    - For a given number, it could be present or absent (_i.e._ binary choice) in a subset solution. As a result, for $$N$$ numbers, we would have in total $$2^N$$ choices (solutions). 
<br />
<br />


---
### Approach 2: Backtracking

#### Algorithm

>Power set is all possible combinations of all possible _lengths_, from 0 to n.

Given the definition, the problem can also be interpreted as finding the _power set_ from a sequence.

So, this time let us loop over the length of combination, rather than the candidate numbers, and generate all combinations for a given length with the help of _backtracking_ technique.

![diff](../Figures/78/combinations.png)

>[Backtracking](https://leetcode.com/explore/learn/card/recursion-ii/472/backtracking/2654/) is an algorithm for finding all solutions by exploring all potential candidates. If the solution candidate turns out to be _not_ a solution (or at least not the _last_ one), the backtracking algorithm discards it by making some changes on the previous step, *i.e.* _backtracks_ and then tries again.

![diff](../Figures/78/backtracking.png)

#### Algorithm

We define a backtrack function named `backtrack(first, curr)` that takes the index of the first element to add and a current combination as arguments.

- If the current combination is done, we add the combination to the final output.

- Otherwise, we iterate over the indexes `i` from `first` to the length of the entire sequence `n`.

    - Add integer `nums[i]` into the current combination `curr`.

    - Proceed to add more integers into the combination: `backtrack(i + 1, curr)`.

    - Backtrack by removing `nums[i]` from `curr`.

#### Implementation

<iframe src="https://leetcode.com/playground/X6GCLJ3t/shared" frameBorder="0" width="100%" height="500" name="X6GCLJ3t"></iframe>

#### Complexity Analysis

* Time complexity: $$\mathcal{O}(N \times 2^N)$$ to generate all subsets and then copy them into the output list.
 
* Space complexity: $$\mathcal{O}(N)$$. We are using $$O(N)$$ space to maintain `curr`, and are modifying `curr` in-place with backtracking. Note that for space complexity analysis, we do not count space that is *only* used for the purpose of returning output, so the `output` array is ignored.


---
### Approach 3: Lexicographic (Binary Sorted) Subsets

#### Intuition

The idea of this solution is originated from [Donald E. Knuth](https://www-cs-faculty.stanford.edu/~knuth/taocp.html).

>The idea is that we map each subset to a bitmask of length n,
where `1` on the i*th* position in bitmask means the presence of `nums[i]`
in the subset, and `0` means its absence. 

![diff](../Figures/78/bitmask4.png)

For instance, the bitmask `0..00` (all zeros) corresponds to an empty subset, 
and the bitmask `1..11` (all ones) corresponds to the entire input array `nums`. 

Hence to solve the initial problem, we just need to generate n bitmasks
from `0..00` to `1..11`. 

It might seem simple at first glance to generate binary numbers, but 
the real problem here is how to deal with 
[zero left padding](https://en.wikipedia.org/wiki/Padding_(cryptography)#Zero_padding),
because one has to generate bitmasks of fixed length, _i.e._ `001` and not just `1`.
For that one could use standard bit manipulation trick:

<iframe src="https://leetcode.com/playground/PtHUHaeY/shared" frameBorder="0" width="100%" height="140" name="PtHUHaeY"></iframe>

or keep it simple stupid and shift iteration limits:

<iframe src="https://leetcode.com/playground/4XWEGcWd/shared" frameBorder="0" width="100%" height="123" name="4XWEGcWd"></iframe>

#### Algorithm

- Generate all possible binary bitmasks of length n.

- Map a subset to each bitmask: 
`1` on the i*th* position in bitmask means the presence of `nums[i]`
in the subset, and `0` means its absence. 

- Return output list.

#### Implementation

<iframe src="https://leetcode.com/playground/DwHHy2yt/shared" frameBorder="0" width="100%" height="395" name="DwHHy2yt"></iframe>

#### Complexity Analysis

* Time complexity: $$\mathcal{O}(N \times 2^N)$$ to generate all subsets 
and then copy them into output list.
    
* Space complexity: $$\mathcal{O}(N)$$ to store the bitset
of length $$N$$. Note that for space complexity analysis, we do not count space that is *only* used for the purpose of returning output, so the `output` array is ignored.