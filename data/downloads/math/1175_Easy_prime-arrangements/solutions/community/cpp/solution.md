# C➕➕ Easy Solution || 100% Faster || Permutation || Mathematics

**Author:** tripathiharish2001
**Votes:** 2
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/3644028/](https://leetcode.com/problems/prime-arrangements/solutions/3644028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Find total prime numbers from 1 to n
2. Answer = (permutation of prime)*(permutation of non-prime)

# Code
```
class Solution {
public:
    
    int numPrimeArrangements(int n) {
        vector<int> prime(n+1,1);
        if(n==1)return 1;
        prime[0]=0;
        prime[1]=0;

        int cnt = 0;
        for(int i = 0 ; i<=n ; i++){
            if(prime[i]==0)continue;
            cnt++;
            for(int j=i*2;j<=n;j+=i)prime[j]=0;
        }

        const int m = 1e9+7;

        int ans=1;
        int temp =n-cnt;
            while(cnt>0){
                ans = ( 1LL*(ans%m) * 1LL*(cnt%m))%m;
                cnt--;
            }

        int fact2 = 1;
        while(temp>0){
                fact2 = ( 1LL*(fact2%m) * 1LL*(temp%m))%m;
                temp--;
        }
        
        return (1LL*(ans%m) * 1LL*(fact2%m))%m;
    }
};
```