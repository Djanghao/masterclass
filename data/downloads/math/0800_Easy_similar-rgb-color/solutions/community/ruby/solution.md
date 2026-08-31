# Ruby 100% Simple

**Author:** emmamm05
**Votes:** 0
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/2599233/](https://leetcode.com/problems/similar-rgb-color/solutions/2599233/)

---

```ruby
HEX = '0123456789abcdef'
TWO_HEX = [0, 17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204, 221, 238, 255]

# @param {String} color
# @return {String}
def similar_rgb(color)
  a = to_2hex_values(normalize(color))
  b = a.map{ |ai| format('%02x', find_closest_pair(ai)) } # format('%02x', 15) => '0f'
  '#' + b.join
end

# 254 => 255, value of closest 2-digit hex
def find_closest_pair(p)
  i = TWO_HEX.bsearch_index{ |q| q >= p }
  if i == 0
    TWO_HEX[0]
  else
    [TWO_HEX[i - 1], TWO_HEX[i]].min_by{ |q| (p - q)**2 }
  end
end

# '#01f' => ['0', '0', '1', '1', 'f', 'f']
def normalize(color)
  if color.size == 4
    [1,1,2,2,3,3].map{ |i| color[i] }
  else
    [*1..6].map{ |i| color[i] }
  end
end

# ['0','0','1','0','f','f'] => "[0, 16, 255]"
def to_2hex_values(color)
  [
    [color[0], color[1]].join.hex,
    [color[2], color[3]].join.hex,
    [color[4], color[5]].join.hex,
  ]
end
```