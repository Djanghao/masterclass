# Simple solution with MinHeap (beats 100% runtime)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4667401/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/4667401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Connect two of the smallest sticks and continue doing this until you get only one stick.
You need to use MinHeap to extract the smallest numbers efficiently. 
<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $sticks
     * @return Integer
     */
    function connectSticks($sticks) {
        $heap = new SplMinHeap();
        
        foreach($sticks as $stick) {
            $heap->insert($stick);
        }

        $cost = 0;

        while($heap->count() > 1) {
            $newStick = $heap->extract() + $heap->extract();
            $cost += $newStick;
            $heap->insert($newStick);
        }

        return $cost;
    }
}

```