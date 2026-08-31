# Java | JavaScript | O(n) time | Beats 95%

**Author:** nishant7372
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/3484486/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/3484486/)

---

``` java []
// TC: O(n)
// SC: O(n)
class Solution {
    static int mod = (int)1e9+7;
    public int numWays(String s) {
        int n = s.length(), sum=0;
        char[] arr = s.toCharArray();
        for(char ch:arr){
            sum+=ch-'0';
        }
        if(sum%3!=0){
            return 0;
        }
        sum=sum/3;

        if(sum==0){
            return (int)((((long)(n-2)*(n-1))/2)%mod);
        }

        int si=0, c1=0, c2=0;
        for(char ch:arr){
            si+=ch-'0';
            if(si==sum)
                c1++;
            if(si==2*sum)
                c2++;
        }
        return (int)(((long)c1*c2)%mod);
    }
}
```
``` javascript []
// TC: O(n)
// SC: O(1)
var numWays = function(s) {
    const mod = 1e9+7; 
    let n = s.length, sum=0;
    for(let i=0;i<n;i++){
        sum+=s[i]-'0';
    }
    if(sum%3!=0){
        return 0;
    }
    sum=sum/3;

    if(sum==0){
        return (((n-2)*(n-1))/2)%mod;
    }

    let si=0, c1=0, c2=0;
    for(let i=0;i<n;i++){
        si+=s[i]-'0';
        if(si==sum)
            c1++;
        if(si==2*sum)
            c2++;
    }
    return (c1*c2)%mod;
};
```