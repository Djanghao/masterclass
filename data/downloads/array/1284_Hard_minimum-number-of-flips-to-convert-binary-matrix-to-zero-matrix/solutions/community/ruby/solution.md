# Ruby - T: O(n) S: O(n) - Faster than 100% - Bidirectional BFS, Bit manipulation

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/2544162/](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/solutions/2544162/)

---

```
# @param {Integer[][]} mat
# @return {Integer}
def min_flips(mat)
  m = mat.size
  n = mat[0].size
  
  start = 0
  0.upto(m - 1) do |i|
    0.upto(n - 1) do |j|
      start ^= (1 << i * n + j) if mat[i][j] == 1
    end
  end

  finish = 0

  return 0 if start == finish
  
  visited1 = { start => 0 }
  queue1 = [[start, 0]]
  visited2 = { finish => 0 }
  queue2 = [[finish, 0]]
  
  while true
    unless (bm, step = queue1.shift)
      return -1
    end

    next_step = step + 1

    0.upto(m - 1) do |i|
      0.upto(n - 1) do |j|
        next_state = flip(m, n, bm, i, j)
        return next_step + visited2[next_state] if visited2[next_state]
        next if visited1[next_state]
        queue1 << [next_state, next_step]
        visited1[next_state] = next_step
      end
    end

    unless (bm, step = queue2.shift)
      return -1
    end

    next_step = step + 1

    0.upto(m - 1) do |i|
      0.upto(n - 1) do |j|
        next_state = flip(m, n, bm, i, j)
        return next_step + visited1[next_state] if visited1[next_state]
        next if visited2[next_state]
        queue2 << [next_state, next_step]
        visited2[next_state] = next_step
      end
    end
  end

  -1
end

def flip(m, n, bm, i, j)
  s = bm
  bm ^= (1 << (i * n + j))
  bm ^= (1 << (i - 1) * n + j) if i > 0
  bm ^= (1 << i * n + j - 1) if j > 0
  bm ^= (1 << (i + 1) * n + j) if i < m - 1
  bm ^= (1 << i * n + j + 1) if j < n - 1
  bm
end
