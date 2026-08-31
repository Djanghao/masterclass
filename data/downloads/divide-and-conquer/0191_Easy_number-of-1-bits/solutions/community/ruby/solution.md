# Ruby - Recursive, iterative, and with language tools

**Author:** jasonmattingly
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/470633/](https://leetcode.com/problems/number-of-1-bits/solutions/470633/)

---

**With language tools:**
The integer is converted to a string, passing in 2 as the base, ensuring we get a string version of the binary number. Then we count the number of '1' characters in the string.

```
def hamming_weight(n)
  n.to_s(2).count('1')
end
```

**Iterative with mod/division:**
Because binary is base 2, we can learn what the last digit of the number is by using mod 2 and can then remove it by dividing the number by 2. One by one we remove the last number until there are no numbers left. By adding them all individually we can learn how many ones there are.
```
def hamming_weight(n)
  sum = 0
  while n > 0
    sum += n%2
    n /= 2
  end
  sum
end
```

**Iterative with bit shifting:**
```
def hamming_weight(n)
  sum = 0
  while n > 0
    sum += (n & 1)
    n >>= 1
  end
  sum
end
```

**Recursive with mod/division:**
```
def hamming_weight(n)
  n.zero? ? 0 : (n % 2) + hamming_weight(n/2) 
end
```

**Recursive with bit shifting:**
```
def hamming_weight(n)
  n.zero? ? 0 : (n & 1) + hamming_weight(n>>1) 
end
```