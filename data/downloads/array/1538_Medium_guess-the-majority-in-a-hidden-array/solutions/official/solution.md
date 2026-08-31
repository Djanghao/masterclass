# Official Solution

**Link:** [https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solution/](https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solution/)

---

[TOC]

## Solution

---

### An Approach with $n$ Queries

#### Intuition

A problem such as this one where your program has to communicate with the judge is called *interactive*.

We are not allowed to get a particular element from the array, we can only use a `query` function. An investigation of the properties of this function is needed.

Consider an example with the hidden array `nums = [0,0,1,0,1,1,0]` and see how the `query` function behaves for different quadruplets of indices.

* `query(0, 1, 2, 3) = 2` because there are three elements `nums[0] = nums[1] = nums[3] = 0` and one element `nums[2] = 1`.
* `query(0, 1, 2, 4) = 0` because there are two elements `nums[0] = nums[1] = 0` and two elements `nums[2] = nums[4] = 1`.
* `query(0, 1, 2, 5) = 0` because `nums[0] = nums[1] = 0` and `nums[2] = nums[5] = 1`.
* `query(0, 1, 3, 4) = 2` because `nums[0] = nums[1] = nums[3] = 0` and `nums[4] = 1`.
* `query(0, 1, 3, 6) = 4`. Here we have all four elements equal: `nums[0] = nums[1] = nums[3] = nums[6] = 0`.

Now let's analyze the obtained values.

First, compare `query(0, 1, 2, 3)` and `query(0, 1, 2, 4)`. The quadruplets `(0, 1, 2, 3)` and `(0, 1, 2, 4)` have three common indices `0`, `1` and `2`, and one index that differs: `3` in the first quadruplet and `4` in the second one. `nums[3]` differs from `nums[4]` and so do the return values of the `query` function for these quadruplets.

Comparison of `query(0, 1, 3, 4)` and `query(0, 1, 3, 6)` is similar. `nums[4] = 1` is not equal to `nums[6] = 0` and `query(0, 1, 3, 4)` is not equal to `query(0, 1, 3, 6)`.

Then compare `query(0, 1, 2, 4)` and `query(0, 1, 2, 5)`. Again, the quadruplets have only one differing index: `4` and `5`. This time `nums[4] = nums[5] = 1` and `query(0, 1, 2, 4) = query(0, 1, 2, 5)`.

One may generalize these observations and formulate the following statement: `query(a, b, c, i) = query(a, b, c, j)` if and only if `nums[i] = nums[j]` (for the purpose of this article the inequalities `a < b < c`, `c < i`, `c < j` are not required). Investigate some more quadruplets by yourself to understand this.

It is possible to compare two elements of the array using the above statement. When we want to know whether `nums[i]` and `nums[j]` are equal, we first choose `a`, `b`, `c` such that all five indices (`a`, `b`, `c`, `i`, `j`) are distinct and compare `query(a, b, c, i)` with `query(a, b, c, j)`. As in the previous paragraph, for explanation purposes, we do not mind the inequalities for the indices, but in the code you will have to pass the parameters to the `query` function in increasing order.

If we compare all elements of the array with `nums[0]`, we can find how many elements are equal to `nums[0]`, let's call it `cntEqual`. We can also find how many elements are different from `nums[0]`, let's call it `cntDiffer`. This will allow us to find the most frequent element and solve the problem.

* If `cntEqual > cntDiffer`, `nums[0]` is the most frequent element.
* If `cntDiffer > cntEqual`, we need to return the index of any element that differs from `nums[0]`. We can keep track of an index `indexDiffer` for this case.
* If `cntEqual = cntDiffer`, 0s and 1s occur the same number of times, and we return `-1`.

We will use the following comparisons:

* Compare `nums[i]` with `nums[0]` where `i > 3` by comparing `query(1, 2, 3, i)` with `query(0, 1, 2, 3)`.
* Compare `nums[1]` with `nums[0]` by comparing `query(1, 2, 3, 4)` with `query(0, 2, 3, 4)`.
* Compare `nums[2]` with `nums[0]` by comparing `query(1, 2, 3, 4)` with `query(0, 1, 3, 4)`.
* Compare `nums[3]` with `nums[0]` by comparing `query(1, 2, 3, 4)` with `query(0, 1, 2, 4)`.

Let's count how many queries we use in this algorithm.

* One query for `(0, 1, 2, 3)`.
* $n-4$ queries for `(1, 2, 3, i)` where `i > 3`.
* One query for `(0, 2, 3, 4)`.
* One query for `(0, 1, 3, 4)`.
* One query for `(0, 1, 2, 4)`.

We use $n$ queries in total.

#### Algorithm

1. Get `n` by calling the `length` function.
2. Declare and initialize variables `cntEqual = 1`, `cntDiffer = 0`, `indexDiffer = -1`.
3. Call `query(0, 1, 2, 3)` and keep the result in the variable `query0123`.
4. Call `query(1, 2, 3, 4)` and keep the result in the variable `query1234`.
5. If `query1234` is equal to `query0123` (`nums[4] = nums[0]`), increment `cntEqual`, otherwise (`nums[1] != nums[0]`) increment `cntDiffer` and update `indexDiffer = 4`. 
6. Iterate `i` from `5` to `n-1`.
	* If the return value of `query(1, 2, 3, i)` is equal to `query0123` (`nums[i] = nums[0]`), increment `cntEqual`, otherwise (`nums[i] != nums[0]`) increment `cntDiffer` and update `indexDiffer = i`.
7. If `query(0, 2, 3, 4)` is equal to `query1234` (`nums[1] = nums[0]`), increment `cntEqual`, otherwise (`nums[1] != nums[0]`) increment `cntDiffer` and update `indexDiffer = 1`.
8. If `query(0, 1, 3, 4)` is equal to `query1234` (`nums[2] = nums[0]`), increment `cntEqual`, otherwise (`nums[2] != nums[0]`) increment `cntDiffer` and update `indexDiffer = 2`.
9. If `query(0, 1, 2, 4)` is equal to `query1234` (`nums[3] = nums[0]`), increment `cntEqual`, otherwise (`nums[3] != nums[0]`) increment `cntDiffer` and update `indexDiffer = 3`.
10. If `cntEqual > cntDiffer`, return `0`.
11. If `cntDiffer > cntEqual`, return `indexDiffer`.
12. Return `-1`.

#### Implementation

> In the implementation, we will use a helper function `f(equal, i)`. When we call this function with `equal = true`, we will increment `cntEqual`. When we call this function with `equal = false`, we will increment `cntDiffer`, and set `indexDiffer = i`.


<iframe src="https://leetcode.com/playground/WACn7beJ/shared" frameBorder="0" width="100%" height="497" name="WACn7beJ"></iframe>


#### Complexity Analysis

* Time complexity: $O(n)$.

We make $n$ calls of the `query` function and use its return values to compare $n-1$ elements with `nums[0]`. We can assume that each call to `query` runs in $O(1)$.

* Space complexity: $O(1)$.

We store only a few $O(1)$ integer variables.