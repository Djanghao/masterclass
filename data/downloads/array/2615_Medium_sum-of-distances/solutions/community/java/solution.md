# why leetcode why 🥲 | Easiest Solution

**Author:** HarshitMaurya
**Votes:** 50
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/3395683/](https://leetcode.com/problems/sum-of-distances/solutions/3395683/)

---

![image](./images/0.jpg)

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

```
class Solution {
    public long[] distance(int[] arr) {
        long[] output = new long[arr.length];
        Map<Integer, Long> sumMap = new HashMap<>();
        Map<Integer, Integer> countMap = new HashMap<>();
        for (int i = 0; i < arr.length; ++i) {
            if (!sumMap.containsKey(arr[i])) {
                sumMap.put(arr[i], 0l);
                countMap.put(arr[i], 0);
            }

            output[i] += i * (long) countMap.get(arr[i]) - sumMap.get(arr[i]);
            sumMap.put(arr[i], sumMap.get(arr[i]) + i);
            countMap.put(arr[i], countMap.get(arr[i]) + 1);
        }

        sumMap = new HashMap<>();
        countMap = new HashMap<>();
        int len = arr.length;
        for (int i = len - 1; i >= 0; --i) {
            if (!sumMap.containsKey(arr[i])) {
                sumMap.put(arr[i], 0l);
                countMap.put(arr[i], 0);
            }

            output[i] += (len - i - 1) * (long) countMap.get(arr[i]) - sumMap.get(arr[i]);
            sumMap.put(arr[i], sumMap.get(arr[i]) + (len - i - 1));
            countMap.put(arr[i], countMap.get(arr[i]) + 1);
        }

        return output;
    }
}

```

***Below is an implementation without using maps and reusing the code for both cases***

```
public long[] getDistances(int[] a){
        long[] r = new long[a.length];
        sum(a, 0, 1, r);
        sum(a, a.length - 1, -1, r);
        return r;
    }

    void sum(int[] a, int start, int increment, long[] r){
        long[] count = new long[100_001], sum = new long[100_001];
        for(int i = start, j = 0; 0 <= i && i < r.length; i += increment, j++){
            r[i] += count[a[i]] * j - sum[a[i]];
            count[a[i]]++;
            sum[a[i]] += j;
        }
    }
```

**Similer Question** : https://leetcode.com/problems/intervals-between-identical-elements/
Explanation Credit : @Gnaby , @climberig

