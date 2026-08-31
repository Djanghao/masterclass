# simple for beginners with explanation

**Author:** harshita_114
**Votes:** 16
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5750655/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5750655/)

---

# Intuition
Here we have to tell them that will alice win if she take all the single digit numbers or all double digit numbers which would be greater than the opposite person bob.

# Approach
So as here we know that she will win if she picks the greatest sum up of single digit numbers or the double digit numbers.

So here the approach is that the only possible way in which alice can be defeated if the bot double digit numbers sum and the single digit number sum would be same, then alice would lose the game.

But of any one category numbers sum makes the greates number then alice can win so here we will just simply add the all single digit numbers and all the double digit numbers.

Then we will compare with the both resulted sum, only if both are same then only she will lose or else she would win.

So we would follow that technique here.

# Code
```java []
class Solution {
    public boolean canAliceWin(int[] nums) {
        int i, count1=0, count2=0;
        int n= nums.length;
        for(i=0; i<n; i++)
        {
            if(nums[i]<10)
            {
               count1 += nums[i];
            }
            else
            {
                count2+= nums[i];
            }
        }
        return count1!=count2;

    }
}
```
```python []
class Solution:
    def canAliceWin(self, nums):
        count1 = 0
        count2 = 0
        for num in nums:
            if num < 10:
                count1 += num
            else:
                count2 += num
        return count1 != count2
```
```cpp []
class Solution {
public:
    bool canAliceWin(vector<int>& nums) {
        int count1 = 0, count2 = 0;
        for (int num : nums) {
            if (num < 10) {
                count1 += num;
            } else {
                count2 += num;
            }
        }
        return count1 != count2;
    }
};
```