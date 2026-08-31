# Official Solution

**Link:** [https://leetcode.com/problems/find-unique-binary-string/solution/](https://leetcode.com/problems/find-unique-binary-string/solution/)

---

[TOC]

## Solution

---

### Approach 1: Recursively Generate All Strings

**Intuition**

In the constraints, we see that $$n \leq 16$$. Given that there are only $$2^{16} = 65536$$ possible binary strings, it is feasible to generate all of them in an attempt to find one that does not appear in `nums`.

We will use a recursive function `generate(curr)` to generate the binary strings. At each function call, `curr` is the current string we have. First, we check if `curr.length = n`. If it is, we need to stop adding characters and assess if we have an answer. If `curr` is in `nums`, we return an empty string. If it isn't, we return `curr`.

If `curr.length != n`, we will add a character. Since we are generating all strings, we will call both `generate(curr + "0")` and `generate(curr + "1")`. Note that in our base case, we return an empty string if we did not generate a valid answer. Thus, if either call returns a **non-empty** string, the value it returns is a valid answer.

As each call to `generate` creates two more calls, the algorithm will have a time complexity of at least $$O(2^n)$$. However, we can implement a crucial optimization. We will first call `generate(curr + "0")` and store the value in `addZero`. If `addZero` is not an empty string, we can immediately return it as the answer without needing to make the additional call to `generate(curr + "1")`. If `addZero` is an empty string, it means all possible paths from adding a `"0"` lead to invalid answers, and thus `generate(curr + "1")` must generate a valid answer, since it's guaranteed that a valid answer exists.

Why is this optimization such a big deal? Notice that the length of `nums` is `n`. Thus, if we check `n + 1` different strings of length `n`, we will surely find a valid answer. By returning `addZero` early, we terminate the recursion as soon as we find a valid answer, thus we won't check more than `n + 1` strings of length `n`. Without any early returns, we would check $$2^n$$ strings of length `n`.

Additionally, we will convert `nums` to a hash set prior to starting the recursion, allowing for membership checks in $O(n)$ time complexity in the base case due to the length of the strings.

**Algorithm**

1. Create a function `generate(curr)`:
    - If `curr.length = n`:
        - If `curr` is not in `numsSet`, return `curr`.
        - Return an empty string.
    - Set `addZero = generate(curr + "0")`.
    - If `addZero` is not an empty string, return it.
    - Return `generate(curr + "1")`.
2. Set `n = nums.length`.
3. Convert `nums` to a hash set `numsSet`.
4. Return `generate("")`.

**Implementation**

<iframe src="https://leetcode.com/playground/W5Ks3o85/shared" frameBorder="0" width="100%" height="500" name="W5Ks3o85"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `nums` (and the length of each binary string),

* Time complexity: $$O(n^2)$$

    We require $$O(n^2)$$ to convert `nums` to a hash set.

    Due to the optimization, we check $$O(n)$$ binary strings in our recursion. At each call, we perform some string concatenation operations, which costs up to $$O(n)$$ (unless you have mutable strings like in C++).

- Space complexity: $O(n^2)$

    The space complexity is primarily determined by the `numsSet` and the recursion stack. The `numsSet` stores all $n$ binary strings from the input, each of length $n$, contributing $O(n \cdot n) = O(n^2)$ space.

    The recursion stack can go up to depth $n$, as the function builds strings of length $n$. Each level of recursion stores a string of length up to $n$, so the recursion stack contributes $O(n^2)$ space. However, this is already accounted for in the $O(n^2)$ space complexity of the `numsSet`.

    Therefore, the overall space complexity is $O(n^2)$.

<br/>

---

### Approach 2: Iterate Over Integer Equivalents

**Intuition**

Without the optimization, the previous approach would be reasonable when the length of `nums` is not bounded. However, `nums` has a length of `n`. There are many more possible binary strings than there are strings in `nums`.

In fact, since there are only `n` strings in `nums`, we never need to check more than `n + 1` different binary strings, since at least one of them would not appear in `nums` and thus be a valid answer. How do we decide which `n + 1` binary strings we should check?

Let's start by converting each string in `nums` to its equivalent base-10 integer. We will store these integers in a hash set `integers`. Now, we can simply use a for loop to iterate over the range `[0, n]` (the size of this range is `n + 1`, so it is guaranteed to contain at least one valid answer). For each number, we check if it is in `integers`. If it isn't, it represents a valid answer. We just need to convert it back to a binary string of length `n` and return it.

Note that in some cases, if a valid answer, when converted to a binary string, has a length shorter than `n`, we need to add "0"s to the beginning to make its length equal to `n`.

**Algorithm**

1. Create `integers`, a hash set containing all the elements of `nums` in their base-10 integer form.
2. Initialize `n = nums.length`.
3. Iterate `num` from `0` to `n`:
    - If `num` is not in `integers`, convert it to a binary string of length `n` and return it.
4. The code should never reach this point. Return anything.

**Implementation**

<iframe src="https://leetcode.com/playground/Sch8ocKs/shared" frameBorder="0" width="100%" height="429" name="Sch8ocKs"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `nums` (and the length of each binary string),

* Time complexity: $$O(n^2)$$

    We iterate over $$n$$ strings and convert them to integers, costing $$O(n)$$ for each integer.

    We then iterate `num` in the range `[0, n]`. When we find the answer, we spend $$O(n)$$ to convert it to a string.

* Space complexity: $$O(n)$$

    The hash set `integers` has a size of $$n$$.
    
<br/>

---

### Approach 3: Random

**Intuition**

As mentioned before, there are many more possible binary strings than there are "banned" binary strings in `nums`.

We can randomly generate binary strings until we find one that is not in `nums`. For `n = 16`, there are $$2^{16} = 65536$$ strings we could generate, and only $$16$$ that would not be valid. Thus, the probability of finding a valid answer is $$\dfrac{65536 - 16}{65536}$$, over 99.9%.

In general, the probability of generating a valid answer randomly is $$\dfrac{2^n - n}{2^n}$$. Because $$2^n$$ grows much faster than $$n$$, the probability is very favorable for us.

For ease of implementation, we will start by converting each binary string in `num` to its base-10 equivalent, then storing these integers in a hash set `integers`, just like in approach 2.

Then, we will generate random numbers in the range $$[0, 2^n]$$ until we find one not in `integers`. Once we do, we convert it to a binary string of length `n` and return it.

**Algorithm**

1. Create `integers`, a hash set containing all the elements of `nums` in their base-10 integer form.
2. Set `ans` to any value in `integers` and `n = nums.length`.
3. While `ans` is in `integers`:
    - Randomly generate an integer between `0` (inclusive) and $$2^n$$.
    - Set `ans` to the randomly generated integer.
4. Convert `ans` to a binary string and return it.

**Implementation**

<iframe src="https://leetcode.com/playground/T3FegUUe/shared" frameBorder="0" width="100%" height="446" name="T3FegUUe"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `nums` (and the length of each binary string),

* Time complexity: $$O(\infty)$$

    Technically, the worst-case scenario would see the algorithm running infinitely, always selecting elements in `integers`. However, the probability that the algorithm runs for more than a few steps, let alone infinitely, is so low that we can assume it to be effectively 0. This probability also lowers exponentially as `n` increases.

    For `n = 16`, there is an over 99.9% chance that we find an answer on the first iteration. For `n = 20`, we have an over 99.998% chance. Practically, this algorithm runs extremely quickly.

* Space complexity: $$O(n)$$

    The hash set `integers` has a size of $$n$$.
    
    We don't count the answer as part of the space complexity.
    
<br/>

---

### Approach 4: Cantor's Diagonal Argument

**Intuition**

[Cantor's diagonal argument](https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument) is a proof in set theory.

While we do not need to fully understand the proof and its consequences, this approach uses very similar ideas.

We start by initializing the answer `ans` to an empty string. To build `ans`, we need to assign either `"0"` or `"1"` to each index `i` for indices `0` to `n - 1`. How do we assign them so `ans` is guaranteed to be different from every string in `nums`? We know that two strings are different, as long as they differ by at least one character. We can intentionally construct our `ans` based on this fact.

For each index `i`, we will check the $$i^{th}$$ character of the $$i^{th}$$ string in `nums`. That is, we check `curr = nums[i][i]`. We then assign `ans[i]` to the opposite of `curr`. That is, if `curr = "0"`, we assign `ans[i] = "1"`. If `curr = "1"`, we assign `ans[i] = "0"`.

What is the point of this strategy? `ans` will differ from every string in **at least** one position. More specifically:
- `ans` differs from `nums[0]` in `nums[0][0]`.
- `ans` differs from `nums[1]` in  `nums[1][1]`.
- `ans` differs from `nums[2]` in  `nums[2][2]`.
- ...
- `ans` differs from `nums[n - 1]` in  `nums[n - 1][n - 1]`.

Thus, it is guaranteed that `ans` does not appear in `nums` and is a valid answer. 

> This strategy is applicable because both the length of `ans` and the length of each string in `nums` are larger than or equal to `n`, the number of strings in `nums`. Therefore, we can find one unique position for each string in `nums`.

**Algorithm**

1. Initialize the answer `ans`. Note that you should build the answer in an efficient manner according to the programming language you're using.
2. Iterate `i` over the indices of `nums`:
    - Set `curr = nums[i][i]`.
    - If `curr = "0"`, add `"1"` to `ans`. Otherwise, add `"0"` to `ans`.
3. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/FXtSUPmk/shared" frameBorder="0" width="100%" height="259" name="FXtSUPmk"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `nums` (and the length of each binary string),

* Time complexity: $$O(n)$$

    We iterate over each string in `nums`. Assuming the string building is efficient, each iteration costs $$O(1)$$, and joining the answer string at the end costs $$O(n)$$.

* Space complexity: $$O(1)$$

    We don't count the answer as part of the space complexity.
    
<br/>

---