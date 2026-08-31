# Two Ruby solutions

**Author:** divyad25
**Votes:** 4
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/328354/](https://leetcode.com/problems/pascals-triangle/solutions/328354/)

---

**Solution 1**
```
# @param {Integer} num_rows
# @return {Integer[][]}
def generate(num_rows)
    generate_row(num_rows)
end

def generate_row(n)
    return [] if n == 0
    return [[1]] if n == 1
    output = generate_row(n-1)
    prev_row = output[n-2]
    curr_row = [1]
    (1..n-2).each { |i|
        curr_row[i] = prev_row[i] + prev_row[i-1]
    }
    curr_row[n-1] = 1
    output << curr_row
end

```
**Solution 2**
```
def generate(num_rows)
  output = []
  (0...num_rows).each { |i|
    output[i] = []
    (0..i).each { |j|
      output[i][j] = (j == 0 || j == i ? 1 : output[i-1][j-1] + output[i-1][j])
    }
  }
  output
end
```