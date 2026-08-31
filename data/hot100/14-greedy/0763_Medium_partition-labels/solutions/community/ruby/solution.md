# Ruby, Letter Location Array

**Author:** kahtava
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-labels/solutions/4721666/](https://leetcode.com/problems/partition-labels/solutions/4721666/)

---

# Code
```
def partition_labels(s)
  char_locations = Array.new(26)

  s.chars.each_with_index do |char, index|
    char_locations[char.ord - 'a'.ord] = index
  end

  results = []

  partition_start = 0
  partition_end = 0
  s.chars.each_with_index do |char, index|
    partition_end = [partition_end, char_locations[char.ord - 'a'.ord]].max
    if partition_end == index
      results.push(index - partition_start + 1)
      partition_start = index + 1
    end
  end

  results
end
```