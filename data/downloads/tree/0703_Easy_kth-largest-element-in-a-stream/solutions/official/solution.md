# Official Solution

**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solution/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solution/)

---

[TOC]

## Solution

---

### Overview

Imagine a university admissions office wants to keep track of the `k-th` highest test scores from applicants in real time. This allows them to dynamically determine the cut-off score as new applications come in. To achieve this, we'll create a class `KthLargest` that can return the `k-th` largest element for an incoming stream of numbers. Specifically, we need to implement:  

1. The constructor `KthLargest(int k, int[] nums)`, which initializes the class with `k` and the initial stream of numbers `num`, 
2. The function `add(int val)`, which adds a new number `val` into the existing stream of numbers, and returns the `k-th` largest element of the updated stream. 

### Approach 1: Maintain Sorted List

### Intuition

In this problem, we need to be able to repeatedly fetch the `k-th` largest element from a growing stream of numbers. Suppose we assume that the stream of numbers is always sorted in ascending order. In that case, returning the `k-th` largest element becomes a straightforward operation of fetching the `k-th` element from the end of the stream. 

Thus, one approach is to maintain a list that stores the entire stream of numbers seen so far, and ensure the list remains sorted each time we add a new element. This allows us to fetch the `k-th` largest element with no extra work.

For our constructor, we can initialize our list `stream` with the initial set of numbers `nums` provided, and then sort `stream` in ascending order.  

