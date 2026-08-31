# Official Solution

**Link:** [https://leetcode.com/problems/search-insert-position/solution/](https://leetcode.com/problems/search-insert-position/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/830326639" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Binary Search 

**Intuition**

Based on the description of the problem, we can see that it could be a good match with the [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) algorithm. 

> Binary search is a search algorithm that finds the position of a target value within a _sorted_ array.
 
Usually, within binary search, we compare the target value to the middle element of the array at each iteration.

- If the target value is equal to the middle element, the job is done.

- If the target value is less than the middle element, continue to search on the left.

- If the target value is greater than the middle element, continue to search on the right.

Here we showcase a simple example of how it works.

![simple](../Figures/35/simple.png) 

To mark the search boundaries, one could use two pointers: `left` and `right`. 

Starting from `left = 0` and `right = n - 1`, we then move either of the pointers according to various situations:

- While `left <= right`:

    - The pivot index is the one in the middle: `pivot = (left + right) / 2`. The pivot also divides the original array into two subarrays.

    - If the target value is equal to the pivot element: `target == nums[pivot]`, we're done.
    
    - If the target value is less than the pivot element `target < nums[pivot]`, continue to search on the left subarray by moving the right pointer `right = pivot - 1`.
    
    - If the target value is greater than the pivot element `target > nums[pivot]`, continue to search on the right subarray by moving the left pointer `left = pivot + 1`.

![two](../Figures/35/two_pointers.png)

> What if the target value is not found? 

In this case, the loop will be stopped at the moment when `right < left` and `nums[right] < target < nums[left]`. 

Hence, the proper position to insert the target is at the index `left`.

![two](../Figures/35/not_simple.png)

**Integer Overflow**

Let us now stress the fact that `pivot = (left + right) // 2` works fine for Python3, which has arbitrary precision integers, but it could cause some issues in Java and C++. 

If `left + right` is greater than the maximum int value $$2^{31} - 1$$, it overflows to a negative value. In Java, it would trigger an exception of `ArrayIndexOutOfBoundsException`, and in C++ it causes an illegal write, which leads to memory corruption and unpredictable results. 

Here is a simple way to fix it:

<iframe src="https://leetcode.com/playground/jnmEvuTG/shared" frameBorder="0" width="100%" height="72" name="jnmEvuTG"></iframe>

and here is a bit more complicated but probably faster way using the bit shift operator.

<iframe src="https://leetcode.com/playground/aPBNeoSo/shared" frameBorder="0" width="100%" height="72" name="aPBNeoSo"></iframe>


**Algorithm**

- Initialize the `left` and `right` pointers: `left = 0`, `right = n - 1`.

- While `left <= right`:

    - Compare middle element of the array `nums[pivot]` to the target value `target`.
    
        - If the middle element _is_ the target, _i.e._ `target == nums[pivot]`: return `pivot`. 
        
        - If the target is not here: 
        
            - If `target < nums[pivot]`, continue to search on the left subarray. `right = pivot - 1`.
            
            - Else continue to search on the right subarray. `left = pivot + 1`.
            
- Return `left`.
            
**Implementation**

!?!../Documents/35_LIS.json:1000,340!?!

<iframe src="https://leetcode.com/playground/3axFqr4s/shared" frameBorder="0" width="100%" height="327" name="3axFqr4s"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(\log N)$$. 

    Let us compute the time complexity with the help of [master theorem](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)) 

    $$T(N) = aT\left(\frac{N}{b}\right) + \Theta(N^d)$$.

    The equation represents dividing the problem up into $$a$$ subproblems of size $$\frac{N}{b}$$ in $$\Theta(N^d)$$ time. 

    Here at each step there is only one subproblem _i.e._ `a = 1`, its size is half of the initial problem _i.e._ `b = 2`, and all this happens in a constant time _i.e._ `d = 0`. As a result, $$\log_b{a} = d$$ and hence we're dealing with [case 2](https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)#Case_2_example) that results in $$\mathcal{O}(n^{\log_b{a}} \log^{d + 1} N)$$ = $$\mathcal{O}(\log N)$$ time complexity.
 
* Space complexity: $$\mathcal{O}(1)$$

    since it's a constant space solution.