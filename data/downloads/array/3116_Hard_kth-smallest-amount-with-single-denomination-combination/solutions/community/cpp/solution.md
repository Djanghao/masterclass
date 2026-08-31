# Binary Search & Bitmasking

**Author:** AdityaRaj_cpp
**Votes:** 49
**Link:** [https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5019598/](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5019598/)

---

# Approach
pie: This function calculates the count of values less than or equal to x which are divisible by at least one number from the coins.
It uses a bitmasking technique to iterate through all possible combinations of the elements in coins, calculates the least common multiple (LCM) of the selected elements, and then adds or subtracts x divided by this LCM based on whether the number of selected elements is odd or even.

I used binary search to find the kth smallest value that satisfies the condition calculated by the pie function. It iteratively narrows down the range of possible values using binary search until it finds the value where the count is equal to the given k.

# Code
```
class Solution
{
    long long pie(vector<int> &coins, long long x)
    {
        int m = coins.size();
        int nn = (1 << m);
        long long cnt = 0;
        for (int i = 1; i < nn; i++)
        {
            long long lcmm = 1;
            for (int j = 0; j < m; j++)
            {
                if (i & (1 << j))
                {
                    lcmm = lcm(lcmm, coins[j]);
                }
            }
            if (__builtin_popcount(i) & 1)
                cnt += x / lcmm;
            else
                cnt -= x / lcmm;
        }
        return cnt;
    }

public:
    long long findKthSmallest(vector<int> &coins, int k)
    {
        long long kk = k;
        long long l = 1, r = 1e11, ans = 0;
        while (l <= r)
        {
            long long m = l + (r - l) / 2;
            long long cnt = 0;
            cnt = pie(coins, m);
            if (cnt < kk)
                l = m + 1;
            else
            {
                ans = m;
                r = m - 1;
            }
        }
        return ans;
    }
};
```