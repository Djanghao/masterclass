# [Ruby] BFS

**Author:** mistersky
**Votes:** 3
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/1252005/](https://leetcode.com/problems/open-the-lock/solutions/1252005/)

---

```
# @param {String[]} deadends
# @param {String} target
# @return {Integer}
def open_lock(deadends, target)
  dead_set = Set.new(deadends)
  queue = [['0000', 0]]
  visited = Set.new(['0000'])

  until queue.empty?
    string, steps = queue.shift
    if string == target
      return steps
    elsif dead_set.include?(string)
      next
    end

    4.times do |i|
      digit = string[i].to_i
      [-1, 1].each do |move|
        new_digit = (digit + move) % 10
        new_string = string[0...i] + new_digit.to_s + string[i+1..-1]
        unless visited.include?(new_string)
          visited << new_string
          queue << [new_string, steps+1]
        end
      end
    end
  end
  
  -1
end
```