For every new `val` added to the `stream` by the `add(int val)` call, we ensure `val` is inserted at the correct position so that `stream` remains sorted. Because `stream` is sorted beforehand, we can efficiently find the correct position for `val` by using [binary search](https://leetcode.com/explore/learn/card/binary-search/).

For this binary search insertion:

1. We start with the entirety of `stream` as our search space
2. We check the middle element `stream[mid]`
    * If `stream[mid] == val` then we know that we can add `val` at index `mid`
    * If `stream[mid] < val`, then `val` needs to be added to the right of `stream[mid]`, so we limit the search space to the right half of `stream`. 
    * If `stream[mid]` is greater than `val`,`val` needs to be added to the left of `stream[mid]`, so we limit the search space to the left half of `stream`. 
3.  We can repeat this procedure until we narrow down our search space to the correct index to add `val`.

After inserting `val` in the correct position, we can return `stream[stream.length - k]`, which is the `k-th` largest element in the stream.

### Algorithm

1. In the constructor: 
    * Initialize class variable `k` 
    * Initialize class variable list `stream` 
    * Add all of `nums` to `stream`, used to keep track of the total stream.
    * Sort `stream` in ascending order
2. In the `add(int val)` function: 
    * Call helper function `getIndex(int val)` to find the index `i` to add `val`
    * Insert `val` in `stream` at index `i`
    * Return the `k-th` largest element in `stream`, at index `stream.size() - k`
3. In the `getIndex(int val)`:
    * **Define starting search space**: Initialize `left` to `0` and `right` to `stream.size() - 1`  
    * While `left <= right`:
        * **Calculate index for middle element**: Initialize `mid` to `(left + right) / 2`
        * **Get middle element**: Initialize `midElement` to `stream.get(mid)`
        * If `midElement == val` return `mid`
        * If `midElement > val`:
            * **Go to left half of search space**: Reassign `right` to `mid - 1`
        * If `midElement < val`:
            * **Go to right half of search space**: Reassign `left` to `mid + 1`

### Implementation

<iframe src="https://leetcode.com/playground/eBbNQ3hn/shared" frameBorder="0" width="100%" height="500" name="eBbNQ3hn"></iframe>

### Complexity Analysis

Let $M$ be the size of the initial stream `nums` given in the constructor. Let $N$ be the number of calls of `add`. 

* Time Complexity: $O(N^2 + N \cdot M)$

    The constructor involves creating a list `stream` from `nums`, which takes $O(M)$ time. Then, sorting this list takes $O(M \cdot \log M)$ time. Thus, the time complexity of the constructor is $O(M \cdot \log M)$ time.  

    The `add` function involves running a binary search on `stream`. Because the total size of `stream` at the end would be $O(M + N)$, each binary search is bounded by a time complexity of $O(\log(M + N))$. Moreover, adding a number in `stream` can take worst-case $O(M + N)$ time, as adding an element in the middle of a list can offset all the elements to its right. Then, the time complexity of a single `add` call would be $O(M + N + \log(M + N))$. Because `add` is called $N$ times, the time complexity of all the `add` calls would be $O(N \cdot (M + N + \log(M + N)))$.  

    We see that after expanding the time complexity for the `add` function, the $N \cdot M$ and $N^2$ terms dominate all the other $\log$ terms in our calculations, so the total time complexity is $O(N^2 + N \cdot M)$

* Space Complexity: $O(M + N)$

    The maximum size for `stream` is $M + N$, so the total space complexity is $O(M + N)$.

### Approach 2: Heap

### Intuition

In Approach 1, sorting the entire stream of numbers seems unnecessary because we only need the `k-th` largest element. Maintaining a sorted list becomes costly as its size increases. To optimize, we can focus on only the necessary elements for retrieving and updating the `k-th` largest element.


!?!../Documents/703/slideshow1.json:960,540!?!


Consider a stream of numbers `[0, 4, 6, 9]` where `k = 3` and incoming `val = 2`. Before adding `2`, the `k-th` largest element is `4`. Adding `2` does not affect `4`'s position since `2` is smaller. Now, if the incoming value is `7`, which is greater than both `4` and `6`, `7` would become the 2nd largest number, pushing `6` to be the new `k-th` largest element, and `4` is no longer in the top `k`.


!?!../Documents/703/slideshow2.json:960,540!?!


From this example, we see that keeping track of just the `k` largest elements allows us to efficiently maintain the `k-th` largest element:
1. **If an incoming element `val` is smaller than or equal to the existing `k-th` largest element**: The `k` largest elements remain unchanged, and we can return the current `k-th` largest element.
2. **If `val` is larger than the current `k-th` largest element**: It replaces the current `k-th` largest element. After adding `val`, the new `k-th` largest element is the next largest element.

To efficiently maintain the `k` largest elements, we use a min-heap. In a min-heap, elements are organized such that the smallest element is always at the top (root node), providing $O(1)$ access time. Adding elements and removing the top element from the min-heap can be done in $O(\log n)$ time.

For our problem, the min-heap will contain the `k` largest elements, with the `k-th` largest element at the top. If a new `val` is greater than the `k-th` largest element, we add `val` to the heap and remove the top element, keeping the heap size at `k` and updating the `k-th` largest element.

In our optimized approach, we initialize the min-heap with the initial stream `nums` in the constructor and ensure it contains only the `k` largest elements. In the `add(int val)` function, if `val` is smaller than the current `k-th` largest element and the heap already contains `k` elements, we return the top element. Otherwise, we add `val`, remove the top element if the heap size exceeds `k`, and return the updated top element.

This approach is more efficient in both time and space complexity compared to maintaining a fully sorted list, as the relaxed ordering of a heap allows quick access and updates to the `k` largest elements without the overhead of sorting the entire stream.

### Algorithm

1. In the constructor: 
    * Initialize class variable `k` to the input value `k`
    * Initialize a class `PriorityQueue` `minHeap` to hold the `k` largest elements
    * Iterate through each element `num` in the initial stream `nums`:
        * Call `add(num)`
2. In the `add(int val)` function:
    * If `val` is greater than the smallest element in `minHeap` or the size of `minHeap` is less than `k` elements:
        * Add `val` to `minHeap`
        * If the size of `minHeap` is greater than `k`, then remove the top element
    * Return the top element as the `k-th` largest element in the stream

### Implementation

<iframe src="https://leetcode.com/playground/7W8gK6JG/shared" frameBorder="0" width="100%" height="497" name="7W8gK6JG"></iframe>

### Complexity Analysis

Let $M$ be the size of the initial stream `nums` given in the constructor, and let $N$ be the number of calls to `add`.

* Time Complexity: $O((M + N) \cdot \log k)$

    The `add` function involves adding and removing an element from a heap of size $k$, which is an $O( \log k)$ operation. Since the `add` function is called $N$ times, the total time complexity for all `add` calls is $O(N \cdot \log k)$.
    
    The constructor also calls `add` $M$ times to initialize the heap, leading to a time complexity of $O(M \cdot \log k)$.
    
    Therefore, the overall time complexity is $O((M + N) \cdot \log k)$.

* Space Complexity: $O(k)$

    The `minHeap` maintains at most $k$ elements, so the space complexity is $O(k)$.