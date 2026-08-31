# Ruby - RegExp

**Author:** shhavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-number/solutions/1209812/](https://leetcode.com/problems/valid-number/solutions/1209812/)

---

### Regular Expression for decimal or integer

`\\d+\\.?\\d*` - covers both integer or decimal that starts with a digit
`\\.\\d+` - decimal that starts with a dot.

This two can be combined with or `|` in regex:

`(\\d+\\.?\\d*|\\.\\d+)` 

And also prepend with optional `+` or `-`:

`[+-]?(\\d+\\.?\\d*|\\.\\d+)`

### Regular Expression for e... part

`[eE][+-]?\\d+`

And mark is optional wuth a question mark:

`([eE][+-]?\\d+)?`

```ruby
def is_number(s)
  /^[+-]?(\\d+\\.?\\d*|\\.\\d+)([eE][+-]?\\d+)?$/.match?(s)
end
```
