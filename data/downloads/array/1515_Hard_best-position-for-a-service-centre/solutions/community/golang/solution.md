# Gradient decent with Go lang

**Author:** ilya-pimenov
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-position-for-a-service-centre/solutions/2833502/](https://leetcode.com/problems/best-position-for-a-service-centre/solutions/2833502/)

---

# Intuition & Approach

Some form of a binary search but on 2D plain.

# Complexity
- Time complexity:
Technically \u2014 $$O(1)$$, since field is fixed to $$100X100$$ and precision is fixed at $$10^{-5}$$.
Practically we will do $$(field size/step size)^2*numpoints$$ steps on each level and there will be $$Log(field size / precision)$$ steps, so \u2014 $$Log(field size / precision) * (field size/step size)^2 * numpoints$$ steps altogether.

- Space complexity:
$$O(1)$$ \u2014 only holding the best result between steps

# Code
```
func getMinDistSum(positions [][]int) float64 {
    dist := func(x, y float64) float64 {
        var ans float64
        for _, pos := range positions {
            x0, y0 := float64(pos[0]), float64(pos[1])
            ans += math.Sqrt((x-x0)*(x-x0) + (y-y0)*(y-y0))
        }
        return ans
    }

    x0, y0 := 0., 0.
    min := math.MaxFloat64
    left, right, top, bottom := 0., 100., 100., 0.
    stop := 0.00001
    for delta := 10.; delta > stop; delta /= 10. {
        for x := left; x <= right; x += delta {
            for y := bottom; y <= top; y += delta {
                d := dist(x, y)
                if d < min {
                    x0, y0 = x, y
                    min = d
                }
            }
        }
        left, right, top, bottom = x0 - delta, x0+delta, y0+delta, y0-delta
    }
    return min    
}
```