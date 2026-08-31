# ✅Easy and Clean Code (C++ / Java / C#) Beats 100% ✅✅✅

**Author:** Sayan98
**Votes:** 7
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6053246/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6053246/)

---

# Approach
- Initial Sum Calculation:
    - Find the first zero in the array and calculate left sum up to that point
    - Calculate right sum from first zero to the end
- Iterate Through Zeros:
    - Update running sums as we move through array:
        - Add current number to left sum
        - Subtract current number from right sum
- Check Valid Selections:
    - When a zero is encountered:  
        - If left sum equals right sum: add 2 (both -1 and 1 work)
        - If left sum differs by 1 from right sum: add 1 (either -1 or 1 works)
- Return total count of valid selections

# Complexity
- Time complexity: **O(n)**
- Space complexity: **O(1)**


```java []
class Solution {
    public int countValidSelections(int[] nums) {
        int index = 0;
        int left = 0;
        int right = 0;
        
        for (int i = 0; i < nums.length; i++) {
            left += nums[i];
            if (nums[i] == 0) {
                index = i;
                break;
            }
        }
        
        for (int i = index; i < nums.length; i++) right += nums[i];        

        int count = 0;
        for (int i = index; i < nums.length; i++) {
            left += nums[i];
            right -= nums[i];
            
            if (nums[i] != 0) continue;
            
            if (left == right) count += 2;
            else if (left - 1 == right || left + 1 == right) count += 1;
        }
        
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int countValidSelections(vector<int>& nums) {
        int index = 0;
        int left = 0;
        int right = 0;
        
        for (int i = 0; i < nums.size(); i++) {
            left += nums[i];
            if (nums[i] == 0) {
                index = i;
                break;
            }
        }
        
        for (int i = index; i < nums.size(); i++) right += nums[i];        

        int count = 0;
        for (int i = index; i < nums.size(); i++) {
            left += nums[i];
            right -= nums[i];
            
            if (nums[i] != 0) continue;
            
            if (left == right) count += 2;
            else if (left - 1 == right || left + 1 == right) count += 1;
        }
        
        return count;
    }
};
```
```C# []
public class Solution {
    public int CountValidSelections(int[] nums) {
        var index = 0;
        var left = 0;
        var right = 0;
        for (int i = 0; i < nums.Length; i++) {
            left += nums[i];
            if(nums[i] == 0) {
                index = i;
                break;
            }
        }

        for (int i = index; i < nums.Length; i++) right += nums[i];
        
        var count = 0;
        for (int i = index; i < nums.Length; i++) {

            left += nums[i];
            right -= nums[i];

            if(nums[i] != 0) continue;

            if(left == right) count += 2;
            else if(left - 1 == right || left + 1 == right) count += 1;
        }
        return count;
    }
}
```
