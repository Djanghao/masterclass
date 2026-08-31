# Ruby T: O(n) S: O(n) - 100% 100%, BFS

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/2304017/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/2304017/)

---

```
# @param {Integer[]} forbidden
# @param {Integer} a
# @param {Integer} b
# @param {Integer} x
# @return {Integer}
def minimum_jumps(forbidden, a, b, x)
  return 0 if x == 0
  forbidden = Set.new(forbidden)
  queue = [[0, 0, false]]
  
  while (node, jump, last_backward = queue.shift)
    next_forward = node + a
    next_backward = node - b
    if !last_backward && next_backward >= 0 && next_backward < 6000 && !forbidden.include?(next_backward)
      return jump + 1 if next_backward == x
      queue << [next_backward, jump + 1, true]
      forbidden << next_backward
    end
    if next_forward < 6000 && !forbidden.include?(next_forward)
      return jump + 1 if next_forward == x
      queue << [next_forward, jump + 1, false]
      forbidden << next_forward
    end
  end

  -1
end