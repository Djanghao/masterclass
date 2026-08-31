# [C++] Hash Map and fast pow() function O(n log10^6)

**Author:** b05505016
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/2995037/](https://leetcode.com/problems/maximum-frequency-score-of-a-subarray/solutions/2995037/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Keep track of the counter of each number by hashmap.
Just sliding window, and you want to update the ```sum``` in a fast way.


# Approach
<!-- Describe your approach to solving the problem. -->
Use Divide & Conquer to implement ```powmod()``` to achieve ```O(logN)``` time

# Complexity
- Time complexity: ```O(n log10^6)```
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    #define mod 1000000007
    long powmod(long a, long b) {
        if(b == 1) return a;
        long h = powmod(a, b / 2);
        if(b % 2 == 1) return h * h % mod * a % mod;
        else return h * h % mod;
    }

    int maxFrequencyScore(vector<int>& arr, int k) {
        unordered_map<int, int> M;  // num, cnt
        // build the first
        for(int i = 0; i < k; ++i) {
            ++M[arr[i]];
        }
        long sum = 0;
        for(auto [n, cnt]: M) {
            sum += powmod(n, cnt) % mod;
        }

        long ret = sum % mod;

        for(int i = k; i < arr.size(); ++i) {
            // minus
            auto f = M.find(arr[i - k]);
            if(f->second == 1) {
                M.erase(f);
                sum = (sum - arr[i - k] + mod) % mod;
            }
            else { // > 1
                auto &[n, cnt] = *f;
                sum = (sum - powmod(n, cnt) + mod) % mod;
                --cnt;
                sum = (sum + powmod(n, cnt))% mod;
            }
            // add
            int c = ++M[arr[i]];
            if(c > 1)
                sum = (sum - powmod(arr[i], c - 1) + mod) % mod;

            sum = (sum + powmod(arr[i], c)) % mod;
            // update answer
            ret = max(ret, sum % mod);
        }
        return ret;
    }
};
```