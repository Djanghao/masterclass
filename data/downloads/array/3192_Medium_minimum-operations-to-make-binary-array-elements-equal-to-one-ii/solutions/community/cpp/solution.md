# greedy

**Author:** fahad_Mubeen
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5352862/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5352862/)

---

# Intution
- The algorithm minimizes operations by toggling elements only when necessary (when flips is odd), ensuring each operation moves towards the goal of making all elements 1 efficiently.

# Approach
You're going left to right. At first you realize that you must flip `0->1` at each step or you won't have continuous `111...` sequence (no decisions, you're forced for all 0).
Flipping [i]'s `0->1` also flips the suffix.
If you do it in a brute force way, you'll need n^2 ops.
In order to optimize it, instead of flipping suffix, you can remember flipped/not flipped state after each `0->1`.
Now more observations:

```
if num == 0 and flipped == False:
  ops += 1
  flipped = not flipped
elif num == 1 and flipped == True:
  ops += 1
  flipped = not flipped
```
which is the same as:

```
if num == flipped:
  ops += 1
  flipped = not flipped
```
or even/odd counting
# SideNote
- You will be able to solve these types of questions with practice. There is no straightforward intuition for such questions; it's about making observations and approaching the problem methodically/greedily after considering the constraints. Additionally, the code speaks for itself: if flips are even, nums[i] remains the same; otherwise, it is inverted. There isn't much more to explain. 
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums) {
        int n = nums.size(), i = 0, flips = 0;
        while(i < n){
            nums[i] = (flips%2 == 1) ?  !nums[i] : nums[i];
            if(nums[i] == 0){
                flips++;
            }
            i++;
        }
        return flips;
    }
};
```
```Java []
class Solution {
    public int minOperations(int[] nums) {
        int n = nums.length;
        int i = 0, flips = 0;
        
        while (i < n) {
            nums[i] = (flips % 2 == 1) ? (nums[i] == 0 ? 1 : 0) : nums[i];
            
            if (nums[i] == 0) {
                flips++;
            }
            
            i++;
        }
        
        return flips;
    }
}

```
```Python3 []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        i = 0
        flips = 0
        
        while i < n:
            nums[i] = 1 - nums[i] if flips % 2 == 1 else nums[i]
            
            if nums[i] == 0:
                flips += 1
            
            i += 1
        
        return flips

```
