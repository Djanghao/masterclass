# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/4489706/](https://leetcode.com/problems/random-pick-index/solutions/4489706/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    Map<int, List<int>> m = {};

    Solution(List<int> nums) {
        for (int i = 0; i < nums.length; i++) {
            if (!m.containsKey(nums[i])) {
                m[nums[i]] = List.from([]);
            }

            m[nums[i]]!.add(i);
        }
    }
    
    int pick(int target) {
        final index = Random().nextInt(m[target]!.length);
        return m[target]![index];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = Solution(nums);
 * int param1 = obj.pick(target);
 */
```