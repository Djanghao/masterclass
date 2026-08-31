# PHP optimized solution , beats 99%

**Author:** shakir-uz-zaman
**Votes:** 2
**Link:** [https://leetcode.com/problems/squares-of-a-sorted-array/solutions/2950880/](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/2950880/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortedSquares($nums) {
        for($i=0; $i<count($nums); $i++){
            $nums[$i] = $nums[$i] * $nums[$i];
        }
        $len = count($nums)-1;
        $tail = count($nums) -1;
        $head = 0;
        $ans = [];
        while($head <= $tail){
            if($nums[$head] > $nums[$tail]){
                $ans[$len] = $nums[$head];
                $head++;
                $len--;
            }
            else{
                $ans[$len] = $nums[$tail];
                $tail--;
                $len--;

            }

        }
        ksort($ans);
        return $ans;
    }
}
```