# Solution

**Author:** deleted_user
**Votes:** 229
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/3176170/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/3176170/)

---

```C++ []
class Solution {
public:
    int findMin(vector<int>& nums) {
        int n = nums.size();
        int low=0, high=n-1;
        
        while(low<high){
            if(nums[low] <= nums[high]) return nums[low];
            int mid = low + (high-low)/2;
            if(nums[low] > nums[mid]){
                high=mid;
            } else if(nums[mid] > nums[high]) {
                low=mid+1;
            } 
        }
        if(nums[low] <= nums[high]) return nums[low];
        return -1;
    }
};
```

```Python3 []
class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1

        while l < r:
            m = l + (r - l)

            if nums[m] > nums[r]:
                l = m + 1
             
            else:
                 r = m 

        return nums[l]    
```

```Java []
class Solution {
  public int findMin(int[] nums) {
    int l = 0;
    int r = nums.length - 1;

    while (l < r) {
      final int m = (l + r) / 2;
      if (nums[m] < nums[r])
        r = m;
      else
        l = m + 1;
    }

    return nums[l];
  }
}
```
