# Ruby single line solution

**Author:** viethqhoang
**Votes:** 12
**Link:** [https://leetcode.com/problems/ransom-note/solutions/2079143/](https://leetcode.com/problems/ransom-note/solutions/2079143/)

---

```
# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
def can_construct(ransom_note, magazine)
  ransom_note.chars.uniq.all? { |character| ransom_note.count(character) <= magazine.count(character) }
end
```