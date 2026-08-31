# Splitting Arrays for Optimal Performance: Achieving 0ms Runtime!

**Author:** ssalvi28
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/5218312/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/5218312/)

---

\uD83D\uDE80 Approach:
This Java solution provides an efficient algorithm to determine the minimum number of splits required to achieve subarrays with a greatest common divisor (GCD) greater than one. Utilizing a straightforward implementation of the Euclidean algorithm for GCD calculation, this solution maintains a running GCD value while traversing the array. Whenever the GCD reaches 1, indicating no common divisor, a split occurs, and the process continues until the end of the array. By employing this strategy, the algorithm guarantees optimal performance, achieving a blazing fast runtime of 0ms!

\uD83D\uDD52 Runtime Complexity: O(N)
\uD83D\uDEF0\uFE0F Space Complexity: O(1)

This solution shines bright, surpassing 100% of Java submissions on LeetCode. Let's embrace efficiency and tackle array splitting challenges with unprecedented speed!


```
class Solution {
    public int minimumSplits(int[] nums) {
        int n = nums.length;
        
        int cur = 0, res = 1;
        for(int i=0;i<n;i++){
            cur = gcd(cur, nums[i]);
            if(cur == 1){
                cur = nums[i];
                res++;
            }
        }
        return res;
    }
    
    public static int gcd(int x, int y){
            while(y!=0){
                int temp = y;
                y = x%y;
                x = temp;
            }
            return x;
        }
}
```

Open to suggestions.