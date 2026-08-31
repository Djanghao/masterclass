# Ruby one-liner

**Author:** Siav92
**Votes:** 3
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/1769333/](https://leetcode.com/problems/search-insert-position/solutions/1769333/)

---

```
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    nums.index { _1 >= target } || nums.count
end
```