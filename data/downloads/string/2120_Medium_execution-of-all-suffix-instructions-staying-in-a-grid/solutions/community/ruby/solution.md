# Straightforward ruby solution

**Author:** varentina
**Votes:** 0
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/3324372/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/3324372/)

---

```
# @param {Integer} n
# @param {Integer[]} start_pos
# @param {String} s
# @return {Integer[]}
def execute_instructions(n, start_pos, s)
  (0...s.size).map do |j|
    subs = s[j..]
    y, x = start_pos
    
    count = 0
    subs.size.times do |i|
      case subs[i]
        when 'U' then y -= 1
        when 'D' then y += 1
        when 'R' then x += 1
        when 'L' then x -= 1
      end
      break if x >= n || y >= n || x < 0 || y < 0

      count += 1
    end
    count
  end
end
```