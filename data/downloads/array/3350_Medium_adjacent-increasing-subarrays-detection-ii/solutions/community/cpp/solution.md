# 100% OPTIMAL SOLUTION | INTUITIVE APPROACH TO MAX  INCREASING SUBARRAYS WITH DETAILED EXPLAINATION.

**Author:** agam2271
**Votes:** 16
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6029305/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-ii/solutions/6029305/)

---

# Intuition
- To solve this problem, we need to identify consecutive subarrays in the list nums that are strictly increasing. We can keep track of the lengths of these subarrays and update a maximum result based on specific criteria, such as dividing the current length by 2 or taking the minimum of consecutive increasing subarray lengths.

- The key is:
   - If an element continues the increasing sequence, extend the current subarray.
If not, reset the subarray length and keep track of the previous subarray length to evaluate the maximum possible result.


# Approach
Initialize Variables:
**prev**: Tracks the length of the previous increasing subarray.
**curr**: Tracks the length of the current increasing subarray.
ans: Stores the maximum result found so far.
Traverse the Array:

  - For each element starting from the second position:
If nums[i] > nums[i-1]:
Increment curr as it continues the increasing trend.
Else:
The sequence broke, so update prev to curr and reset curr to 1 (new subarray).
Update ans by taking the maximum of ans and the expression max(curr / 2, min(prev, curr)), where curr / 2 or min(prev, curr) evaluates possible maximum lengths based on the problem\u2019s criteria.
Return the Result:

- Return the value of ans, which now contains the length of the longest qualifying subarray.
# Complexity
- Time complexity: **O(n)**, where n is the number of elements in nums. This is because we only pass through the list once.
- Space complexity:**O(1)**, as we use a constant amount of additional space
# Code
```cpp []
class Solution {
public:
    int maxIncreasingSubarrays(vector<int>& nums) {
         int flag=0;
        int prev=0;
        int curr=1;
        int ans=0;

        for(int i=1;i<nums.size();i++){
            if(nums[i-1]<nums[i]){
                curr++;
            }
            else{
                prev=curr;
                curr=1;
            }
            ans=max(ans,max(curr/2,min(prev,curr)));
        }
        return ans;
    }
};
```
```javascript []
class Solution {
    maxIncreasingSubarrays(nums) {
        let prev = 0;
        let curr = 1;
        let ans = 0;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] < nums[i]) {
                curr++;
            } else {
                prev = curr;
                curr = 1;
            }
            ans = Math.max(ans, Math.max(Math.floor(curr / 2), Math.min(prev, curr)));
        }
        
        return ans;
    }
}

```
```python []
class Solution:
    def maxIncreasingSubarrays(self, nums):
        prev = 0
        curr = 1
        ans = 0

        for i in range(1, len(nums)):
            if nums[i - 1] < nums[i]:
                curr += 1
            else:
                prev = curr
                curr = 1
            ans = max(ans, max(curr // 2, min(prev, curr)))
        
        return ans
```
```java []
class Solution {
    public int maxIncreasingSubarrays(int[] nums) {
        int prev = 0;
        int curr = 1;
        int ans = 0;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i - 1] < nums[i]) {
                curr++;
            } else {
                prev = curr;
                curr = 1;
            }
            ans = Math.max(ans, Math.max(curr / 2, Math.min(prev, curr)));
        }
        
        return ans;
    }
}
```
