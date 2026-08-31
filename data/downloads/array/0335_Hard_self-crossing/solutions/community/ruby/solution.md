# Ruby Solution

**Author:** ozovalihasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/self-crossing/solutions/2454062/](https://leetcode.com/problems/self-crossing/solutions/2454062/)

---

Thanks to [@KuangYuan](https://leetcode.com/KuangYuan/) for sharing [the approach](https://leetcode.com/problems/self-crossing/discuss/79131/Java-Oms-with-explanation).

```
# @param {Integer[]} distance
# @return {Boolean}
def is_self_crossing(distance)
  return false if distance.size < 4

  return true if check_four_element(*distance[-4...])

  return false if distance.size == 4

  return true if check_five_element(*distance[-5...])

  distance.each_cons(6) do |long_pair|
    if check_six_element(*long_pair)
      return true 
    end
  end

  false
end

def check_four_element(x1, x2, x3, x4)
  x1 >= x3 && x4 >= x2
end

def check_five_element(x1, x2, x3, x4, x5)
  (x1 + x5) >= x3 && x4 == x2 || check_four_element(x1, x2, x3, x4)
end

def check_six_element(x1, x2, x3, x4, x5, x6 )
  ((x1 + x5) >= x3 && x3 >= x5 && (x6 + x2) >= x4 && x4 >= x2) || check_five_element(x1, x2, x3, x4, x5)
end
```