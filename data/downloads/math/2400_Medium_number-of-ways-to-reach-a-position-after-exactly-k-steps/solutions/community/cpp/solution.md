# C++ Solution using Simple Math

**Author:** ihsnayvid
**Votes:** 73
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2527926/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2527926/)

---

Let, r = right steps ,  l = left steps , diff = difference between startPos and endPos
now, eq 1 **r - l = diff** (as the overall difference of the steps must be equal to diff to reach our destination 
		 eq 2  **r + l = k** ( as the total left and right steps should exactly be k )
Now after solving these simple equations, we get 
**r = (k + diff ) / 2** and **l = (k - diff) / 2** 

We basically have to arrange k steps and return the overall number of arrangements , which will be **k!** .
In these k steps, r steps are identical to themselves and similarly l steps are identical to themselves

So our answer becomes => **k! / (r! \\* l!)**
After substituting the value of l = k-r from eq 2, our answer becomes 
**k! / (r! \\* (k-r)!)** which is nothing but ---> **kCr**

So here is the solution,
```
class Solution {
public:
    const int mod = 1000000007;
    
    //Function to calculate nCr 
	//C(n, r) = C(n-1, r-1) + C(n-1, r)
    int nCr(int n, int r){
        if(r == 0) return 1;
        vector<int> v(r+1,0);
        v[0] = 1;
        for(int i=1; i<=n; i++){
            for(int j=r; j>0; j--)
                v[j] = ((v[j] % mod) + (v[j-1] % mod)) % mod;
        }
        return v[r];
    }    
    
   int numberOfWays(int startPos, int endPos, int k) {
        int diff = abs(endPos - startPos);
        //difference is greater than k or 
        //after moving diff steps, we have odd number of steps left
        if(diff > k or diff + k & 1) return 0;
        
        long r = (diff + k) / 2;
        return nCr(k,r);
    }
};
```

