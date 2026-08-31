# Ruby code

**Author:** Pranit-Harekar
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1789571/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1789571/)

---

```ruby
# @param {Integer[]} nums
# @return {Boolean}
def can_be_increasing(nums)
    arr = [-Float::INFINITY, *nums, Float::INFINITY]
    hit = false
    
    for i in 0...arr.count-1
        if arr[i] >= arr[i+1]
            if hit or (arr[i-1] >= arr[i+1] and arr[i] >= arr[i+2])
                return false
            end
            hit = true
        end
    end
    
    return true
end
```