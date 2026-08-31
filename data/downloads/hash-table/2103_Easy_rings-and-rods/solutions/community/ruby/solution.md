# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/4711626/](https://leetcode.com/problems/rings-and-rods/solutions/4711626/)

---

```
# @param {String} rings
# @return {Integer}
def count_points(rings)
    rods = {}

    rings.chars.each_slice(2) do |c, r|
        rods[r] ||= []
        rods[r] << c
    end

    rods.values.count { |arr| arr.uniq.sort == %w[B G R] }
end
```