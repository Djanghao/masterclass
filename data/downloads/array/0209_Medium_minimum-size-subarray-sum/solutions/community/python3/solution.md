# 【Video】Sliding Window Solution

**Author:** niits
**Votes:** 91
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/5908815/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/5908815/)

---

# Intuition
Using Sliding Window

# Solution Video

https://youtu.be/s26WQrtMKBQ

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 9,713
Thank you for your support!

---



# Approach

```
Input: target = 7, nums = [2,3,1,2,4,3]
```

We need to find minimum length of subarray whose sum is greater than or equal to target, so let's create a left pointer and a right pointer.

```
[2,3,1,2,4,3]
 L
 R

cur_sum = 0
min_len = inf
```
`cur_sum` is total number of between left and right.
`min_len` is current minimum length of subarray which is a return value.

Basically, we iterate through all numbers one by one with the `right` pointer and add a right number to `cur_sum`.

First of all, we find `2` at index `0`.
```
[2,3,1,2,4,3]
 L
 R

cur_sum = 2
min_len = inf
```
Next, check
```
cur_sum >= target
```
If we meet the condition, it's time to compare current length with `min_len`.

But currently 
```
cur_sum >= target
= 2 >= 7
= false
```
Just move right to next.

```
[2,3,1,2,4,3]
 L R
 
Add 3 to cur_sum

cur_sum = 5

cur_sum >= target
= 5 >= 7
= false

min_len = inf
------------------------------------
[2,3,1,2,4,3]
 L   R
 
Add 1 to cur_sum

cur_sum = 6

cur_sum >= target
= 6 >= 7
= false

min_len = inf
------------------------------------
[2,3,1,2,4,3]
 L     R
 
Add 2 to cur_sum

cur_sum = 8

cur_sum >= target
= 8 >= 7
= true

min_len = inf
```
Now we meet `cur_sum >= target`. It's time to compare current length with `min_len`

```
current length vs `min_len`
= right - left + 1 vs inf
= 4 vs inf
= 4

min_len = 4
```

---


- Why did we set inf to `min_len`?

That's because any number greater than target could be the first answer. If we find only one length, that should be return value, so we need to keep the first length we found.

---


`cur_sum` is greater than target. Before we move next, we should reduce numbers from `cur_sum`, because if we add some number, length of the current range will expand. That is definitely not answer. That's why we make the current range short.

Move `left` to next, but don't forget to subtract `2`(= index 0) from `cur_sum`, because when `left` pointer moves to index `1`, `2`(= index 0) should be out of bounds of current range between `left` and `right`.

Subtract `2` from `cur_sum`
```
cur_sum - 2 = 6
```

Move next,

```
[2,3,1,2,4,3]
   L     R
 
Add 4 to cur_sum

cur_sum = 10

cur_sum >= target
= 10 >= 7
= true

current length vs `min_len`
= right - left + 1 vs inf
= 4 vs 4
= 4
```
cur_sum is `10`. Let's shorten the range.
```
[2,3,1,2,4,3]
     L   R

cur_sum = 7
min_len = 4

cur_sum >= target
= 7 >= 7
= true
```
still `7`. we should check length of current array.
```
current length vs `min_len`
= right - left + 1 vs 4
= 3 vs 4
= 3

min_len = 3
cur_sum = 7

cur_sum is 7. Let's shorten the range.

[2,3,1,2,4,3]
       L R

cur_sum = 6 < target.
```
Move `right` pointer next.
```
[2,3,1,2,4,3]
       L   R
 
Add 3 to cur_sum

cur_sum = 9

cur_sum >= target
= 9 >= 7
= true

current length vs `min_len`
= right - left + 1 vs inf
= 3 vs 3
= 3
````
cur_sum is `9`. Let's shorten the range.
```
[2,3,1,2,4,3]
         L R

cur_sum = 7, still cur_sum >= target is true.

