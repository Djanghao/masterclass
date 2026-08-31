# Easy to read Ruby solution

**Author:** ksodha93
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-closest-palindrome/solutions/4162324/](https://leetcode.com/problems/find-the-closest-palindrome/solutions/4162324/)

---

# Approach:
Consider 'n' as the middle element and keep incremeneting and decrementing its value and as check first and last element is same, increment left position and decrement right position and continue to do so until all the elements are same.

# Code
```
# @param {String} n
# @return {String}
def nearest_palindromic(n)
    n = n.to_i
    small = previous_value(n - 1)
    large = next_value(n + 1)

    (n - small) > (large - n) ? large.to_s : small.to_s
end

def previous_value(num)
    str = num.to_s 
    n = str.length
    (0...n).each do |i|
        while str[i] != str[n - 1 - i] # first value != last value
            decrement(str, n - 1 - i)
            return str.to_i if str[0] == '0' # for case 11 where 9 is the answer
        end
    end
    str.to_i
end

def decrement(str, i)
    while str[i] == '0'
        str[i] = '9'
        i -= 1
    end
    str[i] = (str[i].to_i - 1).to_s
end

def next_value(num)
    str = num.to_s
    n = str.length
    (0...n).each do |i|
        while str[i] != str[n - 1 - i]
            increment(str, n - 1 - i)
        end
    end
    str.to_i
end

def increment(str, i)
    while str[i] == '9'
        str[i] = '0'
        i -= 1
    end
    str[i] = (str[i].to_i + 1).to_s
end
```