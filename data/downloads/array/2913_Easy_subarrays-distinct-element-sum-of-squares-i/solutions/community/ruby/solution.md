# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5218385/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5218385/)

---

Use hash to maintain a count of elements and calculate once we
finish our O(n^2) traversal.

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def sum_counts(nums)
    calc = []
    i = 0
    while i < nums.size
        j = i + 1
        hash = {}
        hash[nums[i]] = true
        calc << 1
        while j < nums.size
            hash[nums[j]] = true
            calc << hash.size
            j += 1
        end

        i += 1
    end

    answer = 0
    calc.each do |v|
        answer += v**2
    end

    answer
end


```