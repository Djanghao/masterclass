# Ruby - T: O(mmn) S: O(mn) 100% 100% - Merge ranges

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/2638037/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/2638037/)

---

```
# @param {Integer[][]} mat
# @return {Integer}
def num_submat(mat)
  m = mat.size
  n = mat[0].size
  result = 0
  ranges = Array.new(m) { [] }
  
  0.upto(m - 1) do |i|
    prev = 0
    seq = 0
    left = nil
    
    0.upto(n - 1) do |j|
      current = mat[i][j]
      if current == 0
        if seq > 0
          result += seq * (seq + 1) / 2
          ranges[i] << [left, j - 1]
        end
        seq = 0
      else
        left = j if seq == 0
        seq += 1
      end
      prev = current
    end

    if seq > 0
      result += seq * (seq + 1) / 2
      ranges[i] << [left, n - 1]
    end

    comp = ranges[i]
    
    (i - 1).downto(0) do |i1|
      comp = merge_ranges(comp, ranges[i1])
      comp.each do |(x1, x2)|
        seq = x2 - x1 + 1
        result += seq * (seq + 1) / 2
      end
      break if comp.size == 0
    end
  end

  result
end

def merge_ranges(ranges1, ranges2)
  n1 = ranges1.size
  n2 = ranges2.size

  i1 = i2 = 0
  result = []

  while i1 < n1 && i2 < n2
    x1, y1 = ranges1[i1]
    x2, y2 = ranges2[i2]

    if y1 < x2
      i1 += 1
      next
    end

    if y2 < x1
      i2 += 1
      next
    end
    
    if y1 < y2
      if x1 < x2
        result << [x2, y1]
      else
        result << [x1, y1]
      end
      i1 += 1
    else
      if x1 < x2
        result << [x2, y2]
      else
        result << [x1, y2]
      end
      i2 += 1
    end
  end

  result
end