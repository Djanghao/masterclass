# Very Easy to Understand 💯💯 | C++, Java, Python, Python, C#, JavaScript, Kotlin

**Author:** adityabahl
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/2787650/](https://leetcode.com/problems/smallest-range-i/solutions/2787650/)

---

# C++
```
class Solution {
public:
    int smallestRangeI(vector<int>& nums, int k) {
        int maxNum=nums[0],minNum=nums[0];
        for(auto pr:nums){
            maxNum=max(maxNum,pr);
            minNum=min(minNum,pr);
        }
        return max(0,(maxNum-minNum)-2*k);
    }
};
```

# Java
```
class Solution {
    public int smallestRangeI(int[] nums, int k) {
        int maxNum=nums[0],minNum=nums[0];
        for(int pr:nums){
            maxNum=Math.max(maxNum,pr);
            minNum=Math.min(minNum,pr);
        }
        return Math.max(0,maxNum-minNum-2*k);
    }
}
```

# Python
```
class Solution(object):
    def smallestRangeI(self, nums, k):
        return max(0, max(nums) - min(nums) - 2 * k)
```

# Python3
```
class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
        return max(0, max(nums) - min(nums) - 2 * k)
```

# JavaScript
```
var smallestRangeI = function(nums, k) {
    if (nums.length <= 1) return 0;
    let biggest = Math.max(...nums), lowBOfBiggest = biggest-k;
    let smallest = Math.min(...nums), uppBOfSmallest = smallest+k;
    if (lowBOfBiggest-uppBOfSmallest <= 0) return 0;
    else return lowBOfBiggest-uppBOfSmallest; 
};
```

# C#
```
public class Solution {
    public int SmallestRangeI(int[] nums, int k) {
         return Math.Max(0, nums.Max() - nums.Min() - 2 * k);
    }
}
```

# Kotlin
```
class Solution {
    fun smallestRangeI(nums: IntArray, k: Int): Int {
        val minNum = (nums.min() ?: 0) + k 
        val maxNum = (nums.max() ?: 0) - k        
        val diff = maxNum - minNum        
        return if(diff >= 0) diff else 0
    }
}
```