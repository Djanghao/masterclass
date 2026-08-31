# php use uksort, hash table

**Author:** Yuwipi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5924262/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5924262/)

---


# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @param Integer $x
     * @return Integer[]
     */
    function findXSum($nums, $k, $x) {
        $res = [];
        if(count($nums) < $x){ 
            return array_sum($nums);
        } 
        for($i= 0; $i <= count($nums)-$k;$i++){ 
            $res[]= $this->sumX(array_slice($nums,$i,$k),$x); 
        }
        return $res;
    }
    function sumX($nums,$x){ 
        $hash = [];
        foreach($nums as $num){ 
            if(isset($hash[$num])){ 
                $hash[$num]++; 
            }
            else{ 
                $hash[$num]=1; 
            }
        } 
        uksort($hash, function($a, $b) use ($hash) {
        if ($hash[$a] == $hash[$b]) {
            return $b - $a;
        }
        return $hash[$b] - $hash[$a];
    });
        $res = 0; 
        foreach($hash as $key=>$val){ 
            if($x !=0 ){
                $res+=$val*$key ;
            }else{ 
                break; 
            }
            $x--; 
        }   
        return $res;
    } 
}
```