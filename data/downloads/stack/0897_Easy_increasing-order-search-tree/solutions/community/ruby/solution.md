# Ruby Solution

**Author:** Purandhar999
**Votes:** 3
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/4323610/](https://leetcode.com/problems/increasing-order-search-tree/solutions/4323610/)

---


# Code
```
def increasing_bst(root)
  return root if root.nil?
  @d = false
  stack = [root]
  ans = []
  new_root = nil
  last = nil
  while ! stack.empty?
    # Move left as far as possible.
    while stack.last.left
      stack.push(stack.last.left)
    end
    # Seeking for way right.
    while ! stack.empty?
      need_to_break = false
      x = stack.pop
      if x.right
        stack.push(x.right) 
        need_to_break = true
      end
      x.left = nil
      x.right = nil
      ans.push x.val
      if new_root.nil?
        new_root = x
        last = x
      else
        last.right = x
        last = last.right
      end
      break if need_to_break
    end
  end
  puts ans.inspect if @d
  new_root
end
```