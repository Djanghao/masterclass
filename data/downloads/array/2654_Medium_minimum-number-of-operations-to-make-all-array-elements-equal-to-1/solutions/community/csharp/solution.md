# c#

**Author:** BinksWang
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3462249/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3462249/)

---

# Code
```
public class Solution {
  public int MinOperations(int[] nums) {
    if (nums.Contains(1))
      return nums.Length - nums.Count(n => n == 1);

    var res = int.MaxValue;
    for (var i = 0; i < nums.Length; i++) {
        var gcd = nums[i];
        for (var j = i + 1; j < nums.Length; j++) {
            gcd = GCD(gcd, nums[j]);
            if (gcd == 1){
                res = Math.Min(res, j - i + (nums.Length - 1));
                break;
            }
        } 
    }     
    return res == int.MaxValue ? -1 : res;
  }

  static int GCD(int num1, int num2) {
    while (num2 != 0) {
        int temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
  }
}
```