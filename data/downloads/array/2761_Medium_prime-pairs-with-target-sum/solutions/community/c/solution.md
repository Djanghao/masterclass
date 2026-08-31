# Two Sum + Sieve

**Author:** Rowque
**Votes:** 16
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3706625/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/3706625/)

---

# Similar Question:
+ [1. Two Sum](https://leetcode.com/problems/two-sum/)
# C++
    vector<vector<int>> findPrimePairs(int n) {
        vector<bool> prime(n + 1);
        for(int i = 2;i <= n; ++i)
            if(!prime[i]) 
                for(int j = 2 * i;j <= n; j += i)
                    prime[j] = true;
        
        vector<vector<int>> ans;
        for(int i = 2;i + i <= n; ++i) {
            if(!prime[i]) {
                int key = n - i;
                if(key > 1 && !prime[key]) 
                    ans.push_back({i, key});
            }
        }
        return ans;
    }