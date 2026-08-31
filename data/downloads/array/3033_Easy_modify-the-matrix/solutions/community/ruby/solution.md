# A Ruby Solution

**Author:** devious-coffee
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/5197834/](https://leetcode.com/problems/modify-the-matrix/solutions/5197834/)

---

Not the most efficient answer but it works

# Code
```
# @param {Integer[][]} matrix
# @return {Integer[][]}
def modified_matrix(matrix)
    columns = matrix.transpose
    answer = []
    columns.each do |column|
        new_col = []
        column.each do |number|
            if number == -1
                new_col << column.max
            else
                new_col << number
            end
        end
        answer << new_col
    end
    answer.transpose
end
```