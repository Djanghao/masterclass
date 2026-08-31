# Easy solution | beats 100% | 0ms | Java | C | C++ | Python | C# | Javascript | Kotlin | PhP | Dp

**Author:** antovincent
**Votes:** 26
**Link:** [https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3518376/](https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/3518376/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Define dp[i] as the number of good strings of length i. Then we can use the following recurrence relation to calculate dp[i]:

dp[i] = dp[i-zero] + dp[i-one]

Here, dp[i-zero] represents the number of good strings of length i that end with a zero, and dp[i-one] represents the number of good strings of length i that end with a one. The total number of good strings of length i is the sum of these two.

To count the number of good strings in the given range, we can use dp[i] to calculate the answer for all i between low and high, and add them up

# Approach
<!-- Describe your approach to solving the problem. -->
- Initialize an array dp[] of size high+1 with dp[0]=1, since there is only one good string of length 0, which is the empty string.
- Iterate from i=1 to high and use the recurrence relation to calculate dp[i].
- If i is between low and high, add dp[i] to the answer variable ans.
Return the answer.

# Complexity
- Time complexity:O(high)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(high)




```Java []
class Solution {
    public int countGoodStrings(int low, int high, int zero, int one) {
        int dp[] = new int[high+1];
        dp[0]=1;
        int ans=0;
        for(int i=1;i<=high;i++){
            dp[i] = ((i-zero>=0 ? dp[i-zero]:0)+(i-one>=0 ? dp[i-one]:0))%1000000007;
            if(i>=low){
                ans = (ans+dp[i])%1000000007;
            }
        }
        return ans;
    }
}
```
```C []
int countGoodStrings(int low, int high, int zero, int one){
     int dp[1000000] ={0};
        dp[0]=1;
        int ans=0;
        for(int i=1;i<=high;i++){
            dp[i] = ((i-zero>=0 ? dp[i-zero]:0)+(i-one>=0 ? dp[i-one]:0))%1000000007;
            if(i>=low){
                ans = (ans+dp[i])%1000000007;
            }
        }
        return ans;
}
```
```python []
class Solution:
    def countGoodStrings(self, low: int, high: int, zero: int, one: int) -> int:
        dp = [0] * (high+1)
        dp[0] = 1
        ans = 0
        for i in range(1, high+1):
            dp[i] = ((dp[i-zero] if i-zero>=0 else 0) + (dp[i-one] if i-one>=0 else 0)) % 1000000007
            if i >= low:
                ans = (ans + dp[i]) % 1000000007
        return ans
```
```C++ []
class Solution {
public:
    int countGoodStrings(int low, int high, int zero, int one) {
         int dp[high+1];
    memset(dp, 0, sizeof(dp));
    dp[0]=1;
    int ans=0;
    for(int i=1;i<=high;i++){
        dp[i] = ((i-zero>=0 ? dp[i-zero]:0)+(i-one>=0 ? dp[i-one]:0))%1000000007;
        if(i>=low){
            ans = (ans+dp[i])%1000000007;
        }
    }
    return ans;
    }
};
```
```C# []
public class Solution {
    public int CountGoodStrings(int low, int high, int zero, int one) {
        int[] dp = new int[high+1];
        dp[0] = 1;
        int ans = 0;
        for (int i = 1; i <= high; i++) {
            dp[i] = ((i-zero >= 0 ? dp[i-zero] : 0) + (i-one >= 0 ? dp[i-one] : 0)) % 1000000007;
            if (i >= low) {
                ans = (ans + dp[i]) % 1000000007;
            }
        }
        return ans;
    }
}
```

```JavaScript []
/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let dp = new Array(high+1).fill(0);
    dp[0] = 1;
    let ans = 0;
    for (let i = 1; i <= high; i++) {
        dp[i] = ((i-zero>=0 ? dp[i-zero]:0)+(i-one>=0 ? dp[i-one]:0))%1000000007;
        if (i >= low) {
            ans = (ans+dp[i])%1000000007;
        }
    }
    return ans;
};
```
```Kotlin []
class Solution {
    fun countGoodStrings(low: Int, high: Int, zero: Int, one: Int): Int {
        val dp = IntArray(high+1)
        dp[0] = 1
        var ans = 0
        for (i in 1..high) {
            dp[i] = ((if (i-zero >= 0) dp[i-zero] else 0) + (if (i-one >= 0) dp[i-one] else 0)) % 1000000007
            if (i >= low) {
                ans = (ans + dp[i]) % 1000000007
            }
        }
        return ans
    }
}
```


```PHP []
class Solution {

    /**
     * @param Integer $low
     * @param Integer $high
     * @param Integer $zero
     * @param Integer $one
     * @return Integer
     */
    function countGoodStrings($low, $high, $zero, $one) {
         $dp = array_fill(0, $high+1, 0);
        $dp[0] = 1;
        $ans = 0;
        for ($i = 1; $i <= $high; $i++) {
            $dp[$i] = (($i-$zero >= 0 ? $dp[$i-$zero] : 0) + ($i-$one >= 0 ? $dp[$i-$one] : 0)) % 1000000007;
            if ($i >= $low) {
                $ans = ($ans + $dp[$i]) % 1000000007;
            }
        }
        return $ans;
    }
}
```

Upvotes Are Encouraging!
