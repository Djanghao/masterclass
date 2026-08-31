# Official Solution

**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solution/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solution/)

---

[TOC]

## Solution

---

### Approach 1: Brute Force

#### Intuition   

Let's start with brute force, the most intuitive method. We find each of the subarrays one by one, and get the sum of the current subarray if it has an odd length. 

<br>

#### Algorithm

1) Initialize `answer = 0`.
2) Iterate over the left index `left` of subarrays.
3) For every subarray start at index `left`, iterate over every index `right` to fix the end of subarray.
4) For each subarray `(left, right)`, if its length is odd:
    - Iterate over this subarray and get its sum `current_sum`.
    - Increment `answer` by `current_sum`.

#### Implementation

<iframe src="https://leetcode.com/playground/fuCh4k27/shared" frameBorder="0" width="100%" height="378" name="fuCh4k27"></iframe>


#### Complexity Analysis

Let $$n$$ be the size of the input array `arr`.

* Time complexity: $$O(n^3)$$

    - We have three nested loops, the first loop for the left index `left`, the second loop for the right index `right`, and the third loop for the index `currentIndex` between `left` and `right`. 
    - For each odd-length subarray, we need to get its sum and update `answer` after the third iteration.
    - Therefore, the overall time complexity is $$O(n^3)$$.
    

* Space complexity: $$O(1)$$

    - We only need to update two variables: 
        - `current_sum` the sum of the current subarray.
        - `answer`, the sum of all odd-length subarrays.
    
    which only takes constant space.

<br/>



---

### Approach 2: Two Loops

#### Intuition   

Let's try a better method to reduce the workload!

For a starting index `left`, the difference between each of the two adjacent right indices is 1. In other words, if the current subarray is `[left, right]`, the next subarray (if it exists) is `[left, right + 1]`. Therefore, we can get the sum of the next subarray by adding `arr[right + 1]` to the sum of the previous subarray. If the current subarray has an odd length, we can increment `answer` by its sum, as shown in the picture below.

![img](../Figures/1588/1588-1.png)

<br>

#### Algorithm

1) Initialize `answer` as 0.
2) Iterate over `left`, the left index of the subarray.
3) For every subarray start at index `left`, we initialize `current_sum = 0`. We iterate over index `right` to fix the end of each subarray, and calculate the sum of this subarray (`current_sum`) by adding `arr[right]` to the previous `current_sum`. If the current subarray has an odd length, we increment `answer` by `current_sum`.
    

#### Implementation

<iframe src="https://leetcode.com/playground/MAS6MJz2/shared" frameBorder="0" width="100%" height="327" name="MAS6MJz2"></iframe>


#### Complexity Analysis

Let $$n$$ be the size of the input array `arr`.

* Time complexity: $$O(n^2)$$

    - We have two nested loops, the first loop for the left index `left`, the second loop for the right index `right`. 
    - For each odd-length subarray, we need to increment `answer` by its sum which takes constant time.
    - Therefore, the overall time complexity is $$O(n^2)$$.
    

* Space complexity: $$O(1)$$

    - We only need to update two variables: 
        - `current_sum` the sum of the current subarray.
        - `answer`, the sum of all odd-length subarrays.
    
    which only takes constant space. 

<br/>



---

### Approach 3: Check the occurrence of each index

#### Intuition   

Instead of finding all odd-length subarrays, we can count the number of occurrences of each integer in all odd-length subarrays. For example, if `arr[i]` has appeared `k` times, it contributes to the total sum by `arr[i] * k`.


![img](../Figures/1588/1588-2.png)

> How to calculate the occurrence of each index?

Let's find the pattern behind this: since the current subarray containing `arr[i]` has an odd-length, the number of elements without `arr[i]` must be even, indicating the number of elements to the left and right side of `arr[i]` must be **both even** or **both odd**, as shown in the picture below.

![img](../Figures/1588/1588-3.png)

Therefore, we are looking for:

- `odd_left`, the number of odd-length subarrays starting from `i` on `i`'s left.
- `odd_right`, the number of odd-length subarrays starting from `i` on `i`'s right.
- `even_left`, the number of even-length subarrays starting from `i` on `i`'s left.
- `even_right`, the number of even-length subarrays starting from `i` on `i`'s right.

Notice that:

- There are `i + 1` such subarrays to its left where `(i + 1) / 2` of them have odd-length and the rest have even-length.s
- There are `n - 1 - i` such subarrays to its right where `(n - i) / 2` of them have odd-length and the rest have even-length.

![img](../Figures/1588/1588-4.png)

Once we find all the four numbers above, we can calculate the occurrence of `arr[i]` in odd-length arrays as `odd_left * odd_right + even_left * even_right`.


<br>

#### Algorithm

1) Initialize `answer` as 0.
2) Iterate over `arr`, calculate the occurrence of each index `i`:
   
    - `odd_left = left / 2 + 1` 
    - `odd_right = (n - i - 1) / 2 + 1`
    - `even_left = (i + 1) / 2`
    - `even_right = (n - i) / 2`

    Add the current element `arr[i]` `(odd_left * odd_right + even_left * even_right)` times in `answer`.


#### Implementation

<iframe src="https://leetcode.com/playground/Ejv4pvhc/shared" frameBorder="0" width="100%" height="293" name="Ejv4pvhc"></iframe>


#### Complexity Analysis

Let $$n$$ be the size of the input array `arr`.

* Time complexity: $$O(n)$$

    - We only need one iteration over `arr`.
    - At each step `i`, we need to calculate the occurrence of `arr[i]` in all the odd-length subarrays, it takes constant time.
    - Therefore, the overall time complexity is $$O(n)$$.
    

* Space complexity: $$O(1)$$

    - We only need to update one variable `answer`.


<br/>