# Two solutions - Similar to Meeting Room2

**Author:** spookie886
**Votes:** 0
**Link:** [https://leetcode.com/problems/brightest-position-on-street/solutions/4530911/](https://leetcode.com/problems/brightest-position-on-street/solutions/4530911/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Solution1: initialize two arrays for start times and end times, and sort them seperately
```
class Solution {
    public int brightestPosition(int[][] lights) {
        //sweep line
        //lights[i] = [positioni, rangei]
        //[positioni - rangei, positioni + rangei]
        
        //*** -108 <= positioni <= 108
        //cannot use prefix sum because the array is huge and size is undefined

        //interval overlap problem

        //find start index of range that is overlapped with most intervals

        int n = lights.length;
        int[] start = new int[n];
        int[] end = new int[n];

        for(int i = 0; i < n; i++) {
            int pos = lights[i][0];
            int range = lights[i][1];

            start[i] = pos - range;
            end[i] = pos + range;
        }

        Arrays.sort(start);
        Arrays.sort(end);

        int max = 0;
        int index = Integer.MAX_VALUE;
        int count = 0;

        int s = 0;
        int e = 0;

        //iterate base on end
        while(s < n && e < n) {
            //there is overlap
            if(start[s] <= end[e]) {
                count++;

                //update max and index
                if(count > max) {
                    index = start[s];
                    max = count;
                }

                s++;
            }else{ //no overlap
                e++;
                count--;

            }
        }

        return index;
    }
}
```
solution 2: set up a range array just like meeting room2, and use priorityqueue
```
class Solution {
    public int brightestPosition(int[][] lights) {
        int n = lights.length;

        int[][] intervals = new int[n][2];

        for(int i = 0; i < n; i++) {
            int pos = lights[i][0];
            int range = lights[i][1];

            intervals[i][0] = pos - range;
            intervals[i][1] = pos + range;
        }

        //sort intervals by start time
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        //store end times
        int maxCount = 0;
        int ans = 0;

        for(int i = 0; i < n; i++) {
            //if does not overlap
            while(!pq.isEmpty() && intervals[i][0] > pq.peek()) {
                pq.poll();
            }

            pq.offer(intervals[i][1]);

            //pq stores clusters of overlapping intervals 
            if(pq.size() > maxCount) {
                maxCount = pq.size();

                ans = intervals[i][0];
            }
        }

        return ans;
    }
}
```