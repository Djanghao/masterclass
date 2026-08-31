# Easy C || C++ || C# || Java  || JavaScript  beats 100% -- Take a Look

**Author:** Edwards310
**Votes:** 0
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/4460925/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/4460925/)

---

# Intuition
```C++ []
class Solution {
public:
    int subtractProductAndSum(int n) {
       int sum = 0,product =1;
       while(n){
           int c = n%10;
           sum += c;
           product *= c;
           n /= 10;
       } 
       return product - sum;
    }
};
```
```python3 []
class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        s = 0
        multi = 1

        while n > 0:
            digit = n % 10
            s += digit
            multi *= digit
            n = n//10

        return multi - s
```
```C# []
public class Solution {
    public int proOfDig(int n){
        if(n==0) return 1;
        int x = n%10;
        return x * proOfDig(n/10);
    }
    public int sumOfDig(int n){
        if(n==0) return 0;
        int x = n%10;
        return x + sumOfDig(n/10);
    }
    public int SubtractProductAndSum(int n) {
        int product = proOfDig(n);
        int sum = sumOfDig(n);
        return product - sum;
    }
}
```
```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0,product =1;
       while(n>0){
           let c = n%10;
           sum += c;
           product *= c;
           n = Math.floor(n/10);
       } 
       return product - sum;
};
```
```C []
int subtractProductAndSum(int n) {
    int sum = 0,product =1;
       while(n){
           int c = n%10;
           sum += c;
           product *= c;
           n /= 10;
       } 
       return product - sum;
}
```
```Java []
class Solution {
    public int proOfDig(int n){
        if(n==0) return 1;
        int x = n%10;
        return x * proOfDig(n/10);
    }
    public int sumOfDig(int n){
        if(n==0) return 0;
        int x = n%10;
        return x + sumOfDig(n/10);
    }
    public int subtractProductAndSum(int n) {
        int product = proOfDig(n);
        int sum = sumOfDig(n);
        return product - sum;
    }
}
```

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int proOfDig(int n){
        if(n==0) return 1;
        int x = n%10;
        return x * proOfDig(n/10);
    }
    public int sumOfDig(int n){
        if(n==0) return 0;
        int x = n%10;
        return x + sumOfDig(n/10);
    }
    public int SubtractProductAndSum(int n) {
        int product = proOfDig(n);
        int sum = sumOfDig(n);
        return product - sum;
    }
}
```