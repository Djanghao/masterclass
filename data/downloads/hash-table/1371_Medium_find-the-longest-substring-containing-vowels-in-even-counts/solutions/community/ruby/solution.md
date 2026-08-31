# ruby 2-liner

**Author:** _-k-
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5788500/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5788500/)

---

```ruby []
def find_the_longest_substring(s) =

  (a=x=0,*s.chars.map{ x^=1<<~-' aeiou'.index(_1).to_i
    }).uniq.map{ a.rindex(_1)-a.index(_1) }.max
```