# Simple one-line solution in Ruby

**Author:** smakthe
**Votes:** 0
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5945335/](https://leetcode.com/problems/report-spam-message/solutions/5945335/)

---

# Intuition
This problem is fundamentally a calculation of difference between two arrays. We need to find out if at least two elements which are present in banned_words are also present in message or not

# Approach
I calculated the difference between message and banned_words array which leaves me with all the elements present in message array only which are not present in banned_words. Now I subtracted this new array from message and checked if the resultant array has a length of at least two or not

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```ruby []
# @param {String[]} message
# @param {String[]} banned_words
# @return {Boolean}
def report_spam(message, banned_words)
   (message - (message-banned_words)).length > 1
end
```