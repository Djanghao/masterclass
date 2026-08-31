# PHP solution with comments without is_numeric() or regular expression

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-number/solutions/4458748/](https://leetcode.com/problems/valid-number/solutions/4458748/)

---

# Code
```
class Solution {
    function isNumber($s) {
        $s = str_replace("E","e",$s);
        $parts = explode("e",$s);
        
        if(count($parts) == 1){
            // A decimal number or an integer.
            return $this->isDecimal($parts[0]) || $this->isInteger($parts[0]);
        }elseif(count($parts) == 2){
            $a = $this->isDecimal($parts[0]) || $this->isInteger($parts[0]);
            // An 'e' or 'E', followed by an integer.
            $b = $this->isInteger($parts[1]);
            return $a && $b;
        }else{
            return false;
        }
    }

    function isInteger($s){
        // A sign character 
        if(in_array($s[0],['-','+'])){
            $s = substr($s,1);
        }
        // One or more digits.
        return $this->isDigits($s);
    }

    function isDecimal($s){
        // A sign character
        if(in_array($s[0],['-','+'])){
            $s = substr($s,1);
        }
        // should be one dot
        $parts = explode(".",$s);
        if(count($parts)>2 || count($parts) == 0){
            return false;
        }
        // One or more digits, followed by a dot '.'.
        if ($this->isDigits($parts[0]) && $this->isEmpty($parts[1])){
            return true;
        }
        // A dot '.', followed by one or more digits.
        if ($this->isEmpty($parts[0]) && $this->isDigits($parts[1])){
            return true;
        }
        // One or more digits, followed by a dot '.', followed by one or more digits.
        if ($this->isDigits($parts[0]) && $this->isDigits($parts[1])){
            return true;
        }

        return false;
    }
    // One or more digits.
    function isDigits($s){
        if($this->isEmpty($s)) return false;
        for($i=0;$i<strlen($s);$i++){
            if(!in_array($s[$i],[0,1,2,3,4,5,6,7,8,9])){
                return false;
            }
        }
        return true;
    }
    
    function isEmpty($s){
        return strlen($s) == 0;
    }
}
```