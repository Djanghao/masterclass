# Ruby ASCII Loop solution

**Author:** bayramovanar
**Votes:** 2
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/2286524/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/2286524/)

---


```ruby
def cells_in_range(s)
    chars = s.split("")

    result = []
    (chars[0].sum..chars[3].sum).each do |item|
        (chars[1].to_i..chars.last.to_i).each do |i|
            result << "#{item.chr}#{i}"
        end
    end

    result
end
```