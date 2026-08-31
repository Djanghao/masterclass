# Ruby: Extract words into an array by the regex, count spaces, then join.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-spaces-between-words/solutions/935415/](https://leetcode.com/problems/rearrange-spaces-between-words/solutions/935415/)

---

##### Leetcode: 1592. Rearrange Spaces Between Words.

Corner cases are when there is one word or no spaces.  Otherwise gap size is floor division total number of spaces by words number decreased by one, number of tails spaces is the same formula as above but with rest operator. Words extracted into an array by the regex, number of spaces counted by count method.

Ruby code:
```Ruby
# Leetcode: 1592. Rearrange Spaces Between Words.
# https://leetcode.com/problems/rearrange-spaces-between-words/
# Runtime: 72 ms, faster than 5.00% of Ruby online submissions for Rearrange Spaces Between Words.
# Memory Usage: 209.9 MB, less than 17.50% of Ruby online submissions for Rearrange Spaces Between Words.
# @param {String} text
# @return {String}
def reorder_spaces(text)
    number = text.count(" ")
    words = text.scan(/[a-z]+/)
    return text if 0 == number
    return words[0] + " "*number if words.size == 1
    spaces = " "*(number/(words.size-1));
    rest = " "*(number%(words.size-1))
    words.join(spaces) + rest
end
```