# Ruby - Two solutions

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1140960/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/1140960/)

---

### First solution

Check vertical and then horisontal even or odd.

```ruby
def square_is_white(coordinates)
  x = coordinates[0]
  y = coordinates[1].to_i
  %w[b d f h].include?(x) ? y.odd? : y.even?
end
```

### Second solution

Rely on characters byte codes

```ruby
def square_is_white(coordinates)
  coordinates.bytes.sum.odd?
end
```