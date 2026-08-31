# PHP Max Heap

**Author:** elenaizotova
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/5827321/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/5827321/)

---

>>>
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function halveArray($nums) {
        $maxHeap = new SplMaxHeap();
        $target = 0;
        
        foreach($nums as $num){
            $maxHeap->insert($num);
            $target += $num;
        }
        
        $target /= 2;
        $ans = 0;
        
        while ($target > 0) {
            $ans++;
            $x = $maxHeap->extract();
            $target -= ($x / 2);
            $maxHeap->insert($x / 2);
        }
        
        return $ans;
    }
}
>>>