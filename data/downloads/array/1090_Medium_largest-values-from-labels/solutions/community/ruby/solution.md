# Ruby - T: O(n) S: O(n) 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/2610246/](https://leetcode.com/problems/largest-values-from-labels/solutions/2610246/)

---

```
# @param {Integer[]} values
# @param {Integer[]} labels
# @param {Integer} num_wanted
# @param {Integer} use_limit
# @return {Integer}
def largest_vals_from_labels(values, labels, num_wanted, use_limit)
  n = values.size
  
  used = {}
  
  data = values.zip(labels).sort_by { |val, label| -val }
  taken = result = 0

  data.each do |(value, label)|
    usage = used[label].to_i + 1
    next if usage > use_limit
    
    result += value
    
    used[label] = usage
    taken += 1
    return result if taken == num_wanted
  end

  result
end