# 【Video】Simple Solution

**Author:** niits
**Votes:** 78
**Link:** [https://leetcode.com/problems/4sum/solutions/5501044/](https://leetcode.com/problems/4sum/solutions/5501044/)

---


# Solution Video

https://youtu.be/0TjQLNfQ3jc

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,628
Thank you for your support!

---

```python []
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        res = []

        for i in range(len(nums) - 3):
            # skip duplicate starting values
            if i > 0 and nums[i] == nums[i-1]:
                continue
            
            for j in range(i+1, len(nums) - 2):
                # skip duplicate starting values
                if j > i + 1 and nums[j] == nums[j-1]:
                    continue
                left, right = j + 1, len(nums) - 1

                while left < right:
                    four_sum = nums[i] + nums[j] + nums[left] + nums[right]
                    if four_sum == target:
                        res.append([nums[i], nums[j], nums[left], nums[right]])
                        left += 1
                        right -= 1

                        while left < right and nums[left] == nums[left - 1]:
                            left += 1
                        while left < right and nums[right] == nums[right + 1]:
                            right -= 1
                    elif four_sum < target:
                        left += 1
                    else:
                        right -= 1
        return res
```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const result = [];

    if (nums == null || nums.length < 4) {
        return result;
    }

    nums.sort((a, b) => a - b);
    const len = nums.length;
    
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] == nums[i-1]) {
            continue;
        }
        for (let j = i+1; j < len - 2; j++) {
            if (j > i+1 && nums[j] == nums[j-1]) {
                continue;
            }
            let left = j + 1;
            let right = len - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum == target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    while (left < right && nums[left] == nums[left+1]) {
                        left++;
                    }

                    while (left < right && nums[right] == nums[right-1]) {
                        right--;
                    }

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result
};
```

---



# \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

# \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

# \u2B50\uFE0F My previous video
#28 - Longest Consecutive Sequence 

https://youtu.be/PRVmb_7u6fo