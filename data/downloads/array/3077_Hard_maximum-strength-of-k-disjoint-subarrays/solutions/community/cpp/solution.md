# C++, pretty DP memoization solution in O(N*K*2)

**Author:** singla__rohan
**Votes:** 50
**Link:** [https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4851661/](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays/solutions/4851661/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Reading this questions, I understood that basically traversing from begin to end in the array, we have to decide at every point whether to 
1. Put current element in the current subarray or 
2. End the subarray and start a new one (can only be done if there was atleast one element in the current subarray before moving onto the next) or 
3. Entirely skip that element and go to the next element (will have to start new subarray of course)

So of course DP was the first natural thing to come to my mind.
# Approach
<!-- Describe your approach to solving the problem. -->
The solution was basically a recursive solution with states, number of subarrays remaining, the index of element we're currently at, and the last, the most special one, a boolean state if we have started meaning put atleast one element in the array we were currently working on.

If we have put atleast one element, it meant we can terminate the current subarray and start working on the next subarray.
Hence the line ```if(started)```

Next naturally there's the option of putting the ith element in the current subarray, so that's done.

Lastly, we check if we hadn't put even a single element in the current subarray, then we had an option to skip the current element (ith) and go to the next element. Hence the line ```if(!started)```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n * k * 2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n * k * 2)

# Code
```
class Solution {
public:
    vector<vector<vector<long long>>> dp;
    long long solve(int i, long long k, bool started, vector<int> &nums){
        if(k == 0) return 0;

        if(i == nums.size()){
            if(k == 1 && started) return 0;
            return -1e15;
        }
        if(dp[i][k][started] != -1e16) return dp[i][k][started];

        long long ans = -1e15;
        
        if(started)
            ans = solve(i, k - 1, false, nums);
        
        ans = max((k % 2 == 0 ? -1 : 1) * k * nums[i] + solve(i + 1, k, true, nums), ans);
        
        if(!started)
            ans = max(solve(i + 1, k, false, nums), ans);
        
        return dp[i][k][started] = ans;
    }
    long long maximumStrength(vector<int>& nums, int k) {
        dp = vector<vector<vector<long long>>> (nums.size(), vector<vector<long long>> (k + 1, vector<long long> (2, -1e16)));
        long long ans = -1e15;
        return solve(0, (long long)k, false, nums);
    }
};
```

EDIT:

Note: Another optimization for the same code:
Due to cache locality problem, Declaring the array differently      will give us way better runtime.
```
dp[n][2][k + 1], Time = 500ms
```
instead of 
```
dp[n][k + 1][2], Time = 2000ms
```

EDIT 2:

Just for reference, if you're using C++ and getting TLE in memoization solution, it's probably because you're using an initializer list somewhere.
Try replacing 
```
max({a,b,c})
```
with 
```
max(a, max(b, c))
```
It will probably help you :)