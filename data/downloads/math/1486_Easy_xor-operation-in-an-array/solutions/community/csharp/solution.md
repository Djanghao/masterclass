# C# easy solution.

**Author:** aloneguy
**Votes:** 2
**Link:** [https://leetcode.com/problems/xor-operation-in-an-array/solutions/3288495/](https://leetcode.com/problems/xor-operation-in-an-array/solutions/3288495/)

---



# Code
```
public class Solution {
    public int XorOperation(int n, int start) {
        int sum=start;
       for(int i=1;i<n;i++){
        sum=sum^(start+2*i); // xor operation.
       } 
       return sum;
    }
}
```