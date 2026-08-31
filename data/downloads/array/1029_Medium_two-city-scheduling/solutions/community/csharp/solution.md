# Solution using PriorityQueue. Time O(nlogn)

**Author:** laihm6
**Votes:** 2
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/4155467/](https://leetcode.com/problems/two-city-scheduling/solutions/4155467/)

---

# Intuition
We sort the costs by the diff between cost_to_cityA and cost_to_cityB

# Approach
We can employ a PriorityQueue of size n to sort costs. The priority key we use is `cost_to_cityA - cost_to_cityB`(e.g. [50, 150] => key: -100). PriorityQueue inherently sorts in ascending order by default, meaning that the item with the lowest priority will be dequeued first. Consequently, we will utilize `cost_to_cityA` for the first half of the queue and `cost_to_cityB` for the second half. This arrangement reflects that choosing to fly to `cityA` will result in the most significant cost savings compared to flying to `cityB`.

# Complexity
- Time complexity:
$$O(nlogn)$$ 

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int TwoCitySchedCost(int[][] costs) {
        PriorityQueue<int[], int> pq = new();
        foreach(var cost in costs){
            int diff = cost[0] - cost[1];
            pq.Enqueue(cost, diff);
        }

        int n = costs.Length/2;
        int minCost = 0;
        for(int i=0; i<costs.Length; i++){
            var cost = pq.Dequeue();
            if(i<n){
                minCost += cost[0];
            }else{
                minCost += cost[1];
            }
        }
        return minCost;
    }
}
```