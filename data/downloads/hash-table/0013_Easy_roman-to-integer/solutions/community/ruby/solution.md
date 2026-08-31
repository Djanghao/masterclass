# Ruby solution 52ms

**Author:** ayamschikov
**Votes:** 16
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/423299/](https://leetcode.com/problems/roman-to-integer/solutions/423299/)

---

Ruby solution with
	- Runtime: 52 ms
	- Memory Usage: 9.3 MB
```
def roman_to_int(s)
  hash = {
    'I'=> 1,
    'V'=> 5,
    'X'=> 10,
    'L'=> 50,
    'C'=> 100,
    'D'=> 500,
    'M'=> 1000
  }

  total = 0
  i = 0
  while i < s.length
    if i + 1 < s.length && hash[s[i]] < hash[s[i+1]]
      total += hash[s[i+1]] - hash[s[i]]
      i += 1
    else
      total += hash[s[i]]
    end

    i += 1
  end

  total
end
```