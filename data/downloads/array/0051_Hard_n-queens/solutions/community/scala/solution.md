# [Scala] 3-liner excluding function declaration, FP approach

**Author:** Abastro
**Votes:** 3
**Link:** [https://leetcode.com/problems/n-queens/solutions/1891724/](https://leetcode.com/problems/n-queens/solutions/1891724/)

---

Somehow there is no short scala code attempt, which is why I am posting this.

Starts with the list representing queens' column for each row.
E.g. `[0, 2, 1]` represents `["Q..", "..Q", ".Q."]`
Viable ones are permutations of `[0 .. n-1]` with diagonals checked.
Note that diagonals could be checked by,
  1. Calculate diagonal number by subtracting row number(index) with column number
  2. Check if all are distinct

Reversing the list, we can check again for mirror of former diagonal direction.
For example, diagonal numbers for `[0, 2, 1]` is `[0, -1, 1]`, and for `[1, 2, 0]` is `[-1, -1, 2]`. While `[0, 2, 1]` has distinct diagonal numbers, its "mirror" [1, 2, 0] does not, so `[0, 2, 1]` should be filtered out.

After the filtering, we need to convert the list into readable representation.

So here is the code.
```scala
  def solveNQueens (n: Int): List[List[String]] = {
    def diagCk (ite: Iterator[Int]) = ite.zipWithIndex.map { case (i, x) => i - x }.distinct.length == n
    (0 until n) .permutations .filter (arr => diagCk (arr.iterator) && diagCk (arr.reverseIterator))
      .map (_ .iterator .map (k => ("." * n) .updated (k, 'Q')) .toList) .toList }
```

Imho code itself is simple enough to understand, but many will disagree with that I guess.