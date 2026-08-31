# Ruby Solution

**Author:** ifelsethenthat
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4561973/](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/solutions/4561973/)

---

# Code
```
def minimum_swap(s1, s2)
  x1 = x2 = y1 = y2 = 0
  0.upto(s1.length - 1) do |i|
    next if s1[i] == s2[i]
    
    x1 += 1 if s1[i] == 'x'
    y1 += 1 if s1[i] == 'y'

    x2 += 1 if s2[i] == 'x'
    y2 += 1 if s2[i] == 'y'
  end

  return -1 if ((x1 + x2) % 2 != 0)
  return -1 if ((y1 + y2) % 2 != 0)
  
  # This part of the expression deals with the pairs of mismatches. 
  # If s1 has an 'x' where s2 has a 'y', and vice versa, these can be swapped in a single operation. 
  # x1 and y1 are the counts of how many times 'x' and 'y' appear in s1 at positions where s2 has a different character. 
  # Dividing these counts by 2 effectively pairs up these mismatches. 
  # For example, if there are 4 'x' in s1 where s2 has 'y', two swaps can fix these pairs of mismatches.
  xx_replacements = x1/2 + y1/2 

  # This part handles the case where there's an odd number of a character ('x' in this case) in mismatches. 
  # If x1 is odd, there will be one unpaired 'x' and one unpaired 'y'. 
  # To swap these with their correct counterparts in s2, it requires two swap operations: first to swap the unpaired 'x' with some 'y', and then to swap the two 'x's that are now in incorrect positions. 
  # This is why this part multiplies the result of x1 % 2 (which is either 1 or 0) by 2.
  xy_replacements = (x1 % 2) * 2 

  xy_replacements + xx_replacements
end

```