# Golang || 100% fastest

**Author:** chal_geeta
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-tic-tac-toe/solutions/1944045/](https://leetcode.com/problems/design-tic-tac-toe/solutions/1944045/)

---

```
type TicTacToe struct {
    Row []int
    Col []int
    Dig1 int
    Dig2 int
    N int
}


func Constructor(n int) TicTacToe {
    obj := TicTacToe{}
    obj.Row = make([]int,n)
    obj.Col = make([]int,n)
    obj.Dig1 = 0
    obj.Dig2 = 0
    obj.N = n
    return obj
}


func (this *TicTacToe) Move(row int, col int, player int) int {
    sign := 1
    if player==2{
        sign = -1
    }
    this.Row[row] += sign
    this.Col[col] += sign
    if row == col {
        this.Dig1 += sign
    }
    if row == this.N-col-1 {
        this.Dig2 += sign
    }
    if this.Row[row] == this.N  || this.Col[col] == this.N || this.Dig1== this.N || this.Dig2 == this.N {
        return 1
    } else  if this.Row[row] == -this.N  || this.Col[col] == -this.N || this.Dig1 == -this.N || this.Dig2 == -this.N{
        return 2
    } else {
        return 0
    }
}


/**
 * Your TicTacToe object will be instantiated and called as such:
 * obj := Constructor(n);
 * param_1 := obj.Move(row,col,player);
 */
```