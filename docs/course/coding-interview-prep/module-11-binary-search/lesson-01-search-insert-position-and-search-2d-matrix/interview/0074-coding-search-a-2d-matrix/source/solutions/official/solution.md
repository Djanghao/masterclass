# Official Solution

**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solution/](https://leetcode.com/problems/search-a-2d-matrix/solution/)

---

[TOC]

## Solution

---
   
### Approach 1: Binary Search

**Intuition**

One could notice that the input matrix `m x n` could be considered as a sorted array of length `m x n`.

![bla](../Figures/74/matrix2.png)

Sorted array is a perfect candidate for the binary search because the element index in this _virtual_ array (_for sure we're not going to construct it for real_) could be easily transformed into the row and column in the initial matrix

> `row = idx // n` and `col = idx % n`.

**Algorithm**

The algorithm is a standard binary search : 

* Initialise left and right indexes `left = 0` and `right = m x n - 1`.

* While `left <= right` :

    * Pick up the index in the middle of the virtual array as a pivot index: `pivot_idx = (left + right) / 2`.
    
    * The index corresponds to `row = pivot_idx // n` and `col = pivot_idx % n` in the initial matrix, and hence one could get the `pivot_element`. This element splits the virtual array into two parts. 
    
    * Compare `pivot_element` and `target` to identify in which part one has to look for `target`.
        
**Implementation**

!?!../Documents/74_LIS.json:1000,436!?!

<iframe src="https://leetcode.com/playground/BFrrAc5S/shared" frameBorder="0" width="100%" height="497" name="BFrrAc5S"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(\log(m n))$$ since it's a standard binary search.

* Space complexity : $$\mathcal{O}(1)$$. 


---