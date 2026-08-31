# Simple Solution, Sort. O(n log n):O(n)

**Author:** Chris1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/4911384/](https://leetcode.com/problems/minimum-absolute-difference/solutions/4911384/)

---


# Code
```
# @param {Integer[]} arr
# @return {Integer[][]}
def minimum_abs_difference(arr)
    arr.sort!
    i = 1
    prev = arr[0]
    ans = []
    min_val = 999999999
    while i < arr.size
        val = arr[i] - prev
        if min_val > val
            min_val = val
            ans = [[prev, arr[i]] ]
        elsif min_val == val
            ans << [prev, arr[i]] 
        end
        prev = arr[i]
        i += 1
    end

    ans
end
```