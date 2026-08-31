# Official Solution

**Link:** [https://leetcode.com/problems/next-permutation/solution/](https://leetcode.com/problems/next-permutation/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/788112386" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

### Approach 1: Brute Force

**Algorithm**

In this approach, we find out every possible permutation of list formed by the elements of the given array and find out the permutation which is
just larger than the given one. But this one will be a very naive approach, since it requires us to find out every possible permutation
 which will take really long time and the implementation is complex.
 Thus, this approach is not acceptable at all. Hence, we move on directly to the correct approach.

**Complexity Analysis**

* Time complexity : $$O(n!)$$. Total possible permutations is $$n!$$.
* Space complexity : $$O(n)$$. Since an array will be used to store the permutations.
<br />
<br />

---

### Approach 2: Single Pass Approach

**Algorithm**

First, we observe that for any given sequence that is in descending order, no next larger permutation is possible.
 For example, no next permutation is possible for the following array:
 ```
 [9, 5, 4, 3, 1]
 ```

We need to find the first pair of two successive numbers $$a[i]$$ and $$a[i-1]$$, from the right, which satisfy
 $$a[i] > a[i-1]$$. Now, no rearrangements to the right of $$a[i-1]$$ can create a larger permutation since that subarray consists of numbers in descending order.
 Thus, we need to rearrange the numbers to the right of $$a[i-1]$$ including itself.

Now, what kind of rearrangement will produce the next larger number? We want to create the permutation just larger than the current one. Therefore, we need to replace the number $$a[i-1]$$ with the number which is just larger than itself among the numbers lying to its right section, say $$a[j]$$.

![ Next Permutation ](./images/0.png)

We swap the numbers $$a[i-1]$$ and $$a[j]$$. We now have the correct number at index $$i-1$$. But still the current permutation isn't the permutation
    that we are looking for. We need the smallest permutation that can be formed by using the numbers only to the right of $$a[i-1]$$. Therefore, we need to place those
     numbers in ascending order to get their smallest permutation.

But, recall that while scanning the numbers from the right, we simply kept decrementing the index
      until we found the pair $$a[i]$$ and $$a[i-1]$$ where,  $$a[i] > a[i-1]$$. Thus, all numbers to the right of $$a[i-1]$$ were already sorted in descending order.
      Furthermore, swapping $$a[i-1]$$ and $$a[j]$$ didn't change that order.
      Therefore, we simply need to reverse the numbers following $$a[i-1]$$ to get the next smallest lexicographic permutation.

The following animation will make things clearer:

![Next Permutation](./images/1.gif)

<iframe src="https://leetcode.com/playground/Dm6PeACq/shared" frameBorder="0" width="100%" height="500" name="Dm6PeACq"></iframe>

**Complexity Analysis**

Let $n$ be the size of the `nums` array.

- Time complexity: $O(n)$

   The first `while` loop runs at most $n$ iterations, decrementing the variable `i` as it searches for the first decreasing element from the right. In the worst case, it checks all elements, so it takes $O(n)$ time.
    
   The second `while` loop also runs at most $n$ iterations, decrementing the variable `j` as it searches for the smallest element larger than `nums[i]`. Similarly, it can take $O(n)$ time.
    
   The `reverse` function is called on a portion of the array, from index `i + 1` to the end. In the worst case, this can cover the entire array, leading to a time complexity of $O(n)$.
    
   The `swap` function runs in constant time, $O(1)$, since it only exchanges two elements.
    
    Therefore, the overall time complexity is $O(n)$.

- Space complexity: $O(1)$

   The function operates in-place on the `nums` array, meaning no extra space is used for storing additional data.
    
   Only a few constant space variables (`i`, `j`, and `temp`) are used.
    
   The built-in `swap` and `reverse` functions do not require additional space beyond what is already present in the input array.

    Hence, the space complexity is $O(1)$.