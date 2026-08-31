# Official Solution

**Link:** [https://leetcode.com/problems/h-index/solution/](https://leetcode.com/problems/h-index/solution/)

---

[TOC]

## Summary
This article is for intermediate readers. It introduces the following ideas:
Comparison Sort and Counting Sort.

## Solution

### Approach #1 (Sorting) [Accepted]

**Intuition**

Think geometrically. Imagine plotting a histogram where the $$y$$-axis represents the number of citations for each paper. After sorting in *descending* order, $$h$$-index is the length of the largest **square** in the histogram.

![h-index](../Figures/274_H_index.svg){:width="539px"}


*Figure 1. $$h$$-index from a plot of decreasing citations for papers*


**Algorithm**

To find such a square length, we first sort the citations array in *descending* order.
After sorting, if $$\mathrm{citations}[i] \gt i$$, then papers $$0$$ to $$i$$ all have at least $$i + 1$$ citations.

Thus, to find $$h$$-index, we search for the largest $$i$$ (let's call it $$i'$$) such that

$$
\mathrm{citations}[i] \gt i
$$

and therefore the $$h$$-index is $$i' + 1$$.

For example:

|                $$i$$                 |  0    |  1    |  2    | 3    | 4    | 5    | 6    |
|:------------------------------------:|:-----:|:-----:|:-----:|:----:|:----:|:----:|:----:|
| sorted citations                     | 10    |  9    |  5    | 3    | 3    | 2    | 1    |
| $$\mathrm{citations}[i] \gt i$$? | true | true | true | false | false | false | false |

In this example, we know that the largest $$i$$ with $$\mathrm{citations}[i] \gt i$$ is $$i'=2$$. Thus

$$
h = i' + 1 = 3
$$

Because $$\mathrm{citations}[i'] \gt i'$$, $$i' + 1$$ papers (from paper 0 to paper $$i'$$) have citations at least $$i' + 1$$ and $$n - i' - 1$$ papers (from paper $$i' + 1$$ to paper $$n - 1$$) have citations no more than $$i' + 1$$. By the definition of $$h$$-index, $$h = i' + 1$$.

It is also possible to find $$i'$$ through binary search after sorting. However, since comparison sorting has a time complexity of $$O(n \log n)$$ which dominates the performance of entire algorithm (linear search is $$O(n)$$). Using a binary search ($$O(\log n)$$) instead of linear search won't change the asymptotic time complexity.

Also note that, we deduced the algorithm in descending for simplicity. Usually the sort function provided by default is in ascending order. The same principles applies to both ascending order and descending order. In the case of ascending order, we just scan it from backward.


<iframe src="https://leetcode.com/playground/Y2ZQtnDD/shared" frameBorder="0" width="100%" height="259" name="Y2ZQtnDD"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n\log n)$$. Comparison sorting dominates the time complexity.

* Space complexity : $$O(1)$$. Most libraries using `heap sort` which costs $$O(1)$$ extra space in the worst case.

---
### Approach #2 (Counting) [Accepted]

**Intuition**

Comparison sorting algorithm has a lower bound of $$O(n\log n)$$. To achieve better performance, we need non-comparison based sorting algorithms.

**Algorithm**

From [Approach #1](#approach-1-sorting-accepted), we sort the citations to find the h-index. However, it is well known that comparison sorting algorithms such as `heapsort`, `mergesort` and `quicksort` have a lower bound of $$O(n\log n)$$. The most commonly used non-comparison sorting is `counting sort`.

> Counting sort operates by counting the number of objects that have each distinct key value, and using arithmetic on those tallies to determine the positions of each key value in the output sequence. Its running time is linear in the number of items and the difference between the maximum and minimum keys, so it is only suitable for direct use in situations where the variation in keys is not significantly greater than the number of items.
>
>---by Wikipedia

However, in our problem, the keys are the citations of each paper which can be much larger than the number of papers $$n$$. It seems that we cannot use `counting sort`. The trick here is the following observation:

> Any citation larger than $$n$$ can be replaced by $$n$$ and the $$h$$-index will not change after the replacement

The reason is that $$h$$-index is upper bounded by total number of papers $$n$$, i.e.

$$
h \leq n
$$

In the diagram, replacing citations greater than $$n$$ with $$n$$ is equivalent to cutting off the area where $$y > n$$.

![h-index cut off](../Figures/274_H_index_2.svg){:width="539px"}


*Figure 2. cutting off the area with citations more than $$n$$*


Apparently, cutting that area off will not change the largest **square** and the $$h$$-index.

After we have the counts, we can get a sorted citations by traversing the counts array. And the rest is the same as [Approach #1](#approach-1-sorting-accepted).

But we can do even better. The idea is that we don't even need to get sorted citations. We can find the $$h$$-index by using the paper counts directly.

To explain this, let's look at the following example:

$$
\mathrm{citations} = [1, 3, 2, 3, 100]
$$

The counting results are:

|$$k$$   |  0   | 1   |   2 |   3 |   4 |   5 |
|:------:|:----:|:---:|:---:|:---:|:---:|:---:|
|count   |  0   | 1   |   1 |   2 |   0 |   1 |
|$$s_k$$ |  5   | 5   |   4 |   3 |   1 |   1 |

The value $$s_k$$ is defined as "the sum of all counts with citation $$\geq k$$" or "the number of papers having, at least, $$k$$ citations". By definition of the h-index, the largest $$k$$ with $$k \leq s_k$$ is our answer.

After replacing $$100$$ with $$n = 5$$, we have $$\mathrm{citations} = [1, 3, 2, 3, 5]$$. Now, we count the number of papers for each citation number $$0$$ to $$5$$. The counts are $$[0, 1, 1, 2, 0, 1]$$. The first $$k$$ from right to left ($$5$$ down to $$0$$) that have $$k \leq s$$ is the $$h$$-index $$3$$.

Since we can calculate $$s_k$$ on the fly when traverse the count array, we only need one pass through the count array which only costs $$O(n)$$ time.

<iframe src="https://leetcode.com/playground/dGSn8Gei/shared" frameBorder="0" width="100%" height="293" name="dGSn8Gei"></iframe>

**Complexity Analysis**

* Time complexity : $$O(n)$$. There are two steps. The counting part is $$O(n)$$ since we traverse the `citations` array once and only once. The second part of finding the $$h$$-index is also $$O(n)$$ since we traverse the `papers` array at most once. Thus, the entire algorithm is $$O(n)$$

* Space complexity : $$O(n)$$. We use $$O(n)$$ auxiliary space to store the counts.


## Further Thoughts

> Is it possible to have multiple $$h$$-values?

The answer is **NO**. One can find this intuitively from Figure 1. The dashed line $$y = x$$ crosses the histogram once and only once, because the sorted bars are monotonic. It can also be proven from the definition of the $$h$$-index.