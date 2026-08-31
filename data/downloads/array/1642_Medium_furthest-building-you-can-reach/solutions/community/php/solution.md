# using SplMinHeap

**Author:** sswspb
**Votes:** 0
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4742780/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4742780/)

---

# Intuition
Use a priority queue (min heap) to store height differences. To overcome the height difference, we prefer to use bricks whenever possible and resort to ladders only when necessary. In this way, we can optimize the use of available resources and reach the farthest building.

# Approach
Initialize a priority queue (min heap) to store the height difference between neighboring buildings.
Iterate the heights array, calculating the height difference between neighboring buildings.
If the height difference is positive (indicating that the next building is taller), perform the following steps:
If the ladders are still available, move the height difference to the priority queue.
If the priority queue is full (contains more items than available ladders) and the current height difference is greater than the smallest queue difference, replace the smallest queue difference with the current queue difference and reduce the bricks accordingly.
If none of the above conditions are met, reduce the number of bricks by the current height difference.
If the number of bricks becomes negative, return the index of the last successfully reached building.
If the traversal is complete and the bricks are not over, return the index of the last building.

# Complexity
- Time complexity:
$$O(n log k)$$

- Space complexity:
$$O(k)$$

# Code
```
class Solution {

    /**
     * @param Integer[] $heights
     * @param Integer $bricks
     * @param Integer $ladders
     * @return Integer
     */
    function furthestBuilding($heights, $bricks, $ladders) {
        $n = count($heights);
        $pq = new SplMinHeap();

        for ($i = 0; $i < $n - 1; $i++) {
            $diff = $heights[$i + 1] - $heights[$i];
            if ($diff > 0) {
                if ($pq->count() < $ladders) {
                    $pq->insert($diff);
                } elseif ($pq->count() > 0 && $diff > $pq->top()) {
                    $bricks -= $pq->extract();
                    $pq->insert($diff);
                } else {
                    $bricks -= $diff;
                }
                if ($bricks < 0) return $i;
            }
        }

        return $n - 1;
    }
}
```