# Official Solution

**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solution/](https://leetcode.com/problems/number-of-valid-subarrays/solution/)

---

[TOC]

## Solution

---

### Approach: Monotonic Stack

**Intuition**

We are given an array `nums` of $N$ non-negative integers; we need to return the number of valid subarrays where a valid subarray is an array whose leftmost element is smaller than or equal to any other element in the subarray.

We can find the answer to this problem if we consider each element separately. For each element, we will try to find the number of valid subarrays that begin at the current index. This is explained in the figure below.

![fig](../Figures/1063/1063A.png)


Thus this problem is similar to [496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/), and similarly, we will use a monotonic stack to solve it. We iterate over the elements from left to right, and then for each element; we will check if this element can be the next smaller integer to the element(s) in the stack. If the current element is smaller than the top element in the stack, then it's the next smaller element for the top element, and hence we will pop from the stack and add the difference of the indices between the stack top and the current index to the answer. Keep popping the elements until the current element becomes greater than the stack top element, and then push it into the stack.

For the elements that are still in the stack, the next smaller element will be the index next to the last element in the array `nums`, and hence we will pop all the elements from the stack and, for each one, add the subarray count as the difference of the current index and the size of `nums`.

**Algorithm**

1. Initialize the variable `ans` to `0`.
2. Initialize an empty stack `st`. This will store the indices of elements currently in the stack.
3. Iterate over the elements in the array `nums` and for each index `i`:

    1. Keep popping elements from the stack `st` until the stack becomes empty or the element `nums[i]` becomes greater than the element at the index at the top of the stack.
    2. For each popped element, add the subarray count as `i - st.top()`.
4. Push the current index `i` into the stack.
5. Pop all the remaining elements from the stack, and for each, consider the size of `nums` as the next smaller element index. Accordingly, add `nums.size() - st.top()` to the variable `ans`.
6. Return `ans`.


**Implementation**

<iframe src="https://leetcode.com/playground/cPZ4EHGa/shared" frameBorder="0" width="100%" height="500" name="cPZ4EHGa"></iframe>

**Complexity Analysis**

Here, $N$ is the size of the array `nums`.

* Time complexity: $O(N)$

  We iterate over the elements in the array `nums`, and each element will be added to the stack only once and then popped from it. Hence the total time complexity would be $O(N)$.


* Space complexity: $O(N)$

  The only space required is the stack which can have $N$ elements in the worst-case scenario when the input is increasing, and hence the total space complexity will be equal to $O(N)$.
  <br/>

---