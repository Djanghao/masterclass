# Simple one with strings

**Author:** gaxz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4295615/](https://leetcode.com/problems/find-unique-binary-string/solutions/4295615/)

---

# Code
```
class Solution {

    /**
     * @param String[] $nums
     * @return String
     */
    function findDifferentBinaryString($nums) {

        $count = count($nums);
        
        $result = str_repeat("0", $count);

        for ($i = 0; $i < count($nums); $i++) {
            if (!in_array($result, $nums)) {
                return $result;
            }

            $result[$i] = $result[$i] == "0" ? "1" : "0";
        }

        return $result;
    }
}
```