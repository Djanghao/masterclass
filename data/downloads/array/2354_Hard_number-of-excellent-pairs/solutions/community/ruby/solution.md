# ✅✅ Beats 100% || RUBY || Easy to understand || 🔥🔥 || 2354. Number of Excellent Pairs ||

**Author:** poojalmokariya
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-excellent-pairs/solutions/3804287/](https://leetcode.com/problems/number-of-excellent-pairs/solutions/3804287/)

---

# Approach
- Using hashing techniques

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def count_excellent_pairs(nums, k)
    hash1={}
    total=0
    for i in nums.uniq
        hash1[i.to_s(2).count("1")] = hash1[i.to_s(2).count("1")].to_i + 1
    end
    hash1.each do |key1,val1|
        hash1.each do |key2,val2|
            total += val1*val2 if key1 + key2 >= k
        end
    end
    return total
end
```