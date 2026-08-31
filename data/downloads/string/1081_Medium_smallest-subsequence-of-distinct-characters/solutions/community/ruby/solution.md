# #Stack #Greedy

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/4097154/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/4097154/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @return {String}
def smallest_subsequence(s)
    stack = []
    counter = Hash.new
    s.chars.each_with_index do |char, i|
        counter[char] = i
    end 
    seen = Hash.new

    s.chars.each_with_index do |char, i|
        if !seen.has_key?(char)
            while(stack.size > 0 and char < stack.last and counter[stack.last] > i-1) do 
                seen.delete(stack.pop)                
            end 
            stack << char
            seen[char] = true 
        end 
    end 

    stack.join 
end


```