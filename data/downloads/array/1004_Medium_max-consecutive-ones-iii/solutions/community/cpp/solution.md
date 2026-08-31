# Solution

**Author:** deleted_user
**Votes:** 576
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/3540704/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/3540704/)

---

```C++ []
class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int i=0,j=0;
        while(j<nums.size()){
            if(nums[j]==0){
                k--;
            }
            if(k<0){
                if(nums[i]==0){
                    k++;
                }
                i++;
            }
            j++;
        }
        return j-i;
    }
};
```

```Python3 []
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l=r=0    
        for r in range(len(nums)):
            if nums[r] == 0:
                k-=1
            if k<0:
                if nums[l] == 0:
                    k+=1
                l+=1
        return r-l+1
```

```Java []
class Solution {
    public int longestOnes(int[] nums, int k) {
        int start=0;
        int end=0;
        int zeros=0;

        while(end<nums.length){
            if(nums[end] == 0){
                zeros++;
            }
            end++;
            if(zeros>k){
                if(nums[start] == 0){
                    zeros--;
                }
                start++;
            }
        }
        return end-start;
    }
}
```