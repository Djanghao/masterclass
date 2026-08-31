# 【Video】Simple solution + Coding Exercise

**Author:** niits
**Votes:** 753
**Link:** [https://leetcode.com/problems/merge-sorted-array/solutions/5714203/](https://leetcode.com/problems/merge-sorted-array/solutions/5714203/)

---

# Intuition
Iterate through from the end

# Solution Video

https://youtu.be/TTWKBqG-6IU

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 8,092
Thank you for your support!

---

# Approach
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
```

---
\u25FD\uFE0F Question
How should we iterate through the input arrays?

---

My answer is to iterate through from the end. Why?

That's because we have some numbers at index `0`, `1` and `2` in `nums1`. The smallest number is `1` in `nums1`, the second smallest is `2` in `nums1`.

the next smallest is `2` in `nums2`. In that case,

```
[1,2,2,0,0,0]
temp = 3     
```
We have to keep `3` with variable or something, because we use `3` later. That is tough a bit right?

But if we start from end, we have kind of available positions which are index `3`, `4` and `5` in `nums1`. We can simply put the numbers without keeping numbers.

We know that `nums1` and `nums2` are sorted in non-decreasing order. All we have to do is to compare the last numbers in both arrays.

Let's see one by one!
```
             \u2193     r
nums1 = [1,2,3,0,0,0], m = 3,
nums2 = [2,5,6], n = 3\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000
             \u2191

r is right position where we should put the next biggest number.
```
First of all, compare `3` with `6`. `6` is bigger than `3`. Put `6` at right position and mvoe `r` and the pointer in `nums2` to the next.

```
     \u2193   r
[1,2,3,0,0,6]
[2,5,6]
   \u2191
```
We will speed up.
```
Compare 3 with 5.

     \u2193 r
[1,2,3,0,5,6]
[2,5,6]
   \u2191
```
```
Compare 3 with 2.

   \u2193 r
[1,2,3,3,5,6]
[2,5,6]
 \u2191
```
```
Compare 2 with 2. Let me put 2 from nums2.

   \u2193 r
[1,2,2,3,5,6]
[2,5,6]
\u2191
```
Now the pointer for `nums2` reached `-1` index, so stop iteration. We successfully created `[1,2,2,3,5,6]`.

---

\u25FD\uFE0F Question

One more important question is that how many times do we have to iterate though `nums1` and `nums2`.

...\uD83D\uDE29

...\uD83D\uDE05

...\uD83D\uDE04

My answer is **"until the pointer in `nums2` reached `-1`."**

---


Let's see this example.
```
     \u2193     r
[7,8,9,0,0,0]
[2,5,6]
     \u2191
```
All numbers in `nums1` are greather than all numbers in `nums2`. In that case, 3 numbers in `nums1` go to the last 3 positions.

```
\u2193     r
 [7,8,9,7,8,9]
 [2,5,6]
      \u2191
```
Now the pointer for `nums1` reached `-1`, but we have to put all numbers in `nums1`. That's why we continue iteration until the pointer in `nums2` reached `-1`.

```
\u2193   r
 [7,8,6,7,8,9]
 [2,5,6]
    \u2191
-------------------
\u2193 r
 [7,5,6,7,8,9]
 [2,5,6]
  \u2191
-------------------
r
\u2193 
 [2,5,6,7,8,9]
 [2,5,6]
\u2191
```
Let's see one more example. All numbers in `nums2` are greater than all numbers in `nums1`.
```
     \u2193     r
[1,2,3,0,0,0]
[5,6,8]
     \u2191
```
In that case,

```
     \u2193     r
[1,2,3,0,0,8]
[5,6,8]
   \u2191
--------------
     \u2193 r
[1,2,3,0,6,8]
[5,6,8]
 \u2191
--------------
      r
      \u2193 
 [1,2,3,5,6,8]
 [5,6,8]
\u2191
```
Now, we the pointer for `nums2` reached `-1`. Actually finish iteration, **because we know that numbers in `nums1` are sorted in non-decreasing order, so we don't have to care about the rest of numbers in `nums1`.**

Easy!\uD83D\uDE04
Let's see solution codes! 

---

https://youtu.be/pCc4kR-TdYs

# Complexity
- Time complexity: $$O(m + n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        midx = m - 1
        nidx = n - 1 
        right = m + n - 1

        while nidx >= 0:
            if midx >= 0 and nums1[midx] > nums2[nidx]:
                nums1[right] = nums1[midx]
                midx -= 1
            else:
                nums1[right] = nums2[nidx]
                nidx -= 1

            right -= 1
```
```javascript []
var merge = function(nums1, m, nums2, n) {
    let midx = m - 1;
    let nidx = n - 1;
    let right = m + n - 1;

    while (nidx >= 0) {
        if (midx >= 0 && nums1[midx] > nums2[nidx]) {
            nums1[right] = nums1[midx];
            midx--;
        } else {
            nums1[right] = nums2[nidx];
            nidx--;
        }
        right--;
    }    
};
```
```java []
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int midx = m - 1;
        int nidx = n - 1;
        int right = m + n - 1;

        while (nidx >= 0) {
            if (midx >= 0 && nums1[midx] > nums2[nidx]) {
                nums1[right] = nums1[midx];
                midx--;
            } else {
                nums1[right] = nums2[nidx];
                nidx--;
            }
            right--;
        }        
    }
}
```
```C++ []
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int midx = m - 1;
        int nidx = n - 1;
        int right = m + n - 1;

        while (nidx >= 0) {
            if (midx >= 0 && nums1[midx] > nums2[nidx]) {
                nums1[right] = nums1[midx];
                midx--;
            } else {
                nums1[right] = nums2[nidx];
                nidx--;
            }
            right--;
        }        
    }
};
```

# Step by Step Algorithm

### 1. Initialize Pointers
- **midx**: Points to the last element in the meaningful part of `nums1` (i.e., `m - 1`).
- **nidx**: Points to the last element in `nums2` (i.e., `n - 1`).
- **right**: Points to the last index in `nums1` (i.e., `m + n - 1`).

```python
midx = m - 1
nidx = n - 1 
right = m + n - 1
```

### 2. Iterate While `nidx` is Non-Negative
- The loop continues until all elements from `nums2` have been merged into `nums1`.

```python
while nidx >= 0:
```

### 3. Compare Elements and Merge
- **If `midx` is non-negative** and the element at `nums1[midx]` is greater than `nums2[nidx]`, place `nums1[midx]` at `nums1[right]`, then decrement `midx`.
  
```python
if midx >= 0 and nums1[midx] > nums2[nidx]:
    nums1[right] = nums1[midx]
    midx -= 1
```

- **Otherwise**, place `nums2[nidx]` at `nums1[right]`, then decrement `nidx`.

```python
else:
    nums1[right] = nums2[nidx]
    nidx -= 1
```

### 4. Move the `right` Pointer Left
- After each placement, decrement the `right` pointer to move to the next position.

```python
right -= 1
```

### 5. End of Loop
- The loop ends when all elements from `nums2` have been placed into `nums1`. If any elements remain in `nums1`, they are already in the correct position, so no further action is needed.


---

# Coding Exercise

Let's implement another solution. It's good idea to have multiple solutions in real interview, even if it's not efficient algorithm.

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
```
We know `nums1` has available positions for `nums2`(= index `3`, `4` and `5`).

That's why we can simply put all numbers in `nums2` into `nums1`.
```
[1,2,3,0,0,0]
       \u2191 \u2191 \u2191
      [2,5,6]

[1,2,3,2,5,6]

```
After that, we just sort `[1,2,3,2,5,6]`, so we can create `[1,2,2,3,5,6]`.

Let's see solution codes!

---

# Complexity
- Time complexity: $$O((m+n)log(m+n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(sort)$$
sort algorithm needs some extra space. It depends on language you use.

```python []
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        nums1[m:] = nums2
        nums1.sort()
```
```javascript []
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};
```
```java []
class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        System.arraycopy(nums2, 0, nums1, m, n);
        Arrays.sort(nums1);
    }
}
```
```C++ []
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        copy(nums2.begin(), nums2.end(), nums1.begin() + m);
        sort(nums1.begin(), nums1.end());
    }
};
```

# Step by Step Algorithm

### Step 1: Replace Elements in `nums1` with Elements from `nums2`
```
nums1[m:] = nums2
```
- **Explanation:**
  - The code replaces the elements in `nums1` starting from index `m` with all the elements of `nums2`.
  - `nums1[m:]` creates a slice of `nums1` from index `m` to the end of the array. 
  - The slice is then replaced by the elements from `nums2`. This effectively merges `nums2` into `nums1` at the correct position.
  - After this operation, `nums1` will have all the elements from both `nums1` and `nums2`, but they may not be in sorted order.

### Step 2: Sort the Combined Array
```
nums1.sort()
```
- **Explanation:**
  - The `sort()` function is called on `nums1` to sort the array in non-decreasing order.
  - This ensures that the merged array is correctly ordered from the smallest to the largest element.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Related Video

#21 Merge Two Sorted Lists

https://youtu.be/eaRfv5VY7sI
