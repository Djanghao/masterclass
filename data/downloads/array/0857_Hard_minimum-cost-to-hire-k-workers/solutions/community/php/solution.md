# Minimize Total Wage Cost for Hiring Workers

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5141899/](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/solutions/5141899/)

---

# Intuition
We aim to minimize the total wage cost to form a group of k workers satisfying the given conditions. To achieve this, we need to prioritize hiring workers with lower wage-to-quality ratios while ensuring that the total quality of the group meets the required conditions.

# Approach
1. We create an array of workers, each represented by their wage-to-quality ratio.
2. We sort the workers by their wage-to-quality ratio in ascending order.
3. We iterate through the sorted workers, maintaining a running total of the quality of the workers considered so far.
4. We use a max heap to keep track of the top k qualities of the workers encountered.
5. At each step, if the heap size exceeds k, we remove the worker with the maximum quality from the heap and adjust the total quality accordingly.
6. When the heap size reaches k, we calculate the total wage cost for the current group of workers and update the minimum cost if necessary.
7. Finally, we return the minimum total wage cost found.

# Complexity
- Time complexity:
O(n log n) for sorting the workers and O(n log k) for maintaining the max heap, where n is the number of workers.

- Space complexity:
O(n) for storing the workers' wage-to-quality ratios and the max heap.

# Code
```
class Solution {

    /**
     * @param Integer[] $quality
     * @param Integer[] $wage
     * @param Integer $k
     * @return Float
     */
    function mincostToHireWorkers($quality, $wage, $k) {
        $n = count($quality);
        $workers = [];
        
        // Create an array of workers with their wage-to-quality ratio
        for ($i = 0; $i < $n; $i++) {
            $workers[] = [$wage[$i] / $quality[$i], $quality[$i]];
        }
        
        // Sort workers by their wage-to-quality ratio
        usort($workers, function($a, $b) {
            return $a[0] <=> $b[0];
        });
        
        $minCost = PHP_INT_MAX;
        $totalQuality = 0;
        $maxHeap = new SplMaxHeap();
        
        foreach ($workers as $worker) {
            $totalQuality += $worker[1];
            $maxHeap->insert($worker[1]);
            
            if ($maxHeap->count() > $k) {
                $totalQuality -= $maxHeap->extract();
            }
            
            if ($maxHeap->count() === $k) {
                $minCost = min($minCost, $worker[0] * $totalQuality);
            }
        }
        
        return $minCost;
    }
}
```