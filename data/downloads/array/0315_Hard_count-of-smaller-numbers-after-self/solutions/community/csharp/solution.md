# Simple c# solution using binary search

**Author:** xyz634
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/3253257/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/3253257/)

---

# Intuition
Use binary search

# Approach
Start for loop from last element in array and store them in sorted list. Using binary search find place for current element and insert it in sorted list. All numbers which are in the list before this new element are smaller then this element. Put this value in the array instead of current element.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
public class Solution {
    public IList<int> CountSmaller(int[] nums) {
        List<int> list = new List<int>();
        list.Add(nums[nums.Length-1]);
        nums[nums.Length-1]=0;
        for(int i=nums.Length-2;i>=0;i--){
            int sum = binSearch(list, nums[i]);
            nums[i]=sum;
        }
        return nums;
    }
    
    private int binSearch(List<int> list, int target){
        int left = 0;
        int right= list.Count-1;
        while(left<=right){
            int mid = (left + right)/2;
            if(list[mid]<target)
                left = mid+1;
            else
                right= mid-1;            
        }
        
        list.Insert(left,target);
        return left;
    }
}
```