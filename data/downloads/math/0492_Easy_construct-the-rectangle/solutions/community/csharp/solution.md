# C# Solution

**Author:** panaeimi
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/3671752/](https://leetcode.com/problems/construct-the-rectangle/solutions/3671752/)

---

# Code
```
public class Solution {
    public int[] ConstructRectangle(int area) {
        int length = 0, width = 0;
        for(int i = (int) Math.Sqrt(area); i >= 1; i--) {
            if(area % i != 0) continue;
        
            length = area / i;
            width = i;
        
            break;
        }
        
        return new int[2] {length, width};
    }
}
```