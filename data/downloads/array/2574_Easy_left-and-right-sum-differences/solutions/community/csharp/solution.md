# C# and C++ very easy solution.

**Author:** aloneguy
**Votes:** 11
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3412048/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3412048/)

---

![photo_2023-04-13_13-45-22.jpg](./images/0.jpeg)

```C++ []
class Solution {
public:
    vector<int> leftRigthDifference(vector<int>& nums) {
      int leftSum = 0, rightSum = 0, n = nums.size();
        for(int num : nums) rightSum += num;
        for(int i = 0; i < n; i++) {
            int val = nums[i];
            rightSum -= val;
            nums[i] = abs(leftSum - rightSum);
            leftSum += val;
        }
        return nums;  
    }
};

        
```
```C# []
public class Solution {
    public int[] LeftRigthDifference(int[] nums) {
        int leftSum = 0, rightSum = 0, n = nums.Length;
        foreach(int num in nums) rightSum += num;
        for(int i = 0; i < n; i++) {
            int val = nums[i];
            rightSum -= val;
            nums[i] = Math.Abs(leftSum - rightSum);
            leftSum += val;
        }
        return nums;  
    }
}
```
