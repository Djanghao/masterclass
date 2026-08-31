# [C++/Java/C#/C/JavaScript/TypeScript] Solutions || Easy to Understand

**Author:** nitishhsinghhh
**Votes:** 22
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/2057010/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/2057010/)

---

# Solution

This code removes duplicate elements from a sorted array of numbers. It uses two pointers to iterate through the array and skips over consecutive duplicate numbers. It then returns the length of the array with duplicates removed.


```C++ []
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int len = 0;
        for (int j = 0; j < nums.size(); j++) {
            nums[len++] = nums[j];
            while (j < nums.size() - 1 && nums[j] == nums[j + 1])
                j++;
        }
        return len;
    }
};
```
```java []
class Solution {
    public int removeDuplicates(int[] nums) {
        int i = 0;
        for (int j = 0; j < nums.length; j++) {
            nums[i++] = nums[j];
            while (j < nums.length - 1 && nums[j] == nums[j + 1])
                j++;
        }
        return i;
    }
}
```
```csharp []
// 1. Space O(N)
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        HashSet<int> secondary = new HashSet<int>();
        int counter = 0;        
        for (int i = 0; i < nums.Length; i++) 
            if (secondary.Add(nums[i])) 
                nums[counter++] = nums[i];     
        return counter;
    }
}
// 2. Space O(1)
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int i = 0;
        for (int j = 0;j < nums.Length; j++) {
            nums[i++] = nums[j];            
            while (j < nums.Length - 1 && nums[j] == nums[j + 1]) 
                j++;
        }
        return i;
    }
}
```
```C []
int removeDuplicates(int* nums, int numsSize){
    int i = 0;
    for (int j=0;j<numsSize;j++) {
        nums[i++] = nums[j];            
        while (j < numsSize - 1 && nums[j] == nums[j + 1]) 
            j++;
    }
    return i;
}
```
```javascript []
var removeDuplicates = function(nums) {
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        nums[i++] = nums[j];            
        while (j < nums.length - 1 && nums[j] === nums[j + 1]) 
            j++;
    }
    return i;
};
```
```TypeScript []
function removeDuplicates(nums: number[]): number {
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        nums[i++] = nums[j];            
        while (j < nums.length - 1 && nums[j] === nums[j + 1]) 
            j++;
    }
    return i;
}
```

# Frequently encountered in technical interviews
```
std::vector<std::pair<std::string, int>> interview_frequency = {
    {"Facebook", 16}, {"Amazon", 9},   {"Adobe", 7},
    {"Microsoft", 6}, {"LinkedIn", 5}, {"Bloomberg", 4},
    {"Google", 4},    {"Apple", 4},    {"VMware", 2}};
```