# I know this is no efficient scala solution but I wanna share it anyway.

**Author:** fulgenssequar
**Votes:** 1
**Link:** [https://leetcode.com/problems/sudoku-solver/solutions/352678/](https://leetcode.com/problems/sudoku-solver/solutions/352678/)

---


```
object Solution {
    val chooseList = "123456789".split("").map(_(0)).toList
    def solveSudoku(board: Array[Array[Char]]): Unit = {
        val b = board.map(_.toList).toList
        val res = worker(b, 0.to(8).toList, 0.to(8).toList).take(1)(0)
        for (i<-0 to 8; j<-0 to 8) {
            board(i)(j) = res(i)(j)
        }
    }
    
    def okRow(board: List[List[Char]], a:Int, b:Int, v:Char) = {
        ! board(a).contains(v);
    }
    
    def okColumn(board: List[List[Char]], a:Int, b:Int, v:Char) = {
        ! (for (j<- 0 until 9) yield {
              board(j)(b);  
        }).contains(v)
    }
    
    def okBlock(board: List[List[Char]], a:Int, b:Int, v:Char)  = {
        def matchX(x:Int) = {
            x match {
                case x if x <= 2 => 0 until 3;
                case x if x >= 6 => 6 until 9;
                case _ => 4 until 6;
            }
        }
        ! (for (i<-matchX(a); j<-matchX(b)) yield {
            board(i)(j);
        }).contains(v)
    }
    
    def okAll(board: List[List[Char]], a:Int, b:Int, v:Char) = {
        okRow(board, a, b, v) && okColumn(board, a, b, v) && okBlock(board, a, b, v)
    }
    
    def update2(board:List[List[Char]], i:Int ,j:Int , v:Char) : List[List[Char]] = {
        board.updated(i, board(i).updated(j, v))
    }
    def allUpdatable(b:List[List[Char]], i:Int, j:Int) = {
        b(i)(j) match {
            case '.' => chooseList.filter(okAll(b, i, j, _))
            case v => List(v) 
        }
    }
    
    def worker(b:List[List[Char]], is:List[Int], js:List[Int]):List[List[List[Char]]] = {
           (is, js) match {
               case (Nil, j::Nil) => List(b) 
               case (Nil, j::jj) =>  worker(b, 0.to(8).toList, jj) 
               case (i::ii, j::jj) => {
                   val vs = allUpdatable(b, i, j)
                   ( for ( v <- vs ) yield {
                       val b1 = update2(b, i, j, v)
                       worker( b1, ii, js ).take(1)
                   } ).fold(Nil)(_++_).toList.take(1)
               }
           }
    }
    
    
    
}

```
I know this could be improved by writing more compact and complexing functions but if I do that it would fill my life with mistress and misery.