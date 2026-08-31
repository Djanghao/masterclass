# PHP reg exp 100% faster best practices easy code one for

**Author:** narziknutulov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/2606093/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/2606093/)

---

class Solution {

    /**
     * @param String $allowed
     * @param String[] $words
     * @return Integer
     */
    function countConsistentStrings($allowed, $words) {
        $count = 0;
        for($k=0;$k<count($words);$k++){
            if(empty(preg_match('/[^'.$allowed.']/', $words[$k], $output_array))){
                $count++;
            }
        }
        return $count;
        
    }
}