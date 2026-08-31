# I solve this

**Author:** AhsanSoftEngr
**Votes:** 0
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/5067169/](https://leetcode.com/problems/open-the-lock/solutions/5067169/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String[] $deadends
     * @param String $target
     * @return Integer
     */
    function openLock($deadends, $target) {
        $deadSet = array_flip($deadends); // Convert deadends to a hash map for faster lookup
        $visited = ["0000" => true]; // Keep track of visited states
        $queue = new SplQueue();
        $queue->enqueue(["0000", 0]); // Add initial state to the queue with step count 0

        while (!$queue->isEmpty()) {
            list($current, $steps) = $queue->dequeue();

            if ($current === $target) {
                return $steps;
            }

            // Check if the current state is a dead end
            if (isset($deadSet[$current])) {
                continue;
            }

            // Generate all possible next states by turning each wheel
            for ($i = 0; $i < 4; $i++) {
                // Turn wheel up
                $up = $this->turnWheel($current, $i, true);
                if (!isset($visited[$up])) {
                    $visited[$up] = true;
                    $queue->enqueue([$up, $steps + 1]);
                }

                // Turn wheel down
                $down = $this->turnWheel($current, $i, false);
                if (!isset($visited[$down])) {
                    $visited[$down] = true;
                    $queue->enqueue([$down, $steps + 1]);
                }
            }
        }

        // If target is not reachable
        return -1;
    }

    // Helper function to turn a wheel either up or down
    function turnWheel($str, $wheel, $up) {
        $arr = str_split($str);
        $digit = intval($arr[$wheel]);

        // Turn up
        if ($up) {
            $newDigit = ($digit + 1) % 10;
        } else { // Turn down
            $newDigit = ($digit - 1 + 10) % 10;
        }

        $arr[$wheel] = strval($newDigit);
        return implode("", $arr);
    }
}

// Test the function
$solution = new Solution();
$deadends = ["0201", "0101", "0102", "1212", "2002"];
$target = "0202";
echo $solution->openLock($deadends, $target); // Output: 6

```