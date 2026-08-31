# PHP Sliding Windows with ru comments

**Author:** Vlados117
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/3596333/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/3596333/)

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
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function longestOnes($nums, $k) {
    $maxCount = 0; // \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0435\u0434\u0438\u043D\u0438\u0446
    $zeroCount = 0; // \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0443\u043B\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0443\u0436\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u044B
    $left = 0; // \u041B\u0435\u0432\u0430\u044F \u0433\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043B\u0430\u0432\u0430\u044E\u0449\u0435\u0433\u043E \u043E\u043A\u043D\u0430

    for ($right = 0; $right < count($nums); $right++) {
        // \u0415\u0441\u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 - 0, \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u043C \u0441\u0447\u0435\u0442\u0447\u0438\u043A \u043D\u0443\u043B\u0435\u0439
        if ($nums[$right] == 0) {
            $zeroCount++;
        }

        // \u0415\u0441\u043B\u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043D\u0443\u043B\u0435\u0439 \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C k, \u0441\u0434\u0432\u0438\u0433\u0430\u0435\u043C \u043B\u0435\u0432\u0443\u044E \u0433\u0440\u0430\u043D\u0438\u0446\u0443 \u043E\u043A\u043D\u0430
        if ($zeroCount > $k) {
            // \u0415\u0441\u043B\u0438 \u043B\u0435\u0432\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0431\u044B\u043B 0, \u0443\u043C\u0435\u043D\u044C\u0448\u0430\u0435\u043C \u0441\u0447\u0435\u0442\u0447\u0438\u043A \u043D\u0443\u043B\u0435\u0439
            if ($nums[$left] == 0) {
                $zeroCount--;
            }
            $left++;
        }

        // \u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0435\u0434\u0438\u043D\u0438\u0446
        $maxCount = max($maxCount, $right - $left + 1);
    }

    return $maxCount;
    }
}
```