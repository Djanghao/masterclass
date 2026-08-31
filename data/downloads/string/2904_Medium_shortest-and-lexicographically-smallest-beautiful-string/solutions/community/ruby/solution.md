# Ruby solution with sliding window, explained (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4174932/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4174932/)

---

# Intuition
Use a sliding window to generate beautiful substrings.  Sort them by length and lexicographically and return the smallest.

# Approach
1. If there aren't enough '1's to create a beautiful string, return ''.
2. Create variables for your sliding window: an array of beautiful strings, both pointers, the current string (stored as an array instead of a string because shift/push are $$O(1)$$), and count of '1's.
3. Go through the string:
    - If the count is less than k, increment right, add the char to curr, and incrmeent count if it's a '1'.
    - Otherwise, remove a character from curr, decrement count if it's a '1', and increment left.
    - Either way are curr (joined together into a string) to strs if it's beautiful.
4. Sort the string lexicographically, then by length.  This prioritizies length but sort lexicographically in cases of ties.
5. Return the shortest, lexicographically smallest string.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(log(n))$$

# Code
```
def shortest_beautiful_substring(s, k)
    return '' if s.chars.count { |char| char == '1' } < k
    
    strs = []
    left = 0
    right = -1
    curr = []
    count = 0
    
    until right == s.length
        if count < k
            right += 1
            curr << s[right]
            count += 1 if s[right] == '1'
        else
            curr.shift
            count -= 1 if s[left] == '1'
            left += 1
        end
        strs << curr.join('') if count == k
    end
    
    strs.sort!
    strs.sort_by! { |str| str.length }
    strs[0]
end
```