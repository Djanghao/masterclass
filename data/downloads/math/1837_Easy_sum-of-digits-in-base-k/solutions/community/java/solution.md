# JAVA Simple Solution

**Author:** HIMANSHUCHHIKARA
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1175872/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/1175872/)

---

**CODE:**
```
class Solution {
    public int sumBase(int n, int k) {
        int value=convert(n,k); // convert to k base
        int ans=0;
        while(value!=0){
            ans+=value%10;
            value/=10;
        }
        return ans;
    }
    
    private int convert(int n,int b){
          int pow=1;
        int ans=0;
        while(n!=0){
            int r=n%b;
            n/=b;
            ans+=r*pow;
            pow*=10;
        }
        return ans;
    }
}
```

But we want to get the sum of digits after conversion so no need to find exact conversion slight optmisation is calculate answer while conversion.

**CODE:**
```
    public int sumBase(int n, int b) {
           int pow=1;
        int ans=0;
        while(n!=0){
            int r=n%b;
            n/=b;
            ans+=r;
        }
        return ans;
    }
```

Please **UPVOTE** if found it helpful and feel free to reach out to me or comment down if you have any doubt .