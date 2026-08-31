# 【Video】Binary Search solution

**Author:** niits
**Votes:** 82
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/5878658/](https://leetcode.com/problems/find-peak-element/solutions/5878658/)

---

# Intuition
Using binary search

# Solution Video

https://youtu.be/Xmo54xPn7Ao

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 9,454
Thank you for your support!

---

# Approach
We have to solve this question with $$O(log n)$$ time. Let's solve this question with binary search.

First of all, let's think about a solution with a small example.
```
Input: nums = [1,2,3,1]
```

```
[1,2,3,1]
 L     R
```
Calculate middle index.

```
(L + R) // 2
= (0 + 3) // 2
= 1

[1,2,3,1]
 L M   R
```
In the next step, we have to move a left or a right pointer. The description says "an element is always considered to be strictly greater than a neighbor that is outside the array."

**In other words, if a number at `middle + 1` index is less than a number at `middle index`, we have one of peaks on the left side of middle index, so move the right pointer to middle. Middle pointer itself may be one of peaks.**

**On the other hand, `middle + 1` is greater than middle, we should move left pointer to `middle + 1`.**

##### Why + 1 for only left? 
Because `middle + 1` is greater than `middle`. **That means middle is definitely not one of peaks.** Just in case for right pointer, `middle` is greater than `middle + 1`, **that means there is a possibility that middle is one of peaks.**

That's why we move right to middle and move left to middle + 1.

In this case, move left pointer to `middle + 1`.
```
[1,2,3,1]
   M L R
```
Next, calculate a new middle index.

```
(L + R) // 2
= (2 + 3) // 2
= 2

[1,2,3,1]
     L R
     M
```
In this case, middle is greater than middle + 1, so move the right pointer to middle.

```
[1,2,3,1]
     L
     M
     R
```
Now the left and right pointer are the same index, so we stop.

```
return left(= 2)
```

##### Why we return left pointer instead of middle pointer?

Simply, there are cases where we get wrong answer if we return middle index.

Let's see this case quickly.
```
Input: nums = [1,2,1,3,5,6,4]
```

```
[1,2,1,3,5,6,4]
 L     M     R

middle = (0 + 6) // 2 
= 3

# Move Left to middle + 1
= middle vs middle + 1
= 3 vs 5
--------------------------------
[1,2,1,3,5,6,4]
       M L   R

middle = (4 + 6) // 2 
= 5

[1,2,1,3,5,6,4]
         L M R

# Move Left to middle + 1
= middle vs middle + 1
= 6 vs 4
--------------------------------
[1,2,1,3,5,6,4]
         L M
           R

middle = (4 + 5) // 2 
= 4

[1,2,1,3,5,6,4]
         L R 
         M

# Move Left to middle + 1
= middle vs middle + 1
= 5 vs 6

--------------------------------
[1,2,1,3,5,6,4]
           R 
         M L
```
Now Left is the same as Right. we stop.

```
return middle (= 4)
```
That is wrong.
```
return left (= 5)
```
That's correct.

---

\u2B50\uFE0F Points

To put it simply, mid is just a temporary middle point between left and right\u2014it's not necessarily pointing to the peak. What we\u2019re really doing is using mid to compare mid and mid + 1 to see which direction the peak might be in, so we can narrow down the search range. In the end, when left and right meet, that means the range is down to a single element, which is the peak. So whether you return left or right at that point doesn\u2019t matter \u2014 it\u2019s the same thing!

It might be best for you to try experimenting on your own a bit.

---

You can use these examples for your check if you want.

Don't forget to add `print` for `left` and `right` before return.

```
[5, 10, 20, 15]
[10, 20, 15, 2, 23, 90, 67] \u2192 2 peaks
[1, 3, 2, 5, 4, 7, 6] \u2192 3 peaks
[1, 3, 2, 5, 4, 8, 6, 7, 6, 9, 5, 10, 8] \u2192 4 peaks
[1, 2, 3, 4, 5]
[5, 4, 3, 2, 1]
[1]
```
---

https://youtu.be/bU_dXCOWHls

# Complexity
- Time complexity: $$O(log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1

        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[mid + 1]:
                right = mid
            else:
                left = mid + 1

        return left
```
```javascript []
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;    
};
```
```java []
class Solution {
    public int findPeakElement(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = (left + right) / 2;
            if (nums[mid] > nums[mid + 1]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;        
    }
}
```
```C++ []
class Solution {
public:
    int findPeakElement(vector<int>& nums) {
        int left = 0;
        int right = nums.size() - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] > nums[mid + 1]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;        
    }
};
```

# Step by Step Algorithm

### Step 1: Initialize the Search Range
```python
left = 0
right = len(nums) - 1
```
- **Explanation**: We start by defining two pointers, `left` and `right`, which represent the search boundaries. The `left` pointer is set to the beginning of the array (`0`), and the `right` pointer is set to the last index (`len(nums) - 1`).
- **Purpose**: This initialization sets up the boundaries for our binary search.

### Step 2: Perform Binary Search Until the Search Range Collapses
```python
while left < right:
```
- **Explanation**: This loop will continue as long as `left` is less than `right`. The goal is to keep narrowing down the search range until `left` equals `right`, indicating that we have found a peak element.
- **Purpose**: It ensures that we systematically reduce the search space using binary search.

### Step 3: Calculate the Midpoint
```python
mid = (left + right) // 2
```
- **Explanation**: The midpoint of the current search range is calculated using the formula `(left + right) // 2`. This formula gives us the middle index of the current search space.
- **Purpose**: This `mid` index helps us decide whether to move the `left` or `right` pointer to narrow down the search.

### Step 4: Compare the Midpoint with its Right Neighbor
```python
if nums[mid] > nums[mid + 1]:
    right = mid
```
- **Explanation**: We check if the element at the `mid` index is greater than its next element (`nums[mid + 1]`).
  - **Condition**: If `nums[mid]` is greater, it indicates that a peak element might be to the **left** side, including the `mid` index itself.
  - **Action**: Set the `right` pointer to `mid`. This shrinks the search space to the left half of the array.
- **Purpose**: This comparison tells us that we\u2019re in the descending part of the array, and a peak lies somewhere on the left side (including `mid`).

### Step 5: Move the Left Pointer Otherwise
```python
else:
    left = mid + 1
```
- **Explanation**: If `nums[mid]` is **not** greater than `nums[mid + 1]`, it means that we are in the **ascending** part of the array.
  - **Condition**: There must be a peak element on the **right** side of the `mid` index.
  - **Action**: Move the `left` pointer to `mid + 1`, excluding the `mid` index and focusing on the right half.
- **Purpose**: This ensures that the search moves in the direction of an increasing trend, which will eventually lead to a peak.

### Step 6: Return the Index of the Peak Element
```python
return left
```
- **Explanation**: When the `while` loop ends, `left` and `right` will point to the same index, which is a peak element.
- **Purpose**: Return the `left` index, which is the position of one of the peak elements in the array.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Related question 
#852 - Peak Index in a Mountain Array 

https://youtu.be/HfbygY1tJls
