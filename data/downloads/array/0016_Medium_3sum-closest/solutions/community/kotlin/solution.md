# ✔️Python, C++,Java,Kotlin|| Beginner level ||As Simple As U Think||Simple-Short-Solution✔️

**Author:** Anos
**Votes:** 4
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/2431292/](https://leetcode.com/problems/3sum-closest/solutions/2431292/)

---

***Please upvote to motivate me in my quest of documenting all leetcode solutions. HAPPY CODING:)
Any suggestions and improvements are always welcome*.**
___________________
_________________
***Q16. 3Sum Closest***
Given an integer array `nums` of length `n` and an integer `targe`t, find three integers in nums such that the sum is closest to `target`.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
____________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________
\u2705 **Python  Code** :
```
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        res = sum(nums[:3])
        for i in range(len(nums)):
            l, r = i+1, len(nums)-1
            while l < r:
                s = sum((nums[i], nums[l], nums[r]))
                if abs(s-target) < abs(res-target):
                    res = s
                if s < target:
                    l += 1
                elif s > target:
                    r -= 1
                else: # break early 
                    return res
        return res
```
**Runtime:**  53 ms	
**Memory Usage:**  13.9 MB
____________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________

\u2705 **Java Code** :
```
class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int output = nums[0] + nums[1] + nums[nums.length - 1];
        for(int i = 0; i < nums.length - 2; i++)
        {
            int j = i + 1;
            int k = nums.length - 1;
            while(j < k)
            {
                int currSum = nums[i] + nums[j] + nums[k];
                if(currSum > target)
                    k--;
                else
                    j++;
                
                if(Math.abs(currSum - target) < Math.abs(output - target))
                    output = currSum;
            }
        }
        return output;
    }
}
```
**Runtime:**  174 ms	
**Memory Usage:**  48.6 MB
____________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________
\u2705 **C++  Code** :
```
class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        sort(nums.begin(),nums.end());
            int l,r,f=0,ans;
        for(int i=0;i<nums.size();i++)
        {
            int t=target-nums[i];
            l=i+1;
            r=nums.size()-1;
            int sum=0;
            while(l<r)
            {
                sum=nums[l]+nums[r];
                if(abs(target-sum-nums[i])<abs(target-ans))
                    ans=sum+nums[i];
                if(sum==t)
                {
                    f=1;
                    break;
                }
                else if(sum>t)
                    r--;
                else
                    l++;
            }
            if(f)
                break;
            
        }
        return ans;
    }
};
```
**Runtime:**  247 ms	
**Memory Usage:**  16.4 MB	
____________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________
\u2705 **Kotlin  Code** :
**Your runtime beats 89.21 % of kotlin submissions.**
```
class Solution {
    fun threeSumClosest(nums: IntArray, target: Int): Int {
        var closest = nums.first() + nums[1] + nums.last()
        val list = nums.sorted()
        (0..list.size - 2).forEach {
            var second = it + 1
            var end = list.size - 1
            while (second < end) {
                var sum = list[it] + list[second] + list[end]
                if (sum > target) end-- else second++
                if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum
            }
        }

        return closest
    }
}
```
**Runtime:**  971 ms	
**Memory Usage:**  51.1 MB	
____________________________________________________________________________________________________________________
____________________________________________________________________________________________________________________
If you like the solution, please upvote \uD83D\uDD3C
For any questions, or discussions, comment below. \uD83D\uDC47\uFE0F
