# Ruby solution

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/5449928/](https://leetcode.com/problems/excel-sheet-column-number/solutions/5449928/)

---

# Code
Using Letters hash
```
# @param {String} column_title
# @return {Integer}
def title_to_number(column_title)
    result = 0
    n = 0
    letters = ('A'..'Z').to_a

    (column_title.length - 1).downto(0).each do |i|
        ch = column_title[i]
        result += ((letters.find_index(ch) + 1) * 26 ** n)
        n += 1
    end
    result
end
```
Without using Letters hash
```# @param {String} column_title
# @return {Integer}
def title_to_number(column_title)
    result = 0
    column_title.each_char do |ch|
        curr = ch.ord - 'A'.ord + 1
        result = result * 26 + curr
    end
    result
end
```