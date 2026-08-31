# "Robot Battle Simulation: Calculating Remaining Health" 100% 100% PHP

**Author:** jeniapppqqq
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-collisions/solutions/4137788/](https://leetcode.com/problems/robot-collisions/solutions/4137788/)

---

# Intuition
Simulate the robot battles while tracking their positions and health.

# Approach
Sort the robot indices by position, process them in order while simulating battles between left-moving and right-moving robots, and return the remaining health.

# Complexity
- Time complexity: O(n*log(n))

- Space complexity: O(n)

# Code
```
class Solution {
    /**
     * @param Integer[] $positions
     * @param Integer[] $healths
     * @param String $directions
     * @return Integer[]
     */
    public function survivedRobotsHealths($positions, $healths, $directions) {
        // Create an array to store robot indices and sort them based on positions
        $sort = [];
        for ($i = 0; $i < count($positions); ++$i) {
            $sort[$i] = $i;
        }
        usort($sort, function($a, $b) use ($positions) {
            return $positions[$a] - $positions[$b];
        });

        // Initialize two arrays to store robot data
        $next = []; // Array to keep track of robots moving to the right
        $data = []; // Array to store final data

        // Iterate through robots in sorted order of positions
        foreach ($sort as $i) {
            if ($directions[$i] == 'R') {
                // If robot is moving right, add it to the 'next' array
                array_push($next, [$i, $healths[$i]]);
            } else {
                $cur = $healths[$i];
                // If robot is moving left, simulate its movement and adjust health
                while (!empty($next) && $next[count($next) - 1][1] < $cur) {
                    $cur -= 1;
                    array_pop($next);
                }
                if (empty($next)) {
                    // If there are no robots moving right, add the left-moving robot to 'data'
                    array_push($data, [$i, $cur]);
                } else {
                    // If there are robots moving right, adjust their health and add to 'next'
                    $tmp = array_pop($next);
                    if ($tmp[1] > $cur) {
                        $tmp[1] -= 1;
                        array_push($next, $tmp);
                    }
                }
            }
        }

        // Add the remaining robots moving to the right to 'data'
        foreach ($next as $r) {
            array_push($data, $r);
        }

        // Sort 'data' based on robot indices and extract the health values
        usort($data, function($a, $b) {
            return $a[0] - $b[0];
        });

        // Extract and return the remaining health values
        $res = [];
        foreach ($data as $i) {
            array_push($res, $i[1]);
        }
        return $res;
    }
}

```