# C# 95% Simple to Understand

**Author:** Ayomipo
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-units-on-a-truck/solutions/2222176/](https://leetcode.com/problems/maximum-units-on-a-truck/solutions/2222176/)

---

```
public class Solution {
    public int MaximumUnits(int[][] boxTypes, int truckSize) {
        
        int unit = 0;
        int maxUnits = 0;
        
        Array.Sort(boxTypes, (x, y) => y[1].CompareTo(x[1]));
        
        for(int i = 0; i < boxTypes.Length; i++) {
            if(truckSize > 0) {
                if(truckSize - boxTypes[i][0] < 0) {
                    unit = truckSize * boxTypes[i][1];
                } else {
                    unit = boxTypes[i][0] * boxTypes[i][1];  
                }
                maxUnits += unit;
                truckSize -= boxTypes[i][0];
            }
        }
        
        return maxUnits;
    }
}
```