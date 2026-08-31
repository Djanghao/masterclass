# Ruby beats 100% time/space

**Author:** emmamm05
**Votes:** 1
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/1613868/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/1613868/)

---

For a sequence of transformations to be possible, the following must be true:

1.   Without Xs starting and ending strings must have L and R with the same order and counts.
2.   For each L its final index must be at the left (or same) of its original index.
3.   For each R its final index must be at the right (or same) of its original index.
  
```
# @param {String} start
# @param {String} ending
# @return {Boolean}
def can_transform(starting, ending)
    return false if starting.delete("X") != ending.delete("X") 
	
    hsl = starting.chars.map.with_index.reduce([]) { |l, (c, i)| c == "L" ? l + [i] : l }
    hsr = starting.chars.map.with_index.reduce([]) { |l, (c, i)| c == "R" ? l + [i] : l }
    hel = ending.chars.map.with_index.reduce([]) { |l, (c, i)| c == "L" ? l + [i] : l }
    her = ending.chars.map.with_index.reduce([]) { |l, (c, i)| c == "R" ? l + [i] : l }
	
    hsl.zip(hel).all?{ |i0, i1| i1 <= i0 } && hsr.zip(her).all?{ |i0, i1| i1 >= i0 } 
end
```