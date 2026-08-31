# Simple solution in Ruby

**Author:** user6169lh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/5038407/](https://leetcode.com/problems/minimum-operations-to-make-a-special-number/solutions/5038407/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The specail is to check combanation of 00, 50, 25, 75 in order

# Approach
<!-- Describe your approach to solving the problem. -->
Iterate from right to left, and mark first 0 and 5, then mark the second digit which pairs to the 0 or 5 and make the special.
Then calculate how many digits to delete.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} num
# @return {Integer}
def minimum_operations(num)
    # scan num to check combanation of 00, 50, 25, 75 in order
    n = num.size
    index_0 = index_5 = n # detect first 0 and 5
    index_second = n # once the pair number found, no need to check other possible
    
    (n-1).downto(0).each do |i|
        digit = num[i].to_i
        if digit == 0
            next index_0 = i if index_0 == n # mark first 0
            break index_second = i # mark 2nd zero and stop
        elsif digit == 5 
            break index_second = i if index_0 != n && index_second == n # mark the pair if there is zero behind
            index_5 = i if index_5 == n # mark first 5
        elsif index_5 < n && (digit == 2 || digit == 7)
            break index_second = i # mark the pair if there is 5 marked behind
        end
    end
    
    if index_second < n
        # delete from index_second + 1, skip index_0
        n - (index_second + 2) 
    elsif index_0 < n
        # zero is specail number by itself
        n - 1
    else
        # no pair or zero marked, delete all the digits of num
        n
    end
end
```