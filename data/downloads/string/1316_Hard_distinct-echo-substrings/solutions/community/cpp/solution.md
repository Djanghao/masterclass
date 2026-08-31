# [C++] Simple C++ Code || Rolling Hashing

**Author:** _pros_
**Votes:** 5
**Link:** [https://leetcode.com/problems/distinct-echo-substrings/solutions/2530137/](https://leetcode.com/problems/distinct-echo-substrings/solutions/2530137/)

---

# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
public:
    int distinctEchoSubstrings(string s) {
        int mod = INT_MAX, base = 28, n = s.size();
        unordered_map<long long, int> um;
        vector<long long> ChkVal(n+1);
        long long remove = 1;
        for(int i = 1; i <= n/2; i++)
        {
            long long hash = 0;
            int l = 0, appear = 0;
            for(int j = 0; j < n; j++)
            {
                 hash = (( hash * base ) % mod  + (s[j] - 'a' + 1))%mod;
                 if(j-l == i-1) 
                 {
                     ChkVal[j]=hash;
                     if(appear > 0) 
                     {
                         if(ChkVal[j-i]==hash)
                            um[hash]++;
                     }
                     appear++;
                     hash = (hash - ((s[l] - 'a' + 1)*remove)%mod)%mod;
                     if(hash<0) hash+=mod;
                     l++;
                }
            }
            // cout << i << " " << um.size() << endl; 
            remove = (remove * base)%mod;
        }
        return um.size();
    }
};
```