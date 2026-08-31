# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS -Sliding Window -Interview Solution

**Author:** lancertech6
**Votes:** 135
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5359610/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5359610/)

---

![Screenshot 2024-06-24 071305.png](./images/0.png)


# YouTube Video Explanation:

<!-- ### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail. -->

**If you want a video for this question please write in the comments**


https://youtu.be/6N_XS9Bu7tg


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2300 Subscribers*
*Current Subscribers: 2253*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to make sure there are no 0s left in the array after performing the minimum number of k-bit flips. A k-bit flip will flip every bit (0 to 1, or 1 to 0) in a subarray of length k. To achieve the minimum number of flips, we need to be strategic about where and when to flip the bits.


# Approach
<!-- Describe your approach to solving the problem. -->
1. **Tracking Flips**: Use a helper array `isFlipped` to keep track of flips. This array will mark whether a flip operation is active at a particular index.
2. **Flipped State**: Maintain a `flipped` state to indicate the number of active flips. 
3. **Iterate through the array**: 
    - For each position `i`, check if it needs to be flipped. This is determined by the parity of `flipped` and the current bit (`nums[i]`).
    - If the bit needs to be flipped:
      - Ensure that flipping a subarray starting at `i` and extending to `i + k - 1` is within bounds.
      - Mark this position in `isFlipped` as starting a flip.
      - Update the `flipped` state.
      - Increment the result counter which counts the number of flips.
    - If the position `i - k` was previously flipped, decrement the `flipped` state.

# Complexity
- **Time Complexity**: O(n), where n is the length of the input array `nums`. Each element is processed a constant number of times.
- **Space Complexity**: O(n), for the additional `isFlipped` array used to keep track of the flips.

# Step by Step Explanation

**Input: nums = [0,0,0,1,0,1,1,0], k = 3
Output: 3**


#### Initial State

| Index | nums             | isFlipped       | flipped | res |
|-------|------------------|-----------------|---------|-----|
| -     | [0,0,0,1,0,1,1,0] | [0,0,0,0,0,0,0,0] | 0       | 0   |

#### Step-by-Step Execution


| Step | Index | nums             | isFlipped       | flipped | res | Explanation                                             |
|------|-------|------------------|-----------------|---------|-----|---------------------------------------------------------|
| 1    | 0     | [0,0,0,1,0,1,1,0] | [1,0,0,0,0,0,0,0] | 1       | 1   | Flip at index 0                                         |
| 2    | 1     | [0,0,0,1,0,1,1,0] | [1,0,0,0,0,0,0,0] | 1       | 1   | No flip needed                                          |
| 3    | 2     | [0,0,0,1,0,1,1,0] | [1,0,0,0,0,0,0,0] | 1       | 1   | No flip needed                                          |
| 4    | 3     | [0,0,0,1,0,1,1,0] | [1,0,0,0,0,0,0,0] | 1       | 1   | No flip needed                                          |
| 5    | 4     | [0,0,0,1,0,1,1,0] | [1,0,0,0,1,0,0,0] | 0       | 2   | Flip at index 4                                         |
| 6    | 5     | [0,0,0,1,0,1,1,0] | [1,0,0,0,1,1,0,0] | 1       | 3   | Flip at index 5                                         |
| 7    | 6     | [0,0,0,1,0,1,1,0] | [1,0,0,0,1,1,0,0] | 1       | 3   | No flip needed                                          |
| 8    | 7     | [0,0,0,1,0,1,1,0] | [1,0,0,0,1,1,0,0] | 1       | 3   | No flip needed                                          |


1. **Index 0**:
    - `flipped == nums[0]` \u2192 0 == 0 (True)
    - Flip starting at index 0.
    - `isFlipped[0] = 1`
    - `flipped ^= 1` \u2192 flipped = 1
    - `res++` \u2192 res = 1



2. **Index 1**:
    - `flipped == nums[1]` \u2192 1 == 0 (False)
    - No flip needed.

3. **Index 2**:
    - `flipped == nums[2]` \u2192 1 == 0 (False)
    - No flip needed.


4. **Index 3**:
    - `flipped == nums[3]` \u2192 1 == 1 (True)
    - No flip needed.


5. **Index 4**:
    - `flipped == nums[4]` \u2192 1 == 0 (False)
    - Flip starting at index 4.
    - `isFlipped[4] = 1`
    - `flipped ^= 1` \u2192 flipped = 0
    - `res++` \u2192 res = 2


6. **Index 5**:
    - `flipped == nums[5]` \u2192 0 == 1 (True)
    - Flip starting at index 5.
    - `isFlipped[5] = 1`
    - `flipped ^= 1` \u2192 flipped = 1
    - `res++` \u2192 res = 3


7. **Index 6**:
    - `flipped == nums[6]` \u2192 1 == 1 (True)
    - No flip needed.


8. **Index 7**:
    - `flipped == nums[7]` \u2192 1 == 0 (False)
    - No flip needed.


After processing all indices, the minimum number of k-bit flips required to make all elements in the array 1 is `res = 3`.


---

# Code
```java []
class Solution {
    public int minKBitFlips(int[] nums, int k) {
        int n = nums.length, flipped = 0, res = 0;
        int[] isFlipped = new int[n];
        for (int i = 0; i < nums.length; ++i) {
            if (i >= k)
                flipped ^= isFlipped[i - k];
                if (flipped == nums[i]) {
                    if (i + k > nums.length)
                        return -1;
                isFlipped[i] = 1;
                flipped ^= 1;
                res++;
            }
        }
        return res;
    }
}
```
```C++ []
class Solution {
public:
    int minKBitFlips(vector<int>& nums, int k) {
        int n = nums.size();
        int flipped = 0;
        int res = 0;
        vector<int> isFlipped(n, 0);

        for (int i = 0; i < n; ++i) {
            if (i >= k) {
                flipped ^= isFlipped[i - k];
            }
            if (flipped == nums[i]) {
                if (i + k > n) {
                    return -1;
                }
                isFlipped[i] = 1;
                flipped ^= 1;
                res++;
            }
        }

        return res;
    }
};
```
```Python []
class Solution(object):
    def minKBitFlips(self, nums, k):
        n = len(nums)
        flipped = 0
        res = 0
        isFlipped = [0] * n
        
        for i in range(n):
            if i >= k:
                flipped ^= isFlipped[i - k]
            if flipped == nums[i]:
                if i + k > n:
                    return -1
                isFlipped[i] = 1
                flipped ^= 1
                res += 1
        
        return res
        
```
```JavaScript []
var minKBitFlips = function(nums, k) {
    const n = nums.length;
    let flipped = 0;
    let res = 0;
    const isFlipped = new Array(n).fill(0);

    for (let i = 0; i < n; ++i) {
        if (i >= k) {
            flipped ^= isFlipped[i - k];
        }
        if (flipped == nums[i]) {
            if (i + k > n) {
                return -1;
            }
            isFlipped[i] = 1;
            flipped ^= 1;
            res++;
        }
    }

    return res;
};
```
![upvote.png](./images/1.png)
