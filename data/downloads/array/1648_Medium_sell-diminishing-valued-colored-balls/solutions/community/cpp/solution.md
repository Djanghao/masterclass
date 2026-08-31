# C++ | O(Nlog N) | Simple Array & BS

**Author:** shadow_47
**Votes:** 2
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/2102300/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/2102300/)

---

```
using ll = long long;
const long long MOD = 1e9 + 7;
ll mod_a(ll a,ll b){a %= MOD;b %= MOD;return (((a + b) % MOD) + MOD) % MOD;}
ll mod_m(ll a,ll b){a %= MOD;b %= MOD;return (((a * b) % MOD) + MOD) % MOD;}
ll mod_s(ll a,ll b){a %= MOD;b %= MOD;return (((a - b) % MOD) + MOD) % MOD;}
long long f(long long N){return N * (N + 1) / 2;}
class Solution {
public:
    int maxProfit(vector<int>& I,long long orders) {
        sort(I.begin(),I.end());
        int N = I.size();
        int R = N,Val = I[N-1];
        long long C = 0;
        while(orders){
            int l = 0,r = R-1,idx = -1;
            while(l<=r){
                int m = l + (r-l)/2;
                if(I[m]>=Val){
                    idx = m;
                    r = m - 1;
                }else l = m + 1;
            }
            long long D = 1ll * (N - idx);
            long long Last = 1ll * (idx ? I[idx-1] : 0);
            if((D * (Val - Last))<=orders){
                C = mod_a(C,mod_m(D,mod_s(f(Val),f(Last))));
                orders -= (D * 1ll * (Val - Last));
                Val = (idx ? I[idx-1] : 0);
                R = idx;
            }else{
                long long S = orders / D;
                C = mod_a(C,mod_m(D,mod_s(f(Val),f(Val-S))));
                C = mod_a(C,mod_m((orders % D),mod_s(Val,S)));
                orders = 0;
            }
        }
        return C % MOD;
    }
};
```