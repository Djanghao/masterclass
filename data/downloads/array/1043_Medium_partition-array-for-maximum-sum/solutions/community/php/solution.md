# Partitioning an array to maximize the sum using DP

**Author:** sswspb
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4670933/](https://leetcode.com/problems/partition-array-for-maximum-sum/solutions/4670933/)

---

# Intuition
To meet this challenge, we employ a dynamic programming strategy. Our goal is to maximize the sum of the array after partitioning it into subarrays of length at most ***k***. We achieve this by iterating through the array and considering each element as the last element of a potential partition. For each element ***arr[i]***, we explore different partition lengths up to k. Within each iteration, we calculate the maximum value within the current partition and update our dynamic programming array ***dp[i]*** to store the maximum sum achievable up to index ***i***.

# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer
     */
    function maxSumAfterPartitioning($arr, $k) {
        $n = count($arr);
        $dp = array_fill(0, $n + 1, 0);

        for ($i = 1; $i <= $n; $i++) {
            $max = $arr[$i - 1];

            for ($j = 1; $j <= $k && $i - $j >= 0; $j++) {
                $max = max($max, $arr[$i - $j]);
                $dp[$i] = max($dp[$i], $dp[$i - $j] + $max * $j);
            }
        }
        
        return $dp[$n];
    }
}
```