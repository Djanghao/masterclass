# Easy and Best perfomance solution

**Author:** abhi428
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3734947/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3734947/)

---

# Intuition
In this we need to first sum each weight with current and next till weight-1. 

# Approach
In this we need to first count **$totalweights** make sum of each **$i** and **$i+1** index sum till **$i<$totalweights-1** and keep this sum in array called **$sumRes**. Then sort by descending order of **$sumRes** to use **rsort()**. Then just run loop to get difference of $kth bags.  

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $weights
     * @param Integer $k
     * @return Integer
     */
    function putMarbles($weights, $k) {        
        $totalWeights = count($weights);
        $sumRes = array();
        $bagI = 0;
        for ($i = 0; $i < $totalWeights-1; $i++) {
            $sumRes[] = $weights[$i] + $weights[$i + 1];
        }
        rsort($sumRes);

        $totalWeightsResult = count($sumRes);

        for ($i = 0; $i < $k-1; $i++) {
            $bagI += $sumRes[$i];
            $bagI -= $sumRes[$totalWeightsResult - 1 - $i];
        }

        return $bagI;
    }
}
```