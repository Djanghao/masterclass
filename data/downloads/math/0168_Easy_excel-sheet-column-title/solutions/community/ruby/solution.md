# Ruby Enumerator Makes It Still Easier

**Author:** gilbertsheng
**Votes:** 2
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/3818265/](https://leetcode.com/problems/excel-sheet-column-title/solutions/3818265/)

---


# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
# @param {Integer} column_number
# @return {String}
def convert_to_title(column_number)
  order = Enumerator.new do |y|
    until column_number.zero?
      column_number, order = (column_number - 1).divmod(26)
      y << order + 65
    end
  end

  order.map(&:chr).reverse.join
end

```