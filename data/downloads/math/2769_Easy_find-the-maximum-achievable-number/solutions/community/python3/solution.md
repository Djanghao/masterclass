# 🔥Best Solution in Python || One-liner || With explanation ||🔥

**Author:** deleted_user
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4885644/](https://leetcode.com/problems/find-the-maximum-achievable-number/solutions/4885644/)

---

# Explaination
In this problem, we're tasked with adjusting two integers, "num" and an achievable number, simultaneously through a series of steps. The objective is to reach a point where both "num" and the achievable number are equal after a maximum of "t" steps.

To determine the maximum achievable number, we can employ an approach where we increase "num" while decreasing the achievable number. This ensures that after "t" steps, the increments and decrements will balance out, resulting in both values being identical.

This relationship can be expressed as follows: `num + t = ans - t`, where "ans" represents the achievable number. By rearranging this equation, we find that `ans = num + 2t`.

Thus, in any scenario, the maximum achievable number will be `num + 2t`, as it's not feasible to achieve a higher number within "t" steps.

Therefore, our approach is simplified to returning `num + 2 * t`, as it guarantees the maximum achievable number within the given constraints.

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution:
    def theMaximumAchievableX(self, num: int, t: int) -> int:
        return num + t * 2
```
![honest-work-meme-cb0f0fb2227fb84b77b3c9a851ac09b095ab74d8-s1100-c50.jpg](./images/0.jpeg)
