# 【Video】Move Goal Position

**Author:** niits
**Votes:** 652
**Link:** [https://leetcode.com/problems/jump-game/solutions/5130181/](https://leetcode.com/problems/jump-game/solutions/5130181/)

---

# Intuition
Move goal position to the left if we meet a simple condition.

---

# Solution Video

https://youtu.be/m6AymRRYgko

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,139
Thank you for your support!

---

# Approach

We have several ways to reach `goal`(= the last index) or `other index` from a current position, so my strategy is to move `goal` to left position if we meet a simple condition.

The condition is

---

\u2B50\uFE0F Points

```
if current position + maximum jump >= goal
```
---

If we meet the condition we update `goal` with current index.

Let's see how it works.

```
Input: nums = [2,3,1,1,4]
```
We start at the second position from the last.
```
[2,3,1,1,4]
       i g

i = current position
g = goal
```
Let's use the formula above.

```
current position + maximum jump >= goal
= 3 + 1 >= 4
= true
```
We can reach the current goal(= index `4`) from current position(= index `3`), **that means if we reach index `3`, we are sure that we can definitely reach the `goal`(= the last index).**

That's why we can move `goal` to index `3`.

Next,
```
[2,3,1,1,4]
     i g
```
```
current position + maximum jump >= goal
= 2 + 1 >= 3
= true
```
If `true`, we are sure we can reach index `3` from index `2`. We know that if we reach index `3`, we can reach the last index, so update `goal` with index `2`. In the next time, if we can reach index `2`, that means we can reach the last index(= `4`)

Next,

```
[2,3,1,1,4]
   i g
```
I'll speed up.
```
current position + maximum jump >= goal
= 1 + 3 >= 2
= true
```
```
[2,3,1,1,4]
 i g
```
```
current position + maximum jump >= goal
= 0 + 2 >= 1
= true
```
In the end,
```
[2,3,1,1,4]
 g
```
Now, `goal` is index `0`. That means we can reach the `goal` because we start from index `0`, so before we return `true` or `false`, we check this condition.
```
if goal == 0
```
In this case
```
return true
```

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!

---

\u2B50\uFE0F I recently created a video on how I've been using LeetCode to learn.

https://youtu.be/bU_dXCOWHls

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        goal = len(nums) - 1

        for i in range(len(nums) - 2, -1, -1):
            if i + nums[i] >= goal:
                goal = i
        
        return True if goal == 0 else False
```
```javascript []
var canJump = function(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }

    return goal === 0;    
};
```
```java []
class Solution {
    public boolean canJump(int[] nums) {
        int goal = nums.length - 1;

        for (int i = nums.length - 2; i >= 0; i--) {
            if (i + nums[i] >= goal) {
                goal = i;
            }
        }

        return goal == 0;        
    }
}
```
```C++ []
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int goal = nums.size() - 1;

        for (int i = nums.size() - 2; i >= 0; i--) {
            if (i + nums[i] >= goal) {
                goal = i;
            }
        }

        return goal == 0;        
    }
};
```

## Step by Step Algorithm

1. **Initialization**:
    ```python
    goal = len(nums) - 1
    ``` 
    - `goal = len(nums) - 1`: Initialize the variable `goal` to the last index of the array `nums`. This represents the goal position we want to reach.

2. **Main Loop**:
    ```python
    for i in range(len(nums) - 2, -1, -1):
    ```
    - `for i in range(len(nums) - 2, -1, -1)`: Iterate backward through the array `nums`, starting from the second to last element down to the first element.

3. **Checking Jumpability**:
    ```python
    if i + nums[i] >= goal:
    ``` 
    - `if i + nums[i] >= goal`: Check if the current index `i` plus the maximum jump length at that position (`nums[i]`) is greater than or equal to the `goal`. If it is, it means we can jump from index `i` to the `goal` or beyond.

4. **Updating Goal**:
    ```python
    goal = i
    ```
    - `goal = i`: If the condition in step 3 is met, update the `goal` to the current index `i`. This means we have found a new closer position from which we can reach the previous `goal` position.

5. **Return Result**:
    ```python
    return True if goal == 0 else False
    ```
    - `return True if goal == 0 else False`: If we successfully reach the first index (i.e., `goal == 0`), return `True`, indicating that it's possible to reach the last index from the first index. Otherwise, return `False`.

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

# My previous post and video - Move Zeroes

post
https://leetcode.com/problems/container-with-most-water/solutions/4913496/video-two-pointer-solution/

video
https://youtu.be/-nvQm6f84Yg



