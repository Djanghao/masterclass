# let's make it easy ,100% percent beat in PHP .available in Python and go ...........................

**Author:** ajayjadeja
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4520291/](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4520291/)

---

# Code Python
```
class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        total, n = 0, len(nums)
        dp = [defaultdict(int) for _ in nums]
        
        for i in range(1, n):
            for j in range(i):
                diff = nums[j] - nums[i]
                dp[i][diff] += dp[j][diff] + 1
                total += dp[j][diff]
                
        return total
```
# code go
```
func numberOfArithmeticSlices(nums []int) int {
  total, n := 0, len(nums)
    dp := make([]map[int]int, n)
    
    for i := range dp {
        dp[i] = make(map[int]int)
    }
    
    for i := 1; i < n; i++ {
        for j := 0; j < i; j++ {
            diff := nums[j] - nums[i]
            dp[i][diff] += dp[j][diff] + 1
            total += dp[j][diff]
        }
    }
    
    return total   
}
```
# code PHP
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function numberOfArithmeticSlices($nums) {
       $total = 0;
        $n = count($nums);
        $dp = array_fill(0, $n, array());
        
        for ($i = 1; $i < $n; $i++) {
            for ($j = 0; $j < $i; $j++) {
                $diff = $nums[$j] - $nums[$i];
                $dp[$i][$diff] += isset($dp[$j][$diff]) ? $dp[$j][$diff] + 1 : 1;
                $total += isset($dp[$j][$diff]) ? $dp[$j][$diff] : 0;
            }
        }
        
        return $total;
    } 
}
```