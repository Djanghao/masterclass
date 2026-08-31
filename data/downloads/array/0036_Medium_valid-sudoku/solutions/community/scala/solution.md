# Clean solution with explaination

**Author:** andreazube
**Votes:** 5
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/2637942/](https://leetcode.com/problems/valid-sudoku/solutions/2637942/)

---

# Problem
The problem itself is pretty simple. Given a board, we need to validate 3 rules:

- All rows are valid
- All columns are valid
- All subboxes are valid

Being *valid* in this context just means not having duplicates, except empty places - we don't need to check if the board is solvable. 
This validity check is the same for all 3 rules, we just need to get the right data (e.g. every row, every column and every subbox)

The problem then is
- Have a way to validate if a batch of data is valid => see if all elements except empty places are unique
- Have a way to get all rows, columns and sub-boxes
- Compose the above in a single answer

This solution is in Scala. While the same approach can be used in most languages (e.g. Python, Java) the syntax might be a little unfamiliar to some.
I believe reading this is useful to anyone, as the overall approach is much more important than the language's syntax.

# Validate data

As mentioned above, we just need to check for duplicates. Using a set or the `Array.distinct` function is the easiest way to do so. We simply need something like

```
private val Empty = '.'

private def isValid(seq: Array[Char]): Boolean = {
    val filled = seq.filter(_ != Empty)
    filled.distinct.length == filled.length
  }
```


# Getting the data 

Getting the **rows** is as easy as it gets - if you think about it, the rows of our board are just the default view of a matrix in Scala (and most programming languages), since it's an array of rows (which are arrays themselves)

So, 

`val rows = board`
---


To get the **columns**, we would need to work a little harder: the obvious solution in an imperative language would be a double `for`, scanning the board from top to bottom.

However,  we would get the same result by "rotating" the board, wouldn't we? It's such a common operation that Scala has a handy `Array.transpose ` function that works just right for us.
This function will do exactly this:

```
[1, 2, 3]       [1, 4, 7]
[4, 5, 6]   =>  [2, 5, 8]
[7, 8, 9]       [3, 6, 9]
```

Therefore, to get our columns we can just write `val columns = board.transpose`

---

Finally, we need to get the sub-boxes. This one is trickier.
There are many way to go about it, but the one I find most intuitive is: since we need to get a 3x3 square, locate the top left corner `(x, y)` and then go both right and down until we get to the bottom right corner` (x+2, y+2)`, i.e.

```
(x, y), (x+1, y), (x+2, y)
(x, y+1), (x+1, y+1), (x+2, y+1)
(x, y+2), (x+1, y+2), (x+2, y+2)
```

If you can't visualize it, try on pen and paper.

So, first we generate the top-left corners of all sub-boxes:

```
 private val corners = for {
      x <- 0 until 9 by 3
      y <- 0 until 9 by 3
    } yield (x, y)
```

which yields something like` [(0, 0), (0, 3), (0, 6), (1, 0), (1, 3) ...]`

then, we explore the sub-box that starts at that corner

```
private def getSubBox(startX: Int, startY: Int) =
      for {
        y     <- startY until startY + 3
        slice <- board(y).slice(startX, startX + 3)
      } yield slice
```

(in this case, we basically get a sub-row for every interested column)

Finally, we compose the two, in

```
val subBoxes =
      corners
        .map { case (x, y) => getSubBox(x, y).toArray }
        .toArray
```

The` .toArray` conversion are needed since our `isValid` function works on arrays, but the `corners` and `getSubBox` return an `IndexedSeq` that is unfortunately not compatible.\\


# Putting it all together

We now have all the pieces, and competing the puzzle is as simple as

```
def isValidSudoku(board: Array[Array[Char]]): Boolean =
    board.rows.forall(isValid) &&
      board.columns.forall(isValid) &&
      board.subBoxes.forall(isValid)
```

Below, you can find my complete code for this exercise. 
I chose to use an implicit class for syntactic sugar, but if you don't like it or are not sure how it works, just ignore it - removing the class and using regular values and methods (as I wrote above) is perfectly fine :)


```
object Solution {
  private val Empty = '.'

  implicit class SudokuBoard(board: Array[Array[Char]]) {
    def rows    = board
    def columns = board.transpose

    def subBoxes =
      corners
        .map { case (x, y) => getSubBox(x, y).toArray }
        .toArray

    private def getSubBox(startX: Int, startY: Int) =
      for {
        y     <- startY until startY + 3
        slice <- board(y).slice(startX, startX + 3)
      } yield slice

    private val corners = for {
      x <- 0 until 9 by 3
      y <- 0 until 9 by 3
    } yield (x, y)
  }

  def isValidSudoku(board: Array[Array[Char]]): Boolean =
    board.rows.forall(isValid) &&
      board.columns.forall(isValid) &&
      board.subBoxes.forall(isValid)

  private def isValid(seq: Array[Char]): Boolean = {
    val filled = seq.filter(_ != Empty)
    filled.distinct.length == filled.length
  }

}
```