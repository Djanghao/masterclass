# Easy to understand C# code

**Author:** bogdanonline444
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-nesting/solutions/5414970/](https://leetcode.com/problems/array-nesting/solutions/5414970/)

---

![image.png](./images/0.png)

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int ArrayNesting(int[] nums) {
        bool[] visited = new bool[nums.Length];
        int maxSize = 0;

        for (int i = 0; i < nums.Length; i++) 
        {
            if (!visited[i]) 
            {
                int start = i;
                int count = 0;

                while (!visited[start]) 
                {
                    visited[start] = true;
                    start = nums[start];
                    count++;
                }

                maxSize = Math.Max(maxSize, count);
            }
        }

        return maxSize;
    }
}
```
![89f26eaf70fa927a79d4793441425859.jpg](./images/1.jpeg)
