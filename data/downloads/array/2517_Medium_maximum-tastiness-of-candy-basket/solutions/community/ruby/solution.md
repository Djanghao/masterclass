# Beats 100%

**Author:** shrreey
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5051382/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/5051382/)

---



# Code
```
def maximum_tastiness(price, k)
  price.sort!
  n = price.length
  lo = 0
  hi = price[-1] - price[0]

  while lo < hi
    mid = 1 + lo + (hi - lo) / 2
    if search_function(mid, price, k)
      lo = mid
    else
      hi = mid - 1
    end
  end

  lo
end

def search_function(target, price, k)
  prev = price[0]
  c = 1
  (1...price.length).each do |i|
    if price[i] - prev >= target
      c += 1
      prev = price[i]
    end
  end
  c >= k
end


```