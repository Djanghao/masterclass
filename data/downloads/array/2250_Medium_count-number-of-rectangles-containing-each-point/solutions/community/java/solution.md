# Java solutin using TreeMap and BinarySearch

**Author:** hss15
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1976843/](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/solutions/1976843/)

---


Prepare a TreeMap with key as `y` and values as list of corresponding `x` for all the rectangle.
Now we can get the range of `y` co-ordinagtes in `log(n)` time using TreeMap function `subMap` and 
for each `y` in this submap, we can get the list of `x` coordinate and run binary search (after sorting it one time) on it to find the valid `x` co-ordinate of rectangles in `log(n)` time.
    
The key observaion here is the range of `y`. It can only go from 1 to 100.
If instead of `y`, you use `x` of rectangle as the key in the TreeMap, the code will TimeOut since `x` can vary on much wider range hence you will be running binary search too many times.

```
class Solution {
    public int[] countRectangles(int[][] rectangles, int[][] points) {
        int max = Integer.MIN_VALUE;
        
        TreeMap<Integer, List<Integer>> rects = new TreeMap<>();
        for(int[] rect : rectangles) {
            if (!rects.containsKey(rect[1])) {
                rects.put(rect[1], new ArrayList<Integer>());
            }
            
            rects.get(rect[1]).add(rect[0]);
            max = Math.max(max, rect[1]);
        }
        
        for(int k : rects.keySet()) {
            Collections.sort(rects.get(k));
        }
        
        int[] ans = new int[points.length];
        for(int i = 0; i < points.length; i++) {
            if (points[i][1] > max) {
                continue;
            }

            int count = 0;
            
            for(int key : rects.subMap(points[i][1], max + 1).keySet()) {
                List<Integer> y = rects.get(key);
                
                count += binarySearch(y, points[i][0]);
            }
            
            ans[i] = count;
        }

        return ans;
    }
    
    private int binarySearch(List<Integer> vals, int val) {
        int lo = 0;
        int hi = vals.size() - 1;
        int id = -1;
        
        while(lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            
            if (vals.get(mid) < val) {
                lo = mid + 1;
            } else {
                id = mid;
                hi = mid - 1;
            }
        }
        
        if (id < 0) {
            return 0;
        }
        
        return vals.size() - id;
    }
}
```