# 【Video】Two Pointer Solution

**Author:** niits
**Votes:** 466
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/5246963/](https://leetcode.com/problems/move-zeroes/solutions/5246963/)

---

# Intuition
Using two pointer to swap two numbers.

---

# Solution Video

https://youtu.be/BPb0q5J4u-k

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,247
Thank you for your support!

---

# Approach

We want to move all zeroes to right places. In that case, basically, we have two choice.

---

\u2B50\uFE0F Points

To solve this question

- move all zeros to right places
or
- move all non zero numbers to left places

---
To do that, we use **two pointers**.


```
Input: nums = [0,1,0,3,12]
```
```
[0,1,0,3,12]
 L
 R
```
First of all, we have `left pointer` and `right pointer` at index `0`. We use the second idea(= move all non zero numbers to left places) above.

Why?

That's because now we have the two pointers at `index 0`, so seem like we can handle algorithm easily if we move non zero numbers to `left` position.

Let's see how it works.

at `index 0`, we have `0` value. In that case, we don't do anything. Move `right pointer` to the next

```
[0,1,0,3,12]
 L R
```
Now we find `1` which is a non zero number, so it's time to swap left number and right number. In the end,

```
[1,0,0,3,12]
 L R
```
When we swap two numbers, we move left pointer to the next. And then, move right pointer to the next in the next iteration.
```
[1,0,0,3,12]
   L R 
```
We don't do anything because current number is `0`. Move next.

```
[1,0,0,3,12]
   L   R 
```
We find non zero number, swap the left number and right number.
```
[1,3,0,0,12]
   L   R 
```
Then move left pointer to the next. In the next iteration move right to the next.
```
[1,3,0,0,12]
     L   R 
```
we find non zero number. Swap the left number and right number.
```
[1,3,12,0,0]
     L    R 
```
Move left pointer to the next.
```
[1,3,12,0,0]
        L R 
```
Then finish iteration. We successfully move all zeroes to the right places.
And the description says "you must do this in-place without making a copy of the array". We meet the condition the description says.
```
return [1,3,12,0,0]
```

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!

---

\u2B50\uFE0F I recently created a video on how I've been using LeetCode to learn.

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        left = 0

        for right in range(len(nums)):
            if nums[right] != 0:
                nums[right], nums[left] = nums[left], nums[right]
                left += 1
        
        return nums
```
```javascript []
var moveZeroes = function(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }

    return nums;    
};
```
```java []
class Solution {
    public void moveZeroes(int[] nums) {
        int left = 0;

        for (int right = 0; right < nums.length; right++) {
            if (nums[right] != 0) {
                int temp = nums[right];
                nums[right] = nums[left];
                nums[left] = temp;
                left++;
            }
        }        
    }
}
```
```C++ []
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int left = 0;

        for (int right = 0; right < nums.size(); right++) {
            if (nums[right] != 0) {
                swap(nums[right], nums[left]);
                left++;
            }
        }        
    }
};
```

## Step by Step Algorithm


1. `left = 0`: Initialize a variable `left` to keep track of the position where the next non-zero element will be moved.
    ```python
    left = 0
    ```
2. `for right in range(len(nums)):`: Iterate over the indices of the `nums` list using a `for` loop. `right` represents the index of the current element being processed.
    ```python
    for right in range(len(nums)):
    ``` 

3. `if nums[right] != 0:`: Check if the current element at index `right` is not equal to zero. This condition checks for non-zero elements.
    ```python
    if nums[right] != 0:
    ```

4. `nums[right], nums[left] = nums[left], nums[right]`: If the current element is non-zero, swap it with the element at index `left`. This effectively moves non-zero elements towards the beginning of the list.
    ```python
    nums[right], nums[left] = nums[left], nums[right]
    ```

5. `left += 1`: Increment the `left` pointer to mark the next position where a non-zero element should be moved.
    ```python
    left += 1
    ```

6. `return nums`: Return the modified `nums` list. Note that this step is not necessary for in-place modifications but might be useful depending on the context of the function's usage.

    ```python
    return nums
    ```


---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My previous video - #14 Longest Common Prefix

post
https://leetcode.com/problems/longest-common-prefix/solutions/4889247/video-create-prefix-between-2-words/

video
https://youtu.be/Dayz6U9c3Ho

