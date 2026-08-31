# Do Delete and Insert Until Nums is Empty, Simple as

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/5728295/](https://leetcode.com/problems/minimum-number-game/solutions/5728295/)

---

Loop until the nums array is empty identifying the two minimum values and deleting them on each loop. Add the first to the end and then insert the second at the second to last position. 
# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer[]}
def number_game(nums)
    arr = []
    until nums.length == 0 do
        l = nums.min
            arr << l
        nums.delete_at(nums.index(nums.min))
        l = nums.min
            arr.insert(-2, l)
        nums.delete_at(nums.index(nums.min))
    end
    return arr
end
```