# Ruby, Hash Tally

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-keypresses/solutions/5291466/](https://leetcode.com/problems/minimum-number-of-keypresses/solutions/5291466/)

---

# Code
```
def minimum_keypresses(s)
  frequencies = s.chars.tally.values.sort.reverse

  result = 0
  
  keypad_level = 1
  frequencies.each.with_index(1) do |occurrences, key_position|
    result += occurrences * keypad_level

    keypad_level = (key_position / 9) + 1
  end

  result
end
```