current length vs `min_len`
= right - left + 1 vs 3
= 2 vs 3
= 2

min_len = 2
cur_sum = 7

cur_sum is 7. Let's shorten the range.

[2,3,1,2,4,3]
           R
           L

cur_sum = 3

```
Then finish iteration.

```
return 2(= min_len)
```
Be careful, if you reach `return`, that means there is no suitable subarray. In this case return 0 

```
return min_len if min_len != float("inf") else 0
```

---

https://youtu.be/bU_dXCOWHls

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        min_len = float("inf")
        left = 0
        cur_sum = 0

        for right in range(len(nums)):
            cur_sum += nums[right]

            while cur_sum >= target:
                if right - left + 1 < min_len:
                    min_len = right - left + 1
                cur_sum -= nums[left]
                left += 1
        
        return min_len if min_len != float("inf") else 0
```
```javascript []
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let left = 0;
    let curSum = 0;

    for (let right = 0; right < nums.length; right++) {
        curSum += nums[right];

        while (curSum >= target) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
            }
            curSum -= nums[left];
            left++;
        }
    }
    
    return minLen !== Infinity ? minLen : 0;    
};
```
```java []
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int minLen = Integer.MAX_VALUE;
        int left = 0;
        int curSum = 0;

        for (int right = 0; right < nums.length; right++) {
            curSum += nums[right];

            while (curSum >= target) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                }
                curSum -= nums[left];
                left++;
            }
        }
        
        return minLen != Integer.MAX_VALUE ? minLen : 0;        
    }
}
```
```C++ []
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int minLen = numeric_limits<int>::max();
        int left = 0;
        int curSum = 0;

        for (int right = 0; right < nums.size(); right++) {
            curSum += nums[right];

            while (curSum >= target) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                }
                curSum -= nums[left];
                left++;
            }
        }

        return minLen != numeric_limits<int>::max() ? minLen : 0;        
    }
};
```

# Step by Step Algorithm

### Step 1: Initialize Variables
```python
min_len = float("inf")
left = 0
cur_sum = 0
```
- `min_len`: Tracks the smallest subarray length found. Initially set to infinity (`float("inf")`) to represent an impossibly large number.
- `left`: The left boundary of the sliding window, initialized to 0.
- `cur_sum`: Accumulates the sum of the current subarray, starting at 0.

### Step 2: Loop Through the Array (Right Boundary)
```python
for right in range(len(nums)):
    cur_sum += nums[right]
```
The `for` loop iterates through each element of `nums` using `right` as the index (representing the right boundary of the sliding window). During each iteration, the value at `nums[right]` is added to `cur_sum`.

### Step 3: Shrink the Window While Sum Exceeds Target
```python
while cur_sum >= target:
```
This `while` loop checks if the current sum (`cur_sum`) is greater than or equal to the `target`. If so, it means the current subarray from `left` to `right` has a valid sum, and we will try to reduce the window size to find the smallest possible valid subarray.

### Step 4: Update Minimum Length
```python
if right - left + 1 < min_len:
    min_len = right - left + 1
```
If the current subarray length (from `left` to `right`) is smaller than the previously recorded `min_len`, we update `min_len` to this new value.

### Step 5: Adjust the Left Boundary
```python
cur_sum -= nums[left]
left += 1
```
After updating the minimum length, we move the left boundary of the window to the right by incrementing `left` and subtracting the value of `nums[left]` from `cur_sum`. This process shrinks the window to potentially find a smaller valid subarray.

### Step 6: Return the Result
```python
return min_len if min_len != float("inf") else 0
```
Finally, if `min_len` was updated from its initial value of infinity, the function returns `min_len`. If it wasn't updated, meaning no valid subarray was found, the function returns `0`.

This algorithm efficiently finds the minimum length of a subarray with a sum greater than or equal to `target` using a sliding window technique.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Related question 
#76 - Minimum Window Substring

https://youtu.be/WGNaHa4853Q
