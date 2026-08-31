# ✅ optimal DP solution, explained

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/5213137/](https://leetcode.com/problems/student-attendance-record-ii/solutions/5213137/)

---

It's a bit tricky, but let's assume we already have a recursive solution with memoization. [Like this one](https://leetcode.com/problems/student-attendance-record-ii/solutions/5212912/dfs-with-memorization/). While it's effective, we can optimize it further to save memory and reduce stack usage.

First, initialize the ```dp``` array. The indices of the ```dp``` array represent the following states:
```dp[0][0]``` - A = 0, L = 0
```dp[0][1]``` - A = 0, L = 1
```dp[0][2]``` - A = 0, L = 2
```dp[1][0]``` - A = 1, L = 0
```dp[1][1]``` - A = 1, L = 1
```dp[1][2]``` - A = 1, L = 2

Initialize the array with ```0``` and set ```dp[0][0] = 1``` for zero iteration.

The challenge lies in calculating the ```dp``` array for each iteration.

From the recursive solution, the transition equations are as follows:
``` python
# add A
res = dfs(start + 1, aCount + 1, 0) % mod               
# add L
res += dfs(start + 1, aCount, lCount + 1) % mod                
# add P
res += dfs(start + 1, aCount, 0) % mod
```
We'll now compute the ```dp``` step-by-step:
``` python
# add A #dfs(start + 1, aCount + 1, 0) % mod
# A index is increased by 1. L set to zero
# A can't be higher than 1
next_dp[1][0] = dp[0][0] + dp[0][1] + dp[0][2]
# add L #dfs(start + 1, aCount, lCount + 1)
# A is not changed, L is increased by 1 and can't be highter than 2
next_dp[0][1] = dp[0][0]
next_dp[0][2] = dp[0][1]
next_dp[1][1] = dp[1][0]
next_dp[1][2] = dp[1][1]
# add P #dfs(start + 1, aCount, 0) 
# A is not changed, L is set to 0
next_dp[0][0] = dp[0][0] + dp[0][1] + dp[0][2]
next_dp[1][0] += dp[1][0] + dp[1][1] + dp[1][2]
```
These steps can be consolidated into a single update statement:
``` python
dp[0][0], dp[1][0], dp[0][1], dp[1][1], dp[0][2], dp[1][2] = (dp[0][0] + dp[0][1] + dp[0][2]) % mod, (dp[0][0] + dp[0][1] + dp[0][2] + dp[1][0] + dp[1][1] + dp[1][2]) % mod, dp[0][0], dp[1][0], dp[0][1], dp[1][1]
```

Repeat this iteration ```n``` times and sum up the values in the ```dp``` array at the end to get the final result.

# Code
``` java []
class Solution {
    public int checkRecord(int n) {
        int mod = 1000000007;
        long[][] dp = new long[2][3];
        dp[0][0] = 1;
        for (int i = 0; i < n; i++) {
            long[][] nextDp = new long[3][3];
            // add A
            nextDp[1][0] = (dp[0][0] + dp[0][1] + dp[0][2]) % mod;

            // add L
            nextDp[0][1] = dp[0][0];
            nextDp[0][2] = dp[0][1];
            nextDp[1][1] = dp[1][0];
            nextDp[1][2] = dp[1][1];

            // add P
            nextDp[0][0] = (dp[0][0] + dp[0][1] + dp[0][2]) % mod;
            nextDp[1][0] += (dp[1][0] + dp[1][1] + dp[1][2]) % mod;

            dp = nextDp;
        }

        return (int) ((dp[0][0] + dp[0][1] + dp[0][2] + dp[1][0] + dp[1][1] + dp[1][2]) % mod);
    }
}
```
``` c []
int checkRecord(int n) {
    int mod = 1000000007;
    long dp[2][3] = {{1, 0, 0},{0, 0, 0}};

    for (int i = 0; i < n; i++) {
        long a0l0 = dp[0][0] + dp[0][1] + dp[0][2];      
        long a1l0 = a0l0 + dp[1][0] + dp[1][1] + dp[1][2];

        dp[0][2] = dp[0][1];        
        dp[0][1] = dp[0][0];
        dp[1][2] = dp[1][1];
        dp[1][1] = dp[1][0];  

        dp[0][0] = a0l0 % mod;
        dp[1][0] = a1l0 % mod;      
    }

    return (dp[0][0] + dp[0][1] + dp[0][2] + dp[1][0] + dp[1][1] + dp[1][2]) % mod;
}
```
``` cpp []
class Solution {
public:
    int checkRecord(int n) {
        int mod = 1000000007;
        long a0l0 = 1;
        long a0l1 = 0;
        long a0l2 = 0;
        long a1l0 = 0;
        long a1l1 = 0;
        long a1l2 = 0;

        for (int i = 0; i <= n; i++) {
            // add A
            long a0 = a0l0 + a0l1 + a0l2;
            long a1 = a0 + a1l0 + a1l1 + a1l2;

            // add L
            a0l2 = a0l1;            
            a0l1 = a0l0;
            a1l2 = a1l1;            
            a1l1 = a1l0;

            a0l0 = a0 % mod;
            a1l0 = a1 % mod;
        }

        return a1l0;
    }
};
```
``` python []
class Solution(object):
    def checkRecord(self, n):
        mod = 10**9 + 7
        
        dp = [[0 for _ in range(3)] for _ in range(2)]
        dp[0][0] = 1

        for _ in range(n): 
            dp[0][0], dp[1][0], dp[0][1], dp[1][1], dp[0][2], dp[1][2] = (dp[0][0] + dp[0][1] + dp[0][2]) % mod, (dp[0][0] + dp[0][1] + dp[0][2] + dp[1][0] + dp[1][1] + dp[1][2]) % mod, dp[0][0], dp[1][0], dp[0][1], dp[1][1]
            # add A dfs(start + 1, aCount + 1, 0) % mod
            # add L #dfs(start + 1, aCount, lCount + 1)
            # add P dfs(start + 1, aCount, 0)        

        return sum([sum(x) % mod for x in dp]) % mod
```
``` javascript []
var checkRecord = function(n) {
    const MOD = 1000000007;
    var dp = [Array(3).fill(0), Array(3).fill(0)];
    dp[0][0] = 1;
    for (var i = 0; i < n; i++) {
        var a0l0 = _.sum(dp[0]) % MOD;        
        var a1l0 = (a0l0 + _.sum(dp[1])) % MOD;
        dp[1][2] = dp[1][1];
        dp[1][1] = dp[1][0];
        dp[0][2] = dp[0][1];
        dp[0][1] = dp[0][0];       
        dp[0][0] = a0l0;
        dp[1][0] = a1l0;
    }

    return (_.sum(dp[0]) + _.sum(dp[1])) % MOD;
};
```
``` php []
class Solution {
    function checkRecord($n) {
        $mod = 1000000007;
        $a0l0 = 1;

        for ($i = 0; $i < $n; $i++) {
            $a0 = ($a0l0 + $a0l1 + $a0l2) % $mod;            
            $a1 = ($a0 + $a1l0 + $a1l1 + $a1l2) % $mod;
            $a0l2 = $a0l1;
            $a0l1 = $a0l0;
            $a1l2 = $a1l1;            
            $a1l1 = $a1l0;

            $a0l0 = $a0;
            $a1l0 = $a1;
        }

        return ($a0l0 + $a0l1 + $a0l2 + $a1l0 + $a1l1 + $a1l2) % $mod;
    }
}
```
``` golang []
func checkRecord(n int) int {
    dp := [][]int{
        {1, 0, 0},
        {0, 0, 0},
    };

    mod := 1000000007;

    for i := 0; i <= n; i++ {
        a0l0 := (dp[0][0] + dp[0][1] + dp[0][2]) % mod
        a1l0 := (a0l0 + dp[1][0] + dp[1][1] + dp[1][2]) % mod
        dp[1][2] = dp[1][1]        
        dp[1][1] = dp[1][0]        
        dp[0][2] = dp[0][1]        
        dp[0][1] = dp[0][0]
        dp[0][0] = a0l0
        dp[1][0] = a1l0
    }

    return dp[1][0]
}
```
``` ruby []
def check_record(n)
    mod = 1000000007

    dp = [
        [1, 0, 0],
        [0, 0, 0]
    ]

    (n + 1).times do 
        a0l0 = (dp[0][0] + dp[0][1] + dp[0][2]) % mod
        a1l0 = (a0l0 + dp[1][0] + dp[1][1] + dp[1][2]) % mod

        dp[1][2] = dp[1][1]
        dp[1][1] = dp[1][0]
        dp[0][2] = dp[0][1]
        dp[0][1] = dp[0][0]

        dp[0][0] = a0l0
        dp[1][0] = a1l0
    end

    return dp[1][0]
end
```
``` rust []
impl Solution {
    pub fn check_record(n: i32) -> i32 {
        let MOD = 1000000007;
        let mut a0l0 : i64 = 1;
        let mut a0l1 : i64 = 0;
        let mut a0l2 : i64 = 0;
        let mut a1l0 : i64 = 0;
        let mut a1l1 : i64 = 0;
        let mut a1l2 : i64 = 0;

        for _ in 0..=n {
            let a0 : i64 = (a0l0 + a0l1 + a0l2) % MOD;
            let a1 : i64 = (a0 + a1l0 + a1l1 + a1l2) % MOD;

            a0l2 = a0l1;
            a0l1 = a0l0;
            a1l2 = a1l1;            
            a1l1 = a1l0;

            a0l0 = a0;
            a1l0 = a1;
        }

        return a1l0 as i32;
    }
}
```
``` kotlin []
class Solution {
    fun checkRecord(n: Int): Int {
        var mod = 1000000007
        var a0l0 = 1L
        var a0l1 = 0L
        var a0l2 = 0L
        var a1l0 = 0L
        var a1l1 = 0L
        var a1l2 = 0L

        for (i in 0..n) {
            var a0 = a0l0 + a0l1 + a0l2
            var a1 = a0 + a1l0 + a1l1 + a1l2

            a0l2 = a0l1            
            a0l1 = a0l0
            a1l2 = a1l1            
            a1l1 = a1l0

            a0l0 = a0 % mod
            a1l0 = a1 % mod
        }

        return a1l0.toInt()
        
    }
}
```