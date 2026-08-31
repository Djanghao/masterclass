# [Ruby] Binary indexed tree

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1011145/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1011145/)

---

```
# @param {Integer[]} instructions
# @return {Integer}
def create_sorted_array(instructions)
  @max = instructions.max
  @c = [0]*(@max + 1)

  result = 0
  instructions.each_with_index do |a, i|
    result += [get(a - 1), i - get(a)].min
    update(a)
  end
  
  result%(10**9 + 7)
end
              
def get(x)
  result = 0
  while x > 0
    result += @c[x]
    x -= x & -x
  end
  result
end
  
def update(x)
  while x <= @max
    @c[x] += 1
    x += x & -x
  end
end
```