# Ruby Quick Sort

**Author:** jleigh91
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/448119/](https://leetcode.com/problems/sort-an-array/solutions/448119/)

---

```
def sort_array(nums)
    return nums if nums.length < 2
    @nums = nums
    quick_sort(0, @nums.size - 1)
end

def quick_sort(left, right)
    return if left >= right
    index = partition(left, right)
    
    quick_sort(left, index - 1)
    quick_sort(index, right)
    
    @nums
end

def partition(l, r)
    pivot = @nums[(l+r)/2]
    while l <= r
        l += 1 while @nums[l] < pivot
        r -= 1 while @nums[r] > pivot
            
        if l <= r
            swap(l, r)
            l += 1
            r -= 1
        end
    end
    l 
end
        
def swap(l, r)
    @nums[l], @nums[r] = @nums[r], @nums[l]
end
```