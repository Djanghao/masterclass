# Ruby - T: O(nlogn) S: O(n) 100% 100%. Two pointers

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/2618108/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/2618108/)

---

```
# @param {Integer[]} arr
# @param {Integer} k
# @return {Integer[]}
def get_strongest(arr, k)
  n = arr.size
  arr.sort!

  median = arr[(n - 1) / 2]
  left = 0
  right = n - 1
  result = []
  
  0.upto(k - 1) do |i|
    if (median - arr[left]) > (arr[right] - median)
      result << arr[left]
      left += 1
    else
      result << arr[right]
      right -= 1
    end
  end

  result
end