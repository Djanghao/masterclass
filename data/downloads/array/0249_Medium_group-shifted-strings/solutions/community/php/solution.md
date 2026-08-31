# PHP simple, short 4ms Beats  100% Time/Space with explanation

**Author:** maxmtmn
**Votes:** 1
**Link:** [https://leetcode.com/problems/group-shifted-strings/solutions/837098/](https://leetcode.com/problems/group-shifted-strings/solutions/837098/)

---

Solution is very simple to understand. In order to solve task we just need to build some hash function which will match our task conditions and than put all strings into an array grouped by that hash. As hash function we can use difference between previous and next char. As special case we need to handle situation where "Z" should transform into "A" (negative difference between ascii codes of two chars)

```
class Solution {
    function groupStrings($strings) {
        $groups = [];
        foreach($strings as $string){
            $groups[$this->getGroup($string)][] = $string;
        }
        return array_values($groups);
    }
    
    function getGroup($string){
        if(strlen($string) < 2)
            return 0;
        $group = "";
        for($i=1;$i<strlen($string);$i++){
            $diff = (ord($string[$i]) - ord($string[$i-1]));
            $group .= ($diff > 0 ? $diff : 26 + $diff);
        }
        return $group;
    }
}
```