# Video Explanation (Building solution with Intuition)

**Author:** codingmohan
**Votes:** 46
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258154/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3258154/)

---

# Explanation

https://youtu.be/lyJgJasrLVc

# Code
```
const int N = 1e6+1;

class Solution {
    vector<int> sieve;
    
    vector<int> PrimeFactors (int x) {
        if (sieve.empty()) {
            sieve.resize(N);
            for (int j = 0; j < N; j ++) sieve[j] = j;
            
            for (int j = 2; j*j < N; j ++) {
                if (sieve[j] != j) continue;
                for (int k = j*j; k < N; k += j)
                    sieve[k] = j;
            }
        }
        
        vector<int> result;
        while (x != 1) {
            int div = sieve[x];
            while (x % div == 0) x /= div;
            result.push_back(div);
        }
        return result;
    }
    
public:
    int findValidSplit(vector<int>& nums) {
        int n = nums.size();
        vector<int> last_factor_ind (N, 0);
        
        for (int j = 0; j < n; j ++) {
            vector<int> factors = PrimeFactors (nums[j]);
            for (auto f : factors) 
                last_factor_ind[f] = j;
        }
        
        int result_ind = 0;
        int it = 0;
        
        while (it <= result_ind) {
            vector<int> factors = PrimeFactors (nums[it]);
            for (auto f : factors) 
                result_ind = max(result_ind, last_factor_ind[f]);
            
            it ++;
        }
        
        if (it == n) return -1;
        return it-1;
    }
};
```