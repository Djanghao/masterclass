# Java, one pass, 7 lines, O(1) space

**Author:** climberig
**Votes:** 62
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1865693/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/1865693/)

---

```java
 public int countHillValley(int[] a){
        int r = 0, left = a[0];
        for(int i = 1; i < a.length - 1; i++)
            if(left < a[i] && a[i] > a[i + 1] || left > a[i] && a[i] < a[i + 1]){
                r++;
                left = a[i];
            }
        return r;
    }