# Official Solution

**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solution/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solution/)

---

[TOC]

## Solution

---

### Approach 1: Count With Hash Map

**Intuition**

If you are not already familiar with hash maps, please check out our relevant [LeetCode explore card](https://leetcode.com/explore/learn/card/hash-table/).

We can count the frequency of each `num` in `arr` using a hash map `counts`. Once we have all the frequencies, we can iterate over the keys of `counts` and check which one has a value greater than `n / 4`, where `n` is the length of `arr`.

If a key in `counts` has a value greater than `n / 4`, it must occupy more than 25% of `arr` and thus would be our answer.

> Note that in languages like Java and C++, integer division of `n / 4` will round the result down. Rounding down does not affect our strategy. The reason that rounding down doesn't change anything is because when we round down, we are removing a decimal. However, this decimal is irrelevant because the next integer will always be larger than the result even if we didn't remove the decimal.
> 
> For example, let's say we had `n = 10`. `n / 4 = 2.5`. By doing integer division, we remove the `.5`. However, the next integer `3` is larger than `2.5` regardless, so when we evaluate `10 / 4` as `2`, there is no difference between comparing `3 > 2.5` and `3 > 2`. The only scenarios that would be affected would be when a frequency is greater than `2` but less than `2.5`. However, the frequencies must be integers, so this scenario would never happen. 

**Algorithm**

1. Initialize a hash map `counts`.
2. Iterate over each element in `arr`. For each element `num`, increment `counts[num]`.
3. Set `target = arr.length / 4`.
4. Iterate over each `key, value` pair in `counts`:
    - If `value > target`, return `key`.
5. The code should never reach this point since it's guaranteed an answer exists. Return anything.

**Implementation**

<iframe src="https://leetcode.com/playground/kNjpULur/shared" frameBorder="0" width="100%" height="361" name="kNjpULur"></iframe>

Bonus: a small optimization to this approach would be to terminate early as soon as an element's count reaches `target`.

<iframe src="https://leetcode.com/playground/FREFpwdS/shared" frameBorder="0" width="100%" height="310" name="FREFpwdS"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `arr`,

* Time complexity: $$O(n)$$

    We iterate over `arr` once to calculate `counts`. This costs $$O(n)$$. Next, we iterate over `counts`, which also costs $$O(n)$$.

* Space complexity: $$O(n)$$

    In the worst-case scenario, `counts` can contain at most $$O(n)$$ keys and thus grow to a size of $$O(n)$$.
    
<br/>

---

### Approach 2: Check the Element N/4 Ahead

**Intuition**

The previous approach did not make use of the fact the input is given sorted. By taking advantage of this fact, we can come up with a more efficient algorithm.

![example](../Figures/1287/1.png)
<br>

Let's call our answer `ans`, where `ans` makes up more than 25% of the array. In the above example, We have `n = 9`, and 25% of `9` is `2.25`. Thus, an element must appear 3 times or more to be the answer. We have `ans = 5` in this example.

In general, an element must appear **more** than `n / 4` times to be considered the answer.

Because the array is sorted, all equal elements are adjacent to each other and form a "block" in the array. The size of the `ans` block must be greater than `n / 4` by definition.

Let's say the first index of the `ans` block is `i`. As a consequence of the above observation, the final index of the `ans` block must be greater than or equal to `i + (n / 4)` (floor division).

![example](../Figures/1287/2.png)
<br>

As you can see, the `ans` block here starts at `i = 3` and ends at `i = 6`. This brings us to our solution.

We first calculate a value `size = n / 4` (floor division). We then iterate `i` over the indices of `arr` until `n - size`. At each index `i`, we check if `arr[i] = arr[i + size]`. If it is, `arr[i]` must be the answer!

Why is this the case? Because if the elements at `i` and `i + size` are the same, then they are part of the same block. Since the difference between these indices is `size`, the length of the block must be at least `size + 1`.

> The length of the block must be at least `size + 1`, not `size`. This can be verified with a small example. Imagine a block starting at index `2` and ending at index `4`. The difference between the indices is `2`, but the block has a length of `3`: it contains indices `[2, 3, 4]`.

We established earlier that the answer has a frequency of more than `n / 4`. As we calculated `size = n / 4`, a block having a length of at least `size + 1` must mean it is the answer block.

**Algorithm**

1. Calculate `size = n / 4`.
2. Iterate `i` from `0` until `arr.length - size`:
    - If `arr[i] = arr[i + size]`, return `arr[i]`.
3. The code should never reach this point since it's guaranteed an answer exists. Return anything.

**Implementation**

<iframe src="https://leetcode.com/playground/icthf5Ld/shared" frameBorder="0" width="100%" height="276" name="icthf5Ld"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `arr`,

* Time complexity: $$O(n)$$

    We iterate over $$\dfrac{3n}{4}$$ indices, performing $$O(1)$$ work at each iteration.

* Space complexity: $$O(1)$$

    We aren't using any extra space except for the integer `size`.
    
<br/>

---

### Approach 3: Binary Search

**Intuition**

If you are not already familiar with binary search, please check out our relevant [LeetCode explore card](https://leetcode.com/explore/learn/card/binary-search/).

Whenever you have a sorted array, you should try to think how binary search could be applied to it. In this approach, we will continue to take advantage of the fact that the input is sorted and use similar ideas from the previous approach.

Let's continue thinking about the array being split into blocks of similar elements. The answer block has a length greater than `n / 4`, and thus it **must** overlap **at least** one of the following positions in the array:

1. A quarter of the way through at index `n / 4`.
2. Halfway through at index `n / 2`.
3. Three-quarters of the way through at index `3n / 4`.

![example](../Figures/1287/3.png)
<br>

We will only consider the elements at each of these indices as **candidates** since one of them must be the answer. For a given `candidate`, we can find its frequency by identifying its block size. To identify its block size, we find the leftmost index in which `candidate` appears as `left` and the rightmost index in which `candidate` appears as `right`. Then, the size of the block is `right - left + 1`. We can calculate `left` and `right` using binary search.

In Python and C++, we have handy built-in functions that find the leftmost and rightmost indices of elements. In Java, we will implement our own versions of these functions.

**Algorithm**

1. Set `n = arr.length`.
2. Create the array `candidates` with elements `arr[n / 4], arr[n / 2], arr[3 * n / 4]`.
3. Set `target = n / 4`.
4. For each `candidate` in `candidates`:
    - Calculate the leftmost index of `candidate` as `left` using binary search.
    - Calculate the rightmost index of `candidate` as `right` using binary search.
    - If `right - left + 1 > target`, return `candidate`.
5. The code should never reach this point since it's guaranteed an answer exists. Return anything.

**Implementation**

<iframe src="https://leetcode.com/playground/BbLTncdm/shared" frameBorder="0" width="100%" height="500" name="BbLTncdm"></iframe>

**Complexity Analysis**

Given $$n$$ as the length of `arr`,

* Time complexity: $$O(\log{}n)$$

    We have three candidates. For each candidate, we perform two binary searches over `arr`, each costing $$O(\log{}n)$$.

* Space complexity: $$O(1)$$

    We aren't using any extra space except for a few integers.
    
<br/>

---