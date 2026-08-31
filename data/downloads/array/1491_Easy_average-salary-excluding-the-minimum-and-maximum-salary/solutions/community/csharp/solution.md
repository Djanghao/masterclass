# simple c# solution

**Author:** tom91T
**Votes:** 3
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3352658/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/3352658/)

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
public class Solution {
    public double Average(int[] salary) {
        Array.Sort(salary);
        int count=0;
        double sum = 0;
        for (int i = 1; i < salary.Length - 1; i++){
            sum = sum + salary[i];
            count++;
        }

        return sum /count;
    }
}
```