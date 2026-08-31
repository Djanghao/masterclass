# C# easy solution.

**Author:** aloneguy
**Votes:** 2
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/3280463/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/3280463/)

---



# Code
```
public class Solution {
    public int SubtractProductAndSum(int n) {
        int sum=1,s=0;
        while(n!=0){
            sum*=n%10;  // calculate its product
            s+=n%10;    // calculate the sum of its digits
            n/=10;
        }
        return sum-s;
    }
}
```