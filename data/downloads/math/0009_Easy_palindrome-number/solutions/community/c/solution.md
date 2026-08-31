# ✅ Accepted   Java / C  code || Beats 98%

**Author:** thilaknv
**Votes:** 312
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/3283534/](https://leetcode.com/problems/palindrome-number/solutions/3283534/)

---

**Note:**

**`Check only half of the digits of given number to prevent OVERFLOW`**

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ --> 

- Space complexity : $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code:
```java []
class Solution {
    public boolean isPalindrome(int x) {
        if(x<0 || x!=0 && x%10 ==0 ) return false;
        int check=0;
        while(x>check){
            check = check*10 + x%10;
            x/=10;
        }
        return (x==check || x==check/10);
    }
}
````
```c []
bool isPalindrome(int x){
    if(x<0 || x!=0 && x%10 ==0 ) return false;
    int check=0;
    while(x>check){
        check = check*10 + x%10;
        x/=10;
    }
    return (x==check || x==check/10);
}
```
 **Use similar Math in PYTHON / C++**
