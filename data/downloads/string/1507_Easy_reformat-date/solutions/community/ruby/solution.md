# Ruby 1-liner cheat

**Author:** kaiwensun
**Votes:** 1
**Link:** [https://leetcode.com/problems/reformat-date/solutions/732064/](https://leetcode.com/problems/reformat-date/solutions/732064/)

---

```
require 'date'
# @param {String} date
# @return {String}
def reformat_date(date)
    Date.parse(date).to_s
end
```