# Java O(n)

**Author:** REED_W
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-consecutive-subsequences/solutions/5833022/](https://leetcode.com/problems/sum-of-consecutive-subsequences/solutions/5833022/)

---

# Complexity
- Time complexity:
O(n+max) -> O(n) if using hashmap

- Space complexity:
O(max)

# Code
```java []
class Solution {
    static int mod = 1_000_000_007;

    private int getSum(int[] nums){
        int n = nums.length;
        int max = 0;
        for(int i: nums) max = Math.max(i, max);
        long[][] map = new long[max+2][4]; // [count0, sum0, count1, sum1];
        long res = 0;
        for(int i: nums){
            res+=i;
            map[i][0] += map[i-1][0]+1;
            map[i][1] += map[i-1][1]+i*(map[i-1][0]+1);
            res += map[i-1][1]+i*map[i-1][0];
            map[i][2] += map[i+1][2]+1;
            map[i][3] += map[i+1][3]+i*(map[i+1][2]+1);
            res += map[i+1][3]+i*map[i+1][2];

            map[i][0] %= mod;
            map[i][1] %= mod;
            map[i][2] %= mod;
            map[i][3] %= mod;
            res %= mod;
        }
        return (int)res;
    }
}
```