# 3 Loops instead of 4 using Hashmap

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/4776331/](https://leetcode.com/problems/count-special-quadruplets/solutions/4776331/)

---

You can use 3 loops instead of 4 by using a hashmap. Then check in hash for sum of a,b,c then check in hash for sum of a,b,c instead of using a loop for d.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^3)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n))
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def count_quadruplets(nums)

    # Create a hash of hashes containing values of indexes available in nums
    # included after i. vals of the nested hash are a count of how many times
    # a number appears after i in nums.
    # Example:
    # hash[i][2] => 2
    i = nums.size - 2
    hash = Hash.new(Hash.new{0})
    while i > -1
        hash[i] = hash[i+1].dup
        hash[i][nums[i+1]] += 1
        i -= 1
    end

    answer = 0
    i = 0
    while i < nums.size
        j = i + 1
        while j < nums.size
            k = j + 1
            total  = nums[i] + nums[j]
            while k < nums.size - 1
                answer += hash[k][total + nums[k]]
                k += 1
            end
            j += 1
        end
        i += 1
    end

    answer
end
```