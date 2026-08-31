# Official Solution

**Link:** [https://leetcode.com/problems/3sum-smaller/solution/](https://leetcode.com/problems/3sum-smaller/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

**Intuition**

Find every possible set of triplets $$(i, j, k)$$ such that $$i < j < k$$ and test for the condition.

**Complexity analysis**

- Time complexity: $$O(n^3)$$.
  The total number of such triplets is $$\binom{n}{3}$$, which is $$\frac{n!}{(n - 3)! \times 3!} = \frac{n \times (n - 1) \times (n - 2)}{6}$$. Therefore, the time complexity of the brute force approach is $$O(n^3)$$.

- Space complexity: $$O(1)$$.

---

### Approach 2: Binary Search

**Intuition**

Before we solve the _threeSum_ problem, solve this simpler _twoSum_ version:

> Given a $$nums$$ array, find the number of index pairs $$i$$, $$j$$ with $$0 \leq i < j < n$$ that satisfy the condition $$nums[i] + nums[j] < target$$

If we sort the array first, then we can apply binary search to find the largest index $$j$$ such that $$nums[i] + nums[j] < target$$ for each $$i$$. Once we have found that largest index $$j$$, we know there must be $$j-i$$ pairs that satisfy the above condition with $$i$$'s value fixed.

Finally, we can now apply the _twoSum_ solution to _threeSum_ directly by wrapping an outer for-loop around it.

**Implementation**

<iframe src="https://leetcode.com/playground/ZWCZCcmu/shared" frameBorder="0" width="100%" height="500" name="ZWCZCcmu"></iframe>

Note that in the above binary search we choose the upper middle element $$(\frac{left+right+1}{2})$$ instead of the lower middle element $$(\frac{left+right}{2})$$. The reason is due to the terminating condition when there are two elements left. If we chose the lower middle element and the condition $$nums[mid] < target$$ evaluates to true, then the loop would never terminate. Choosing the upper middle element will guarantee termination.

**Complexity analysis**

- Time complexity: $$O(n^2 \log n)$$.
  The _binarySearch_ function takes $$O(\log n)$$ time, therefore the _twoSumSmaller_ takes $$O(n \log n)$$ time. The _threeSumSmaller_ wraps with another for-loop, and therefore is $$O(n^2 \log n)$$ time.

- Space complexity: $$O(1)$$ because no additional data structures are used.

---

### Approach 3: Two Pointers

**Intuition**

Let us try sorting the array first. For example, $$nums = [3,5,2,8,1]$$ becomes $$[1,2,3,5,8]$$.

Let us look at an example $$nums = [1,2,3,5,8]$$, and $$target = 7$$.

    [1, 2, 3, 5, 8]
     ↑           ↑
    left       right

Let us initialize two indices, $$left$$ and $$right$$ pointing to the first and last element respectively.

When we look at the sum of first and last element, it is $$1 + 8 = 9$$, which is $$\geq target$$. That tells us no index pair will ever contain the index $$right$$. So the next logical step is to move the right pointer one step to its left.

    [1, 2, 3, 5, 8]
     ↑        ↑
    left    right

Now the pair sum is $$1 + 5 = 6$$, which is less than $$target$$. How many pairs with one of the $$index = left$$ that satisfy the condition? You can tell by the difference between $$right$$ and $$left$$ which is $$3$$, namely $$(1,2), (1,3),$$ and $$(1,5)$$. Therefore, we move $$left$$ one step to its right.

**Implementation**

<iframe src="https://leetcode.com/playground/N3cJYgyk/shared" frameBorder="0" width="100%" height="480" name="N3cJYgyk"></iframe>

**Complexity analysis**

- Time complexity: $$O(n^2)$$.
  _twoSumSmaller_ takes $$O(n)$$ at most since it touches each element in the array once. It's parent function, _threeSumSmaller_ takes $$O(n\log n)$$ to sort the array, then runs a loop that touches $$(n - 2)$$ elements, invoking _twoSumSmaller_ at each iteration. Therefore, the overall time complexity is $$O(n\log n + n^2)$$, which boils down to $$O(n^2)$$.

- Space complexity: $$O(1)$$ because no additional data structures are used.