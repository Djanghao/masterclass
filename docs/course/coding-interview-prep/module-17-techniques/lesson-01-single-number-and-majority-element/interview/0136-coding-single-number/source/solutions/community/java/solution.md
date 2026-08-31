# Solution

**Author:** deleted_user
**Votes:** 525
**Link:** [https://leetcode.com/problems/single-number/solutions/3171261/](https://leetcode.com/problems/single-number/solutions/3171261/)

---

```C++ []
class Solution {
public:
    int singleNumber(vector<int>& nums) {
        
        int ans = nums[0];

        for(int i = 1 ; i < nums.size() ; i++){
            ans = ans ^ nums[i];
        }

        return ans;
    }
};
```

```Python3 []
class Solution:
  def singleNumber(self, nums: List[int]) -> int:
    return functools.reduce(lambda x, y: x ^ y, nums, 0)
```

```Java []
class Solution {
    public int singleNumber(int[] nums) {
        int result=0;
        for(int i=0; i<nums.length; i++) {
            result = result^nums[i];
        }
        return result;
    }
}
```
