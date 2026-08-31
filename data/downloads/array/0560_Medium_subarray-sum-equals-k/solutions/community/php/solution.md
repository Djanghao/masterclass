# PHP Solution, O(n) Time and Space Complexity

**Author:** gech2me
**Votes:** 1
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/2639967/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/2639967/)

---

# PHP Solution.
**Time complexity**: O(n)
**Space Complexity**: O(n)
```
function subarraySum($nums, $k) {
        $size = sizeof($nums);
        $occurrence = [1];
        $counter = 0;
        $currentSum = 0;

        for($i = 0; $i < $size; $i++) {
            $currentSum += $nums[$i];
            if(array_key_exists($currentSum - $k, $occurrence)) {
                $counter += $occurrence[$currentSum - $k];
            }

            if(array_key_exists($currentSum, $occurrence)) {
                $occurrence[$currentSum] += 1;
            } else {
                $occurrence[$currentSum] = 1;
            }
        }

        return $counter;
    }
```