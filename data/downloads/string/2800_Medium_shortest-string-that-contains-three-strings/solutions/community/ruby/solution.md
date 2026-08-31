# Ruby solution with lots of helper functions (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3840484/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3840484/)

---

# Intuition
Check if any string is a substring of another; if so, remove it.  Then find the most efficient way to join the strings in every possible order and choose the shortest/lexographically smallest one.

# Approach
Buckle up, this uses 5 helper functions!  (I'm sure it could be improved with refactoring.)

Outermost function:
1. Sort the strings by length and order.
2. Call the main function on the sorted strings.

Main function:
This function is semi-recursive: it will try to reduce the number of strings to two by seeing if any string is the subset of another, and if so, it will call itself again with the two superset strings.  So it needs a base case of two strings.
1. If there are two strings:
    a. Check if one is a subset of the other.  If so, return the longer string.
    b. Otherwise, join the strings in both possible orders using a helper function and return the smallest.
2. If there are three strings, check whether any of them is a subset of another.  If so, remove the earlier one (since they're sorted) and call the function again for the remaining two.
3. If it's three strings and none is the substring of another, call the helper function minimum_string2.  (I just wanted to break up the main function more.)

is_substring? helper function:
1. Check each substring of b and see if it's equal to a.  Return true if any match, false if none do.

minimum_string2 helper function:
1. Join the strings in each of 6 possible orders.
2. Put these together into an array and sort them.
3. Return the shortest/lexographically earliest one.

join_strs helper function:
1. Call the join function twice to combine three strings instead of 2.

join helper function:
1. Iterate through each substring of a that includes the end of a, from longest to shortest.  If any of them match, that's the maximum overlap, so combine the strings without repeating the overlapping part.
2. If none of them match, just concatenate the strings.

# Complexity
- Time complexity:
$$O(n^3)$$

- Space complexity:
$$O(n)$$?

# Code
```
def minimum_string(a, b, c)
    strings = [a,b,c].sort_by { |str| [str.length,str] }
    min_string(strings)
end

def min_string(strings)    
    if strings.length == 2
        a,b = strings
        if is_substring?(a,b)
            return b
        else
            options = [join(a,b),join(b,a)].sort_by { |option| [option.length,option] }
            return options[0]
        end
    end
    
    a,b,c = strings
    if is_substring?(a,b) || is_substring?(a,c)
        return min_string([b,c])
    elsif is_substring?(b,c)
        return min_string([a,c])
    end
    
    minimum_string2(a,b,c)
end

def is_substring?(a,b)
    (0...b.length).each do |i|
        (i...b.length).each do |j|
            return true if a == b[i..j]
        end
    end
    false
end


def minimum_string2(a, b, c)
    option1 = join_strs(a,b,c)
    option2 = join_strs(a,c,b)
    option3 = join_strs(b,a,c)
    option4 = join_strs(b,c,a)
    option5 = join_strs(c,a,b)
    option6 = join_strs(c,b,a)
    options = [option1,option2,option3,option4,option5,option6]
    options.sort_by! { |option| [option.length,option] }
    options[0]
end

def join_strs(a,b,c)
    join(a,join(b,c))
end

def join(a,b)    
    (0...a.length).each do |i|
        return a[0...i] + b if b.start_with?(a[i..-1])
    end
    a + b
end
```