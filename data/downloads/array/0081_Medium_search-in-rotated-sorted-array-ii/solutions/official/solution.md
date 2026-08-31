# Official Solution

**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solution/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solution/)

---

[TOC]

## Solution

---

### Approach 1: Binary Search

This problem is an extension to [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/). The only difference is that this problem allows duplicate elements.

**Intuition**

Recall that after rotating a sorted array, what we get is two sorted arrays appended to each other.

![rotating a sorted array](../Figures/81/1.png)

Let's refer to the first sorted array as `F` and second as `S`.

![rotating a sorted array](../Figures/81/2.png)

Also, we can observe that all the elements of the second array `S` will be smaller or equal to the first element `start` of `F`.

![rotating a sorted array](../Figures/81/3.png)

With this observation in mind, we can easily tell which of the 2 arrays (`F` or `S`) does a `target` element lie in by just comparing it with the first element of the array.

Let's say we are looking for element `target` in array `arr`:

- Case 1: If `target > arr[start]`: `target` exists in the first array `F`.

![rotating a sorted array](../Figures/81/4.png)

- Case 2: If `target < arr[start]`: `target` exists in the second array `S`.

![rotating a sorted array](../Figures/81/5.png)

- Case 3: If `target == arr[start]`: `target` obviously exists in the first array `F`, but it might also be present in the second array `S`.

![rotating a sorted array](../Figures/81/6.png)

Let's define a helper function that tells us which array a target element might be present in:

<iframe src="https://leetcode.com/playground/ZEeCmmBf/shared" frameBorder="0" width="100%" height="123" name="ZEeCmmBf"></iframe>

**Algorithm**

Recall that in standard binary search, we keep two pointers (i.e. `start` and `end`) to track the search scope in an `arr` array. We then divide the search space in three parts `[start, mid)`, `[mid, mid]`, `(mid, end]`. Now, we continue to look for our `target` element in one of these search spaces.

By identifying the positions of both `arr[mid]` and `target` in `F` and `S`, we can reduce search space in the very same way as in standard binary search:

- Case 1: `arr[mid]` lies in `F`, `target` lies in `S`: Since `S` starts after `F` ends, we know that element lies here:`(mid, end]`.

![rotating a sorted array](../Figures/81/7.png)

- Case 2: `arr[mid]` lies in the `S`, `target` lies in `F`: Similarly, we know that element lies here: `[start, mid)`.

![rotating a sorted array](../Figures/81/8.png)

- Case 3: Both `arr[mid]` and `target` lie in `F`: since both of them are in same sorted array, we can compare `arr[mid]` and `target` in order to decide how to reduce search space.

![rotating a sorted array](../Figures/81/9.png)

- Case 4: Both `arr[mid]` and `target` lie in `S`: Again, since both of them are in same sorted array, we can compare `arr[mid]` and `target` in order to decide how to reduce search space.

![rotating a sorted array](../Figures/81/10.png)

But there is a catch, if `arr[mid]` equals `arr[start]`, then we know that `arr[mid]` might belong to both `F` and `S` and hence we cannot find the relative position of `target` from it.

![rotating a sorted array](../Figures/81/11.png)

<iframe src="https://leetcode.com/playground/Y6ZeLew5/shared" frameBorder="0" width="100%" height="123" name="Y6ZeLew5"></iframe>

In this case, we have no option but to move to next search space iteratively. Hence, there are certain search spaces that allow a binary search, and some search spaces that don't.

<iframe src="https://leetcode.com/playground/TNSFYJaP/shared" frameBorder="0" width="100%" height="500" name="TNSFYJaP"></iframe>

**Complexity Analysis**

* Time complexity : $$O(N)$$ worst case, $$O(\log N)$$ best case, where $$N$$ is the length of the input array.

    Worst case: This happens when all the elements are the same and we search for some different element. At each step, we will only be able to reduce the search space by 1 since `arr[mid]` equals `arr[start]` and it's not possible to decide the relative position of `target` from `arr[mid]`.
    Example: [1, 1, 1, 1, 1, 1, 1], target = 2.

    Best case: This happens when all the elements are distinct. At each step, we will be able to divide our search space into half just like a normal binary search.

This also answers the following follow-up question:

1) Would this (having duplicate elements) affect the run-time complexity? How and why?

As we can see, by having duplicate elements in the array, we often miss the opportunity to apply binary search in certain search spaces. Hence, we get $$O(N)$$ worst case (with duplicates) vs $$O(\log N)$$ best case complexity (without duplicates).

* Space complexity : $$O(1)$$.