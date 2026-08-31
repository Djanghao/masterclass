# Ruby decision

**Author:** IFilonov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/3419608/](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/solutions/3419608/)

---

```
def count_triplets(arr)
  result = 0
  l = arr.size
  (0..l - 2).each do |m|
    a = nil
    (m..l - 2).each do |i|
      a.nil? ? a = arr[i] : a ^= arr[i]
      b = nil
      (i + 1..l - 1).each do |k|
        b.nil? ? b = arr[k] : b ^= arr[k]
        result += 1 if a ==  b
      end
    end
  end
  result
end
```