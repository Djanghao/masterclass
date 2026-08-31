# Simple Solution, O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/5308470/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/5308470/)

---



# Code
```
# @param {Integer} num_ones
# @param {Integer} num_zeros
# @param {Integer} num_neg_ones
# @param {Integer} k
# @return {Integer}
def k_items_with_maximum_sum(num_ones, num_zeros, num_neg_ones, k)
    answer = 0
    while k > 0
        if num_ones > 0
            num_ones -= 1
            answer += 1
        elsif num_zeros > 0
            num_zeros -= 1
        else
            num_neg_ones -= 1 
            answer -= 1
        end
        k -= 1
    end
    answer
end
```