# Scala A*

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/795560/](https://leetcode.com/problems/minimum-moves-to-move-a-box-to-their-target-location/solutions/795560/)

---

```
import scala.annotation.tailrec
import scala.collection.mutable
import scala.util.Try

case class Matrix[+A](elems: IndexedSeq[IndexedSeq[A]]) {
  // Ensures that each row is the same size
  assert(elems.forall(_.size == numCols))

  def get(index: (Int, Int)): Option[A] = Some(index).filter(isDefinedAt).map(apply)

  def isDefinedAt(index: (Int, Int)): Boolean = elems.isDefinedAt(index._1) && elems(index._1).isDefinedAt(index._2)

  def apply(index: (Int, Int)): A = elems(index._1)(index._2)

  def indexOf[B >: A](elem: B): Option[(Int, Int)] = indexWhere(_ == elem)

  def indexWhere(p: A => Boolean): Option[(Int, Int)] = indices.find(index => p(apply(index)))

  def indices: LazyList[(Int, Int)] = LazyList.from(0 until numRows).flatMap(row => (0 until numCols).map(row -> _))

  def numRows: Int = elems.size

  def numCols: Int = elems.headOption.map(_.size).getOrElse(0)

  def map[B](f: A => B): Matrix[B] = Matrix(elems.map(_.map(f)))
}

object Matrix {
  def apply[A](elems: Array[Array[A]]): Matrix[A] = Matrix(elems.map(_.toIndexedSeq).toIndexedSeq)
}

object AStar {
  def search[C, S <: State[C, S]](start: State[C, S])(implicit numeric: Numeric[C]): Option[Path[C, S]] = {
    import numeric.{mkNumericOps, mkOrderingOps, zero}

    implicit val ordering: Ordering[(State[C, S], C)] = Ordering.by[(State[C, S], C), C](_._2).reverse
    val openSet = mutable.PriorityQueue(start -> zero)
    val gScore = mutable.Map(start -> zero)
    val cameFrom = mutable.Map[State[C, S], State[C, S]]()

    @tailrec
    def reconstructPath(state: State[C, S],
                        steps: Seq[(State[C, S], C)] = Seq()): Path[C, S] = cameFrom.get(state) match {
      case Some(parent) => reconstructPath(parent, (state, gScore(state) - gScore(parent)) +: steps)
      case _ => Path(state, steps: _*)
    }

    @tailrec
    def iterate: Option[Path[C, S]] = openSet.dequeueOption match {
      case Some(state -> _) if state.isGoal =>
        Some(reconstructPath(state))

      case Some(state -> _) =>
        state
          .neighbors
          .map { case (neighbor, cost) => (neighbor, gScore(state) + cost) }
          .filter { case (neighbor, tentativeGScore) => gScore.get(neighbor).forall(_ > tentativeGScore) }
          .foreach { case (neighbor, tentativeGScore) =>
            openSet.enqueue(neighbor -> (tentativeGScore + neighbor.heuristic))
            gScore(neighbor) = tentativeGScore
            cameFrom(neighbor) = state
          }
        iterate

      case _ =>
        None
    }

    iterate
  }

  private implicit class RichPriorityQueue[A](queue: mutable.PriorityQueue[A]) {
    def dequeueOption: Option[A] = Try(queue.dequeue).toOption
  }

  trait State[+C, +S <: State[C, S]] {
    this: S =>
    def neighbors: Iterable[(S, C)]

    def isGoal: Boolean

    def heuristic: C
  }

  case class Path[+C, +S <: State[C, S]](start: State[C, S], steps: (State[C, S], C)*)(implicit numeric: Numeric[C]) {
    def cost: C = steps.map(_._2).sum
  }

}

case class Storekeeper(grid: Matrix[Storekeeper.Square.Value],
                       playerStart: (Int, Int),
                       boxStart: (Int, Int),
                       boxTarget: (Int, Int)) {

  import Storekeeper._

  def start: BoxState = BoxState(playerStart, boxStart, boxTarget)

  case class PlayerState(override val player: (Int, Int),
                         override val box: (Int, Int),
                         override val target: (Int, Int)) extends State with AStar.State[Int, PlayerState] {
    override def neighbors: Iterable[(PlayerState, Int)] = Directions
      .map(player + _)
      .collect {
        case index if index != box && grid.get(index).contains(Square.Floor) => PlayerState(index, box, target) -> 1
      }

    override def isGoal: Boolean = player == target

    override def heuristic: Int = player.manhattan(target)
  }

  case class BoxState(override val player: (Int, Int),
                      override val box: (Int, Int),
                      override val target: (Int, Int)) extends State with AStar.State[Int, BoxState] {
    override def neighbors: Iterable[(BoxState, Int)] = Directions.collect {
      case delta if grid.get(box + delta).contains(Square.Floor) &&
        grid.get(box - delta).contains(Square.Floor) &&
        AStar.search(PlayerState(player, box, box - delta)).isDefined => BoxState(box - delta, box + delta, target) -> 1
    }

    override def isGoal: Boolean = box == target

    override def heuristic: Int = box.manhattan(target)
  }

}

object Storekeeper {

  val StartSymbol = 'S'
  val FloorSymbol = '.'
  val WallSymbol = '#'
  val BoxSymbol = 'B'
  val TargetSymbol = 'T'

  private val Directions = Set(-1 -> 0, 0 -> -1, 0 -> 1, 1 -> 0)

  def apply(array: Array[Array[Char]]): Storekeeper = {
    val matrix = Matrix(array)
    val grid = matrix.map {
      case WallSymbol => Square.Wall
      case StartSymbol | FloorSymbol | BoxSymbol | TargetSymbol => Square.Floor
    }
    Storekeeper(grid,
                matrix.indexOf(StartSymbol).get,
                matrix.indexOf(BoxSymbol).get,
                matrix.indexOf(TargetSymbol).get)
  }

  trait State {
    def player: (Int, Int)

    def box: (Int, Int)

    def target: (Int, Int)
  }

  object Square extends Enumeration {
    type Square = Value
    val Floor, Wall = Value
  }

  private implicit class NumericPair[A](x: (A, A))(implicit numeric: Numeric[A]) {

    import numeric.{abs, mkNumericOps}

    def +(y: (A, A)): (A, A) = (x._1 + y._1, x._2 + y._2)

    def -(y: (A, A)): (A, A) = (x._1 - y._1, x._2 - y._2)

    def manhattan(y: (A, A)): A = abs(x._1 - y._1) + abs(x._2 - y._2)
  }
}

object Solution {
  def minPushBox(grid: Array[Array[Char]]): Int = {
    AStar.search(Storekeeper(grid).start).map(_.cost).getOrElse(-1)
  }
}

```