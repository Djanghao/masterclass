# My ruby answer for Powerful Integers

**Author:** guorui9016
**Votes:** 0
**Link:** [https://leetcode.com/problems/powerful-integers/solutions/1590978/](https://leetcode.com/problems/powerful-integers/solutions/1590978/)

---

```
def powerful_integers(x, y, bound)
    result = []
    i, j= 0, 0
    while x**i + y**0 <= bound 
        while (x**i + y**j) <= bound
            result.push(x**i + y**j)
            break if y == 1
            j += 1
        end
        break if x == 1
        i += 1
        j = 0
    end
    result.uniq
end
```