# Simple Ruby solution using Sets

**Author:** rajkamallashkari
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1919929/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/1919929/)

---

```
def find_pairs(nums, k)
    visited = Set.new
    pairs = Set.new
    nums.each do |num|
        pairs.add [num - k, num] if visited.include? num - k
        pairs.add [num, num + k] if visited.include? num + k
        visited.add num
    end
    pairs.size
end
```