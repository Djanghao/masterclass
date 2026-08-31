# Ruby solution with prefix count

**Author:** ihatetheseinterviews
**Votes:** 1
**Link:** [https://leetcode.com/problems/plates-between-candles/solutions/1934381/](https://leetcode.com/problems/plates-between-candles/solutions/1934381/)

---

A Ruby solution that uses pre-calculated prefix counts.
It's written to be very explicit and readable. Some things are inefficient for the sake of clarity (e.g. duplicated loop left-to-right).

```ruby
def plates_between_candles(s, queries)
  n = s.length

  # prepare data
  closest_left_candle = Array.new(n)
  closest_right_candle = Array.new(n)
  plates_on_left = Array.new(n)

  c = -1 # candle position
  (0...n).each do |i|
    c = i if s[i] == "|"
    closest_left_candle[i] = c
  end

  c = n + 1 # candle position
  (n - 1).downto(0).each do |i|
    c = i if s[i] == "|"
    closest_right_candle[i] = c
  end

  p = 0 # plate count
  (0...n).each do |i|
    if s[i] == "*"
      p += 1
    else
      plates_on_left[i] = p
    end
  end

  # puts "closest_left_candle:  #{closest_left_candle}"
  # puts "closest_right_candle: #{closest_right_candle}"
  # puts "plates_on_left:       #{plates_on_left}"

  queries.map do |start, stop|
    a = closest_right_candle[start]
    b = closest_left_candle[stop]

    # (-1) ***************|*****************************|**************** (n+1)
    #
    #            start    a                             b     stop                (valid)
    #
    #            start   a+b      stop
    #
    #                     b    start          stop      a
    #
    #   b   start  stop   a
    #
    #                                                   b    start  stop   a
    #
    if a == b || a > stop
      0
    else
      plates_on_left[b] - plates_on_left[a]
    end
  end
end
```