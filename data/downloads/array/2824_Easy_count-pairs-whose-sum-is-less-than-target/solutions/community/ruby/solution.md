# Double iteration and counter

**Author:** catagalan-mtl
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/5060346/](https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/solutions/5060346/)

---



# Code
```
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def count_pairs(nums, target)
    n = nums.length
    count = 0

    nums.each_with_index do |num, i|
        j = i + 1
        while j < n do
            if num + nums[j] < target
                count += 1
            end
            j += 1
        end
    end
    count
end
```