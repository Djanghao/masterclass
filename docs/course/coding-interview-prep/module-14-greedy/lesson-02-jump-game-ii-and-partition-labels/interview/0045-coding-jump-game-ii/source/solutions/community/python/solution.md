# Clean Codes🔥🔥|| Full Explanation✅|| Implicit BFS✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 366
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/3158169/](https://leetcode.com/problems/jump-game-ii/solutions/3158169/)

---

# Intuition :
- We have to find the minimum number of jumps required to reach the end of a given array of non-negative integers i.e the shortest number of jumps needed to reach the end of an array of numbers.
<!-- Describe your first thoughts on how to solve this problem. -->

# Explanation to Approach :
- We are using a search algorithm that works by moving forward in steps and counting each step as a jump. 
- The algorithm keeps track of the farthest reachable position at each step and updates the number of jumps needed to reach that farthest position. 
- The algorithm returns the minimum number of jumps needed to reach the end of the array.
<!-- Describe your approach to solving the problem. -->

# Complexity :
- Time complexity : O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
```
Thanks for visiting my solution.\uD83D\uDE0A
```

# Codes [C++ |Java |Python3] with Comments :
```C++ []
class Solution {
 public:
  int jump(vector<int>& nums) {
    int ans = 0;
    int end = 0;
    int farthest = 0;

    // Implicit BFS
    for (int i = 0; i < nums.size() - 1; ++i) {
      farthest = max(farthest, i + nums[i]);
      if (farthest >= nums.size() - 1) {
        ++ans;
        break;
      }
      if (i == end) {    // Visited all the items on the current level
        ++ans;           // Increment the level
        end = farthest;  // Make the queue size for the next level
      }
    }

    return ans;
  }
};
```
```Java []
class Solution {
  public int jump(int[] nums) {
    int ans = 0;
    int end = 0;
    int farthest = 0;

    // Implicit BFS
    for (int i = 0; i < nums.length - 1; ++i) {
      farthest = Math.max(farthest, i + nums[i]);
      if (farthest >= nums.length - 1) {
        ++ans;
        break;
      }
      if (i == end) {   // Visited all the items on the current level
        ++ans;          // Increment the level
        end = farthest; // Make the queue size for the next level
      }
    }

    return ans;
  }
}
```
```Python3 []
class Solution:
  def jump(self, nums: List[int]) -> int:
    ans = 0
    end = 0
    farthest = 0

    # Implicit BFS
    for i in range(len(nums) - 1):
      farthest = max(farthest, i + nums[i])
      if farthest >= len(nums) - 1:
        ans += 1
        break
      if i == end:      # Visited all the items on the current level
        ans += 1        # Increment the level
        end = farthest  # Make the queue size for the next level

    return ans
```
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
![ezgif-3-22a360561c.gif](./images/0.gif)
