# If You Stuck, Maybe This Help To You Feel Better

**Author:** nguyenvanloi10101
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/4870304/](https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/4870304/)

---

# Description
Hello everyone,
As a developer, our are lazy on reading more text, so go directly on the below code.
Thank for copying!

# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function lastSubstring($s) {
        // Init essential something
        $minCh = substr($s, 0, 1);
        $chLastCheck = "";
        $positions = [];

        // Get positions of character which own max value
        for($i = 0; $i < strlen($s); $i++){
            $ch = substr($s, $i, 1);
            if($minChar < $ch){
                $minChar = $ch;
                $pos = [];
                array_push($positions, $i);
            }
            else if($minChar == $ch){
                if($minChar != $chLastCheck){
                    array_push($positions, $i);
                }
            }
            else{
                // Do nothing
            }

            $chLastCheck = $ch;
        }
        
        // Compare and get largest string
        $largestStr = "";
        foreach($positions as $pos){
            $strFromPosToEnd = substr($s, $pos);
            if($largestStr < $strFromPosToEnd){
                $largestStr = $strFromPosToEnd;
            }
        }

        return $largestStr;
    }
}
```