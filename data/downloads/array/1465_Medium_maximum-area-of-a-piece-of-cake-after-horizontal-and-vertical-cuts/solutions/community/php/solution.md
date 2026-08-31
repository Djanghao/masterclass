# PHP step by step simple solution

**Author:** darkoracic
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2228038/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2228038/)

---

```
class Solution {
    function maxArea($h, $w, $horizontalCuts, $verticalCuts) {
        
        array_push($horizontalCuts, 0, $h);
        array_push($verticalCuts, 0, $w);
        
        sort($horizontalCuts);
        sort($verticalCuts);   
        
        $cx = count($horizontalCuts);
        $cy = count($verticalCuts);
        
        $maxw = 0;
        $maxh = 0;
        
        for ($i = 0; $i < $cx - 1; $i++)
        {
            $temp = $horizontalCuts[$i + 1] - $horizontalCuts[$i];
            if ($temp > $maxw) $maxw = $temp;
        }
        for ($j = 0; $j < $cy - 1; $j++)
        {
            $temp = $verticalCuts[$j + 1] - $verticalCuts[$j];
            if ($temp > $maxh) $maxh = $temp;
        }
        
        return (($maxw % 1000000007) * ($maxh % 1000000007)) % 1000000007;
    }
}
```