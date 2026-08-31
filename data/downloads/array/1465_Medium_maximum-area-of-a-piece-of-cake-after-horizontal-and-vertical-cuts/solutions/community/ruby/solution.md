# Ruby: Max horizontal stripe by max vertical stripe.

**Author:** user9697N
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2228516/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2228516/)

---

## Leetcode: 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts.

**Ruby: Max horizontal stripe by max vertical stripe.**

Firts need to sort all cuts addresses ascending. The size of the stripe is current cut address minus previous cut addres. Both ends are cuts too: begining and the end. Need to calculate maximum size of stripe by vertical cut and maximum size of stripe by gorizontal strype. Multiplication of these sizes would be an answer.


Ruby code:
```Ruby
# Leetcode: 1465. Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts.
# https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
# = = = = = = =
# Accepted.
# Thanks God!
# = = = = = = =
# Runtime: 244 ms, faster than 33.33% of Ruby online submissions for Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts.
# Memory Usage: 216.8 MB, less than 33.33% of Ruby online submissions for Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts.
# @param {Integer} h
# @param {Integer} w
# @param {Integer[]} horizontal_cuts
# @param {Integer[]} vertical_cuts
# @return {Integer}
def max_area(h, w, horizontal_cuts, vertical_cuts)
  # Need maximum horizontal multyplay on maximum vertical.
  prev = 0
  max_h = 0
  horizontal_cuts.sort.each do |i|
    size = i - prev
    max_h = size if size > max_h
    prev = i
  end
  size = h - prev
  max_h = size if size > max_h

  prev = 0
  max_v = 0
  vertical_cuts.sort.each do |i|
    size = i - prev
    max_v = size if size > max_v
    prev = i
  end
  size = w - prev
  max_v = size if size > max_v
  (max_h*max_v)% ((10**9) + 7)
end
```
