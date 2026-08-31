# Python3   ||   2 lines,  strings  ||   T/S: 90% / 61%

**Author:** Spaulding_
**Votes:** 27
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3053953/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3053953/)

---

The absolute value condition is a red herring. The sum of digits (`digitSum`) is always no greater than `sum(nums)`.

```python3 []
class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:

        digitSum = sum((map(int, ''.join(map(str,nums)))))

        return sum(nums) - digitSum
```
```cpp []
class Solution {
public:
    int differenceOfSum(vector<int>& nums) {
        int totalSum = 0, digitSum = 0;

        for (int num : nums) {
            totalSum += num;
            
            while (num > 0) {
                digitSum += num % 10;
                num /= 10;}
        }

        return totalSum - digitSum;}
};

```
```java []
public class Solution {
    public int differenceOfSum(int[] nums) {
        int totalSum = 0;
        int digitSum = 0;

        for (int num : nums) {
            totalSum += num;
 
            while (num > 0) {
                digitSum += num % 10;
                num /= 10;}
        }

        return totalSum - digitSum;}
}
```

[https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/submissions/1450875576/?submissionId=1450875753](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/submissions/1450875576/?submissionId=1450875753)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.