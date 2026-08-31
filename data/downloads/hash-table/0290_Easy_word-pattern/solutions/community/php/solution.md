# Rhino Rush PHP

**Author:** J_peex
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern/solutions/6132932/](https://leetcode.com/problems/word-pattern/solutions/6132932/)

---

![image.png](./images/0.png)


# Code
```php []
class Solution {

    /**
     * @param String $pattern
     * @param String $s
     * @return Boolean
     */
    function wordPattern($pattern, $s) {
        
        $table = [];

        $pattern = str_split($pattern);
        $s = str_word_count($s,1);
        
        for($i=0;$i<count($pattern);$i++){

            if(count($s) === count($pattern) )
                {
            if(!isset($table[$pattern[$i]]) && !array_search($s[$i],$table))
                $table[$pattern[$i]] = $s[$i];
                            
            if($s[$i] !== $table[$pattern[$i]])
                return false;
        }
            else
            return false;
        
        }

        return true;



        
    }
}
```