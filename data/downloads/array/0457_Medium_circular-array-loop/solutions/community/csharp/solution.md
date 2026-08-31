# Super clear and easy solution with HashSet C#

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/5474968/](https://leetcode.com/problems/circular-array-loop/solutions/5474968/)

---


# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool CircularArrayLoop(int[] nums) {
        int n = nums.Length;
        for (int i = 0; i < n; i++)
        {
            int j = i;
            bool direction = nums[j] > 0;
            HashSet<int> visited = new HashSet<int>();
            while (true) 
            {
                visited.Add(j);
                j = (j + nums[j]);
                while (j >= n)
                    j %= n;
                while (j < 0)
                    j += n;

                if (Math.Abs(nums[j]) % n==0)
                    break;

                if (direction != (nums[j] > 0))
                    break;

                if (visited.Contains(j))
                    return true;
            }

        }
        return false;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/0.jpeg)
