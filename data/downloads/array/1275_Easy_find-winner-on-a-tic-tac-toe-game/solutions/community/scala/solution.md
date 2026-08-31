# Scala clean readable - space O(n*n) time O(n)

**Author:** ankitax
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/1800223/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/1800223/)

---

Solution 1 -  Using extra space
```
  def tictactoe(moves: Array[Array[Int]]): String = {
    val arr = Array.ofDim[String](3, 3) //O(n*n)
    val played = moves.length
    // Fill board O(n)
    for (i <- 0 until played by 2) {
      val r = moves(i)(0)
      val c = moves(i)(1)
      arr(r)(c) = "A"
    }
    for (i <- 1 until played by 2) {
      val r = moves(i)(0)
      val c = moves(i)(1)
      arr(r)(c) = "B"
    }

    def check: Option[String] = {
      var winner: Option[String] = None
      //check row & col O(n)
      for (i <- 0 to 2) {
        if (winner.isEmpty && arr(i)(0) == arr(i)(1) && arr(i)(1) == arr(i)(2) && arr(i)(2) != null)
          winner = Some(arr(i)(0))
        if (winner.isEmpty && arr(0)(i) == arr(1)(i) && arr(1)(i) == arr(2)(i) && arr(2)(i) != null)
          winner = Some(arr(0)(i))
      }
      //check diagonal  O(1)
      if (winner.isEmpty && arr(0)(0) == arr(1)(1) && arr(1)(1) == arr(2)(2) && arr(1)(1) != null)
        winner = Some(arr(1)(1))
      if (winner.isEmpty && arr(0)(2) == arr(1)(1) && arr(1)(1) == arr(2)(0) && arr(1)(1) != null)
        winner = Some(arr(1)(1))

      winner
    }

    check match {
      case Some(v) => v //A,B
      case None if played == 9 => "Draw"
      case _ => "Pending"
    }
  }
```

Solution 2 - Without extra space
```
  def tictactoeAdvance(moves: Array[Array[Int]]): String = {
    var row, col = Array.fill(3)(0)
    var diagnol = 0
    var antiDiagnol = 0
    var winner: Option[String] = None
    var player = 1
    // Fill board O(n)
    for (i <- 0 until moves.length) {
      if (winner.isEmpty) {
        val r = moves(i)(0)
        val c = moves(i)(1)
        row(r) += player
        col(c) += player
        if (r == c) // update diagnol
          diagnol += player
        if (r + c == 2)
          antiDiagnol += player

        //check if anyone wins
        if (Math.abs(row(r)) == 3 || Math.abs(col(c)) == 3 || Math.abs(diagnol) == 3 || Math.abs(antiDiagnol) == 3)
          if (player == 1)
            winner = Some("A")
          else winner = Some("B")
        player = player * -1
      }
    }
    if (winner.isDefined) winner.get
    else if (moves.length < 9) "Pending"
    else "Draw"

  }
```