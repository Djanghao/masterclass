# 【Video】Keep near and far position and get the farthest position

**Author:** niits
**Votes:** 508
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/5292559/](https://leetcode.com/problems/jump-game-ii/solutions/5292559/)

---

# Intuition
Keep near and far position and get the farthest position

---

# Solution Video

https://youtu.be/KHtghQD0vII

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 5,614

---

# Approach
```
Input: nums = [2,3,1,1,4]
```
We start from index `0`. In that case above, we have two choices. I mean jump to index `1` or index `2`.

---

Problem

We don't know whether we should jump to index `1` or index `2` to get minimum number of jumps in the end.

---

Let's think about index `1` and index `2` cases.

From index `1`, We have three choices. Jump to index `2`, `3` or `4`.
From index `2`, We have one choice. Jump to index `3`.


---

\u2B50\uFE0F\u3000Points

Important thing is that farthest position(= index `2`) from previous jump position(= index `0`) is not always following the next farthest position.

From index `0`, the farthest position should be index `2`, because maximum jump from index `0` is `2`. But if we jump from index `2`, we can jump to the next position(= index `3`).

On the other hand, if we jump to index `1` from index `0`, we can jump to index `4` from index `1`. which is farther than index `3` from index `2`.

So my strategy is **to have near and far position and we check all jumps between the positions and get the farthest position every time.**  

---

Let's see one by one.

```
Input: nums = [2,3,1,1,4]

near = 0
far = 0
jumps = 0
```
First of all, the range betwee `near` and `far` is `0`, so we check only index `0`. The farthest position should be 

```
farthest position = current index + maximum jump
= 0 + 2
= 2
```
We check all positions in the range.

Next, before we move to the next range, we should update `near`, `far` and `jumps`.

This question guarantee that we can definitely reach the last index, so at least, we must move forward from the current range, so

The next `near` position should be 
```
far + 1
```
Because far position is the most right position of current range.

The next `far` position should be 

```
far = current farthest we found = 2
```
Of course, add +1 to jump times

```
jumps += 1
```
In the end,

```
   n f
[2,3,1,1,4]

jumps = 1
```
Next we check between index `1` and index `2`.

From index `1`, the farthest position should 
```
farthest = 1 + 3 = 4
```
From index `2`, the farthest position should 
```
farthest = 2 + 1 = 3
```
We take index `4`. Then update `near`, `far` and `jumps`.

```
near = far + 1 = 3
far = farthest = 4
jumps = 1 + 1 = 2
```

In the end,
```
       n f
[2,3,1,1,4]

jumps = 2
```
We will repeat the same algorithm. And now far position is reach the last index, so we stop iteration.


```
return 2(= jumps)
```

Easy!\uD83D\uDE04
Let's see solution codes and step by step algorithm!


---

\u2B50\uFE0F Related Question

I solved Jump Game \u2160 the other day. Check it out!

https://youtu.be/m6AymRRYgko

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def jump(self, nums: List[int]) -> int:
        near = far = jumps = 0

        while far < len(nums) - 1:
            farthest = 0
            for i in range(near, far + 1):
                farthest = max(farthest, i + nums[i])
            
            near = far + 1
            far = farthest
            jumps += 1
        
        return jumps
```
```javascript []
var jump = function(nums) {
    let near = 0, far = 0, jumps = 0;

    while (far < nums.length - 1) {
        let farthest = 0;
        for (let i = near; i <= far; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        near = far + 1;
        far = farthest;
        jumps++;
    }

    return jumps;    
};
```
```java []
class Solution {
    public int jump(int[] nums) {
        int near = 0, far = 0, jumps = 0;

        while (far < nums.length - 1) {
            int farthest = 0;
            for (int i = near; i <= far; i++) {
                farthest = Math.max(farthest, i + nums[i]);
            }
            near = far + 1;
            far = farthest;
            jumps++;
        }

        return jumps;        
    }
}
```
```C++ []
class Solution {
public:
    int jump(vector<int>& nums) {
        int near = 0, far = 0, jumps = 0;

        while (far < nums.size() - 1) {
            int farthest = 0;
            for (int i = near; i <= far; i++) {
                farthest = max(farthest, i + nums[i]);
            }
            near = far + 1;
            far = farthest;
            jumps++;
        }

        return jumps;        
    }
};
```

# Step by Step Algorithm

1. **Initialization**:
   ```python
   near = far = jumps = 0
   ```
   - `near`: This variable represents the start of the current range of indices we are considering for jumps.
   - `far`: This variable represents the end of the current range of indices we are considering for jumps.
   - `jumps`: This variable keeps track of the number of jumps made.

2. **While Loop**:
   ```python
   while far < len(nums) - 1:
   ```
   - The loop continues until the `far` index reaches or exceeds the last index of the array (`len(nums) - 1`).

3. **Initialization of Farthest**:
   ```python
   farthest = 0
   ```
   - `farthest`: This variable will store the farthest index we can reach from the current range of indices (`near` to `far`).

4. **For Loop**:
   ```python
   for i in range(near, far + 1):
       farthest = max(farthest, i + nums[i])
   ```
   - This loop iterates through the current range of indices from `near` to `far`.
   - For each index `i`, it calculates `i + nums[i]` which is the farthest index we can reach by jumping from index `i`.
   - It updates `farthest` to be the maximum of its current value and `i + nums[i]`.

5. **Update Near and Far**:
   ```python
   near = far + 1
   far = farthest
   jumps += 1
   ```
   - `near`: Update the start of the next range to be one index after the current `far`.
   - `far`: Update the end of the next range to be `farthest` calculated in the for loop.
   - `jumps`: Increment the number of jumps made by 1.

6. **Return Statement**:
   ```python
   return jumps
   ```
   - After exiting the while loop, the function returns the total number of jumps made to reach the last index.




---

Thank you for reading my post.

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F My previous post and video
#36 Valid Sudoku

video
https://youtu.be/RdakO1_niYE
