# Official Solution

**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solution/](https://leetcode.com/problems/top-k-frequent-elements/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/704610634" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Heap

Let's start from the simple [heap](https://en.wikipedia.org/wiki/Heap_(data_structure)) approach with $$\mathcal{O}(N \log k)$$ time complexity. To ensure that $$\mathcal{O}(N \log k)$$ is always less than $$\mathcal{O}(N \log N)$$, the particular case $$k = N$$ could be considered separately and solved in $$\mathcal{O}(1)$$ time. 

**Algorithm**

- The first step is to build a hash map `element -> its frequency`. In Java, we use the data structure `HashMap`. Python provides a dictionary subclass `Counter` to initialize the hash map we need directly from the input array. This step takes $$\mathcal{O}(N)$$ time where `N` is a number of elements in the list.

- The second step is to build a heap of _size k using N elements_. To add the first `k` elements takes a linear time $$\mathcal{O}(k)$$ in the average case, and $O(\log 1 + \log 2 + ... + \log k) = O(log k!) = \mathcal{O}(k \log k)$ in the worst case. It's equivalent to [heapify implementation in Python](https://hg.python.org/cpython/file/2.7/Lib/heapq.py#l16). After the first `k` elements we start to push and pop at each step, `N - k` steps in total. The time complexity of heap push/pop is $$\mathcal{O}(\log k)$$ and we do it `N - k` times which means $$\mathcal{O}((N - k)\log k)$$ time complexity. Adding both parts up, we get $$\mathcal{O}(N \log k)$$ time complexity for the second step.

- The third and last step is to convert the heap into an output array. That could be done in $$\mathcal{O}(k \log k)$$ time.
 
In Python, library `heapq` provides a method `nlargest`, which [combines the last two steps under the hood](https://hg.python.org/cpython/file/2.7/Lib/heapq.py#l203) and has the same $$\mathcal{O}(N \log k)$$ time complexity.

![diff](../Figures/347_rewrite/summary.png)

**Implementation**

<iframe src="https://leetcode.com/playground/3WH339tU/shared" frameBorder="0" width="100%" height="500" name="3WH339tU"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(N + N \log k)$$ if $$k < N$$ and $$\mathcal{O}(1)$$ in the particular case of $$N = k$$. That ensures time complexity to be better than $$\mathcal{O}(N \log N)$$.

* Space complexity : $$\mathcal{O}(N + k)$$ to store the hash map with not more $$N$$ elements and a heap with $$k$$ elements.
<br />
<br />


---

### Approach 2: Quickselect (Hoare's selection algorithm)

Quickselect is a [textbook algorithm](https://en.wikipedia.org/wiki/Quickselect) typically used to solve the problems "find `k`*th* something": `k`*th* smallest, `k`*th* largest, `k`*th* most frequent, `k`*th* less frequent, etc. Like quicksort, quickselect was developed by [Tony Hoare](https://en.wikipedia.org/wiki/Tony_Hoare) and is also known as _Hoare's selection algorithm_.

It has $$\mathcal{O}(N)$$ _average_ time complexity and is widely used in practice. It is worth noting that its worst-case time complexity is $$\mathcal{O}(N^2)$$, although the probability of this worst-case is negligible.

The approach is the same as for quicksort.

> One chooses a pivot and defines its position in a sorted array in a linear time using the so-called _partition algorithm_. 

As an output, we have an array where the pivot is in its perfect position in the ascending sorted array, sorted by the frequency. All elements on the left of the pivot are less frequent than the pivot, and all elements on the right are more frequent or have the same frequency.

Hence the array is now split into two parts. If by chance our pivot element took `N - k`*th* final position, then $$k$$ elements on the right are these top $$k$$ frequent we're looking for. If not, we can choose one more pivot and place it in its perfect position.

![diff](../Figures/347_rewrite/hoare.png)

If that were a quicksort algorithm, one would have to process both parts of the array. That would result in $$\mathcal{O}(N \log N)$$ time complexity. In this case, there is no need to deal with both parts since one knows in which part to search for `N - k`*th* less frequent element, and that reduces the average time complexity to $$\mathcal{O}(N)$$.

**Algorithm**

The algorithm is quite straightforward :

* Build a hash map `element -> its frequency` and convert its keys into the array `unique` of unique elements. Note that elements are unique, but their frequencies are _not_. That means we need a partition algorithm that works fine with _duplicates_. 

* Work with `unique` array. 
Use a partition scheme (please check the next section) to place the pivot into its perfect position `pivot_index` in the sorted array, move less frequent elements to the left of the pivot, and more frequent or of the same frequency - to the right.

* Compare `pivot_index` and `N - k`.
 
    - If `pivot_index == N - k`, the pivot is `N - k`*th* most frequent element, and all elements on the right are more frequent or of the same frequency. Return these top $$k$$ frequent elements.
    
    - Otherwise, choose the side of the array to proceed recursively.
    
![diff](../Figures/347_rewrite/details.png)

**Lomuto's Partition Scheme**

There is a zoo of partition algorithms. The most simple one is [Lomuto's Partition Scheme](https://en.wikipedia.org/wiki/Quicksort#Lomuto_partition_scheme), and so is what we will use in this article.

Here is how it works:

- Move the pivot at the end of the array using swap. 

- Set the pointer at the beginning of the array `store_index = left`.
    
- Iterate over the array and move all less frequent elements to the left `swap(store_index, i)`. Move `store_index` one step to the right after each swap.

- Move the pivot to its final place, and return this index.

!?!../Documents/347_RES.json:1000,556!?!

<iframe src="https://leetcode.com/playground/56S3UHe5/shared" frameBorder="0" width="100%" height="378" name="56S3UHe5"></iframe>
 
**Implementation**

Here is a total algorithm implementation. 

<iframe src="https://leetcode.com/playground/eAsoNpLA/shared" frameBorder="0" width="100%" height="500" name="eAsoNpLA"></iframe>

**Complexity Analysis**

* Time complexity: $$\mathcal{O}(N)$$ in the average case, 
    $$\mathcal{O}(N^2)$$ in the worst case. [Please refer to this card for a good detailed explanation of Master Theorem](https://leetcode.com/explore/learn/card/recursion-ii/470/divide-and-conquer/2871/). Master Theorem helps to get an average complexity by writing the algorithm cost as $$T(N) = a T(N / b) + f(N)$$. Here we have an example of Master Theorem case III: $$T(N) = T \left(\frac{N}{2}\right) + N$$, which results in $$\mathcal{O}(N)$$ time complexity. That's the case with random pivots.
    
    In the worst case of constantly badly chosen pivots, the problem is not divided by half at each step, it becomes just one element less, which leads to $$\mathcal{O}(N^2)$$ time complexity. It happens, for example, if at each step you choose the pivot not randomly, but take the rightmost element. For the random pivot choice, the probability of having such a worst-case is negligibly small. 

* Space complexity: up to $$\mathcal{O}(N)$$ to store hash map and array of unique elements.
<br />
<br />


---
### Further Discussion: Could We Do Worst-Case Linear Time? 

In theory, we could, the algorithm is called [Median of Medians](https://en.wikipedia.org/wiki/Median_of_medians).

This method is never used in practice because of two drawbacks:

- It's _outperformer_. Yes, it works in a linear time $$\alpha N$$, but the constant $$\alpha$$ is so large that in practice it often works even slower than $$N^2$$.  

- It doesn't work with duplicates.
<br />
<br />


---