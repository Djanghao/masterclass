# SOLUTION fired

**Author:** OSHANG_surtani
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/4413180/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/4413180/)

---

# Intuition 
similar to 1004. Max Consecutive Ones III
just here k=1 and we just need -1.  as '1' we arent making we are deleting the '0' 


<!-- Describe your first thoughts on how to solve this problem. -->

# Approach 
bit hard approach to think must upvote if understood  
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        //bhai tu count lele or agar count > 1 ho toh hi stop karna sum karna firse counnt ko zero kardena this wway will lead you till answer
int k=1;
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
        return j-i-1;
    }
};
```


```javascript []
function longestSubarray(nums) {
  let k = 1;
  let i = 0, j = 0;

  while (j < nums.length) {
    if (nums[j] === 0) {
      k--;
    }
    if (k < 0) {
      if (nums[i] === 0) {
        k++;
      }
      i++;
    }
    j++;
  }

  return j - i - 1;
}

```
```python []
class Solution:
    def longestSubarray(self, nums):
        k = 1
        i, j = 0, 0

        while j < len(nums):
            if nums[j] == 0:
                k -= 1
            if k < 0:
                if nums[i] == 0:
                    k += 1
                i += 1
            j += 1

        return j - i - 1

```
```ruby []
def longest_subarray(nums)
  k = 1
  i, j = 0, 0

  while j < nums.length
    if nums[j] == 0
      k -= 1
    end
    if k < 0
      if nums[i] == 0
        k += 1
      end
      i += 1
    end
    j += 1
  end

  return j - i - 1
end
'
```

