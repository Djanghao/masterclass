# PHP

**Author:** akarabudka
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-common-word/solutions/5957143/](https://leetcode.com/problems/most-common-word/solutions/5957143/)

---

```
class Solution {

    function mostCommonWord($paragraph, $banned) {
        $words = explode(' ', strtolower(preg_replace("/[^a-zA-Z]/", ' ', $paragraph)));
        $map = [];
        
        foreach($words as $word){
            if(in_array($word, $banned) || empty($word)){
                continue;
            }
            
            if(!isset($map[$word])){
                $map[$word] = 1;
                continue;
            }
            
            $map[$word]++;
        }
        
        $ans = '';
        $tmp = 0;
        foreach($map as $key=>$cnt){
           if($cnt > $tmp){
               $ans = $key;
               $tmp = $cnt;
           } 
        }
        
        return $ans;
    }
}
```