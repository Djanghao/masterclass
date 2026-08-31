# Rabin karp string matching algorithm - No Z-Algorithm

**Author:** kumar2809
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5844359/](https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5844359/)

---

```
class Solution {
public:
    int minStartingIndex(string s, string p) {
        long long base = 31;
        long long mod = 24738041398529;
        vector<long long> v;
        long long hash = 0;
        for(int i=0; i<p.size(); i++){
            hash = hash*base + p[i] -'a';
            hash%=mod;
        }
        v.push_back(hash);
        long long bsc = 1;
        long long thash = 0;
        for(int i = p.size()-1; i>=0; i--){
            for(char ch = 'a'; ch<='z'; ch++){
                if(ch == p[i])continue;
                thash = hash - (bsc *(p[i] - 'a')) + (bsc *(ch-'a'));
                thash%=mod;
                thash = (thash+mod)%mod;
                v.push_back(thash);
            }
            bsc*=base;
            bsc%=mod;
        }
        sort(v.begin(), v.end());

        long long shash = 0;
        long long pw = 1;
        for(int i=1; i<=p.size()-1; i++){
            pw*=base;
            pw%=mod;
        }

        int plen = p.size();
        for(int i=0;i<s.size(); i++){
            if(i-plen>=0){
                shash = shash - (pw*(s[i-plen]-'a'));
                shash %= mod;
                shash = (shash+mod)%mod;
            }
            shash = shash*base + s[i]-'a';
            shash%=mod;
            if(i>=plen-1){
                auto it = lower_bound(v.begin(), v.end(), shash);
                if(it!=v.end() && *it == shash) return i-plen+1;
            }
           
        }
        return -1;
    }
};
```