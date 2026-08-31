# C# Solution Faster Than 100%

**Author:** mohamedAbdelety
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/3370055/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/3370055/)

---


# Complexity
- Time complexity:
O((N * log(N)) + (M * log(M)))
where N is nums length & M largest element of the numsDivide array
- Space complexity:
O(1)
# Code
```
public class Solution {
    public int MinOperations(int[] nums, int[] numsDivide) {
        Array.Sort(nums);
        int divide = GCD(numsDivide);
        int cur = 0;
        while(cur < nums.Length){
            if(divide % nums[cur] == 0) break;
            cur++;
        }
        if(cur == nums.Length) return -1;
        return cur;
    }
    public int GCD(int[] nums){
        int res = nums[0];
        for(int i = 1;i < nums.Length;i++)
           res = GCD(res,nums[i]);
        return res;
    }
    public int GCD(int a, int b){
        if(a == 0) return b;
        return GCD(b % a,a);
    }

}
```