# Ruby two approaches

**Author:** surferbv
**Votes:** 0
**Link:** [https://leetcode.com/problems/fixed-point/solutions/3082808/](https://leetcode.com/problems/fixed-point/solutions/3082808/)

---

```
=begin

    title:
        1064. fixed point (easy)
    links:
        https://leetcode.com/problems/fixed-point/

    approach: 
        lineary approach

    time: O(n)

    space: O(1)
        we don't allocated any additional memory

    note:

    til:

    results:
        Runtime 161 ms Beats 16.67% Memory 211.5 MB Beats 16.67%
=end
# @param {Integer[]} arr
# @return {Integer}
def fixed_point(arr)
    
    # condition that must be be met
    arr.each_with_index do |e, i|
        return i if e == i
    end

    return -1 
end
```
```
=begin

    title:
        1064. fixed point (easy)
    links:
        https://leetcode.com/problems/fixed-point/

    approach: 
        binary search approach

    time: O(log n)

    space: O(1)
        
    note:
        trick is to use binary search and to keep checking for smaller values even if you find one that matches.

    til:
        binary search can be modifed to search all possible values depending on the conditions. 
        forgot to left + right not right - left doh! 

    results:
        Runtime 103 ms Beats 16.67% Memory 211.5 MB Beats 83.33%
        
=end
# @param {Integer[]} arr
# @return {Integer}
def fixed_point(arr)
    result      = -1
    left        = 0 
    right       = arr.length - 1
    
   while left <= right
        mid = (right + left) / 2
        e   = arr[mid]

        if e == mid
            result = mid 
            right = mid - 1 # move left for smaller possible solutions

        elsif e < mid
            left = mid + 1
            
        else
            right = mid - 1
        end
   end
   
   return result
end
```