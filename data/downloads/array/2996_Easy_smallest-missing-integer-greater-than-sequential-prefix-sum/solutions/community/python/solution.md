# Easy Video Explanation 🔥 || Prefix sum + Sorting

**Author:** ayushnemmaniwar12
**Votes:** 22
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4519104/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4519104/)

---

# ***Easy Video Explanation***

https://youtu.be/1DV82kWAH1A




# Approach
<!-- Describe your approach to solving the problem. -->
Our code finds the sum of consecutive integers in the sorted array, then iterates through the sorted array to find the smallest missing integer, incrementing the sum. The result is the smallest positive integer not present in the input array.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
    

# Code


```C++ []
class Solution {
public:
    int missingInteger(vector<int>& nums) {
        int countSum = nums[0];
        for(int i =1; i<nums.size();i++){
            if(nums[i-1]+1 == nums[i]) countSum += nums[i];
            else break;
        }
        sort(nums.begin(),nums.end());
        for(int i = 0; i< nums.size(); i++){
            if(countSum == nums[i]){
                countSum++;
            }
        }
        return countSum;
        
    }
};
```
```python []
class Solution:
    def missingInteger(self, nums: List[int]) -> int:
        countSum = nums[0]
        for i in range(1, len(nums)):
            if nums[i - 1] + 1 == nums[i]:
                countSum += nums[i]
            else:
                break
        nums.sort()
        for i in range(len(nums)):
            if countSum == nums[i]:
                countSum += 1
        return countSum

```
```Java []
class Solution {
    public int missingInteger(int[] nums) {
        int countSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i - 1] + 1 == nums[i]) countSum += nums[i];
            else break;
        }
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            if (countSum == nums[i]) {
                countSum++;
            }
        }
        return countSum;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00