# One row

**Author:** binarbaum
**Votes:** 0
**Link:** [https://leetcode.com/problems/champagne-tower/solutions/5422626/](https://leetcode.com/problems/champagne-tower/solutions/5422626/)

---

```ruby
def champagne_tower(poured, query_row, query_glass)
    row = [0.0] * (query_row + 1)
    row[0] = poured
    query_row.times do |r|
        r.downto(0) do |i|
            excess = row[i] - 1.0
            row[i] = 0
            next if excess <= 0
            row[i] += excess / 2
            row[i+1] += excess / 2
        end
    end
    row[query_glass].clamp(..1.0)
end
```