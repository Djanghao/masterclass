# Beats 100% Ruby solution in time and space

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/break-a-palindrome/solutions/4341284/](https://leetcode.com/problems/break-a-palindrome/solutions/4341284/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
# @param {String} palindrome
# @return {String}
def break_palindrome(palindrome)
    n = palindrome.length
    return '' if n == 1 # we cannot replace a single char to make it a non-palindrome 

    # replace first non-'a' to 'a'.
    # we choose first non-'a' because lexicographically it will be smallest
    # loop until n / 2 because remaining half of the string will be the same as its a palindrome already
    (0...(n / 2)).each do |i|
        if palindrome[i] != 'a'
            palindrome[i] = 'a'
            return palindrome
        end
    end

    # if all are 'a' like 'aaa', in that case, we need to change the last charater with second smallest character i.e. 'b'
    palindrome[n - 1] = 'b'
    palindrome
end
```