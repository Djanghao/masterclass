# Java Simple and easy to understand solution, 109 ms, faster than 85.05% clean code with comments

**Author:** satyaDcoder
**Votes:** 74
**Link:** [https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/1207571/](https://leetcode.com/problems/minimum-interval-to-include-each-query/solutions/1207571/)

---

**PLEASE UPVOTE IF YOU LIKE THIS SOLUTION**



```
class Solution {
    public int[] minInterval(int[][] intervals, int[] queries) {
        int numQuery = queries.length;
        
        //append index in query
        int[][] queriesWithIndex = new int[numQuery][2];
        for(int i = 0; i < numQuery; i++){
            queriesWithIndex[i] = new int[]{queries[i], i};
        }
        
        Arrays.sort(intervals, (a, b) -> (a[0] - b[0]));
        Arrays.sort(queriesWithIndex, (a, b) -> (a[0] - b[0]));
        
        //sort interval in increasing order of size
        PriorityQueue<int[]> minHeap = new PriorityQueue<int[]>((a, b) -> ((a[1] - a[0]) - (b[1] - b[0])));
        
        int[] result = new int[numQuery];
        
        int j = 0;
        for(int i = 0; i < queries.length; i++){
            int queryVal = queriesWithIndex[i][0];
            int queryIndex = queriesWithIndex[i][1];
            
            //add all the interval which start is less or equal than current query value 
            while(j < intervals.length && intervals[j][0] <= queryVal){
                minHeap.add(intervals[j]);
                j++;
            }
            
            //remove all the smallest size interval which end val is less than current query value
            while(!minHeap.isEmpty() && minHeap.peek()[1] < queryVal){
                minHeap.remove();
            }
            //now if heap is empty it means there is no interval which satisfy query val
            result[queryIndex] = minHeap.isEmpty() ? -1 : (minHeap.peek()[1] - minHeap.peek()[0] + 1); 
        }
        
        return result;
    }
}
```