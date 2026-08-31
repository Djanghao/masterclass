# Ruby three 1-liner solutions

**Author:** alobzov
**Votes:** 1
**Link:** [https://leetcode.com/problems/height-checker/solutions/5288412/](https://leetcode.com/problems/height-checker/solutions/5288412/)

---


# Code
```
# @param {Integer[]} heights
# @return {Integer}
def height_checker(heights)
  # heights.sort.each_with_index.inject(0) { |cnt, (e, i)| e == heights[i] ? cnt : cnt + 1}      
  # heights.sort.map.with_index{ _1 == heights[_2] }.count(false)
  heights.zip(heights.sort).count {|(h, e)| h != e }
end
```