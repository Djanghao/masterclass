# Ruby - T: O(n) S: O(1) 100% 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/2629816/](https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/2629816/)

---

```
# @param {Integer[]} arr
# @return {Integer}
def max_chunks_to_sorted(arr)
  result = max = 0
  n = arr.size
  
  0.upto(n - 1) do |i|
    max = [arr[i], max].max
    result += 1 if max == i
  end

  result
end