# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/3133655/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/3133655/)

---

```
# @param {Integer[]} capacity
# @param {Integer[]} rocks
# @param {Integer} additional_rocks
# @return {Integer}
def maximum_bags(capacity, rocks, additional_rocks)
    arr = []
    (0...rocks.size).each { |i| arr[i] = capacity[i] - rocks[i] }
    
    ans = 0
    arr.sort.each do |a|
        additional_rocks -= a
        additional_rocks >= 0 ? ans += 1 : break
    end
    
    ans
end
```