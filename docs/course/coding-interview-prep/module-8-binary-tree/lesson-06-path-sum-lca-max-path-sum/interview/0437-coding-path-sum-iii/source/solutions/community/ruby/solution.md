# DFS Ruby Solution

**Author:** goose9192
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/2474375/](https://leetcode.com/problems/path-sum-iii/solutions/2474375/)

---

```
def path_sum(root, target_sum)
  @count = 0
  @prefixes = {}
  path_sum_helper(root, target_sum, 0)

  @count
end

def path_sum_helper(node, target_sum, current_sum)
  return if node.nil?

  current_sum += node.val

  @count += 1 if current_sum == target_sum

  @count += @prefixes[current_sum - target_sum] unless !@prefixes[current_sum - target_sum]

  @prefixes[current_sum] ? @prefixes[current_sum] += 1 : @prefixes[current_sum] = 1

  path_sum_helper(node.left, target_sum, current_sum)
  path_sum_helper(node.right, target_sum, current_sum)

  @prefixes[current_sum] -= 1
end
```