# [Ruby] O(n^2)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/831940/](https://leetcode.com/problems/number-of-ways-where-square-of-number-is-equal-to-product-of-two-numbers/solutions/831940/)

---

```
def num_triplets(nums1, nums2)
  counter1 = Hash.new{|h, k| h[k] = 0}
  counter2 = Hash.new{|h, k| h[k] = 0}
  
  nums1.each_with_index do |x, i|
    (i+1...nums1.count).each do |j|
      y = nums1[j]
      counter1[x * y] += 1
    end
  end
  nums2.each_with_index do |x, i|
    (i+1...nums2.count).each do |j|
      y = nums2[j]
      counter2[x * y] += 1
    end
  end
  
  result = 0
  
  nums1.each_with_index do |x, i|
    result += counter2[x * x]
  end
  nums2.each_with_index do |x, i|
    result += counter1[x * x]
  end
  
  result
end
```