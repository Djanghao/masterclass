# C++ 80ms Math Explaination

**Author:** clonemasterUwU
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/1031184/](https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/1031184/)

---

Assuming `x1*x2*x3*...*xn=k`
For each prime `p`: `v_p(x1)+v_p(x2)+v_p(x3)+ ... v_p(xn)= v_p(k)` `(1)`
(where `v_p(x)` denotes the power of `p` in prime factorization of `x`)
---> count the number of nonegative integral root for each prime `p` of `k`, then multiply
(in case of `(1)` is `(v_p(k)+n-1)C(n-1)`)
Get over TLE by precompute `k!` for `0<=k<=2*mxN`
- inverseModulo takes `log(max(a,p)) ~ log(mod)`
- choose takes `log(mod)` also (due to precompute, otherwise `O(max(a,b))~O(N)`)
- pre takes `O(N)`

Total `O(Qlog(mod)*sqrt(N)+N)`
```
#define ll long long
#define mod 1000000007
ll dp[20001];

void pre(){
    dp[0]=1;
    for(int i=1;i<20001;i++) dp[i]=dp[i-1]*i%mod;
}

ll inverseModulo(ll a,ll p){
    ll xa=1,xp=0,xr,q,u=p,r;
    while(p){
        q=a/p;xr=xa-q*xp;xa=xp;xp=xr;
        r=a%p;a=p;p=r;
    }
    xa=(xa+u)%u;
    return xa;
}

ll choose(int a,int b){
    return dp[a] * inverseModulo(dp[a-b],mod) % mod * inverseModulo(dp[b],mod) % mod;
}

int positiveCount(int n, int k){
    ll res=1;
    int pc=0;
    while(!(k % 2)){
        k= k / 2;
        pc++;
    }
    res= res * choose(pc + n - 1, n - 1) % mod;
    for(int i=3;i*i <= k; i+=2){
        if(!(k % i)){
            pc=0;
            while(!(k % i)){
                k= k / i;pc++;
            }
            res= res * choose(pc + n - 1, n - 1) % mod;
        }
    }
    if(k > 1) res= res * n % mod;
    return (int)res;
}

vector<int> waysToFillArray(vector<vector<int>>& queries) {
    int c = queries.size();
    vector<int> res(c);
    pre();
    for(int i=0;i<c;i++){
        res[i]=positiveCount(queries[i][0],queries[i][1]);
    }
    return res;
}
```