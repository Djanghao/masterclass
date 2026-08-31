# Official Solution

**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solution/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solution/)

---

[TOC]

## Solution

---

### Approach 1: Binary Search 

**Split into Two Subproblems**

The array is sorted, i.e. one could try to fit into a logarithmic time complexity. That means two subproblems and both should be done
in a logarithmic time:

- Define search limits, i.e. left and right boundaries for the search.

- Perform a binary search in the defined boundaries.

![limits](../Figures/702/way.png)

**Define Search Boundaries**

This is a key subproblem here. 

The idea is quite simple. Let's take the two first indexes, 0 and 1, as left and right boundaries. If the target value is not among these zeroth and the first element, then it's outside the boundaries, on the right. 

That means that the left boundary could moved to the right, and the right boundary should be extended. To keep logarithmic time complexity, let's extend it twice as far: `right = right * 2`. 

![limits](../Figures/702/limits.png)

If the target now is less than the right element, we're done, the boundaries are set. If not, repeat these two steps till the boundaries are established:

- Move the left boundary to the right: `left = right`.

- Extend the right boundary: `right = right * 2`.  

![limits](../Figures/702/done.png)

**Binary Search**

[Binary search](https://leetcode.com/explore/learn/card/binary-search/) is a textbook algorithm with logarithmic time complexity. It's based on the idea of comparing the target value to the middle element of the array.

- If the target value is equal to the middle element - we're done.

- If the target value is smaller - continue to search on the left.

- If the target value is larger - continue to search on the right.

![limits](../Figures/702/binary2.png)

**Prerequisites: left and right shifts**

To speed up, one could use here [bitwise shifts](https://wiki.python.org/moin/BitwiseOperators):

- Left shift: `x << 1`. The same as multiplying by 2: `x * 2`.

- Right shift: `x >> 1`. The same as dividing by 2: `x / 2`.

**Algorithm**

Define boundaries:

- Initiate `left = 0` and `right = 1`.

- While the target is on the right to the right boundary: `reader.get(right) < target`:

    - Set the left boundary equal to the right one: `left = right`.
    
    - Extend right boundary: `right *= 2`. To speed up, use right shift instead of multiplication: `right <<= 1`. 
    
- Now the target is between left and right boundaries. 

Binary Search:

- While `left <= right`:

    - Pick a pivot index in the middle: `pivot = (left + right) / 2`. To avoid overflow, use the form `pivot = left + ((right - left) >> 1)` instead of the straightforward expression above. 
     
    - Retrieve the element at this index: `num = reader.get(pivot)`.  
    
    - Compare the middle element `num` to the target value.
    
        - If the middle element _is_ the target `num == target`: return `pivot`. 
        
        - If the target is not yet found: 
        
            - If `num > target`, continue to search on the left `right = pivot - 1`.
            
            - Else continue to search on the right `left = pivot + 1`.
    
- We're here because the target is not found. Return -1. 
            
**Implementation**



<iframe src="https://leetcode.com/playground/DuVu4DRd/shared" frameBorder="0" width="100%" height="500" name="DuVu4DRd"></iframe>

**Complexity Analysis**

* Time complexity : $$\mathcal{O}(\log T)$$, where $$T$$ is an index of target value. 

    There are two operations here: to define search boundaries and to perform binary search. 
    
    Let's first find the number of steps k to set up the boundaries. In the first step, the boundaries are $$2^0 .. 2^{0 + 1}$$, on the second step $$2^1 .. 2^{1 + 1}$$, etc. When everything is done, the boundaries are $$2^k .. 2^{k + 1}$$ and $$2^k < T \le 2^{k + 1}$$. That means one needs $$k = \log T$$ steps to setup the boundaries, which means $$\mathcal{O}(\log T)$$ time complexity.  
    
    Now let's discuss the complexity of the binary search. There are $$2^{k + 1} - 2^k = 2^k$$ elements in the boundaries, i.e. $$2^{\log T} = T$$ elements. [As discussed](https://leetcode.com/articles/binary-search/), binary search has logarithmic complexity, that results in $$\mathcal{O}(\log T)$$ time complexity.  
     
* Space complexity : $$\mathcal{O}(1)$$ since it's a constant space solution.