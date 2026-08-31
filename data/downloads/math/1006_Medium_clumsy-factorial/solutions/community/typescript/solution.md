# [Java/C/C++/typescript/JS] optimize Solution

**Author:** Shree_Govind_Jee
**Votes:** 1
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/4485208/](https://leetcode.com/problems/clumsy-factorial/solutions/4485208/)

---

# Complexity
- Time complexity:$$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Java
```
class Solution {
    public int clumsy(int n) {
        // int res = n;
        // int sign = 0;
        // for(int i=n-1; i>0; i--){
        //     if(sign%4==0){
        //         res*=i;
        //     } else if(sign%4==1){
        //         res/=i;
        //     } else if(sign%4==2){
        //         res+=i;
        //     } else if(sign%4==3){
        //         res=(-1*i);
        //     }
        //     sign++;
        // }
        // return res;

        // int[] magic = new int[]{1, 2, 2, -1, 0, 0, 3, 3};
        // return n+((n>4)?magic[n%4]:magic[n+3]);


        if(n==1) return 1;
        if(n==2) return 2;
        if(n==3) return 6;
        if(n==4) return 7;
        if(n%4 == 1) return n+2;
        if(n%4 == 2) return n+2;
        if(n%4 == 3) return n-1;
        return n+1;
    }
}
```
```typescript []
function clumsy(n: number): number {
    if(n==1) return 1;
    if(n==2) return 2;
    if(n==3) return 6;
    if(n==4) return 7;
    if(n%4 == 1) return n+2;
    if(n%4 == 2) return n+2;
    if(n%4 == 3) return n-1;
    return n+1;
};
```
```C++ []
class Solution {
public:
    int clumsy(int n) {
        if(n==1) return 1;
        if(n==2) return 2;
        if(n==3) return 6;
        if(n==4) return 7;
        if(n%4 == 1) return n+2;
        if(n%4 == 2) return n+2;
        if(n%4 == 3) return n-1;
        return n+1;
    }
};
```
```C []
int clumsy(int n) {
        if(n==1) return 1;
        if(n==2) return 2;
        if(n==3) return 6;
        if(n==4) return 7;
        if(n%4 == 1) return n+2;
        if(n%4 == 2) return n+2;
        if(n%4 == 3) return n-1;
        return n+1;
}
```
```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function(n) {
        if(n==1) return 1;
        if(n==2) return 2;
        if(n==3) return 6;
        if(n==4) return 7;
        if(n%4 == 1) return n+2;
        if(n%4 == 2) return n+2;
        if(n%4 == 3) return n-1;
        return n+1;
};
```

