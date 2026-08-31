# PHP Solution

**Author:** nacoia
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/1273886/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/1273886/)

---

class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function findLucky($arr) {
        $res=array_count_values($arr);
        
        foreach($res as $key =>$v)
        {
            if($key==$v)
            {
                $match[]=$v;
            }
            
        }
        if(!$match)
        {
            $match[]=-1;
        }
        return max($match);
    }
}