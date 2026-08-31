# C#, Multiple If

**Author:** CDev
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3495159/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3495159/)

---

# Complexity
- Time complexity: $$O(n)$$ 

- Space complexity: $$O(n)$$ 

# Code
```
public class Solution 
{
    public int[] ColorTheArray(int n, int[][] queries) 
    {
        int[] nums = new int[n];
        int[] answer = new int[queries.Length];
        int currAdjacent = 0;

        for (int i = 0; i < queries.Length; i++)
        {
            int index = queries[i][0];
            int color = queries[i][1];

            int prevColor = nums[index];
            nums[index] = color;

            if (index > 0 && nums[index - 1] == prevColor && prevColor != 0)
                currAdjacent--;
            if (index < n - 1 && nums[index + 1] == prevColor && prevColor != 0)
                currAdjacent--;
            if (index > 0 && nums[index - 1] == color && color != 0)
                currAdjacent++;
            if (index < n - 1 && nums[index + 1] == color && color != 0)
                currAdjacent++;

            answer[i] = currAdjacent;
        }

        return answer;
    }
}
```