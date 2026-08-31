# Easy Solution

**Author:** deepakumar-developer
**Votes:** 9
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/4478500/](https://leetcode.com/problems/concatenation-of-array/solutions/4478500/)

---

```Dart []
class Solution {
  List<int> getConcatenation(List<int> nums) {
    List<int> output =[];
    for(int i=0;i<nums.length;i++) {
        output.add(nums[i]);
    } for(int i=0;i<nums.length;i++) {
        output.add(nums[i]);
    } return output;
  }
}
```
```Java []
class Solution {
    public int[] getConcatenation(int[] nums) {
        int[] output = new int[nums.length*2];
        for(int i=0;i<nums.length;i++) {
            output[i]=nums[i];
        } for(int i=0;i<nums.length;i++) {
             output[nums.length+i]=nums[i];
        } return output;
    }
}
```
```Python []
class Solution(object):
    def getConcatenation(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        return nums + nums
        
```
```Python3 []
class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        nums+=nums
        return nums
```
```C++ []
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
         vector<int> output = {};
        for(int i=0;i<nums.size();i++) {
            output.push_back(nums[i]);
        } for(int i=0;i<nums.size();i++) {
            output.push_back(nums[i]);
        } return output;
    }
};
```
