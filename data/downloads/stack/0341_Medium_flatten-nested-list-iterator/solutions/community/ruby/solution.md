# #Recursion

**Author:** pratik1707
**Votes:** 2
**Link:** [https://leetcode.com/problems/flatten-nested-list-iterator/solutions/4188285/](https://leetcode.com/problems/flatten-nested-list-iterator/solutions/4188285/)

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
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
#
#class NestedInteger
#    def is_integer()
#        """
#        Return true if this NestedInteger holds a single integer, rather than a nested list.
#        @return {Boolean}
#        """
#
#    def get_integer()
#        """
#        Return the single integer that this NestedInteger holds, if it holds a single integer
#        Return nil if this NestedInteger holds a nested list
#        @return {Integer}
#        """
#
#    def get_list()
#        """
#        Return the nested list that this NestedInteger holds, if it holds a nested list
#        Return nil if this NestedInteger holds a single integer
#        @return {NestedInteger[]}
#        """
class ListNode
    attr_accessor :value, :next 

    def initialize(value)
        @value = value
        @next = nil 
    end 
end 

class NestedIterator
    # @param {NestedInteger[]} nested_list
    
    def initialize(nested_list)
        @ans = []
        @count = 0 
        dfs(nested_list)   

       # p nested_list
    end

    # @return {Boolean}
    def has_next
       return true if @count < @ans.size
    end

    # @return {Integer}
    def next        
        result = @ans[@count]
        @count += 1
        result        
    end 

    def dfs(list)
        for nestedinteger in list do 
            if  nestedinteger.is_integer 
                @ans << nestedinteger.get_integer                
            else
                dfs(nestedinteger.get_list) 
            end 
        end        
    end 
end

# Your NestedIterator will be called like this:
# i, v = NestedIterator.new(nested_list), []
# while i.has_next()
#    v << i.next
# end
```