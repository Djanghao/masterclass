# beats 100%

**Author:** salisbury-espinosa
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/5773481/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/5773481/)

---

![2024-09-11_23-06.png](./images/0.png)

# Code
```typescript []
function minimalKSum(nums: number[], k: number): number {
    nums.sort(function(a, b) {
        return a - b;
    });
    let numsRemain = k;
    let result = 0;
    let prev  = 0;
    for (const el of nums) {
        const currentCanBeUsed = el - prev - 1;
        if (currentCanBeUsed > 0) {
            const needUse = Math.min(currentCanBeUsed, numsRemain);
            result += ((prev + 1 + prev + needUse) * needUse);
            numsRemain -= needUse;
            if (numsRemain === 0) {
                break;
            }
        }
        prev = el;
    }
    if (numsRemain > 0) {
        result += ((prev + 1 + prev + numsRemain) * numsRemain);
    }
    return result/2;
};
```
```java []
public class Solution {
    public long minimalKSum(int[] nums, int k) {
        Arrays.sort(nums);
        int numsRemain = k;
        long result = 0L;
        int prev = 0;
        for (int el : nums) {
            int currentCanBeUsed = el - prev - 1;
            if (currentCanBeUsed > 0) {
                int needUse = Math.min(currentCanBeUsed, numsRemain);
                result += ((long) (prev + 1L + prev + needUse) * (long) needUse);
                numsRemain -= needUse;
                if (numsRemain == 0) {
                    break;
                }
            }
            prev = el;
        }
        if (numsRemain > 0) {
            result += ((long) (prev + 1L + prev + numsRemain) * (long) numsRemain);
        }
        return (long)(result / 2);
    }
}
```
``` PHP []
class Solution {
    function minimalKSum($nums, $k)  {
        sort($nums);
        $numsRemain = $k;
        $result = 0;
        $prev = 0;

        foreach ($nums as $el) {
            $currentCanBeUsed = $el - $prev - 1;
            if ($currentCanBeUsed > 0) {
                $needUse = min($currentCanBeUsed, $numsRemain);
                $result += (($prev + 1 + $prev + $needUse) * $needUse);
                $numsRemain -= $needUse;
                if ($numsRemain === 0) {
                    break;
                }
            }
            $prev = $el;
        }

        if ($numsRemain > 0) {
            $result += (($prev + 1 + $prev + $numsRemain) * $numsRemain);
        }

        return $result / 2;
    }
}
```
```Python []
class Solution(object):
    def minimalKSum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        nums.sort()
        nums_remain = k
        result = 0
        prev = 0
        
        for el in nums:
            current_can_be_used = el - prev - 1
            if current_can_be_used > 0:
                need_use = min(current_can_be_used, nums_remain)
                result += ((prev + 1 + prev + need_use) * need_use)
                nums_remain -= need_use
                if nums_remain == 0:
                    break
            prev = el
        
        if nums_remain > 0:
            result += ((prev + 1 + prev + nums_remain) * nums_remain)
        
        return result / 2
```
```C++ []
class Solution {
public:
    long long minimalKSum(vector<int>& nums, int k) {
        std::sort(nums.begin(), nums.end());
        int numsRemain = k;
        long long result = 0;
        int prev = 0;
        
        for (const auto& el : nums) {
            int currentCanBeUsed = el - prev - 1;
            if (currentCanBeUsed > 0) {
                int needUse = currentCanBeUsed < numsRemain ? currentCanBeUsed : numsRemain;
                result += ((prev + 1 + prev + needUse) * (long long) needUse);
                numsRemain -= needUse;
                if (numsRemain == 0) {
                    break;
                }
            }
            prev = el;
        }
        
        if (numsRemain > 0) {
            result += ((prev + 1 + prev + numsRemain) * (long long) numsRemain);
        }
        
        return (long long )(result / 2);
    }
};
```