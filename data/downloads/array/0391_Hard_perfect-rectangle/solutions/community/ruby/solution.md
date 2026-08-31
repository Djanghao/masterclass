# [Ruby] Simple solution

**Author:** ozovalihasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/2460422/](https://leetcode.com/problems/perfect-rectangle/solutions/2460422/)

---

Let's create a hash of all coordinates by initializing their value as 0. 

Then, each value will be increased  for the left-bottom and right-top, and decreased for the left-top and right-bottom corners of any rectangle. 

If it is a perfect square, values of the hash should be two "1" and two "-1" (or the total number of "1"s and "-1"s should be 4 ) without any value greater than 1 or less than -1 . The number of zeros doesn't affect our result. 

```ruby
# @param {Integer[][]} rectangles
# @return {Boolean}
def is_rectangle_cover(rectangles)
  hash = Hash.new(0)
  rectangles.each do |(x1, y1, x2, y2)|
    hash[[x1, y1]] += 1
    hash[[x2, y2]] += 1
    hash[[x1, y2]] -= 1
    hash[[x2, y1]] -= 1
  end
  
  corners_values = hash.values
  
  return false unless corners_values.none? {|value| value > 1 ||  value < -1 }
  
  return false unless corners_values.count {|value| value == 1 ||  value == -1 } == 4

  true
end
```

Let's make the solution shorter(but uglier);

```ruby
# @param {Integer[][]} rectangles
# @return {Boolean}
def is_rectangle_cover(rectangles)
  
  corners_values = rectangles.each_with_object(hash = Hash.new(0)) do |(x1, y1, x2, y2), hash|
    hash[[x1, y1]] += 1
    hash[[x2, y2]] += 1
    hash[[x1, y2]] -= 1
    hash[[x2, y1]] -= 1
  end.values.group_by {|val| val.abs <=> 1}
  
  !corners_values[1] && ( corners_values[0]&.size == 4 )

end
```