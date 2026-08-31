# Solution Example (7 ms, 19 MB)

**Author:** mohax216
**Votes:** 1
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/3544521/](https://leetcode.com/problems/strong-password-checker/solutions/3544521/)

---

\u26A0 This is not the best solution to this problem, but you can use it as the basis of your code.

# Perfomance
Runtime: 7 ms
Memory: 19 MB

# Code
```
class Solution {

    /**
     * @param String $password
     * @return Integer
     */
    function strongPasswordChecker($password) {
        $passwordCharList = str_split($password);
    
        $missingType = 3;
        $numberList = range(48, 57);
        $charListCapital = range(65, 90); 
        $charListLowercase = range(97, 122);

        $numberFlag = false;
        $capitalFlag = false;
        $lowercaseFlag = false;

        foreach ($passwordCharList as $key => $value){
            if (!$numberFlag && in_array(ord($value), $numberList)) { 
                $numberFlag = true;
            } else if (!$capitalFlag && in_array(ord($value), $charListCapital)) {
                $capitalFlag = true;
            } else if (!$lowercaseFlag && in_array(ord($value), $charListLowercase)) {
                $lowercaseFlag = true;
            }
        }
        
        $numberFlag && $missingType--;
        $capitalFlag && $missingType--;
        $lowercaseFlag && $missingType--;
        
        $change = 0;
        $first = 0;
        $second = 0;
        $charKey = 2;

        while ($charKey < strlen($password)){
            if ($passwordCharList[$charKey] === $passwordCharList[$charKey-1] 
                && $passwordCharList[$charKey] === $passwordCharList[$charKey-2]) {
                $countOfRepeat = 2;

                while ($charKey<strlen($password) 
                    && $passwordCharList[$charKey] === $passwordCharList[$charKey-1]) {
                    $countOfRepeat++;
                    $charKey++;
                }
                
                $change += floor($countOfRepeat/3);
                
                $countOfRepeat % 3 === 0 && $first += 1;
                $countOfRepeat % 3 === 1 && $second += 2;     

                continue;
            }
            
            $charKey++;
        }
        
    
        if (strlen($password) < 6) {
            return max($missingType, 6-strlen($password));
        } else if (strlen($password) >= 6 && strlen($password) <= 20) {
            return max($missingType, $change);
        }

        $removeKey = strlen($password) - 20;
            
        $change -= min($removeKey, $first);
        $change -= floor(min(max($removeKey - $first, 0), $second) / 2);
        $change -= floor(max($removeKey - $first - $second, 0) / 3);
            
        return $removeKey + max($missingType, $change);
    }
}
```