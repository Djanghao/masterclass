# 🔥✅✔️Easy C++ ✅ Python3 🐍✅ C ✅ Java ✅ C# ✅ Python 🐍✅ ✔️🔥✅ beats 💯

**Author:** Edwards310
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/5026913/](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/5026913/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-04-15 173712.png](./images/1.png)
![Screenshot 2024-04-15 180711.png](./images/2.png)
```C++ []
class Solution {
public:
    int sumOfEncryptedInt(vector<int>& nums) {
        int sum = 0;
        for (auto& num : nums) {
            int mxNum = 0, cnt = 0;
            while (num) {
                mxNum = max(mxNum, num % 10);
                num /= 10;
                cnt++;
            }
            while (cnt--)
                num = num * 10 + mxNum;
            sum += num;
        }
        return sum;
    }
};
```
```python3 []
class Solution:
    def sumOfEncryptedInt(self, nums: List[int]) -> int:
        sum = temp = 0
        for i in range(len(nums)):
            mul = 0
            while nums[i] > 0:
                if temp < nums[i] % 10:
                    temp = nums[i] % 10
                mul = mul * 10 + 1
                nums[i] = nums[i] // 10
            sum += temp * mul
            temp = 0

        return sum
```
```C# []
public class Solution {
    public int SumOfEncryptedInt(int[] nums) {
        int temp = 0, sum = 0;
        for(int i = 0; i < nums.Length; i++){
            int mul = 0;
            while(nums[i] > 0){
                if(temp < nums[i] % 10)
                    temp = nums[i] % 10;
                mul = mul * 10 + 1;
                nums[i] = nums[i] / 10;
            }
            sum += temp * mul;
            temp = 0;
        }
        return sum;
    }
}
```
```Java []
class Solution {
    public int sumOfEncryptedInt(int[] nums) {
        var sum = 0;
        for (var i = 0; i < nums.length; ++i) {
            var num = nums[i];
            var max = 0;
            var digits = 0;
            while (num > 0) {
                max = Math.max(max, num % 10);
                num /= 10;
                digits = digits * 10 + 1;
            }
            sum += digits * max;
        }
        return sum;
    }
}  
```
```python []
class Solution(object):
    def sumOfEncryptedInt(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def encrypt(x):
            str_x = str(x)
            max_digit = max(str_x)
            encrypted_x = int(max_digit * len(str_x))
            return encrypted_x

        total_sum = 0
        for num in nums:
            total_sum += encrypt(num)
     
        return total_sum
```
```C []
int sumOfEncryptedInt(int* nums, int numsSize) {
    int sum = 0, temp = 0;
    for (int i = 0; i < numsSize; i++) {
        int multiplx = 0;
        while (nums[i] > 0) {
            if (temp < nums[i] % 10)
                temp = nums[i] % 10;
            multiplx = multiplx * 10 + 1;
            nums[i] = nums[i] / 10;
        }
        sum += temp * multiplx;
        temp = 0;
    }
    return sum;
}
```

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```
class Solution {
public:
    int sumOfEncryptedInt(vector<int>& nums) {
        int sum = 0;
        for (auto& num : nums) {
            int mxNum = 0, cnt = 0;
            while (num) {
                mxNum = max(mxNum, num % 10);
                num /= 10;
                cnt++;
            }
            while (cnt--)
                num = num * 10 + mxNum;
            sum += num;
        }
        return sum;
    }
};
```
# Please upvote if it's useful .. Thanks
![th.jpeg](./images/3.jpeg)
