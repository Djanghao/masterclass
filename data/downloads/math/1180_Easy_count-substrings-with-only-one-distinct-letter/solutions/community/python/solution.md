# Python, big, but mathy! using triangular number sum formula. O(n) time, O(1) space

**Author:** cepuuher
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/878072/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/878072/)

---

Hello! I thought I was being clever, passing through the string to see how long each continuous sequence of one character was and then using Gauss's formula for sum of series, this series being triangular numbers. Well it took up more memory than most solutions. OH WELL!

First, note the pattern for counting substrings:
* if there is 1 single char, there is 1 substring
* for 2 chars, e.g. "aa" there is 1 for the first "a", 1 for the second "a", and 1 for "aa"
* keep counting and we find that for 3 ("aaa") -> 6 substrings
* for 4 ("aaaa") -> 10 substrings

Think about this pattern, how we get from one number to the next (from the 4th number to the 5th number)? How do we get the nth number? They are triangular numbers and we get it by summing the series:

f(n) = sum(from 1 to n) of n = 1 + 2 + 3 + ... + (n-1) + n = {math magic} = (n/2) * (n+1)

Since we need to look at each character in the string, but only do a constant number of things for each inspection, we get a **time complexity of O(*n*)** where *n* is the length of the input string.

We need a few temporary variables to help with calculations, hold pointers, and store our resulting total count, but this number does not grow, so our **space complexity is constant, O(1)**, it doesn't depend on the input size.

*EDIT: when I first submitted, I had the print statement for debugging and it was SUPER SLOW: Runtime: 40 ms, faster than 27.94%, Memory Usage: 14.2 MB, less than 6.16% But when I took it out, things got better. Still that memory tho... -_-...*

```Python
class Solution:
    def countLetters(self, S: str) -> int:
        # return early if 0 or 1 characters: no need to store variables and set up computation
        if len(S) < 2:
            return len(S)
        
        # an accumulator to hold the sum
        total = 0
        
        # 2 pointers to see how long a sequence of a single character is
        right = 1
        left = 0
        
        while right < len(S):
            
            if S[right] != S[left]:
                n = right - left
				
                # Plug in to formula, use integer division so we don't have floats sitting around
                total += (n+1) * n // 2
				
				# advance left pointer to inspect next sequence
                left = right
                
            # move right pointer forward
			right += 1
            # print(left, right, total)  # uncomment this to output progress and debug
            
        # handle final character if it was equal, feels inelegant. yucko. but it works
        n = right - left
        total += (n+1) * n // 2
        
        return total
#Runtime: 28 ms, faster than 80.73% of Python3 online submissions for Count Substrings with Only One Distinct Letter.
#Memory Usage: 14.2 MB, less than 5.01%
```