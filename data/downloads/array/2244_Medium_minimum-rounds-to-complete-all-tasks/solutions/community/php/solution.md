# Runtime 525 ms / Memory 32.8 MB

**Author:** ordinary9843
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2998758/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/2998758/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {

    /**
     * @param Integer[] $tasks
     * @return Integer
     */
    function minimumRounds($tasks) {
        $res = 0;
        $values = array_count_values($tasks);
        foreach ($values as $count) {
            if ($count < 2) {
                return -1;
            }

            $res += (int)($count / 3);
            ($count % 3 !== 0) && $res++;
        }

        return $res;
    }
}
```