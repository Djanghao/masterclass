# Ruby 1 line gsub, reguler expression

**Author:** archbloom
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/334175/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/334175/)

---

We can use reguler expression and the `gsub` method from ruby
```
string.gsub(/[aeiou]/,'')
```
One other solution is to convert it to array and then subtract all the vowels
```
string.split('') - %w[a e i o u]
```

I have benchmarked both and `gsub` with `regex` is faster