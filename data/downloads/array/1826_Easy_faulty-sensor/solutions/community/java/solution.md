# Java, Simple Solution 0ms Explained.

**Author:** Student2091
**Votes:** 8
**Link:** [https://leetcode.com/problems/faulty-sensor/solutions/1642343/](https://leetcode.com/problems/faulty-sensor/solutions/1642343/)

---

**Idea**
We can identify the faulty sensor **if and only if** only one of the sensors can be shifted to another, that is, sensor 1 can be shifted to sensor 2, or vice versa (2 to 1), but we can't identify the faulty sensor if both can be shifted to one another (1 to 2 and 2 to 1) or both cannot be shifted to one another.   
```
class Solution {
    public int badSensor(int[] o, int[] t) {
        boolean one = canShift(o, t); //can o be shfited to t?
        boolean two = canShift(t, o); //can t be shifted to o?
        if (one == two) return -1;    //both true or both false, then we can't tell
        return one? 1 : 2;
    }

    private static boolean canShift(int[] o, int[] t){ //return true if o can be shifted to t
        int i = 0, j = 0;
        while(j < o.length){
            if (o[i] != t[j]) j++;
            else {i++; j++;}
        }

        return i == o.length - 1; 
		//there should be only 1 mismatch, so i has to be at o.length - 1
    }
}
```