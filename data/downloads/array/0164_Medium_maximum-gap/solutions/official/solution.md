# Official Solution

**Link:** [https://leetcode.com/problems/maximum-gap/solution/](https://leetcode.com/problems/maximum-gap/solution/)

---

[TOC]

## Solution
---
### Approach 1: Comparison Sorting

#### Intuition

Do what the question says.

#### Algorithm

Sort the entire array. Then iterate over it to find the maximum gap between two successive elements.

<iframe src="https://leetcode.com/playground/MTcmKG6N/shared" frameBorder="0" width="100%" height="361" name="MTcmKG6N"></iframe>

#### Complexity Analysis

* Time complexity: $$O(n\log n)$$.

    Time taken to sort the array is $$O(n\log n)$$ (average case). Time taken for linear iteration through the array is of $$O(n)$$ complexity. Hence overall time complexity is $$O(n\log n)$$.

* Space complexity: No extra space needed, other than the input array (since sorting can usually be done in-place).
<br />
<br />

---

### Approach 2: Radix Sort

#### Algorithm

This approach is similar to [Approach 1](#approach-1-comparison-sorting), except we use [Radix Sort](https://en.wikipedia.org/wiki/Radix_sort) instead of a traditional comparison sort.

<iframe src="https://leetcode.com/playground/X7NTScKL/shared" frameBorder="0" width="100%" height="500" name="X7NTScKL"></iframe>

#### Complexity Analysis

* Time complexity: $$O(d \cdot (n + k)) \approx O(n)$$.

    Since a linear iteration over the array (once it is sorted) is of linear (i.e. $$O(n)$$) complexity, the performance of this approach is limited by the performance of Radix sort.

    Radix sort uses [Counting sort](https://en.wikipedia.org/wiki/Counting_sort) as a subroutine.

    + Counting sort runs in $$O(n + k)$$ time (where $$k$$ is the radix or base of the digits comprising the $$n$$ elements in the array). If $$k \leq O(n)$$, Counting sort would run in linear time. In our case, the radix is fixed (i.e. $$k = 10$$). Hence our Counting sort subroutine runs in $$O(n)$$ linear time.

    + Radix sort works by running $$d$$ passes of the Counting sort subroutine (where the elements are composed of, maximally, $$d$$ digits). Hence effective runtime of Radix sort would be $$O(d \cdot (n + k))$$. However, in our case an element can, maximally, be the maximum 32-bit signed integer `2,147,483,647`. Hence $$d \leq 10$$ is a constant.

    Thus Radix sort has a runtime performance complexity of about $$O(n)$$ for reasonably large input.

* Space complexity: $$O(n + k) \approx O(n)$$ extra space.

    Counting sort requires $$O(k)$$ extra space. Radix sort requires an auxiliary array of the same size as input array. However given that $$k$$ is a small fixed constant, the space required by Counting sort can be ignored for reasonably large input.

<br />

---
### Approach 3: Buckets and The Pigeonhole Principle

#### Intuition

Sorting an entire array can be costly. At worst, it requires comparing each element with *every* other element.
What if we didn't need to compare all pairs of elements? That would be possible if we could somehow divide the elements into representative groups, or rather, *buckets*. Then we would only need to compare these buckets.

> **Digression: The Pigeonhole Principle**
The [Pigeonhole Principle](https://en.wikipedia.org/wiki/Pigeonhole_principle) states that if $$n$$ items are put into $$m$$ containers, with $$n > m$$, then at least one container must contain more than one item.

Suppose for each of the $$n$$ elements in our array, there was a bucket. Then each element would occupy one bucket. Now what if we reduced, the number of buckets? Some buckets would have to accommodate more than one element.

Now let's talk about the gaps between the elements. Let's take the best case, where all elements of the array are sorted and have a uniform gap between them. This means every adjacent pair of elements differ by the same constant value. So for $$n$$ elements of the array, there are $$n-1$$ gaps, each of width, say, $$t_0$$. It is trivial to deduce that $$t_0 = (max - min)/(n-1)$$ (where $$max$$ and $$min$$ are the minimum and maximum elements of the array). This width is the maximal width/gap between two adjacent elements in the array; precisely the quantity we are looking for!

One can safely argue that this value of $$t_0$$, is in fact, the smallest value that $$t$$ can ever accomplish of any array with the same number of elements (i.e. $$n$$) and the same range (i.e. $$(max - min)$$). To test this fact, you can start with a uniform width array (as described above) and try to reduce the gap between any two adjacent elements. If you reduce the gap between $$arr[i-1]$$ and $$arr[i]$$ to some value $$t - p$$, then you will notice that the gap between $$arr[i]$$ and $$arr[i+1]$$ would have increased to $$t + p$$. Hence the maximum attainable gap would have become $$t + p$$ from $$t$$. Thus the value of the **maximum gap** $$t$$ can only increase.

**Buckets!**

Coming back to our problem, we have already established by application of the Pigeonhole Principle, that if we used *buckets* instead of individual elements as our base for comparison, the number of comparisons would reduce if we could accommodate more than one element in a single bucket. That does not immediately solve the problem though. What if we had to compare elements *within* a bucket? We would end up no better.

So the current motivation remains: somehow, if we only had to compare among the buckets, and *not* the elements *within* the buckets, we would be good. It would also solve our sorting problem: we would just distribute the elements to the right buckets. Since the buckets can be already ordered, and we only compare among buckets, we wouldn't have to compare all elements to sort them!

But if we only had buckets to compare, we would have to *ensure*, that the gap between the buckets itself represent the maximal gap in the input array. How do we go about doing that?

We could do that just by setting the buckets to be smaller than $$t_0 = (max - min)/(n-1)$$ (as described above). Since the gaps (between elements) within the same bucket would only be $$\leq t$$, we could deduce that the maximal gap would *indeed* occur **only between two adjacent buckets**.

Hence by setting bucket size $$b$$ to be $$1 < b \leq (max - min)/(n-1)$$, we can ensure that at least one of the gaps between adjacent buckets would serve as the **maximal gap.**

**Clarifications**

A few clarifications are in order:

+ **Would the buckets be of uniform size?**
Yes. Each bucket has a fixed size of $$b$$.  

+ **But, then wouldn't the gap between them be uniform and constant as well?**
Yes, the boundaries of the buckets are evenly spaced, with a fixed gap of $$1$$ integer unit. That means two adjacent buckets of size $$3$$ could hold integers in ranges like $$3$$ to $$6$$ and $$7$$ to $$9$$. We avoid overlapping buckets.  

+ **Then what do you mean when you say the gap between two adjacent buckets could be the maximal gap?**
The bucket size refers to its capacity, which is the range of values it *could* hold. However, the actual numbers that end up in a bucket depend on the input values. The *actual extent* of a bucket is determined by the maximum and minimum values it contains.  
For example, a bucket of size $$5$$ could theoretically hold values from $$6$$ to $$10$$. But if it only contains $$7$$, $$8$$, and $$9$$, then its actual extent is $$(9 - 7) + 1 = 3$$, which is smaller than its full capacity.  
This is why the gap between two occupied buckets, meaning the difference between the maximum value in one bucket and the minimum value in the next occupied bucket, can be larger than the fixed boundary gap of $$1$$.  

+ **Then how do you compare adjacent buckets?**
We do that by comparing their extents. Thus we compare the minimum element of the next bucket to the maximum element of the current bucket. For example: if we have two buckets of size $$5$$ each, holding elements $$[1, 2, 3]$$ and $$[9, 10]$$ respectively, then the gap between the buckets would essentially refer to the value $$9 - 3 = 6$$ (which is larger than the size of either bucket).

+ **But then aren't we comparing elements again?!**
We are, yes! But only compare about twice the elements as the number of buckets (i.e. the minimum and maximum elements of each bucket). If you followed the above, you would realize that this amount is certainly less than the actual number of elements in the array, given a suitable bucket size was chosen.

#### Algorithm

+ We choose a bucket size $$b$$ such that $$1 < b \leq (max - min)/(n-1)$$. Let's just choose $$b = \lfloor (max - min)/(n-1) \rfloor$$.

+ Thus all the $$n$$ elements would be divided among $$k = \lceil (max - min)/b \rceil$$ buckets.

+ Hence the $$i^{th}$$ bucket would hold the range of values: $$\bigg [min + (i-1) * b, \space min + i*b \bigg )$$ (`1`-based indexing).

+ It is trivial to calculate the index of the bucket to which a particular element belongs. That is given by $$\lfloor (num - min)/b \rfloor$$ (`0`-based indexing) where $$num$$ is the element in question.

+ Once all $$n$$ elements have been distributed, we compare $$k-1$$ adjacent bucket pairs to find the maximum gap.

<iframe src="https://leetcode.com/playground/4DVzeNdT/shared" frameBorder="0" width="100%" height="500" name="4DVzeNdT"></iframe>

#### Complexity Analysis

* Time complexity: $$O(n + k) \approx O(n)$$.

    Distributing the elements of the array takes one linear pass (i.e., $$O(n)$$ complexity). Finding the maximum gap among the buckets takes a linear pass over the bucket storage (i.e., $$O(k)$$ complexity). Since the number of buckets is at most the number of elements (i.e., $$k \leq n$$), the overall process takes linear time: $$O(n + k) = O(n)$$.  

* Space complexity: $$O(2 \cdot k) \approx O(k)$$ extra space.

    Each bucket stores a maximum and a minimum element. Hence, extra space proportional to the number of buckets is required.