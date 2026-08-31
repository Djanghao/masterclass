# Sliding window solution in Ruby with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3623121/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3623121/)

---

# Intuition
Have current represent the longest valid string up until index and iterate through the entire string.

# Approach
1. Turn s into an array (I find it easier to work with an array than a string).
2. Initialize current to be the first char of the string/array, count of consecutive characters to be 0, and the max length to be 1.
3. Iterate through the rest of the string, adding each character to current:
    - If the new character is the same as the last character, increment count.
    - If count is more than 1 (i.e., you have two pairs of consecutive characters that are the same), remove characters from the front of current until this isn't true.  (Decrement count by 1 if the character you remove is the same as the next character.)
    - Compare the length of current to max, and set the higher one equal to max.  (Note that we have to do this *after* potentially removing characters from the front of current.)
4. Return max

# Complexity
- Time complexity:
$$O(n)$$ (shift is an $$O(1)$$ operation in Ruby).

- Space complexity:
$$O(n)$$

# Code
```
def longest_semi_repetitive_substring(s)
    s = s.split('')
    
    current = [s.shift]
    count = 0
    max = 1
    
    until s.empty?
        current << s.shift
        count += 1 if current[-1] == current[-2]
        
        while count > 1
            count -= 1 if current[0] == current[1]
            current.shift
        end
        
        max = current.length if current.length > max
    end
    
    max
end
```