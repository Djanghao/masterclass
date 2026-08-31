# Top-Performing C++ Solution: 100% Runtime, Easy to Follow for Maximum Ascending Sum

**Author:** VenkateshMundra
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4260384/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/4260384/)

---



# Approach
This C++ class defines a solution for finding the maximum sum of ascending subarrays within a given vector of integers, 'nums.'

1. Initialize 'sum' to the first element in 'nums' and 'answer' to 0.
2. Check if 'nums' contains only one element, in which case, return that element.
3. Initialize an index 'i' to 1.
4. Iterate through 'nums' starting from the second element.
5. If the current element is greater than the previous one, add it to 'sum' to extend the ascending subarray.
6. Update 'answer' with the maximum value between 'answer' and 'sum' at each step.
7. If the current element is not greater than the previous one, reset 'sum' to the current element to start a new ascending subarray.
8. Increment 'i' to move to the next element.
9. Finally, return the 'answer,' which holds the maximum sum of ascending subarrays found in 'nums.'
10. The code efficiently finds and returns the desired result.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)
# Code
```
class Solution {
public:
    int maxAscendingSum(vector<int>& nums) {
        int sum=nums[0];
        int answer=0;

        if(nums.size()==1){
            return nums[0];
        }

        int i=1;
        while(i<nums.size()){
            if(nums[i]>nums[i-1]){
                sum=sum+nums[i];
            }

            answer=max(answer,sum);

            if(nums[i]<=nums[i-1]){
                sum=nums[i];
            }
    
          i++;

        }
        return answer;
    }
};
```