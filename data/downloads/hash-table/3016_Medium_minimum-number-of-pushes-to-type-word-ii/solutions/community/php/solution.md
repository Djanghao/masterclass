# ✅ Php easy and understandable solution

**Author:** azizbekeshonaliyev
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/4604158/](https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii/solutions/4604158/)

---

# Code

class Solution {

    /**
     * @param String $word
     * @return Integer
     */
    function minimumPushes($word) {

        $array = str_split($word,1);

        $map_key_value = array_count_values($array);

        arsort($map_key_value);

        $result = 0; $iterator = 8;

        foreach($map_key_value as $alpha => $count) {
            $result += intdiv($iterator,8) * $count; $iterator++;
        }

        return $result;
    }
}