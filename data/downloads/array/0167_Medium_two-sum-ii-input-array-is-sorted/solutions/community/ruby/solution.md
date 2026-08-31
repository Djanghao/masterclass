# Ruby Hash Approach

**Author:** ganeshsbhat
**Votes:** 5
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/748113/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/748113/)

---

```
def two_sum(numbers, target)
    hash = {}
    
    numbers.each_with_index do |num, i|
        return hash[target - num] + 1, i + 1 if hash[target - num]
        hash[num] = i
    end
end
```