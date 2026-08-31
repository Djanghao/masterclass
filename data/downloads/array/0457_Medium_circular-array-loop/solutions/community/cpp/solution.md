# Cycle Detection Algorithms | Two Pointer | Easy Solution | How to Think | Complexity: 𝑂(𝑛), 𝑂(1)

**Author:** avinash06nitp
**Votes:** 4
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/5542812/](https://leetcode.com/problems/circular-array-loop/solutions/5542812/)

---

# Intuition
To determine if there is a circular loop in the array where each number points to the next index, we need to consider a few key points:

- The loop must be in one direction only (either all positive or all negative).
- We must check if after several moves we can return to the starting index without changing direction.

# Approach
- **Next Index Calculation:** Calculate the next index using the current index and value. This ensures that we handle both forward and backward movements.
- **Two Pointer Technique: **Use two pointers (slow and fast) to detect cycles in the array.
- **Cycle Detection:** Move the slow pointer one step and the fast pointer two steps. If they meet and the cycle length is more than 1, then there is a loop.
- **Direction Check:** Ensure that the direction of movement does not change. If it changes, break the loop.
- **Marking Visited:** Mark all indices in the current path as visited to avoid redundant checks.

# Complexity
- Time complexity:
\uD835\uDC42(\uD835\uDC5B) Each element is visited a constant number of times.
- Space complexity:
- $$O(1)$$ Only a few pointers and variables are used, so additional space usage is constant.


# Code
```
class Solution {
public:
    int next(vector<int>& nums, int i) {
        int n = nums.size();
        return ((i + nums[i] % n) + n) % n;
    }
    bool circularArrayLoop(vector<int>& nums) {
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            int slow = i;
            int fast = next(nums, i);
            while (nums[slow] * nums[fast] > 0 &&
                   nums[slow] * nums[next(nums, fast)] > 0) {
                if (slow == fast) {
                    if (slow != next(nums, slow)) {
                        return true;
                    }
                    break;
                }
                slow = next(nums, slow);
                fast = next(nums, next(nums, fast));
            }
        }
        return false;
    }
};
```