# Easy Solution

**Author:** deepakumar-developer
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/4475314/](https://leetcode.com/problems/number-of-good-pairs/solutions/4475314/)

---

```Dart []
class Solution {
  int numIdenticalPairs(List<int> nums) {
    int output=0;
    for(var i=0;i<nums.length-1;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i] == nums[j] && i < j){
                output++;
            }
        }
    }
    return output;
  }
}
```
```C++ []
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        int output=0;
        for(int i=0;i<nums.size()-1;i++){
            for(int j=i+1;j<nums.size();j++){
                if(nums[i] == nums[j] && i < j){
                    output++;
                }
            }
        }
        return output;
    }
};
```
```java []
class Solution {
    public int numIdenticalPairs(int[] nums) {
        int output=0;
        for(int i=0;i<nums.length-1;i++){
            for(int j=i+1;j<nums.length;j++){
                if(nums[i] == nums[j] && i < j){
                    output++;
                }
            }
        }
        return output;
    }
}
```
```python []
class Solution(object):
    def numIdenticalPairs(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        output=0;
        for i in range(0,len(nums)-1):
            for j in range(i,len(nums)):
                if(nums[i] == nums[j] and i < j):
                    output+=1;
        return output;
        
```
```python3 []
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        output=0;
        for i in range(0,len(nums)-1):
            for j in range(i,len(nums)):
                if(nums[i] == nums[j] and i < j):
                    output+=1;
        return output;
```
# If you got a correct answer 
**UPVOTE ME **


