# Beats 100% | Detailed Solution | Java, C, C++, JavaScript, Python ✅✅

**Author:** Ikapoor123
**Votes:** 7
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4778633/](https://leetcode.com/problems/split-the-array/solutions/4778633/)

---

# Its Easy, Just read 
# You can do it
# Approach
<!-- Describe your approach to solving the problem. -->
1. int[] data = new int[101]; creates an integer array named data with a size of 101. This array will be used to store the frequency of each number in the input array nums.
2. for (int i : nums) iterates over each element i in the input array nums.
data[i]++; increments the count of the current element i in the data array. This effectively tracks how many times each number appears in nums.
3. if (data[i] > 2) { return false; } checks if the count of any element in data becomes greater than 2. This condition ensures that no number appears more than twice in the input array. If this condition is violated, the method immediately returns false, indicating that splitting is not possible.
4. If the loop completes without encountering any violations in the if condition, it means that no number appears more than twice in nums. Therefore, the method returns true, signifying that splitting the array is possible.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Please Upvote !\u2705\u2705
# Code
``` java []
class Solution {
    public boolean isPossibleToSplit(int[] nums) {
        int[] data = new int[101];
        
        for(int i : nums){
            data[i]++;
            if(data[i]>2)   return false;
        }
        return true;
    }
}
```
```C []
bool isPossibleToSplit(int* nums, int numsSize) {
    int data[101] = {0};
        
        for(int i=0;i<numsSize;i++){
            data[nums[i]]++;
            if(data[nums[i]]>2)   return false;
        }
        return true;
}
```
```C++ []
class Solution {
public:
    bool isPossibleToSplit(vector<int>& nums) {
        int data[101] = {0};
        
        for(int i=0;i<nums.size();i++){
            data[nums[i]]++;
            if(data[nums[i]]>2)   return false;
        }
        return true;
    }
};
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    const data = new Array(101).fill(0); 

    for (const i of nums) {
        data[i]++; 
        if (data[i] > 2)  return false; 
    }

    return true; 
};
```
```Python []
class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        data = [0] * 101  

        for i in nums:
            data[i] += 1  
            if data[i] > 2: return False  

        return True
```
