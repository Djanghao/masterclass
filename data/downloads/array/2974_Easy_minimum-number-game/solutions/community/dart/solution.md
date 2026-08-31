# Simple Code Base with 0ms

**Author:** deepakumar-developer
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/4452282/](https://leetcode.com/problems/minimum-number-game/solutions/4452282/)

---



# Code
```Dart []
class Solution {
  List<int> numberGame(List<int> nums) {
        nums.sort();
        List<int> output=List<int>.filled(nums.length,0);
        for(int i=0;i<nums.length;i+=2){
            output[i]=nums[i+1];
            output[i+1]=nums[i];
        }
        return output;
  }
}
```
```java []
class Solution {
    public int[] numberGame(int[] nums) {
        Arrays.sort(nums);
        int[] output = new int[nums.length];
        for(int i=0;i<nums.length;i+=2){
            output[i]=nums[i+1];
            output[i+1]=nums[i];
        }
        return output; 
    }
}
```
```python []
class Solution(object):
    def numberGame(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        nums.sort();
        output=[];
        for i in range(0,len(nums),2):
            output.append(nums[i+1]);
            output.append(nums[i]);
        return output;
```
```python3 []
class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        nums.sort();
        output=[];
        for i in range(0,len(nums),2):
            output.append(nums[i+1]);
            output.append(nums[i]);
        return output;
```
```cpp []
class Solution {
public:
    vector<int> numberGame(vector<int>& nums) {
        sort(nums.begin(), nums.end());   
        vector<int> output={};
        for(int i=0;i<nums.size();i+=2){
            output.push_back(nums[i+1]);
            output.push_back(nums[i]);
        }
        return output;
    }
};```