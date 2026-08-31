# #Recursion #Bactracking

**Author:** pratik1707
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4616173/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4616173/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(2^n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String[]} arr
# @return {Integer}
def max_length(arr)
    @length = 0 

    c_helper(arr, 0, Hash.new(0))

    @length
end

def c_helper(arr, i, slate)   
     @length = slate.size
    
    slate.values.each do |val|
        return 0 if val > 1
    end   

    for j in (i...arr.length) do 
        arr[j].chars.each do |char|
            slate[char] += 1            
        end 
        
        @length = [@length, c_helper(arr, j+1, slate)].max 
        
        arr[j].chars.each do |char|
            if slate[char] == 1
                slate.delete(char)
            else
                slate[char] -= 1
            end            
        end       
    end 

    @length   
end 
```