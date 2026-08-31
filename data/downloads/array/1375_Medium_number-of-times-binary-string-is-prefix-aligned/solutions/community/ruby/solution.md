# One-line Ruby solution

**Author:** lucasaguilar835
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/4889665/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/4889665/)

---

# Code
```
def num_times_all_blue(flips, max = 0)
  flips.map.with_index { |flip, index| max = [flip, max].max; index + 1 == max ? 1 : 0 }.sum
end

```

## Expanded version
```
def num_times_all_blue(flips)
  max = 0

  flips.map.with_index do |flip, index|
    max = [flip, max].max

    if index + 1 == max
      1
    else
      0
    end
  end.sum
end


```