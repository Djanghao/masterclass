# Java | PriorityQueue | O(NlogN) time | O(N) space | Easy solution same as max profit in job schedule

**Author:** achinyar
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/2851910/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/2851910/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Intuition behind this is same as maximum profit in job scheduling problem.
1. Sort rides based on start time.
2. Use min heap(priority queue) while comparing end time.
3. Keep adding to the queue with cumulative profit. 
4. Keep track of max profit.

Note : Used Long array in queue instead of int array, since max value can be long and if int array was used, some of the test cases fail.

# Complexity
- Time complexity:O(NlogN)
 Sorting ride take O(NlogN). Iterating through each ride would take O(N). Hence total is (N + NlogN) = O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
  

- Space complexity: O(N). We store each ride in the queue ammounting to worst case O(N) time.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public long maxTaxiEarnings(int n, int[][] rides) {
        //Sort based on start time
        Arrays.sort(rides, (a,b) -> a[0] - b[0]);
        long max = 0;

        //Storing Long array instead of Int array, since max value is long.
        //Sort based on end time
        PriorityQueue<long[]> myQueue = new PriorityQueue<long[]>((a,b) -> Long.compare(a[0],b[0]));

        for (int i = 0; i < rides.length; i++) {
            int start = rides[i][0];
            int end = rides[i][1];
            long profit = end - start + Long.valueOf(rides[i][2]);

            while (!myQueue.isEmpty() && start >= myQueue.peek()[0]) {
                max = Math.max(max, myQueue.peek()[1]);
                myQueue.poll();
            }
            myQueue.offer(new long[] {end, profit + max});
        }

        while (!myQueue.isEmpty()) {
            max = Math.max(max, myQueue.poll()[1]);
        }

        return max;
    }
}

```