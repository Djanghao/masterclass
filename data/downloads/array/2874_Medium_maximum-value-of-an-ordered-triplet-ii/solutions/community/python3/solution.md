# One pass | Fastest solution | Beats 100% | C++ / Python / Java

**Author:** Manan_09
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4113801/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/solutions/4113801/)

---

# Intuition
Here we have to maximise value for ( nums[i] - nums[j] ) * nums[k]
- Now if we want to maximise this for current value nums[k] , we shold have max value for ( nums[i] - nums[j] )
- If you want max value for ( nums[i] - nums[j] ) we should know max value for nums[i] for current value nums[j]

From this we can conclude , we need 3 diffrent variables to keep track of current max for : nums[i] , nums[i] - nums[j] , ( nums[i] - nums[j] ) * nums[k]

# Approch

As per our intution , take three variable to store current max for required numbers and in one pass find highest value for ( nums[i] - nums[j] ) * nums[k]

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
C++
```
class Solution {
public:
    long long maximumTripletValue(vector<int>& nums) {
        long long highest = 0; // to store highest number till now  : num[i]
        long long highest_diff = 0; // to store highest diff : num[i] - num[j]
        long long answer = 0; // to store current max value : ( num[i] - num[j] ) * num[k]
        for(long long num : nums) { 
            answer = max( answer , highest_diff * num); 
            highest_diff = max(highest_diff, highest - num);
            highest = max(highest, num);
        }
        return answer;
    }
};
```

Python
```
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        highest = 0  # to store highest number till now: nums[i]
        highest_diff = 0  # to store highest diff: nums[i] - nums[j]
        answer = 0  # to store current max value: (nums[i] - nums[j]) * nums[k]
        for num in nums:
            answer = max(answer, highest_diff * num)
            highest_diff = max(highest_diff, highest - num)
            highest = max(highest, num)
        return answer
```

Java
```
class Solution {
    public long maximumTripletValue(int[] nums) {
        long highest = 0; // to store highest number till now: nums[i]
        long highest_diff = 0; // to store highest diff: nums[i] - nums[j]
        long answer = 0; // to store current max value: (nums[i] - nums[j]) * nums[k]
        for (int num : nums) {
            answer = Math.max(answer, highest_diff * num);
            highest_diff = Math.max(highest_diff, highest - num);
            highest = Math.max(highest, num);
        }
        return answer;
    }
}
```