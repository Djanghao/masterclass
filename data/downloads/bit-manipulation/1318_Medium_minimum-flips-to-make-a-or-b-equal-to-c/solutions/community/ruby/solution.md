# Ruby solution

**Author:** ozovalihasan
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3608294/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3608294/)

---

# Code
```ruby []
# @param {Integer} a
# @param {Integer} b
# @param {Integer} c
# @return {Integer}
def min_flips(a, b, c)
  a, b, c = set_numbers_as_reverse_binary(a, b, c)
  max_size = [a.size, b.size, c.size].max
  
  result = 0
  0.upto(max_size - 1) do |index|
    if c[index] == "1"
      result += 1 if (a[index] != "1") && (b[index] != "1")
    else
      result += 1 if a[index] == "1"
      result += 1 if b[index] == "1"
    end
  end

  result
end

def set_numbers_as_reverse_binary(*nums)
  nums.map {|num| num.to_s(2).reverse}
end
```