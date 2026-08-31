# C# 88% || simple solution

**Author:** nzspider
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/2951353/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/2951353/)

---

# Code
```
public class Solution {
    public int[] GetNoZeroIntegers(int n) {
        int a = 1, b = n-1;
        while(a < b){
            if((a.ToString().IndexOf("0") < 0) && b.ToString().IndexOf("0") < 0){
                return new int[2]{a, b};
            }
            a++;
            b--;
        }
        return new int[2]{a, b};
    }
}
```