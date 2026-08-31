# c# solution for string

**Author:** shuohe
**Votes:** 3
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/2857817/](https://leetcode.com/problems/excel-sheet-column-number/solutions/2857817/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int TitleToNumber(string columnTitle) {
        int output=0;
        for (int i=0;i<columnTitle.Length;i++){
            int curr=columnTitle[i]-'A'+1;
            output=output*26+curr;
        }
        return output;
        
    }
}
```