# Shortest Ruby solution (6 lines)

**Author:** konovalov-nk
**Votes:** 10
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/268682/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/268682/)

---

```ruby
def length_of_longest_substring(s)
    return s.size if s.size < 2
    
    queue, hash = [], {}
    s.each_char.reduce(-Float::INFINITY) do |max, c|
        hash.delete(char = queue.shift) until queue.empty? || char.eql?(c) if hash.key?(c)

        [max, (queue << hash[c] = c).size].max
    end
end
```

Runtime: 72 ms, faster than 95.39% of Ruby online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 9.6 MB, less than 89.47% of Ruby online submissions for Longest Substring Without Repeating Characters.

Ruby <3