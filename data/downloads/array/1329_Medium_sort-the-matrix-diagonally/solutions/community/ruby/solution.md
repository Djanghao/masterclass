# Ruby O(n)

**Author:** queeniepeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/3069707/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/3069707/)

---


```
# Start with bottom left (i, 0)
# Goes up and compare its own diagonal value in 'sort_diagonal'
# Then sort starts from top row (0, j)


  @mat = mat
  @m = mat.length - 1
  @n = mat[0].length - 1

  @m.downto(0) do |i|
    sort_diagonal(i, 0)
  end

  1.upto(@n).each do |j|
    sort_diagonal(0, j)
  end
  @mat
end

def sort_diagonal(i, j)
  arr = []
  idx = []
  while i <= @m && j <= @n
    arr << @mat[i][j]
    idx << [i, j]
    i += 1
    j += 1
  end
  arr.sort!

  (0...idx.length).each do |k|
    @mat[idx[k][0]][idx[k][1]] = arr[k]
  end
end
```