# Intuitive PHP solution

**Author:** shihmiao
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-skyline-problem/solutions/4460436/](https://leetcode.com/problems/the-skyline-problem/solutions/4460436/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

Scan vertical line from left to right, and find the existing highest building.

# Approach
<!-- Describe your approach to solving the problem. -->

1. Record all points.
`NOTE 1` is why I use `(x, -y)` for the height of the left point and `(x, y)` for the height of the right point.
2. Sort all points in ascending order.
3. Scan all points from left to right.
4. Determine whether a building appeared at the `(x, |-height|)` and disappeared at the `(x, height)` and insert/remove the `|height|` to/from `$existingHeights`.
5. Check if the existing highest building changed at `(x, currentHeight)`. Insert to `skyline` if `highestHeight` changed.

## NOTE 1

If a building disappeared at the `(x, |-y|)` and another appeared at the `(x, y)`.
Scan `(x, -y)` before `(x, y)`, and the skyline will have two redundant points `(x, 0)` and `(x,y)`.
> Input:    `[[0,2,3],[2,5,3]]`
> Output:   `[[0,3],[2,0],[2,3],[5,0]]`
> Expected: `[[0,3],[5,0]]`
                                                                                             
If a building appeared at the `(x, |-y|)` and another disappeared at the `(x, y)`.
Scan `(x, -y)` before `(x, y)`, and the skyline will have consecutive horizontal lines.
> Input:    `[[0,2,3],[2,5,3]]`
> Output:   `[[0,3],[5,0]]`
> Expected: `[[0,3],[5,0]]`


# Code
```php
class Solution {

    public const LEFT = 0;
    public const RIGHT = 1;
    public const HEIGHT = 2;

    /**
     * @param Integer[][] $buildings
     * @return Integer[][]
     */
    function getSkyline($buildings) {
        $skyline = $points = [];
        foreach ($buildings as $key => $building) {
            // NOTE 1
            $points[] = [$building[self::LEFT], -$building[self::HEIGHT]];
            $points[] = [$building[self::RIGHT], $building[self::HEIGHT]];
        }
        sort($points);

        $currentHeight = 0;
        $existingHeights = [0];
        // Scan from left to right
        foreach ($points as $point) {
            list($x, $height) = $point;
            // A building appeared at the (x, -height) and disappeared at the (x, height).
            if ($height < 0) {
                $existingHeights[] = -$height;
            } else {
                $key = array_search($height, $existingHeights);
                if ($key) {
                    unset($existingHeights[$key]);
                }
            }

            $highestHeight = max($existingHeights);
            if ($currentHeight != $highestHeight) {
                // The existing highest building changed at (x, highestHeight).
                $currentHeight = $highestHeight;
                $skyline[] = [$x, $currentHeight];
            }
        }
        return $skyline;
    }
}
```