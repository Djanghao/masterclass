# [C#] solution

**Author:** clewBy
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/1591108/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/1591108/)

---

Solution 1:
```
public class Solution {
    public int MaxDistance(int[] colors) {
        int max = 0, length = colors.Length;
        for(int i = 0; i < length; i++){
            if(colors[0] != colors[i])
                max = Math.Max(max, i);
            if(colors[length-1] != colors[i])
                max = Math.Max(max, length-i-1);
        }
        return max;
    }
}
```

Solution 2:
```
public class Solution {
    public int MaxDistance(int[] colors) {
        int i = 0, j = colors.Length-1, n = colors.Length-1;
        while(colors[i] == colors[n])
            i++;
        while(colors[j] == colors[0])
            j--;
        return Math.Max(j, n-i);
    }
}
```