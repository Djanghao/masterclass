# Official Solution

**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solution/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, we are given an integer array `nums` and an integer array `queries`. 

Our task is to find for each `query` in `queries`, the maximum size of a subsequence we can pick so that the sum of its elements does not exceed `query`.


---

### Approach 1: Sort and Count.

#### Intuition   

For each query `query`, we want the maximize the size of the subsequence, which means we want to collect as many numbers as possible before their sum exceeds the limit `query`. Another key observation is that the target we look for does not depend on the order of the "subsequence", and it becomes a "set" of element necessarily. In this case, we are allowed to sort since it is order-independent.

Therefore we should collect numbers from lowest to highest. Sorting `nums` is therefore necessary for it allows us to traverse over `nums` and collect numbers from lowest to highest as needed.

![img](../Figures/2389/2389-ex1.png)

Take the following slides as an example.

!?!../Documents/2389/s1.json:601,301!?!

<br>

#### Algorithm

1) Sort `nums`, and initialize an empty array `answer`.
2) For each query `query`, we traverse the sorted `num` and collect numbers from lowest to highest, and record the maximum number of elements we can collect `count` before their sum exceeds `query`. Add `count` to `answer`.
3) Return `answer` when the iteration stops.

#### Implementation

<iframe src="https://leetcode.com/playground/3iKymfbN/shared" frameBorder="0" width="100%" height="497" name="3iKymfbN"></iframe>


#### Complexity Analysis

Let $$n$$ be the size of `nums` and $$m$$ be the size of `queries`.

* Time complexity: $$O(m \cdot n + n\cdot \log n)$$

    - We sort `nums` first, which takes $$O(n \cdot \log n)$$.
    - For each query, we need to iterate over the sorted `nums` to find the longest subsequence, which takes $$O(n)$$ in the worst-case scenario, so $$m$$ queries take $$O(m \cdot n)$$ time.
    - Therefore, the overall time complexity is $$O(m\cdot n + n\cdot \log n)$$.
    

* Space complexity: $$O(n)$$

    - Some extra space is used when we sort `nums` in place. The space complexity of the sorting algorithm depends on the programming language. 
        - In python, the `sort` method sorts a list using Timsort algorithm which has $$O(n)$$ additional space where $$n$$ is the number of the elements. 
        - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort and Insertion Sort, with a worst case space complexity of $$O(\log n)$$.
        - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $$O(\log n)$$.
    - To sum up, the overall space complexity is $$O(\log n)$$ or $$O(n)$$, depending on the programming language and implementation.

<br/>

---


### Approach 2: Prefix Sum + Binary Search

#### Intuition   

Can we find the maximum size of a subsequence in a faster way than by adding up the numbers one by one?

We can take advantage of the prefix sum array `presum` of the sorted `nums`, each value `presum[i]` represents the sum of all numbers from `nums[0]` to `nums[i]`. Therefore, we can get the sum of the range from `presum` in constant time, rather than iterating over `nums` which requires $$O(n)$$ time in the worst-case scenario. 

![img](../Figures/2389/2389-ex2.png)

To build the prefix sum array for an array `nums`, we start from an empty array `presum`:
- `presum[0] = nums[0]`.
- `presum[1] = nums[0] + nums[1]`, which equals `presum[0] + nums[1]`.
- `presum[2] = nums[0] + nums[1] + nums[2]`, which equals `presum[1] + nums[2]`.
- ...

We can tell that all the terms `presum[i]` follow `presum[i] = presum[i - 1] + nums[i]` apart from the first term `presum[0] = nums[0]`. Therefore, we only need to iterate over `nums` once to build its prefix sum array `presum`. Moreover, since we don't need the original array `nums` once we have `presum`, thus we can build `presum` by modifying `nums` in-place to save some space:

- `nums[0] = nums[0]`.
- `nums[1] = nums[1] + nums[0]`.
- `nums[2] = nums[2] + nums[1]`.
- `nums[3] = nums[3] + nums[2]`.
- ...


The next subproblem is to find the maximum size of the subsequence of each `query`. Since the values in the prefix sum array `presum` are strictly increasing, thus we can use a binary search to find the insertion index of `query` to `presum`. Assume that the insertion index is `index`, it means the sum of the first `index` smallest numbers does not exceed `query`, thus `index` is the longest subsequence consists of the first `index` smallest numbers.


Please refer to the following slides as an example.

!?!../Documents/2389/s2.json:601,301!?!



<br>

#### Algorithm

1) Sort `nums` and convert it into `presum`. We can re-use the `nums` array for this. Initialize an empty array `answer`.
2) Iterate over `queries`, for each query `query`, we use binary search to find its insertion index `index` and add `index` to `answer`.
3) Return `answer` when the iteration stops. 

#### Implementation

<iframe src="https://leetcode.com/playground/CPq6jG2L/shared" frameBorder="0" width="100%" height="500" name="CPq6jG2L"></iframe>


#### Complexity Analysis

Let $$n$$ be the size of `nums` and $$m$$ be the size of `queries`.

* Time complexity: $$O((m + n) \cdot \log n)$$

    - We sort `nums` first, which takes $$O(n \cdot \log n)$$.
    - Building `presum` using one iteration takes $$O(n)$$ time.
    - For each query, binary search over the prefix sum array to find its insertion index, it takes $$O(\log n)$$. There are $$m$$ queries so the time required is $$O(m \cdot \log n)$$.
    - Therefore, the overall time complexity is $$O(n\cdot \log n + m\cdot \log n)$$ = $$O((m + n)\cdot \log n)$$.
    

* Space complexity: $$O(n)$$

    - Similarly, some extra space is used when we sort `nums` in place. The space complexity of the sorting algorithm depends on the programming language. 
        - In python, the `sort` method sorts a list using Timsort algorithm which has $$O(n)$$ additional space where $$n$$ is the number of the elements. 
        - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort and Insertion Sort, with a worst case space complexity of $$O(\log n)$$.
        - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $$O(\log n)$$.
    - To sum up, the overall space complexity is $$O(\log n)$$ or $$O(n)$$, depending on the programming language and implementation. 

<br/>