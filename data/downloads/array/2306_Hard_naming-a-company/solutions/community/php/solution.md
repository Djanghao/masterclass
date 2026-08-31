# O(n^2) solution

**Author:** mamyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/naming-a-company/solutions/3165820/](https://leetcode.com/problems/naming-a-company/solutions/3165820/)

---

# Code
```
class Solution {

    function distinctNames($ideas) {
        $ideasParsed = [];
        foreach($ideas as $idea){
            $body = strlen($idea) == 1 ? '_self' : substr($idea,1);
            $ideasParsed[substr($idea,0,1)][]=$body;
        }
        
        $skip = [];
        $total = 0;
        foreach($ideasParsed as $letterA=>$bodiesA){
            $skip[$letterA]=true;
            foreach($ideasParsed as $letterB=>$bodiesB){
                if($skip[$letterB]) continue;
                $aToB = array_diff($bodiesA,$bodiesB);
                $bToA = array_diff($bodiesB,$bodiesA);
                if(count($aToB) > 0 && count($bToA)>0){
                    $total += count($aToB) * count($bToA)*2;
                }
            }
        }
       return $total;
    }
}
```