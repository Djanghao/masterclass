# [Java] Easy to understand O(n logn) based on TreeMap

**Author:** yaro_is
**Votes:** 22
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/814472/](https://leetcode.com/problems/find-right-interval/solutions/814472/)

---

1. One pass (N) to store all start points intervals[i][0] into the TreeMap which provides (log n) to sort the entries
2. Create answer array to store output next closest intervals
3. One pass (N) to find next closest (relatively to the end) start of the interval if present
4. That's it, Enjoy :) 
```
 public int[] findRightInterval(int[][] intervals) {
        TreeMap<Integer, Integer> startPoints = new TreeMap<>();
        for(int i=0; i<intervals.length; i++){
            startPoints.put(intervals[i][0], i);
        }
        
        int[] ans = new int[intervals.length];
        for(int i=0; i<intervals.length; i++){
            Integer nextClosestStartPoint = startPoints.ceilingKey(intervals[i][1]);
            ans[i]= nextClosestStartPoint==null ? -1 : startPoints.get(nextClosestStartPoint);
        }
        return ans;
    }
```