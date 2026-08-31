# PHP solution

**Author:** alanx15a2
**Votes:** 6
**Link:** [https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/533237/](https://leetcode.com/problems/decompress-run-length-encoded-list/solutions/533237/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function decompressRLElist($nums) {
        $length = count($nums);
        $answer = [];
        for ($i = 0; $i < $length; $i += 2) {
            $answer = array_merge($answer, array_fill(0, $nums[$i], $nums[$i+1]));
        }
        
        return $answer;
    }
}
```