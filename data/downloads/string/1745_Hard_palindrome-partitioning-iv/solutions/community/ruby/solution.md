# Ruby - Convert String to int[] Array to not get TLE

**Author:** shhavel
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1052991/](https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1052991/)

---

### Working with String characters in Ruby

In ruby there is no `char` type like in C++. One char is also a string. This gives advantage of having all String methods for one character and often symplifies working with strings but creates overhead having Object created for each character and significantly slows down programs. 

Convert String to Array of numbers (character ASCII codes) so you don't get TLE.

### Solution Step 1

Prepare 2d Array `pal` where `pal[i][j] == true` iff substring `s[i..j]` is a palindrome.
 
### Solution Step 2

For each character index `i` in `s` if suffix `s[0..i]` is a palindrome then check if exists any index j in remaining part of `s` such as both `s[i + 1..j]` and `s[j + 1...n]` are palindromes.

```ruby
# @param {String} s
# @return {Boolean}
def check_partitioning(s)
  s = s.chars.map(&:ord) # trick to speed up String processing
  n = s.size
  pal = Array.new(n) { Array.new(n, false) }

  for i in 0...n
    pal[i][i] = true
    for j in 0...i
      if s[j] == s[i] && (j == i - 1 || pal[j + 1][i - 1])
        pal[j][i] = true
      end
    end
  end

  for i in 0..n - 2
    next unless pal[0][i]
    for j in i + 1..n - 2
      return true if pal[i + 1][j] && pal[j + 1][n - 1]
    end
  end
  return false
end
```

### Complexity

Time: `O(N^2)`
Space: `O(N^2)`
