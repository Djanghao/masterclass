# Beats 100% || O(n) Space O(n * log(log(M))) Time || Recursion || HashMap || No Sorting

**Author:** nathanwtobin
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/5979851/](https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/5979851/)

---

# Intuition
Using a hashmap and recursive functions, we can find the solution in O(n) time and space. 

# Approach
1. <b>Hashmap</b> Loop over the array and to put each value into a hashmap so we can lookup each value
2. <b>Recursive function</b> Given a value in the array and the hashmap, we can calculate the square root and square of the value. The can be looked up in the hashmap, and if we find those, recursively calculate the same for each.
3. <b>Optimization</b> Because it is guarenteed that each value will only have one root and one square, each time we find it in the hashmap recursively, we can unset it from the map. 


# Complexity
- Time complexity:
$$O(n)$$ to fill the hashmap ($$O(1)$$ lookup)
$$O(n)$$ to loop over for each value
Each value takes approximately $$O(log(log(x)))$$
Overall Complexity: $$O(n * log(log(M)))$$ where $$M$$ is the maximum value in `nums`

- Space complexity:
$$O(n)$$ for the hashmap

# Code
```php []
class Solution {

    function power(&$hash, $num) {
        unset($hash[$num]);
        if (!$hash[$num*$num]) {
            return 1;
        }
        return 1 + $this->power($hash, $num*$num);
    }

    function root(&$hash, $num) {
        $root = sqrt($num);
        $hasRoot = $root === floor($root);
        unset($hash[$num]);
        if (!$hasRoot || !$hash[$root]) {
            return 1;
        }
        return 1 + $this->root($hash, $root);
    }

    function find(&$hash, $num) {
        $root = sqrt($num);
        $hasRoot = $root === floor($root);
        unset($hash[$num]);
        if (($hasRoot && $hash[$root]) && $hash[$num*$num]) {
            return 1 + $this->root($hash, $root) + $this->power($hash, $num*$num);
        }
        if ($hash[$num*$num]) {
            return 1 + $this->power($hash, $num*$num);
        }
        if (($hasRoot && $hash[$root])) {
            return 1 + $this->root($hash, $root);
        }
        return 1;
    }

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestSquareStreak($nums) {
        $max= 0;
        $hash = [];
        foreach ($nums as $num) {
            $hash[$num] = true;
        }
        foreach ($hash as $num => $value) {
            $max = max($this->find($hash, $num), $max);
        }
        return $max > 1 ? $max : -1;
    }
}
```