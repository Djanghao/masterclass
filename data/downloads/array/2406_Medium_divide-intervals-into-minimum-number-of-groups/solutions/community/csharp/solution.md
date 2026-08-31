# C#| Line Sweep Algo

**Author:** krishnamhn009
**Votes:** 4
**Link:** [https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5112603/](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5112603/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Line sweep algorithm
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- O(n+k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinGroups(int[][] intervals) {
      int max = 0;//getting max range 
        foreach (var inter in intervals){
            max = Math.Max(max, inter[1]);
        }

        int[] line =new int[max+2];
        foreach (var inter in intervals){
            line[inter[0]]++;
            line[inter[1] + 1]--;
        }
        int maxOverlap = 0;
        int currOverlap = 0;
        for (int i = 0; i < line.Length; i++){
            currOverlap += line[i];
            maxOverlap = Math.Max(maxOverlap, currOverlap);
        }

        return maxOverlap;
    }
}
```