# O(N) time O(1) space DP solution

**Author:** wilsonhuang995
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/4303836/](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/4303836/)

---

# DP Setup 
<!-- Describe your first thoughts on how to solve this problem. -->
let odds[i] be the number of sub arrays *ending on index i* which has odd sum. 
let evens[i] be number of subarrays *ending on index i* which has even sum.

Initial condition: evens[0] and odds[0] are 0 or 1 depenidng on nums[0].

Answer will be the sum of odds[] array.

# if nums[i] is even:
- evens[i] = evens[i-1] + 1 
- odds[i] = odds[i-1]

Explanation of above:

If nums[i] is even, then we can simply include nums[i] to every subarray with even sum ending on nums[i-1]. the +1 accounts for the subarray consisting of nums[i] alone. nums[i] can similarly be appended to every odd-sum subarray ending on i-1.

# if nums[i] is odd:
By appending a new odd number, the parity of the sum from dp[i-1] will flip. Thus:
- odds[i] = evens[i-1] + 1
- evens[i] = odds[i-1]

# Optimize space
We can see that the DP relation is only ever looking one back. This means that we can simply use a variable to store evens[i-1] and another one to store odds[i-1]. 

Furthermore, once we calculate odds[i], we never update it again. Therefore, we can add it to our answer immediately. after calculating.

# Code O(N) space
```
public class Solution {
    public int NumOfSubarrays(int[] arr) {
        int n = arr.Length;
        int[] odds = new int[n];
        int[] evens = new int[n];

        if (arr[0] % 2 == 0) evens[0] = 1; 
        else odds[0] = 1;

        for (var i = 1; i < n; ++i) {
            if (arr[i] % 2 == 0) {
                odds[i] = odds[i - 1];
                evens[i] = 1 + evens[i-1];
            } else {
                odds[i] = 1 + evens[i-1];
                evens[i] = odds[i-1];
            }
        }

        int ans = 0;

        for (var i = 0; i < n; ++i) {
            ans += odds[i];
            ans = ans % 1000000007;
        }

        return ans;
    }
}
```

# Code O(1) space
```
public class Solution {
    public int NumOfSubarrays(int[] arr) {
        int n = arr.Length;
        int odds = 0;
        int evens = 0;
        int ans = 0;

        if (arr[0] % 2 == 0) evens = 1; 
        else odds = 1;

        ans += odds;

        for (var i = 1; i < n; ++i) {
            if (arr[i] % 2 == 0) {
                evens = 1 + evens;
            } else {
                var temp = odds;
                odds = 1 + evens;
                evens = temp;
            }

            ans += odds;
            ans = ans % 1000000007;

        }

        return ans;
    }
}
```