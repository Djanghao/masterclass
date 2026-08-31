# Official Solution

**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solution/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solution/)

---

[TOC]

## Solution

---

### Approach: Frequency Counter

**Intuition**

The first thing to observe here is how many rows we need at least to ensure each row has distinct integers. Each repeated integer in the original array `nums` needs to be placed in a separate row. Therefore, we need at least as many rows as the maximum frequency of integers in the array `nums`.



Now, we know that if an integer has $K$ instances, it would be kept in $K$ different rows. So we can keep placing each instance in the row with an index equal to the current frequency. The $0-\text{th}$ instance of this integer will kept at row index `0`, the $1-\text{st}$ instance at row index `1`, and so on till the $(K - 1)-\text{th}$ instance at the row index `K - 1`. Note that, if there is one integer with $K1$ instances and another integer with $K2$ instances, we need $max(K1, K2)$ rows but not $K1 + K2$ rows. This is because we can have just $max(K1, K2)$ rows and the other integer with fewer instances can be also stored in these rows.

We generally use a HashMap to store the frequencies. However, as mentioned in the problem, the values in the array would be up to the length of the array (which can be up to `200`). Since we know the range of the values, it's efficient to use an array with a size of `N + 1`, where $N$ is the length of `nums`. We will be using the array `freq` for this purpose. Now, we will iterate over the integers in the array `nums` and retrieve the current frequency of the integer from `freq`. 

If the frequency of the current integer is greater than the current size of the two-dimensional array `ans`, indicating that we need to start a new row to store this element, so we add a row and insert the element into the new row.

Then we increment the frequency of this integer.

!?!../Documents/2610-re/2610_Convert_an_Array_Into_a_2D_Array_With_Conditions.json:960,720!?!

**Algorithm**

1. Create an array `freq` of size `nums.size() + 1` to store the frequency of integers in the array `nums`.
2. Create an empty 2D array `ans` to store the answer array.
3. Iterate over the array `nums` and for each integer `c`:

   a. If the frequency of the integer is greater than or equal to the current rows count in `ans`, then add a row to `ans`.

   b. Insert the integer `c` at the row `freq[c]`.

   c. Increment the frequency of `c` in `freq`.
4. Return `ans`.

**Implementation**

<iframe src="https://leetcode.com/playground/GkG8KyrF/shared" frameBorder="0" width="100%" height="395" name="GkG8KyrF"></iframe>

**Complexity Analysis**

Here, $N$ is the size of array `nums`.

* Time complexity: $O(N)$

  We iterate over the array `nums` once to insert them into the 2D array `ans`. Accessing `freq` and incrementing it takes $O(1)$. Hence, the total time complexity is equal to $O(N)$.

* Space complexity: $O(N)$

  The size of the frequency array `freq` is equal to `nums.size() + 1` as the value of integers in the array `nums` can be up to `nums.size()`. Hence, the total space complexity is equal to $O(N)$.
  <br/>

---