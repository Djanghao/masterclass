# Simple PHP code

**Author:** rezaa98
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/6050993/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/6050993/)

---

# Code
```php []
class Solution {

    /**
     * @param Integer $limit
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function queryResults($limit, $queries) {
        $balls = []; // Tracks the color of each ball
        $colorFrequency = []; // Tracks the frequency of each color
        $result = []; // Stores the number of distinct colors after each query

        foreach ($queries as $query) {
            $ball = $query[0]; // Ball index
            $color = $query[1]; // Color to apply

            // Check if the ball already has a color
            if (isset($balls[$ball])) {
                $oldColor = $balls[$ball];

                // Decrease the frequency of the old color
                $colorFrequency[$oldColor]--;
                if ($colorFrequency[$oldColor] === 0) {
                    unset($colorFrequency[$oldColor]); // Remove the color if it's no longer used
                }
            }

            // Assign the new color to the ball
            $balls[$ball] = $color;

            // Increase the frequency of the new color
            if (!isset($colorFrequency[$color])) {
                $colorFrequency[$color] = 0;
            }
            $colorFrequency[$color]++;

            // Add the current count of distinct colors to the result
            $result[] = count($colorFrequency);
        }

        return $result;
    }
}
```