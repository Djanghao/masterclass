# Kill Process PHP

**Author:** olaleye
**Votes:** 0
**Link:** [https://leetcode.com/problems/kill-process/solutions/4842814/](https://leetcode.com/problems/kill-process/solutions/4842814/)

---

# Intuition
Have a bucket of parent, and an array of children processes. Then we check if a parent in the bucket is the kill ID. If yes, we include the children into result.

# Approach
We create an associative array to hold the parents (key) and arrays of children (values) by looping through the pid.

We store the kill in an array and check if the associative array contains the kill ID as a parent so we can include its children in the results of processes to be killed.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {

    /**
     * @param Integer[] $pid
     * @param Integer[] $ppid
     * @param Integer $kill
     * @return Integer[]
     */
    function killProcess($pid, $ppid, $kill) {
        $children = [];

        for($i = 0; $i < count($pid); $i++) {
            if ($ppid[$i] !== 0 && $children[$ppid[$i]]) {
                array_push($children[$ppid[$i]], $pid[$i]);
                continue;
            }

            if ($ppid[$i] !== 0 && !$children[$ppid[$i]]) {
                $children[$ppid[$i]] = [];
                array_push($children[$ppid[$i]], $pid[$i]);
            }
        }

        $queue = [$kill];
        $result = [];

        while ($queue) {
            $current = array_shift($queue);
            array_push($result, $current);

            if (array_key_exists($current, $children)) {
                foreach($children[$current] as $item) {
                    array_push($queue, $item);
                }

                $children[$current] = [];
            }
        }

        return $result;
    }
}
```