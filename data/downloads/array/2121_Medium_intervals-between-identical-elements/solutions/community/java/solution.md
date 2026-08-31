# Java | TC: O(N) | Simple | Explanation

**Author:** Gnaby
**Votes:** 81
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/1647522/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/1647522/)

---

**Approach:**
```
Consider 1's at different postions of an array. 
x  y  z   p   q
1  1  1   1   1

consider 1 at index z: |z - x| + |z - y| + |z - p| + |z - q|

when we are looping from left to right we are storing sum and count of previous indices of num in maps.
|z - x| + |z - y| = z - x + z - y, since z is greater than x and y.
z - x + z - y = 2z - (x + y) = (count) * (currentIndex) - (sum).

Similarly we can calculate the |z - p| + |z - q| when we loop from right to left.
```
**Solution:**
```
class Solution {
    public long[] getDistances(int[] arr) {
        long[] output = new long[arr.length];
        Map<Integer, Long> sumMap = new HashMap<>();
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int i = 0; i < arr.length; ++ i) {
            if (!sumMap.containsKey(arr[i])) {
                sumMap.put(arr[i], 0l);
                countMap.put(arr[i], 0);
            }
            
            output[i] += i * (long)countMap.get(arr[i]) - sumMap.get(arr[i]);
            sumMap.put(arr[i], sumMap.get(arr[i]) + i);
            countMap.put(arr[i], countMap.get(arr[i]) + 1);
        }
        
        sumMap = new HashMap<>();
        countMap = new HashMap<>();
        int len = arr.length;
        for (int i = len - 1; i >= 0; -- i) {
            if (!sumMap.containsKey(arr[i])) {
                sumMap.put(arr[i], 0l);
                countMap.put(arr[i], 0);
            }
            
            output[i] += (len - i - 1) * (long)countMap.get(arr[i]) - sumMap.get(arr[i]);
            sumMap.put(arr[i], sumMap.get(arr[i]) + (len - i - 1));
            countMap.put(arr[i], countMap.get(arr[i]) + 1);
        }
        
        return output;
    }
}
```