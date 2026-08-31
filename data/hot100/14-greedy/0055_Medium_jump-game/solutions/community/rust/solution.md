# No nonsense rust solution

**Author:** SaturnHippo
**Votes:** 4
**Link:** [https://leetcode.com/problems/jump-game/solutions/4149930/](https://leetcode.com/problems/jump-game/solutions/4149930/)

---

# Intuition
The problem reduces to whether you are doomed to get stuck on a zero. The solution follows from that line of thinking.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn can_jump(nums: Vec<i32>) -> bool {
        let len = nums.len();

        // an idx. we start at 0
        let mut furthest_reachable = 0;

        for i in 0..len-1 {
            furthest_reachable = furthest_reachable.max(i + nums[i] as usize);
            if furthest_reachable == i {
                // this is as far as we can go (this is a zero). sadge
                return false;
            }
        }
        true
    }
}
```