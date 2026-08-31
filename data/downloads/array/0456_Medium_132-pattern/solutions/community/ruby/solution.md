# [Ruby] stack

**Author:** azusa152
**Votes:** 1
**Link:** [https://leetcode.com/problems/132-pattern/solutions/2016883/](https://leetcode.com/problems/132-pattern/solutions/2016883/)

---

def find132pattern(nums)
    third_val =-1000000001 # third_val which is 2 in 132 pattern
    stack = [] # store second_val which is 3 in 132 pattern
    
    nums.reverse.each do |n|
        if n < third_val # if find a value less than third_val, then we find first_val
            return true
        end
        
        while !stack.empty? && n > stack[-1]
            third_val = stack.pop
        end
        
        stack << n
    end
    false
end