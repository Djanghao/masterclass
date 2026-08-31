# PHP Solution

**Author:** TasneemWahdan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/3319295/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/3319295/)

---


# Code
```
class Solution {

    /**
     * @param String $s
     * @param String $p
     * @return Integer[]
     */
    function findAnagrams($s, $p) {
        $hash=[];
        $hash = $this->fillHash($p, $hash);
        ksort($hash);
        $size = strlen($p);
        $start = 0; //0
        $end = $size - 1; //2
        $res = [];
        $windowHash = [];
        for($i =$start; $i <= $end; $i++){
                if(isset($windowHash[$s[$i]]) )
                    $windowHash[$s[$i]] ++;
                else
                    $windowHash[$s[$i]] = 1;    
        }
        while($end < strlen($s)){
            ksort($windowHash);
            if( $windowHash === $hash)
                $res[]= $start;
            if(isset($windowHash[$s[$start]])){
                if($windowHash[$s[$start]] == 1)
                    unset($windowHash[$s[$start]]);
                else
                    $windowHash[$s[$start]]--;    
            }    
            $start += 1;
            $end += 1;
            if(isset($windowHash[$s[$end]]))
                $windowHash[$s[$end]]++;
            else
                $windowHash[$s[$end]] = 1;       
        }
        return $res; 
    }

    function fillHash($p, $hash){
        $s = str_split($p);
        foreach($s as $char){
           if(! isset($hash[$char]))
                $hash[$char] = 1;
            else
                $hash[$char] ++ ; 
        }
        return $hash;        
    }
}
```