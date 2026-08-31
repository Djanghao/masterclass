# Return False If Last Integer is 0, Simple as

**Author:** tomrendle
**Votes:** 0
**Link:** [https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5742492/](https://leetcode.com/problems/a-number-after-a-double-reversal/solutions/5742492/)

---

You could reverse num twice by converting to a string and back to an integer and checking if the second reversal matches num, but all this process does is remove trailing 0s. 

# Instead
First return true if the num is just 0.
Check if the last integer of num is a 0. If it is we know the reversal will transform num and the reversed integer will not match num (i.e. return false), otherwise return true. 

# Code
```ruby []
# @param {Integer} num
# @return {Boolean}
def is_same_after_reversals(num)
    return true if num == 0
    num.to_s[-1] == "0" ? false : true
end
```