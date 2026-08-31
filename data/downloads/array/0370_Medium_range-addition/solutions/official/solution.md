# Official Solution

**Link:** [https://leetcode.com/problems/range-addition/solution/](https://leetcode.com/problems/range-addition/solution/)

---

[TOC]

## Solution

---
### Approach 1: Naïve Approach

**Algorithm**

The algorithm is trivial. For each update query, we iterate over the required update range and update each element individually.


Each query of `updates` is a tuple of 3 integers: $$start, end$$ (the start and end indexes for the update range) and $$val$$ (the amount by which each array element in this range must be incremented).

<iframe src="https://leetcode.com/playground/4zQTMEer/shared" frameBorder="0" width="100%" height="293" name="4zQTMEer"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n \cdot k)$$ (worst case) where $$k$$ is the number of update queries and $$n$$ is the length of the array. Each of the $$k$$ update operations take up $$O(n)$$ time (worst case, when all updates are over the entire range).

* Space complexity : $$O(1)$$. No extra space required.
<br>
<br>

---
### Approach 2: Range Caching

**Intuition**

* There is only one read query on the entire range, and it occurs at the end of all update queries. Additionally, the order of processing update queries is irrelevant.

* Cumulative sums or `partial_sum` operations apply the effects of past elements to the future elements in the sequence.

**Algorithm**

The algorithm makes use of the above intuition to simply store changes at the *borders* of the update ranges (instead of processing the entire range). Finally a single post processing operation is carried out over the entire output array.

The two steps that are required are as follows:

1. For each update query $$(start, end, val)$$ on the array $$arr$$, we need to do *only* two operations:

    * Update $$start$$ boundary of the range:

    $$
    arr_{start} = arr_{start} + val
    $$

    * Update just beyond the $$end$$ boundary of the range:

    $$
    arr_{end+1} = arr_{end+1} - val
    $$

2. Final Transformation. The cumulative sum of the entire array is taken (`0` - based indexing)

    $$
    arr_i = arr_i + arr_{i-1} \quad \forall \quad i \in [1, n)
    $$


<iframe src="https://leetcode.com/playground/dvUJGSzJ/shared" frameBorder="0" width="100%" height="446" name="dvUJGSzJ"></iframe>

**Formal Explanation**

For each update query $$(start, end, val)$$ on the array $$arr$$, the goal is to achieve the result:

$$
arr_i = arr_i + val \quad \forall \quad i \in [start, end]
$$

Applying the final transformation, ensures two things:

1. It carries over the $$+val$$ increment over to every element $$ arr_i \; \forall \; i \ge start $$.
2. It carries over the $$-val$$ increment (equivalently, a $$+val$$ decrement) over to every element $$ arr_j \; \forall \; j \gt end $$.

The net result is that:

$$
\begin{aligned}
arr_i &= arr_i + val  \quad && \forall \quad i \in [start, end] \\
arr_j &= arr_j + val - val = arr_j  \quad && \forall \quad i \in (end, length)
\end{aligned}
$$

which meets our end goal. It is easy to see that the updates over a range did not carry over beyond it due to the compensating effect of the $$-val$$ increment over the $$+val$$ increment.

It is good to note that this works for multiple update queries because the particular binary operations here (namely addition and subtraction):

* are *closed* over the entire domain of `Integer`s. (A counter example is division which is not closed over all `Integer`s).

* are *complementary* operations. (As a counter example multiplication and division are not always complimentary due to possible loss of precision when dividing `Integer`s).

**Complexity Analysis**

* Time complexity : $$O(n + k)$$. Each of the $$k$$ update operations is done in constant $$O(1)$$ time. The final cumulative sum transformation takes $$O(n)$$ time always.

* Space complexity : $$O(1)$$. No extra space required.
<br>
<br>

---
## Further Thoughts

An extension of this problem is to apply such updates on an array where all elements are **not** the same.

In this case, the second approach requires that the original configuration must be stored separately before applying the final transformation. This incurs an additional space complexity of $$O(n)$$.

[@StefanPochmann](https://leetcode.com/StefanPochmann/) suggested another method (see comment section) which does not require extra space, but requires an extra linear pass over the entire array. The idea is to apply *reverse* `partial_sum` operation on the array (for example, array $$[2, 3, 10, 5]$$ transforms to $$[2, 1, 7, -5]$$) as an initialization step and then proceed with the second method as usual.

---

Another general, more complex version of this problem comprises of multiple read and update queries over *ranges*. Such problems can be solved quite efficiently with [Segment Trees by applying a popular trick called **Lazy Propogation**.](https://leetcode.com/articles/a-recursive-approach-to-segment-trees-range-sum-queries-lazy-propagation/)

Analysis written by [@babhishek21](https://leetcode.com/babhishek21).