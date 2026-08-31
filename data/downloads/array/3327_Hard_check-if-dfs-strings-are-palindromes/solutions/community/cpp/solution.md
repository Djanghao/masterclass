# ✅ Optimised Solution Using Only Hashing (No Manacher's Algorithm) 🚀

**Author:** RohannBhardwaj
**Votes:** 9
**Link:** [https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5940106/](https://leetcode.com/problems/check-if-dfs-strings-are-palindromes/solutions/5940106/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- It is not possible to compare all strings as there will be 10^10 characters
- So, we have to think of something so that we do not have to compare strings
- therefore,hashing is used, and if forward hash is equal to reverse hash then the string is a palindrome 
- so i have used the same, and as we need to combine the hashes we will be using rolling hashing 

# Approach
<!-- Describe your approach to solving the problem. -->
- redfs() -> calculates the hash of reverse string 
- dfs() -> calculates the hash of normal string 
- after calculating the hashes they are compared 
- if they are equal then the string is palindromic else not

# Code
```cpp []
class Solution {
public:
    pair<long long,int> dfs(vector<long long> &has, int mod,vector<vector<int>> &g, int curr, string &s ,vector<long long> &pow){
        int count = 0;
        long long hash = 0;
        for(int child: g[curr]){
            pair<long long, int> p = dfs(has, mod, g, child, s,pow);
            if(count==0){
                hash = p.first;
            }else{
                hash = (hash + (p.first*pow[count])%mod)%mod;
            }
            count += p.second;
        }
        hash = (hash + (pow[count]*(s[curr]-'a'))%mod)%mod;
        has[curr] = hash;
        count++;
        return {hash,count};
    }
    pair<long long,int> redfs(vector<long long> &rehas, int mod,vector<vector<int>> &g, int curr, string &s ,vector<long long> &pow){
        int count = 1;
        long long hash = s[curr]-'a';
        
        for(int i=g[curr].size()-1;i>-1;i--){
            int child = g[curr][i];
            pair<long long, int> p = redfs(rehas, mod, g, child, s,pow);
            
            hash = (hash + (p.first*pow[count])%mod)%mod;
            count += p.second;
        }
        rehas[curr] = hash;
        return {hash,count};
    }
    vector<bool> findAnswer(vector<int>& parent, string s) {
        int n = parent.size();
        vector<long long > hash(n,-1), rehash(n,-1);
        vector<vector<int>> g(n);
        for(int i=0;i<n;i++){
            if(parent[i]!=-1){
                g[parent[i]].push_back(i);
            }
        }
        for(int i=0;i<n;i++) sort(g[i].begin(),g[i].end());
        vector<long long> pow(n+1,1);
        for(int i=1;i<=n;i++){
            pow[i] = (pow[i-1]*31)%1000000009;
        }
        vector<bool> ans(n,1);
        dfs(hash,1000000009, g, 0, s,pow);
        redfs(rehash,1000000009, g, 0, s,pow);
        for(int i =0;i<n;i++){
            ans[i] = rehash[i]==hash[i];
        }
        return ans;
    }
};
```