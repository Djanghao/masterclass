# Ruby, Two Pointer (Editorial Approach #2)

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5327287/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/5327287/)

---

# Code
```
def max_boxes_in_warehouse(boxes, warehouse)
  boxes.sort!

  result = 0

  left, right = 0, warehouse.length - 1
  b = boxes.length - 1
  while left <= right && b >= 0
    if boxes[b] <= warehouse[left]
      result += 1
      left += 1
    elsif boxes[b] <= warehouse[right]
      result += 1
      right -= 1
    end
    b -= 1
  end

  result
end
```