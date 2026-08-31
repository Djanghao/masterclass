# Beat 100% PHP Solution with Explanation

**Author:** Jerespy
**Votes:** 0
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5623740/](https://leetcode.com/problems/snake-in-matrix/solutions/5623740/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First I had to generated the arrays manually to observe the pattern, then I noticed to go a step above was current position - n, while to go a step below was current postion + n. (See part B).

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param String[] $commands
     * @return Integer
     */
    function finalPositionOfSnake($n, $commands) {
        # position = 0;
        $current_position = 0;
        # Loop Command 
        for ($i=0; $i < count($commands); $i++) { 
            # If current command is LEFT position - 1;
            if ($commands[$i] === 'LEFT') {
                $current_position = $current_position - 1;
            }
            # if current command is RIGHT position + 1;
            if ($commands[$i] === 'RIGHT') {
                $current_position = $current_position + 1;
            }
            # if current command is UP position - n;
            if ($commands[$i] === 'UP') {
                $current_position = $current_position - $n;
            }
            # if current command is DOWN position + n;
            if ($commands[$i] === 'DOWN') {
                $current_position = $current_position + $n;
            }
            
        }
        return $current_position;
    }
}
```

# Part B (Not part of solution but will help you understand the solution)
Generating an nxn matrix

````
function matrixBuilder($row) : array {
        $returnArray = [];
        $temp = [];
        $size = $row * $row;
        for ($i=0; $i < $size; $i++) { 
            $temp[$i] = $i;
            if (($i + 1) % $row === 0) {
                array_push($returnArray, $temp);
                $temp = [];
            }
        }
        return $returnArray;
}


````