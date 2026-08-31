# Ruby: concise

**Author:** giner
**Votes:** 1
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/3546375/](https://leetcode.com/problems/buddy-strings/solutions/3546375/)

---

```ruby
def buddy_strings(s, goal)
    return false if s.length != goal.length

    s1 = ""
    s2 = ""
    chars = [].to_set
    repeated = false
    
    s.length.times do |i|
        repeated ||= !chars.add?(s[i])
        next if s[i] == goal[i]
        s1 += s[i]
        s2 += goal[i]
    end

    (s1.length == 2 && s1 == s2.reverse) ||
        (s1.length == 0 && repeated)
end
```