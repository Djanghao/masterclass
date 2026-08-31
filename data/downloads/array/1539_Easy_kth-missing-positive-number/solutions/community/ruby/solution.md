# [ruby] O(logn), binary search

**Author:** mistersky
**Votes:** 5
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/1004914/](https://leetcode.com/problems/kth-missing-positive-number/solutions/1004914/)

---

```
# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer}
def find_kth_positive(arr, k)
  left = 0
  right = arr.count
  
  while left < right
    middle = (left + right)/2
    
    if arr[middle] - 1 - middle < k
      left = middle + 1
    else
      right = middle
    end
  end

  left + k
end
```