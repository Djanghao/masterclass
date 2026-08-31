# Beats 75% Time Complexity nlogn

**Author:** coder_troop
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5627528/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/5627528/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![image.png](./images/0.png)


# Code
```
public class Solution {
    public bool IsCovered(int[][] ranges, int left, int right) {
        Array.Sort(ranges, (x, y) => x[0] - y[0]);

        int min = ranges[0][0];
        int max = ranges.MaxBy(x => x[1])[1];

        int l = ranges.Length - 1;
        if (left < min || right > max)
            return false;

        foreach (var v in ranges)
        {
            if (left >= v[0] && left <= v[1])
                left = v[1] + 1;

            if (right >= v[0] && right <= v[1])
                right = v[0] - 1;

            if (left > right)
                return true;
        }

        return left > right;
    }
}
```