# Ruby O(n^2)

**Author:** piyushsawaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/976116/](https://leetcode.com/problems/4sum-ii/solutions/976116/)

---

```
def four_sum_count(a, b, c, d)
  count = 0
  h = Hash.new(0)
  a.each do |i|
    b.each do |j|
      h[j+i] += 1
    end
  end

  c.each do |i|
    d.each do |j|
      count += h[-(j+i)]
    end
  end
  count
end