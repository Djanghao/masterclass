# Simple gready solution (beats 100% runtime)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/4727068/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/4727068/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For us, the sequence of planting times does not matter, but the growing time does (because the final time depends on this indicator). If we plant the flowers with the longest growing time first and then rest with the shortest, we can guarantee that when we finish planting all the flowers, we won't have to wait long for the flower to bloom because last planted flower has shortest growing time.
<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $plantTime
     * @param Integer[] $growTime
     * @return Integer
     */
    function earliestFullBloom($plantTime, $growTime) {
        $heap = new SplMaxHeap();

        for($i = 0; $i < count($plantTime); $i++) {
            $heap->insert([$growTime[$i], $plantTime[$i]]);
        }

        $bloomTime = 0;
        $plantFinishTime = 0;
        
        while(!$heap->isEmpty()) {
            $data = $heap->extract();
            $plantFinishTime += $data[1];
            $bloomTime = max($plantFinishTime + $data[0], $bloomTime);
        }

        return $bloomTime;
    }
}
```