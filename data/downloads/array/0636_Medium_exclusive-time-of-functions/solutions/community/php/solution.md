# PHP Solution with Stack and Regex

**Author:** drewsberger
**Votes:** 0
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/3705935/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/3705935/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->


# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n + m)$$ where m is the length of `$logs` and n is `$n`
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n + m)$$ where n is `$n` and m is the number of "recursive calls" in `$logs`
# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param String[] $logs
     * @return Integer[]
     */
    function exclusiveTime($n, $logs) {
        // maintain a stack of "started" functions
        $stack = [];

        // maintain a map of function id to time spent on top of the stack
        $function_to_runtime = [];
        for ($i = 0; $i < $n; $i++) {
            $function_to_runtime[$i] = 0;
        }

        $last_timestamp = 0;

        while ($logs) {
            // get the next log
            $log = array_shift($logs);
            
            // parse the log
            preg_match("/^\\d+/", $log, $function_id);
            $function_id = $function_id[0];
            preg_match("/\\d+$/", $log, $log_timestamp);
            $log_timestamp = $log_timestamp[0];

            // take actions
            if (preg_match("/start/", $log)) { // start log
                $function_to_runtime[end($stack)] += $log_timestamp - $last_timestamp;
                $last_timestamp = $log_timestamp;
                $stack[] = $function_id;
            } else { // must be an end log
                $log_timestamp++; // end logs indicate the _end_ of the given time
                $function_to_runtime[$function_id] += $log_timestamp - $last_timestamp;
                $last_timestamp = $log_timestamp;
                array_pop($stack);
            }
        }

        return $function_to_runtime;
    }
}
```