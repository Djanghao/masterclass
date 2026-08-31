# Ruby - O(n^2)

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1766701/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1766701/)

---

```
def sub_array_ranges(nums)
    res = 0
    for i in 0...nums.size
        l,r = nums[i],nums[i]
        for j in i...nums.size
            l = [l, nums[j]].min
            r = [r, nums[j]].max
            res += (r - l)
        end
    end
    res    
end
```