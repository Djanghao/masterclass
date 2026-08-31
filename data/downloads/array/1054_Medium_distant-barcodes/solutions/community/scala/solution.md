# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/distant-barcodes/solutions/1931104/](https://leetcode.com/problems/distant-barcodes/solutions/1931104/)

---

```
import scala.collection.immutable.SortedSet
import scala.util.chaining.scalaUtilChainingOps

object Solution {
  private final case class Barcode(value: Int, count: Int)

  private implicit val BarcodeOrdering: Ordering[Barcode] = Ordering.by {
    case Barcode(value, count) => (-count, value)
  }

  def rearrangeBarcodes(barcodes: Array[Int]): Array[Int] = Iterator
    .unfold {
      barcodes
        .groupMapReduce(identity)(_ => 1)(_ + _)
        .iterator
        .map((Barcode.apply _).tupled)
        .to(SortedSet)
        .pipe(_ -> 0)
    } {
      case (barcodes, previous) => Some(barcodes.view.take(2).toSeq).collect {
        case Seq(barcode@Barcode(value1, _), Barcode(value2, 1)) if value1 == previous =>
          (value2, (barcodes.tail.tail + barcode, value2))

        case Seq(barcode@Barcode(value1, _), Barcode(value2, count2)) if value1 == previous =>
          (value2, (barcodes.tail.tail + barcode + Barcode(value2, count2 - 1), value2))

        case Seq(Barcode(value, 1), _*) => (value, (barcodes.tail, value))

        case Seq(Barcode(value, count), _*) => (value, (barcodes.tail + Barcode(value, count - 1), value))
      }
    }
    .toArray
}
```