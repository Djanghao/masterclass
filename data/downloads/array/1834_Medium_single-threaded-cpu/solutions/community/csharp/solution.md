# C#. 628ms. Sort input, process through priority queue.

**Author:** deljohnson
**Votes:** 3
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2965250/](https://leetcode.com/problems/single-threaded-cpu/solutions/2965250/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort, put applicable items in priority queue. Process item in PQ. March time forward appropriately and quickly.

# Approach
<!-- Describe your approach to solving the problem. -->
Follow intuition.

Priority order of CPU is combined into a long, a kludge, but fast. You could create a PQ with a custom comparer and make it more C# like.

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {

    public int[] GetOrder(int[][] tasks) {

        var order = tasks
            .Select( (x, i) => (new int [] {x[0], x[1], i}))
            .OrderBy(x => x[0])
            .ToArray();

        int orderIndex = 0;
        var pq = new PriorityQueue<int, long>(); // task index, sort order: processing time << 32 + index
        int time = order[orderIndex][0];
        var answer = new List<int>();

        while(answer.Count < tasks.Length){
            // load next group of tasks
            while( (orderIndex < order.Count()) && (order[orderIndex][0] <= time) ){
                pq.Enqueue(
                    order[orderIndex][2], 
                    order[orderIndex][2] + ((long)order[orderIndex][1] << 32) );
                orderIndex++;
            }

            // process task
            int dqIndex;
            long dqProcesingTime;
            if( pq.TryDequeue(out dqIndex, out dqProcesingTime)){
                
                dqProcesingTime = dqProcesingTime >> 32;
                answer.Add(dqIndex);
                time += (int)dqProcesingTime;

                // pq empty, still stuff to process, jump time forward to next tasks
                if( (orderIndex < order.Count()) 
                && (pq.Count == 0)
                && (time < order[orderIndex][0]) ){
                    time = order[orderIndex][0];
                }
            }

        }

        return answer.ToArray();

    }
}
```