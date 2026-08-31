# 1464 ms

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/3270259/](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/solutions/3270259/)

---

```ruby
def max_trailing_zeros v
    y, x = v.size, v[0].size
    m, h = 0, Array.new(y) { [0] * x }
    for i in 0...y
        h2, h5 = 0, 0
        for j in 0...x
            d = v[i][j]
            x2, x5 = 0, 0
            (d >>= 1; x2 += 1) while (d & 1).zero?
            (d  /= 5; x5 += 1) while (d % 5).zero?
            h[i][j] = [h2 += x2, h5 += x5]
            if i > 0
                p2, p5 = *v[i - 1][j]
                x2 += p2; x5 += p5
            end
            v[i][j] = [x2, x5]
        end
    end
    for i in 0...y
        r2, r5 = *h[i][-1]
        for j in 0...x
             v2,  v5 = *v[-1][j]
            cv2, cv5 = *v[i][j]
            ch2, ch5 = *h[i][j]
            j > 0 ?
                (lh2, lh5 = *h[i][j - 1]) :
                (lh2, lh5 = 0, 0)
            m = [m,
                 [lh2 + cv2,
                  lh5 + cv5].min,
                 [cv2 + r2 - ch2,
                  cv5 + r5 - ch5].min,
                 [ch2 + v2 - cv2,
                  ch5 + v5 - cv5].min,
                 [r2 - lh2 + v2 - cv2,
                  r5 - lh5 + v5 - cv5].min
            ].max
        end
    end
    m
end
```