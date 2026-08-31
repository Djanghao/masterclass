# Ruby solution

**Author:** user4658vo
**Votes:** 1
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/2748420/](https://leetcode.com/problems/nested-list-weight-sum/solutions/2748420/)

---

```
def depth_sum(nested_list)
  @sum = 0
  nested_list.each do |element|
    visit(element, 1)
  end
  @sum
end

def visit(element, level)
  if value = element.get_integer
    @sum += value * level
  else
    element.get_list.each do |f|
      visit(f, level + 1)
    end
  end
end
```
