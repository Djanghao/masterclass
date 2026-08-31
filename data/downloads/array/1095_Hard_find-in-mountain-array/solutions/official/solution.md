# Official Solution

**Link:** [https://leetcode.com/problems/find-in-mountain-array/solution/](https://leetcode.com/problems/find-in-mountain-array/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a **mountain array**. Based on the definition given in the problem description, any mountain array, can in general be represented as a **strictly increasing** array followed by a **strictly decreasing** array.

![representation](../Figures/1095/1095_used/Slide1.PNG)


The problem asks us to find the (minimum) index of a given `target` element in the given `mountainArr`. There might be a case where the `target` element is not present in the `mountainArr`. In such a case, we need to return `-1`.

Before moving further, let's focus on the term **minimum index**. Is there a possibility of multiple occurrences of the `target` element in the `mountainArr`?    

Due to the phrase **strictly** in definition, it may seem that there is no possibility of multiple occurrences of any element. However, further thought on the graph suggests that corresponding to any element, there can be at most two occurrences of the element, one in the **strictly increasing** array and the other in the **strictly decreasing** array.  
_Or one before the peak and the other after the peak._

![two_occurrences](../Figures/1095/1095_used/Slide2.PNG)


In such a case, we should return the index of the element in the **strictly increasing** array. If the element is not present in the **strictly increasing** array, then we should return the index of the element in the **strictly decreasing** array.

Like any other array search problem, the **Linear Search** may sound very natural. 

However, we cannot access the element of the given `mountainArr` directly. To access the element at index `k`, we need to call the function `mountainArr.get(k)`. 

Still, we can call `get` for indices varying from `0` to `mountainArr.length() - 1`, and find the index of the `target` element.

However, there is a catch. The problem description also mentions that the function `mountainArr.get(k)` will be called at most `100` times, but the size of the `mountainArr` can be as large as `10000`.

Thus, **Linear Search will not work here!**

Recall that when search space is sorted, we can use **Binary Search** to find the element in $O(\log_2 {N})$ time complexity, where $N$ is the size of the search space. 

> **Binary Search** is an algorithm for searching in a sorted array by repeatedly dividing the search interval in half. 
> 
> While the basic algorithm sounds simpler, backed by in-built functions such as `bisect.bisect_left`, `upper_bound`, `lower_bound`, etc., the implementation has a good number of corner cases to handle, particularly off-by-one errors.
> 
> Hence, readers are strongly advised to follow the template given in [**Leetcode Binary Search Explore Card**](https://leetcode.com/explore/learn/card/binary-search/). The templates there standardize the implementation of binary search and help in avoiding silly mistakes.

In a sorted array, examination of only $O(\log_2 {N})$ elements is sufficient to search an element, or $O(\log_2 {N})$ calls to the `get` function is sufficient to find the element.

Taking the upper bound of the length of the `mountainArr` as `10000`, we can say that around `14` calls to `get(k)` will be sufficient to find the `target` element **if** array was sorted. **However, `mountainArr` is not exactly sorted.** 

- It has a peak element `peak` at index `peakIndex`.

    > Finding the `peakIndex` in the `mountainArr` is another algorithmic problem. Readers are strongly advised to solve the problem [**Peak Index in a Mountain Array**](https://leetcode.com/problems/peak-index-in-a-mountain-array/description/) before proceeding further.
    >
    > After solving, readers can appreciate that the `peakIndex` can be found in $O(\log_2 {N})$ time complexity.
    >
    > However, it is worth noting that although the time complexity of finding `peakIndex` is $O(\log_2 {N})$, at each step, we need to examine at least two neighboring elements. Hence, the number of calls to `get(k)` will be around $2 \log_2 {N}$.

- The array is **strictly increasing** from index `0` to `peakIndex`. Thus, we can use **Binary Search** to find the `target` element in the range `[0, peakIndex]`.

    > The time complexity of **Binary Search** is $O(\log_2 {N})$. For searching, at each step, we need to examine only one element. Hence, the number of calls to `get(k)` will be around $\log_2 N$.

- The array is **strictly decreasing** from index `peakIndex + 1` to `mountainArr.length() - 1`. Thus, we can use **Binary Search** to find the `target` element in the range `[peakIndex + 1, mountainArr.length() - 1]`.

    > The time complexity of **Binary Search** is $O(\log_2 {N})$. For searching, at each step, we need to examine only one element. Hence, the number of calls to `get(k)` will be around $\log_2 {N}$.

Hence, by using **Binary Search** thrice, and by making about $4 \log_2 {N}$ calls to `get(k)`, we can find the `target` element in the `mountainArr`.

**Will the number of calls to `mountainArr.get(k)` be less than `100`?**  
In the worst case, there will be about $4 \log_2 {N}$ calls to `mountainArr.get(k)`. Taking the upper bound of the length of the `mountainArr` as `10000`, we can say that **Binary Search** will take around `56` calls to `get(k)`. Thus, the number of calls to `get(k)` will be less than `100`.


This editorial has two pre-requisites:

1. Proficiency in implementing Binary Search, which takes care of off-by-one errors. If not, readers are strongly advised to deep dive into [Binary Search Explore Card](https://leetcode.com/explore/learn/card/binary-search/).

2. Solving the problem [Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/description/). If not, readers are strongly advised to solve the problem before proceeding further. The problem is a good warm-up exercise for the current problem. 

The editorial also tries to capture these prerequisites briefly.


---

### Approach 1: Binary Search

#### Intuition

As discussed in [overview](#overview), we will break the problem into three parts, but before doing that, readers should keep in mind the following fact of Binary Search

> In Binary Search, we discard half of the search space at each step, based on the test condition on the middle element of the search space. 
> 
> We must ensure that we don't end up discarding the element we are looking for. Our `[low, high]` search space must always contain the element we are looking for.


**1. FIND INDEX OF PEAK ELEMENT**
   
- **What's the possible range of `peakIndex`?**   
    
    Looking at the problem description, we are sure that index-`0` and index-`mountainArr.length() - 1` are not the peak indices. Hence, the lowest possible value of `peakIndex` is `1`, and the highest possible value of `peakIndex` is `mountainArr.length() - 2`.

    Hence, we can set
    - `low = 1`
          
    - `high = mountainArr.length() - 2`  


    `testIndex` will be the middle index of the search space `[low, high]`.  

- **How to test if `testIndex` is the `peakIndex`?**   
    
    Element at `peakIndex` is greater than its neighbors. However, this would require 3 calls to `mountainArr.get(k)`. We can do better. 

    Let's compare the element at `testIndex` with its right neighbor only

    We can have three markers on the graph
    - `i` for arbitrary index at strictly increasing part of the array
    
    - `d` for arbitrary index at strictly decreasing part of the array
    
    - `p` for the `peakIndex`

    ![arbitrarypoints](../Figures/1095/1095_used/Slide3.PNG)

    - For all `i`, we have `mountainArr.get(i) < mountainArr.get(i + 1)`. 
    
    - For all `d`, we have `mountainArr.get(d) > mountainArr.get(d + 1)`.
    - For `p`, we have `mountainArr.get(p) > mountainArr.get(p + 1)`.

    Thus, 

    - if `mountainArr.get(testIndex) < mountainArr.get(testIndex + 1)`, then `testIndex` is `i` only.

        In this case, we can discard the left half of the search space, and search in the right half of the search space. This can be done by setting `low = testIndex + 1`. The `testIndex` was not at all a candidate for `peakIndex`. Hence, by discarding the left half of the search space, we are not discarding the `peakIndex`.
    
    - the case `mountainArr.get(testIndex) == mountainArr.get(testIndex + 1)` is not possible.
    
    - if `mountainArr.get(testIndex) > mountainArr.get(testIndex + 1)`, then `testIndex` is either `d` or `p`.

        In this case, we can discard the right half of the search space, and search in the left half of the search space. This can be done by setting `high = testIndex`. We cannot discard `testIndex` as it is a candidate for `peakIndex`. Hence, by setting `high = testIndex`, we are not discarding candidates for `peakIndex`.

        Note that failure of the first `if` condition (`mountainArr.get(testIndex) < mountainArr.get(testIndex + 1)`) implies passing of this `if` condition (`mountainArr.get(testIndex) > mountainArr.get(testIndex + 1)`). Hence, we can use `else` instead of the `if` condition. This will prevent unnecessary comparison calls to `get`.
    
- **When to stop the search?**   
    
    The discarding of search space is done in such a way that the **`peakIndex` is always present in the search space**. A quick check of the above algorithm shows that the search space will be reduced to a single element, i.e. `low == high`. 
    
    > Readers are encouraged to do this on pen and paper and convince themselves for smaller search space. 
     
    > Assume search space reduces to three element array `[f, g, h]`. It's worth noting that `[f, g, h]` is not the input array, but the reduced search space. The `testIndex` will be the index of `g`.
    > - If `mountainArr.get(testIndex) < mountainArr.get(testIndex + 1)`, then in the next iteration, the search space will reduce to a single element `[h]`.
    > - If `mountainArr.get(testIndex) > mountainArr.get(testIndex + 1)`, then in the next iteration, the search space will reduce to `[f, g]`.  
       

    > Let's see what happens when search space reduces to an array `[f, g]` with only two elements. It's worth noting that `[f, g]` is not the input array. In fact, `mountainArr` needs to have at least 3 elements. The `[f, g]` is reduced search space. The `testIndex` will be the index of `f`.
    > - If `mountainArr.get(testIndex) < mountainArr.get(testIndex + 1)`, then in the next iteration, the search space will reduce to a single element `[g]`.
    > - If `mountainArr.get(testIndex) > mountainArr.get(testIndex + 1)`, then in the next iteration, the search space will reduce to a single element `[f]`.
    
    > Thus, every two-element search space will be reduced to a single-element search space. We can prove by induction that every search space reduces to a single-element search space.
    
    Hence, we can stop the search when `low == high`. In this case, `low` (which is equal to `high`) will be the `peakIndex`.


**2. SEARCH IN STRICTLY INCREASING PART OF THE ARRAY**

We will first search in the strictly increasing part of the array because if `target` exists, we need to return the minimum index of the `target` element. The minimum index of the `target` element will be in the strictly increasing part of the array.

If we fail to find the `target` element in the strictly increasing part of the array, then we will search in the strictly decreasing part of the array.

- **What's the possible range of `targetIndex` in the strictly increasing part of the array?**   
    
    The `targetIndex` will be in the range `[0, peakIndex]`. Hence, we can set
    - `low = 0`
    
    - `high = peakIndex`

    Both are inclusive. `testIndex` will be the middle index of the search space `[low, high]`.  

- **How to test if `testIndex` is the `targetIndex`?**
    
    The array is strictly increasing. 

    ![increasing](../Figures/1095/1095_used/Slide4_1.PNG)

    - If `mountainArr.get(testIndex) < target`, then we are sure that all elements at indices less than or equal to `testIndex` are less than `target`. Hence, we can discard the left half of the search space, and search in the right half of the search space. This can be done by setting `low = testIndex + 1`. The `testIndex` was not at all a candidate for `targetIndex`. Hence, by discarding the left half of the search space, we are not discarding the `targetIndex`.

    - Otherwise, it means `mountainArr.get(testIndex) >= target`, then we are sure that all elements at indices greater than `testIndex` are greater than or equal to `target`. Here, we can discard the right half of the search space, and search in the left half of the search space. This can be done by setting `high = testIndex`. We cannot discard `testIndex` as it is a candidate for `targetIndex`. Hence, by setting `high = testIndex`, we are not discarding candidates for `targetIndex`.

- **When to stop the search?**   
    
    The discarding of search space is done in such a way that the **candidate for `targetIndex` is always present in the search space**. A quick check of the above algorithm shows that the search space will be reduced to a single element, i.e. `low == high`. 
     
    > Assume search space reduces to three element array `[f, g, h]`. The `testIndex` will be the index of `g`.
    > - If `mountainArr.get(testIndex) < target`, then in the next iteration, the search space will reduce to a single element `[h]`.
    > - If `mountainArr.get(testIndex) >= target`, then in the next iteration, the search space will reduce to a single element `[f, g]`.
    > 
    
    > Let's see what happens when search space reduces to `[f, g]`, an array containing two elements. the `testIndex` will be the index of `f`.
    > - If `mountainArr.get(testIndex) < target`, then in the next iteration, the search space will reduce to a single element `[g]`.
    > - If `mountainArr.get(testIndex) >= target`, then in the next iteration, the search space will reduce to a single element `[f]`.
    
    > We can prove by induction that every search space reduces to a single-element search space.
    
    Hence, we can stop the search when `low == high`. In this case, `low` (which is equal to `high`) is the only candidate for `targetIndex` in the strictly increasing part of the array. 

- **What if `target` is not present in the strictly increasing part of the array?**   
    
    `low` was the only candidate for `targetIndex` in the strictly increasing part of the array. 
    
    - If `mountainArr.get(low) == target`, then `low` is the `targetIndex`. Hence, we will return `low`.
 
    - Otherwise, if `mountainArr.get(low) != target`, then `target` is not present in the strictly increasing part of the array. In this case, we will search in the strictly decreasing part of the array.

**3. SEARCH IN STRICTLY DECREASING PART OF THE ARRAY**

If `target` is not present in the strictly increasing part of the array, then we will search in the strictly decreasing part of the array. If we fail to find the `target` element in the strictly decreasing part of the array, then we will return `-1`.

- **What's the possible range of `targetIndex` in the strictly decreasing part of the array?**   
    
    The `targetIndex` will be in the range `[peakIndex + 1, mountainArr.length() - 1]`. Hence, we can set
    - `low = peakIndex + 1`
    
    - `high = mountainArr.length() - 1`

    Both are inclusive. `testIndex` will be the middle index of the search space `[low, high]`.

- **How to test if `testIndex` is the `targetIndex`?**
    
    The array is strictly decreasing. 

    ![decreasing](../Figures/1095/1095_used/Slide4_2.PNG)

    - If `mountainArr.get(testIndex) > target`, then we are sure that all elements at indices less than or equal to `testIndex` are greater than `target`. Hence, we can discard the left half of the search space, and search in the right half of the search space. This can be done by setting `low = testIndex + 1`. The `testIndex` was not at all a candidate for `targetIndex`. Hence, by discarding the left half of the search space, we are not discarding the `targetIndex`.

    - Otherwise, it means `mountainArr.get(testIndex) <= target`, then we are sure that all elements at indices greater than `testIndex` are less than or equal to `target`. Here, we can discard the right half of the search space, and search in the left half of the search space. This can be done by setting `high = testIndex`. We cannot discard `testIndex` as it is a candidate for `targetIndex`. Hence, by setting `high = testIndex`, we are not discarding the candidate for `targetIndex`.

- **When to stop the search?**
    
    The discarding of search space is done in such a way that the **candidate for `targetIndex` is always present in the search space**. A quick check of the above algorithm shows that the search space will be reduced to a single element, i.e. `low == high`. 
     
    > Assume search space reduces to three element array `[r, q, p]`. The `testIndex` will be the index of `q`.
    > - If `mountainArr.get(testIndex) > target`, then in the next iteration, the search space will reduce to a single element `[p]`.
    > - If `mountainArr.get(testIndex) <= target`, then in the next iteration, the search space will reduce to a single element `[r, q]`.
   
    > Let's see what happens when search space reduces to a two-element array `[r, q]`. the `testIndex` will be the index of `r`.
    > - If `mountainArr.get(testIndex) > target`, then in the next iteration, the search space will reduce to a single element `[q]`.
    > - If `mountainArr.get(testIndex) <= target`, then in the next iteration, the search space will reduce to a single element `[r]`.
   
    > We can prove by induction that every search space reduces to a single-element search space.

    Hence, we can stop the search when `low == high`. In this case, `low` (which is equal to `high`) is the only candidate for `targetIndex` in the strictly decreasing part of the array.

- **What if `target` is not present in the strictly decreasing part of the array?**

    `low` was the only candidate for `targetIndex` in the strictly decreasing part of the array. 
    
    - If `mountainArr.get(low) == target`, then `low` is the `targetIndex`. Hence, we will return `low`.

    - Otherwise, if `mountainArr.get(low) != target`, then `target` is not present in the strictly decreasing part of the array. Searching in the strictly decreasing part of the array implies that `target` was not present in the strictly increasing part of the array. Hence, `target` is not present in the `mountainArr`. In this case, we will return `-1`.


Hence, by breaking the problem into three parts, we can find the `target` element in the `mountainArr`.


> The `testIndex` is the middle value of the search space `[low, high]`.
> - Now, `testIndex = (low + high) / 2` is a natural way to find the middle value of the search space. However, this can cause overflow. Hence, many often use the formula `testIndex = low + (high - low) / 2`.
> - In our problem, `high` and `low` can be at most `10000`. Thus, `low + high`, will probably not cause overflow. Hence, we can use sum. 

With all details minutely discussed, readers are encouraged to implement the algorithm.

#### Algorithm

1. In a variable `length`, save the length of the `mountainArr` by calling the function `mountainArr.length()`.

2. Find the index of the `peak` element in the `mountainArr`. 
    - Set `low = 1` and `high = length - 2`.
    - While `low != high`, do the following:
        - Find the middle index of the search space `[low, high]`. Let's call the index `testIndex`.
        - If `mountainArr.get(testIndex) < mountainArr.get(testIndex + 1)`, then set `low = testIndex + 1`.
        - Otherwise, set `high = testIndex`.
    - After the loop, `low` (which is equal to `high`) will be the `peakIndex`.

3. Search for the `target` element in the strictly increasing part of the array.
    - Set `low = 0` and `high = peakIndex`.
    - While `low != high`, do the following:
        - Find the middle index of the search space `[low, high]`. Let's call the index `testIndex`.
        - If `mountainArr.get(testIndex) < target`, then set `low = testIndex + 1`.
        - Otherwise, set `high = testIndex`.
    - If `mountainArr.get(low) == target`, then return `low`.
    - Otherwise, search for the `target` element in the strictly decreasing part of the array.

4. Search for the `target` element in the strictly decreasing part of the array.
    - Set `low = peakIndex + 1` and `high = length - 1`.
    - While `low != high`, do the following:
        - Find the middle index of the search space `[low, high]`. Let's call the index `testIndex`.
        - If `mountainArr.get(testIndex) > target`, then set `low = testIndex + 1`.
        - Otherwise, set `high = testIndex`.
    - If `mountainArr.get(low) == target`, then return `low`.

5. `target` not found in the `mountainArr`. Return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/53C2gv93/shared" frameBorder="0" width="100%" height="500" name="53C2gv93"></iframe>

#### Complexity Analysis

Let $N$ be the length of the `mountainArr`. Moreover, let's assume that each call to `mountainArr.get(k)` takes $O(1)$ time.

* Time complexity: $O(\log N)$

    - **Finding the `peakIndex`** 
        There will be $O(\log_2 {N})$ iterations in the `while` loop. The reason is that at each iteration, the search space is reduced to half. At each iteration, we are 
        - computing `testIndex` using addition and division. This takes $O(1)$ time.
         
        - calling `mountainArr.get(testIndex)` twice. This we assume takes $O(1)$ time.
        - resetting `low` or `high`. This takes $O(1)$ time.

        Thus, the time complexity of finding the `peakIndex` is $O(\log_2 {N})$.

    - **Searching in the strictly increasing part of the array**
        There will be $O(\log_2 {N})$ iterations in the `while` loop. The reason is that at each iteration, the search space is reduced to half. At each iteration, we are 
        - computing `testIndex` using addition and division. This takes $O(1)$ time.
         
        - calling `mountainArr.get(testIndex)` once. This we assume takes $O(1)$ time.
        - resetting `low` or `high`. This takes $O(1)$ time.

        Thus, the time complexity of searching in the strictly increasing part of the array is $O(\log_2 {N})$.

    - **Searching in the strictly decreasing part of the array**
        There will be $O(\log_2 {N})$ iterations in the `while` loop. The reason is that at each iteration, the search space is reduced to half. At each iteration, we are 
        - computing `testIndex` using addition and division. This takes $O(1)$ time.
        
        - calling `mountainArr.get(testIndex)` once. This we assume takes $O(1)$ time.
        - resetting `low` or `high`. This takes $O(1)$ time.

        Thus, the time complexity of searching in the strictly decreasing part of the array is $O(\log_2 {N})$.

    Hence, the overall time complexity of the algorithm is $O(\log_2 {N})$. 

* Space complexity: $O(1)$
    
    We are using only constant extra space which includes a bunch of variables. Hence, the space complexity is $O(1)$.
     
---

### Approach 2: Minimizing `get` Calls with Early Stopping and Caching

#### Intuition

The purpose of [Approach 1](#approach-1-binary-search) was to slowly build the intuition for the problem. Therefore, the three parts of the problem contain several redundant steps.

In this approach, we will avoid redundant work that will minimize the number of calls to `mountainArr.get(k)`. In addition, we will look at the "caching" technique that can accomplish the task more efficiently.

- We are examining $2 \log N$ elements for finding `peakIndex`. What if while examining an element at index `testIndex`, we came to know that element is equal to `target` itself? Can we immediately return `testIndex` as the `targetIndex`?

    Not every time! In the problem, we want to return the minimum index of the `target` element. Hence, we can do so only when we are sure that the element at index `testIndex` is in the strictly increasing part of the array. If the element at index `testIndex` is in the strictly decreasing part of the array, then we aren't sure if it is the minimum index of the `target` element.

- For search in strictly increasing (and after that strictly decreasing) part, if we came to know that element at `testIndex` is equal to `target`, then there we can immediately return the `testIndex` as `targetIndex`. However, here is a word of caution. 

    Let's take the example of the strictly increasing portion.
    - if `mountainArr.get(testIndex) == target`, then we can return `testIndex` as `targetIndex`.
    
    - if `mountainArr.get(testIndex) < target`, then we can set `low = testIndex + 1`.
    - if `mountainArr.get(testIndex) > target`, then we can set `high = testIndex - 1`. Because we know that `testIndex` is no longer a candidate for `targetIndex`. In [Approach-1](#approach-1-binary-search), we were setting `high = testIndex` because it was a potential candidate. The condition there was `mountainArr.get(testIndex) >= target`. Here, the condition is `mountainArr.get(testIndex) > target`. Hence, we can set `high = testIndex - 1`.

    Now, this may seem like no issue, but there are chances that `low` and `high` don't converge to a single element. 

    > Take for example a two array search space `[f, g]`. 
    > - `low` will be the index of `f`.
    >
    > - `high` will be the index of `g`.
    > - `testIndex` will be the index of `f`. 
    >
    > Now, if `mountainArr.get(testIndex) > target`, then we will set `high = testIndex - 1`. This will make the `high` point to `f - 1`. However, `low` will still point to `f`. Hence, the search space will be `[f, f - 1]`. This is not a valid search space. 

    Thus, the condition of the stop of the search will be `low > high`, and while loop condition will be `low <= high`.


- We computed `testIndex` as `testIndex = (low + high) / 2`. The floor division by `2` can be computed by right shift by `1`. Hence, we can compute `testIndex` as `testIndex = (low + high) >> 1`.

- In strictly increasing (or strictly decreasing) subarray, we are doing Binary Search. Turns out that we can also do a Ternary Search, by reducing search space to one-third at each iteration. Will it reduce the number of calls to `mountainArr.get(k)`? Let's see.

    The number of iterations in ternary search will be $O(\log_3 N)$. The reason is that at each iteration, the search space is reduced to one-third. Now at each iteration, we need to examine two indices, `testIndex1` and `testIndex2`. Thus, the number of calls to `mountainArr.get(k)` will be $2 \log_3 N$.

    Using the base change formula,  
    $= 2 \log_3 N$  
    $= 2 \frac{\log_2 {N}}{\log_2 3}$  
    $= 2 \frac{\log_2 {N}}{1.585}$
    $= 1.26 \log_2 {N}$

    The number of calls to `mountainArr.get(k)` in Binary Search is $\log_2 {N}$. 

    Thus, ternary search provides less number of iterations, but more number of calls to `mountainArr.get(k)`. Hence, we will stick to Binary Search.

The above ideas sound good. Let's see one more idea.

In [complexity analysis](#complexity-analysis) of [Approach 1](#approach-1-binary-search), we assumed that each call to `mountainArr.get(k)` takes $O(1)$ time. However, we don't know the time complexity of `mountainArr.get(k)`. What if calls to the `get()` API are very expensive? We certainly need to minimize function calls as much as we can.

> Assume `get()` was retrieving data from a huge database that is on the other side of the world. One would appreciate our algorithm finishing faster, even if that difference is constant.

Assume an element at index `i` in the strictly increasing part of the array, and we called `get(i)` while computing the `peakIndex`. Now, we are searching for `target` in the strictly increasing part of the array. We might again need to call `get(i)` while searching for `target`. Is it truly a better idea to call `get(i)` twice?

We perhaps can cache the values of `mountainArr.get(k)` in an array, or perhaps in a Hash Map. This will increase the space complexity. However, we won't be calling `mountainArr.get(k)` twice. Before calling `mountainArr.get(k)`, we will check if the value is already cached. If it is, then we will use the cached value. Otherwise, we will call `mountainArr.get(k)` and cache the value. 

This parallels the way web browsers store data. Often, the expense associated with reacquiring a page is considered to be greater than that of storing it in a cache.


> Briefly, the following major modifications will be done in three parts.  
>     
> 1. **FINDING `peakIndex`**
>
>    - If `mountainArr.get(testIndex)` is in the cache, then use the cached value. Otherwise, call `mountainArr.get(testIndex)` and cache the value. Call this as `curr`. If `curr == target`, check if it is in the strictly increasing part of the array. If it is, then return `testIndex` as `targetIndex`. Otherwise, continue the search for `peakIndex`.
>
>    - If `mountainArr.get(testIndex + 1)` is in the cache, then use the cached value. Otherwise, call `mountainArr.get(testIndex + 1)` and cache the value. Call this `next`. If `next == target`, check if it is in the strictly increasing part of the array. If it is, then return `testIndex + 1` as `targetIndex`. Otherwise, continue the search for `peakIndex`.
>
> 2. **SEARCH IN STRICTLY INCREASING PART OF THE ARRAY**
>
>    If `mountainArr.get(testIndex)` is in the cache, then use the cached value. 
>    
>    Otherwise, call `mountainArr.get(testIndex)`. Note that we don't need to cache the value of `mountainArr.get(testIndex)` as this is the last time we need to access this value. Call this as `curr`. If `curr == target`, then return `testIndex` as `targetIndex`. 
>
> 3. **SEARCH IN STRICTLY DECREASING PART OF THE ARRAY**
>
>    If `mountainArr.get(testIndex)` is in the cache, then use the cached value. Call it `curr`. If `curr == target`, then return `testIndex` as `targetIndex`. We perhaps didn't return in the first while loop because it was in the strictly decreasing part of the array.
>    
>    Otherwise, call `mountainArr.get(testIndex)`. Note that we don't need to cache the value of `mountainArr.get(testIndex)` as this is the last time we need to access this value. Call this as `curr`. If `curr == target`, then return `testIndex` as `targetIndex`. 


A quick note on **how to cache the values** of `mountainArr.get(k)`.

- We can use an array of size `mountainArr.length()` to cache the values of `mountainArr.get(k)`. The index of the array will be the index of the `mountainArr`. The value at the index will be the value of `mountainArr.get(k)`. This will increase the space complexity by $O(N)$. However, is it a truly good idea? There will be many indices in the array that will not be used because we will call `mountainArr.get(k)` only for $4 \log N$ indices. Hence, we will be wasting space.

- Therefore, use a Hash Map which gives constant time lookups. The key of the Hash Map will be the index of the `mountainArr`. The value at the key will be the value of `mountainArr.get(k)`. This will increase the space complexity by $O(\log N)$ reducing it from previously proposed $O(N)$. The reduction of this space complexity is significant.


With these thoughts in mind, we can implement the algorithm.


#### Algorithm

1. Save the length of the `mountainArr` by calling the function `mountainArr.length()` in the variable `length`.

2. Initialize a Hash Map `cache` to cache the values of `mountainArr.get(k)`.

3. Find the index of the `peak` element in the `mountainArr`. 
    - Set `low = 1` and `high = length - 2`.
    - While `low != high`, do the following:
        - Find the middle index of the search space `[low, high]`. Let's call the index `testIndex`.
        - If `testIndex` is in the `cache`, then set `curr = cache.get(testIndex)`. Otherwise, call `mountainArr.get(testIndex)` and set `curr = mountainArr.get(testIndex)`. Cache the value of `curr` in the `cache`.
        - If `testIndex + 1` is in the `cache`, then set `next = cache.get(testIndex + 1)`. Otherwise, call `mountainArr.get(testIndex + 1)` and set `next = mountainArr.get(testIndex + 1)`. Cache the value of `next` in the `cache`.
        - If `curr < next`, check if `curr == target` or `next == target`. If yes, then return the index of the `target` element. Otherwise, set `low = testIndex + 1`.
        - Otherwise, set `high = testIndex`.
    - After the loop, `low` (which is equal to `high`) will be the `peakIndex`.

4. Search for the `target` element in the strictly increasing part of the array.
    - Set `low = 0` and `high = peakIndex`.
    - While `low <= high`, do the following:
        - Find the middle index of the search space `[low, high]`. Let's call the index `testIndex`.
        - If `testIndex` is in the `cache`, then set `curr = cache.get(testIndex)`. Otherwise, call `mountainArr.get(testIndex)` and set `curr = mountainArr.get(testIndex)`.
        - If `curr == target`, then return `testIndex`.
        - If `curr < target`, then set `low = testIndex + 1`.
        - Otherwise, set `high = testIndex - 1`.

5. Search for the `target` element in the strictly decreasing part of the array.
    - Set `low = peakIndex + 1` and `high = length - 1`.
    - While `low <= high`, do the following:
        - Find the middle index of the search space `[low, high]`. Let's call the index `testIndex`.
        - If `testIndex` is in the `cache`, then set `curr = cache.get(testIndex)`. Otherwise, call `mountainArr.get(testIndex)` and set `curr = mountainArr.get(testIndex)`.
        - If `curr == target`, then return `testIndex`.
        - If `curr > target`, then set `low = testIndex + 1`.
        - Otherwise, set `high = testIndex - 1`.

6. `target` not found in the `mountainArr`. Return `-1`.

#### Implementation

<iframe src="https://leetcode.com/playground/kW5svw5e/shared" frameBorder="0" width="100%" height="500" name="kW5svw5e"></iframe>

Readers might be prompted to think that `cache` is redundant. It might be because in this problem `get(k)` looks like $O(1)$ operation. However, when the time complexity of any function is not specified explicitly, it is better to call that function the minimum possible number of times.

Here is the implementation without caching.

<iframe src="https://leetcode.com/playground/nPj8cjko/shared" frameBorder="0" width="100%" height="500" name="nPj8cjko"></iframe>


#### Complexity Analysis

Let $N$ be the length of the `mountainArr`. Moreover, let's assume that each call to `mountainArr.get(k)` takes $O(1)$ time.

* Time complexity: $O(\log N)$

    - **Finding the `peakIndex`** 
        There will be $O(\log_2 {N})$ iterations in the `while` loop. The reason is that at each iteration, the search space is reduced to half. At each iteration, we are 
        - computing `testIndex` using addition and bit shift. This takes $O(1)$ time.
        
        - Getting the value of `mountainArr.get(testIndex)` from the `cache` or from the `mountainArr`. Caching if not present in the `cache`. This takes $O(1)$ time.
        - Getting the value of `mountainArr.get(testIndex + 1)` from the `cache` or from the `mountainArr`. Caching if not present in the `cache`. This takes $O(1)$ time.
        - Returning or resetting `low` or `high`. This takes $O(1)$ time.

        Thus, the time complexity of finding the `peakIndex` is $O(\log_2 {N})$.
    
    - **Searching in the strictly increasing part of the array**
        There will be $O(\log_2 {N})$ iterations in the `while` loop. The reason is that at each iteration, the search space is reduced to half. At each iteration, we are 
        - computing `testIndex` using addition and bit shift. This takes $O(1)$ time.
         
        - Getting the value of `mountainArr.get(testIndex)` from the `cache` or from the `mountainArr`. This takes $O(1)$ time.
        - Returning or resetting `low` or `high`. This takes $O(1)$ time.

        Thus, the time complexity of searching in the strictly increasing part of the array is $O(\log_2 {N})$.
    
    - **Searching in the strictly decreasing part of the array**
        There will be $O(\log_2 {N})$ iterations in the `while` loop. The reason is that at each iteration, the search space is reduced to half. At each iteration, we are 
        - computing `testIndex` using addition and bit shift. This takes $O(1)$ time.
         
        - Getting the value of `mountainArr.get(testIndex)` from the `cache` or from the `mountainArr`. This takes $O(1)$ time.
        - Returning or resetting `low` or `high`. This takes $O(1)$ time.

        Thus, the time complexity of searching in the strictly decreasing part of the array is $O(\log_2 {N})$.
    
    Hence, the overall time complexity is $O(\log_2 {N})$.

* Space complexity: $O(\log N)$
    
    The `cache` will contain $O(\log N)$ elements because we are caching only the elements for which we are calling `mountainArr.get(k)`.

    Hence, the space complexity is $O(\log N)$.
     
---