# ruby oneliner using regexps

**Author:** chassot
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/4529551/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/4529551/)

---

# Approach

Double up the edge seats then use same math for everything

# Code
```
def max_dist_to_closest(seats)
  seats.join.gsub(/^0+|0+$/,'\\0\\0').scan(/0+/).map{(_1.size/2.0).ceil}.max
end
```