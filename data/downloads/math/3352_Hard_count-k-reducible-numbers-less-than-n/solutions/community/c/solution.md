# C++ || With Explanation

**Author:** pbmessi
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6028619/](https://leetcode.com/problems/count-k-reducible-numbers-less-than-n/solutions/6028619/)

---

First , we calculate the answer for all integers upto 800,now since size of string is bounded by 800 the count of set bits of all integers less than n(integer represented by s) will also be less than 800,so if we apply the operation 1 time to any integer it will be in the range (1-800).

Now, we can solve the following problem:
* Iterate from 1 to size of string.Let current value be i.
* If answer for i is less than equal to k-1(minus one because we already use one operation),then we need to find count of all integers having i bit set and less than n .
* Add count for all valid i .
* This also count the number n if it's k-reducible so make sure to check and subtract it.

If you have any queries, feel free to ask.

```
using ll = long long;
const long long md=1e9+7;

vector<long long> fact(805),ifact(805);
long long power(long long x, long long y, long long p){
    long long ans = 1; x = x % p; if (x == 0) return 0; 
    while (y > 0){
        if (y & 1) ans = (ans*x) % p; y = y>>1; x = (x*x) % p;
    }return ans;
}

long long bin(long long a, long long b){
    return ((fact[a]*ifact[a-b]%md)*ifact[b])%md;
}

class Solution {
public:
    int countKReducibleNumbers(string s, int k) {
        long long range=801;
        fact[0]=1,ifact[0]=1;
        for(long long i=1;i<=range;i++) fact[i]=(i*fact[i-1])%md;
        ifact[range]=power(fact[range],md-2,md);
        for(long long i=range-1;i>0;i--) ifact[i]=(ifact[i+1]*(i+1))%md;
        
        vector<ll> ans(801,-1);
        ans[1]=0;
        for(int i=2;i<=800;i++){
            int cnt=0;
            int x=i;
            while(x>0){
                if(x&1) cnt++;
                x=x/2;
            }
            ans[i]=ans[cnt]+1;
        }
        
        ll n=s.length();
        ll res=0;
        for(ll i=1;i<=n;i++){
            ll val=i;
            if(ans[i]<=k-1){
                for(ll j=0;j<n;j++){
                    if(s[j]=='1'){
                        ll rem=n-j-1;
                        if(rem<val-1) break;
                        if(rem>=val) res=(res+bin(rem,val))%md;
                        val--;
                        if(val<=0) { res++;  res%=md; break; }
                    }
                }
            }
        }
        int tot=0;
        for(int i=0;i<n;i++){
            if(s[i]=='1') tot++;
        }
        if(ans[tot]<=k-1) res--;
        res+=md;
        res%=md;
        
        return res;
    }
};
```