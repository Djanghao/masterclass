# Simple ruby solution with explanation

**Author:** aman199002
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/804870/](https://leetcode.com/problems/merge-intervals/solutions/804870/)

---

```
  def merge(a)
    return [] if a == nil || a.size == 0
	# First sort array by first element of each subarray.
    a = a.sort_by{|arr| arr[0]} 
    res = [a[0]]  # Push first subarray in resulting array.
    j = 0  # Keep a pointer for res array.
    for i in 0..a.size-1 do
        # Compare previous and next element using res array.
        # If second element in res subarray is greater than or equal first element in next subarray, it means elements are overlapping.
        # Calculate max by comparing second element in previous and current subarray.
        # Modify res by overriding current subarray.
        if res[j][1] >= a[i][0]
            min = res[j][0]
            max = [a[i][1],res[j][1]].max
            res[j] = [min,max]
        # If second element in res subarray is less than first element in next subarray, it means elements are non overlapping.
        # Push subarray in res and increment pointer for res.
        else
            res << a[i]
            j = j+1
        end
    end
    return res
end
```