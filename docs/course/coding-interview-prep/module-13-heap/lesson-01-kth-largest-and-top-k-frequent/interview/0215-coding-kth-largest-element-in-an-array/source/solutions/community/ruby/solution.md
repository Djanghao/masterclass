# Ruby | min heap | using bsearch_index

**Author:** piyushsawaria
**Votes:** 6
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/1057379/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/1057379/)

---

```
def find_kth_largest(nums, k)
  min_heap = [nums[0]]
  nums[1..-1].each do |n|
    i = min_heap.bsearch_index { |y| y >= n } || min_heap.size
    min_heap.insert(i, n)
    min_heap.shift if min_heap.size > k
  end
  min_heap.first
end
