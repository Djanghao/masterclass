# C++ || JavaScript || Easy Solution

**Author:** Imran32
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/3922656/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/3922656/)

---

# Complexity
- Time complexity: O(sqrt(n))

- Space complexity: O(1)


# Code
# C++
```
class Solution {
public:
    int findAns(int n){
        int div=2,ans=0;
        while(n%2==0){
            ans+=2;
            n/=2;
        }
        int res=sqrt(n);
        for(int i=3;i<=res;i+=2){
            while(n%i==0){
                ans+=i;
                n/=i;
            }
        }
        if(n>2) ans+=n;
        return ans;
    }
    int smallestValue(int n) {
        while(1){
            int ans=findAns(n);
            if(ans==n) return n;
            n=ans;
        }
        return n;
    }
};
```

---

# JavaScript
```
/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function(n) {
    const findAns=(n)=>{
        let ans=0;
        while(n%2==0){
            ans+=2;
            n/=2;
        }
        let res=Math.sqrt(n);
        for(let i=3;i<=res;i+=2){
            while(n%i==0){
                ans+=i;
                n/=i;
            }
        }
        if(n>2) ans+=n;
        return ans;
    }
    while(1){
        let ans=findAns(n);
        if(ans==n) return n;
        n=ans;
    }
    return n;
};
```