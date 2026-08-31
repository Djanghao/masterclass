# Correct solution, without flattening as per editorial

**Author:** abhinvsinh
**Votes:** 1
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/4944482/](https://leetcode.com/problems/flatten-2d-vector/solutions/4944482/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Vector2D struct {
    matrix [][]int
    row int
    col int
}


func Constructor(vec [][]int) Vector2D {
    matrix := vec
    return  Vector2D{matrix:matrix, row: 0,col:0}
}

func (this *Vector2D)advanceToNext(){ //moves pointer to valid interval
    for this.row < len(this.matrix) && this.col == len(this.matrix[this.row]){ 
        this.col = 0
        this.row++         //if at the end of the row, go to next row
    }
}

func (this *Vector2D) Next() int {
    res:=0
    if this.HasNext(){
        res = this.matrix[this.row][this.col]
        this.col++
    }
    return res 
}


func (this *Vector2D) HasNext() bool {
    this.advanceToNext()     //go to the valid number 
    return this.row<len(this.matrix)
}


/**
 * Your Vector2D object will be instantiated and called as such:
 * obj := Constructor(vec);
 * param_1 := obj.Next();
 * param_2 := obj.HasNext();
 */
```