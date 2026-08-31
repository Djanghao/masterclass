# Ruby, Array, One Line

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6106638/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6106638/)

---

# Code
```ruby []
def check_if_exist(arr) = (0...arr.length).each.any? { |i| (arr[0...i] + arr[i + 1..]).include?(arr[i] * 2) }
```