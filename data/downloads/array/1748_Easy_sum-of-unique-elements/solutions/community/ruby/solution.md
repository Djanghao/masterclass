# Ruby Solution with hash

**Author:** coconutman19
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/1087759/](https://leetcode.com/problems/sum-of-unique-elements/solutions/1087759/)

---

```
def sum_of_unique(nums)
    hash = Hash.new {|h,k| h[k] = Array.new}
    sum = 0
    
    nums.each {|num| hash[num].push(num)}
    hash.values.each {|hash_arr| sum += hash_arr.first if hash_arr.length == 1}
    sum
end
```