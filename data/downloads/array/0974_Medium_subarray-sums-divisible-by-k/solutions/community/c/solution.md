# [C++] One pass, prefix sum approach with explanation

**Author:** jjapak
**Votes:** 57
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/661398/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/661398/)

---

Consider the subarray sum equals `K` problem. Here, we need to find let's say a right pointer `R` and a left pointer `L` which forms a subarray from `L to R`[inclusive] whose sum equals `K`.  I.e,

`sum[R] - sum[L-1] = K` -> (sum of subarray upto R) - (sum of subarray upto L)  = K

Now, building on top of that for this problem, what happens when we take `MOD K` throughout the above equation.

1. `(sum[R] - sum[L-1]) MOD K = (n * K) MOD K` -- Here, I've introduced another number `n (>=0)` as we require sum to be a multiple of `K`
2. `sum[R] MOD K - sum[L-1] MOD K = 0`
3. `sum[R] MOD K = sum[L-1] MOD K`

If ends up to find prefix sums whose `MOD K` are equal. We just need to keep doing prefix sums `MOD K` as we iterate from one end of the array to another and keep a track of what we have found till now. Whenever we encounter a prefix sum whose `MOD K` was already found, then that means we found two prefix sums satisfying Equation 3 above. That's it!! We are DONE.

```
class Solution {
public:
    int subarraysDivByK(vector<int>& A, int K) {

        int pref = 0; // prefix sum
        vector<int> cPref(K); //sum will not exceed K as we are taking modulo at every step
        cPref[pref]++; // adding 0 as prefix sum, base case
        
        int answer = 0; // count of number of subarrays whose sum is divisible by K
        
        for(int i = 0; i < A.size(); i++) {
            
            pref = (pref + A[i]) % K; // Here, we take modulo of prefix sum as outlined in the explanation
            
            if(pref < 0) pref += K; // since -1 mod 5 and 4 mod 5 are equivalent, we will keep only positives since we like them :)
                        
            answer += cPref[pref]; // if we have already found pref, then increase the answer count
            
            cPref[pref]++; // add pref seen count by 1
        }
        
        return answer;
    }
};
```