# Approach with two pointers and peak-detection condition

**Author:** sletix
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/5829486/](https://leetcode.com/problems/longest-mountain-in-array/solutions/5829486/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
* Just iterate each element by index(starting from second) and check condition of peak = `arr[n-1] < arr[n] > arr[n+1]`
* when we found a peak of mountain - using left and right counters for calculate how many elements go down from both sides and sum it, it's our length of mountain from peak
* check max_length and save result

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[]} arr
# @return {Integer}
def longest_mountain(arr)
  n = 1
  max_height = 0

  while n <= arr.length-2
    # detect a peak
    if arr[n-1] < arr[n] && arr[n] > arr[n+1]
      left = n
      right = n
      curr_length = 1

      # working with left part of mountain
      # ps: condition ((left-1) >= 0) we need for fix -1 element of array instead of previous element
      while ((left-1) >= 0) && arr[left-1] && arr[left-1] < arr[left]
        curr_length += 1
        left -= 1
      end

      # working with right part
      while arr[right+1] && arr[right+1] < arr[right]
        curr_length += 1
        right += 1
      end

      max_height = [max_height, curr_length].max
    end
    n += 1
  end

  return max_height
end
```