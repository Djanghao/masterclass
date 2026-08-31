# Ruby Split & Join

**Author:** Jared_S
**Votes:** 1
**Link:** [https://leetcode.com/problems/capitalize-the-title/solutions/4260942/](https://leetcode.com/problems/capitalize-the-title/solutions/4260942/)

---

# Code
```
def capitalize_title(title)
  title.split.collect do |word|
    next word.downcase if word.size <= 2

    word.capitalize
  end.join(' ')
end
```