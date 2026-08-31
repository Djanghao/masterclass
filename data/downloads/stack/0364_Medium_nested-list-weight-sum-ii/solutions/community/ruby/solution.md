# Ruby Solution (find maxDepth + iterate Sum)

**Author:** nischay_dhiman
**Votes:** 0
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/1315191/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/1315191/)

---

```

def get_max_depth(list, current_max = -1, current_depth = 1)
  if !list.is_integer
    list.get_list.each {|l| current_max = [get_max_depth(l, current_max, current_depth + 1), current_max].max}
  else
    current_max = [current_depth, current_max].max
  end
  current_max
end

def get_weigth_sum(list, max_depth, current_depth = 1)
  if !list.is_integer
    list.get_list.each {|l| get_weigth_sum(l, max_depth, current_depth + 1)}
  else
    @cur_sum += ((max_depth - current_depth) + 1) * list.get_integer
  end
end

def depth_sum_inverse(nested_list)
  @cur_sum = 0
  current_max = -1
  nested_list.each {|l| current_max = [get_max_depth(l, current_max, 1), current_max].max}
  nested_list.each {|l| get_weigth_sum(l, current_max, 1)}
  @cur_sum
end
```