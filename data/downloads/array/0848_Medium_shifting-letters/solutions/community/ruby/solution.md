# [Ruby] O(n) Time O(1) Space - One Pass Solution With Comments

**Author:** sidank
**Votes:** 0
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/1453045/](https://leetcode.com/problems/shifting-letters/solutions/1453045/)

---

```
# @param {String} s
# @param {Integer[]} shifts
# @return {String}
def shifting_letters(s, shifts)
  #handle bad input
  return s if shifts.empty?
    
  #replace each element of shifts[] with reverse iterative sum
  #then, shift letters
  #Time: O(n) Space: O(1)
  sum = 0

  (s.length - 1).downto(0).each do |i|
    sum += shifts[i] % 26
    
    shifts[i] = sum
      
    s[i] = shift(s[i], shifts[i])
  end

  #return ans
  s
end

#takes char and number of times to shift, returns shifted letter
#Time: O(1) Space: O(1)
def shift(c, x)
  #convert char to ascii value ("a" = 97 and "z" = 122, so subtract 97, we'll add it later)
  c = c.ord - 97
  
  #shift logic, ex: "z" shifted 3 times will be ((25 + 3) % 26) + 97) -> (2 + 97) -> "c"
  c = ((c + x) % 26) + 97 
    
  #convert ascii to char and return
  c.chr
end
```