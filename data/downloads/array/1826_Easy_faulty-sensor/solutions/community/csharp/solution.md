# C# Solution

**Author:** panaeimi
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/3714605/](https://leetcode.com/problems/faulty-sensor/solutions/3714605/)

---

# Code
```
public class Solution {
    public int BadSensor(int[] sensor1, int[] sensor2) {
        int i = 0;
        for(; i < sensor1.Length; i++) {
            if(sensor1[i] != sensor2[i]) break;
        }

        if(i == sensor1.Length || i == sensor1.Length - 1) return -1;
         
        int j = i;
        bool s1 = false;
        while(j < sensor1.Length && j + 1 < sensor1.Length && sensor1[j] == sensor2[j + 1]) {
            j++;
        } 
        if(j + 1 == sensor2.Length) s1 = true;

        j = i;
        bool s2 = false;
        while(j < sensor1.Length - 1 && j + 1 < sensor1.Length && sensor1[j + 1] == sensor2[j]) {
            j++;
        } 
        if(j + 1 == sensor1.Length) s2 = true;

        if((s1 && s2 )|| (s1 == false && s2 == false))  return -1;

        return s1 ? 1 : 2; 
    }
}
```