# 100% faster PHP solution

**Author:** mamunsabuj
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/4198872/](https://leetcode.com/problems/shortest-palindrome/solutions/4198872/)

---


# Code
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function shortestPalindrome($s) {
        if(strlen($s) < 2 || $s == strrev($s)){
            return $s;
        }
        $result = '';
        $palinStr = [];
        $strArr = preg_split('/(.)(?!\\1|$)\\K/', $s);
        
        //Use for Longest string
        if($strArr[0] == $strArr[count($strArr)-1]){
            $counter = 1;
            for($i=count($strArr)-1; $i>=0; $i--)
            {
                // Implode parts of array for generate sub string
                $substr = implode(array_slice($strArr, $i, $counter++));
                $newStr = strrev($substr) . $s;
                if($newStr == strrev($newStr)){
                    $result = $newStr;
                    break;
                }
            }
        }else{
            // Use for shortest string
            $len = strlen($s);
            $counter = 1;
            for($i=$len; $i>=1; $i--)
            {
                //Generate substring and checking
                $substr = substr($s, $i-1, $counter++);
                $newStr = strrev($substr) . $s;
                if($newStr == strrev($newStr)){
                    $result = $newStr;
                    break;
                }
            }
        }
        return $result;
    }
}
```