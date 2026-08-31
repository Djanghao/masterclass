# Ruby

**Author:** tomplummer
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/5266793/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/5266793/)

---


# Code
```
def max_turbulence_size(arr)
  curr_max = 1
  global_max = 1
  last = :none
  n = 0

  while n < arr.size - 1
    if arr[n] == arr[n + 1]
      last = :none
      n += 1
      curr_max = 1
      next
    else
      sign = arr[n] < arr[n + 1] ? :negative : :positive
    end

    if last != sign
      curr_max += 1
      global_max = global_max > curr_max ? global_max : curr_max
      n += 1
    else
      last = :none
      curr_max = 1
      next
    end

    last = sign
  end

  global_max
end
```