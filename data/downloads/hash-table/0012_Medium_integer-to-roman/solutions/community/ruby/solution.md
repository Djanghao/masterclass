# Simple ruby solution in 5 lines

**Author:** divyad25
**Votes:** 4
**Link:** [https://leetcode.com/problems/integer-to-roman/solutions/569464/](https://leetcode.com/problems/integer-to-roman/solutions/569464/)

---

```
def int_to_roman(num)
  digits_to_roman = {1000 => "M", 900 => "CM", 500=> "D", 400=> "CD", 100=> "C", 90=> "XC", 50=> "L", 40=> "XL", 10=> "X", 9=> "IX", 5=> "V", 4=> "IV", 1=> "I"}
  roman = ""
  digits_to_roman.each {|d,r|
    if(num >= d)
      times = num/d
      roman += r*times
      num -= d*times
    end
  }
  roman
end
```