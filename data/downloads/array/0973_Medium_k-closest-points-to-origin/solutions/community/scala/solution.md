# Scala (2 approaches, quicksort and heap)

**Author:** kamikumakun
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/2955329/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/2955329/)

---

# Complexity
- Time complexity: O(NLogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def kClosest(points: Array[Array[Int]], k: Int): Array[Array[Int]] = {

        import scala.collection.mutable.PriorityQueue
        import scala.math.{sqrt, pow}

        val ordering: Ordering[Array[Int]] = Ordering.by{ case arr =>
            val x = pow(arr.head, 2)
            val y = pow(arr.last, 2)
            sqrt(x + y)
        }

        val queue = PriorityQueue[Array[Int]](points: _*)(ordering)

        while(queue.size > k) queue.dequeue

        queue.toArray
    }
}
```

# Complexity
- Time complexity: O(N) in average, O(N^2) worst
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def kClosest(points: Array[Array[Int]], k: Int): Array[Array[Int]] = {
        
        def dist(array: Array[Int]) = array.head * array.head + array.last * array.last

        def quickSort(remaining: Array[Array[Array[Int]]], accumulator: Array[Array[Array[Int]]]): Array[Array[Int]] = {
            if(remaining.isEmpty) accumulator.flatten
            else if(remaining.head.isEmpty) quickSort(remaining.tail, accumulator)
            else if(remaining.head.tail.isEmpty) quickSort(remaining.tail, accumulator :+ remaining.head)
            else {
                val list = remaining.head
                val pivot = list.head
                val tail = list.tail
                val (smaller, bigger) = tail.partition(point => dist(pivot) >= dist(point))
                quickSort(smaller +: Array(pivot) +: bigger +: remaining.tail, accumulator)
            }
        }

        quickSort(Array(points), Array.empty[Array[Array[Int]]]).take(k)
    }
}
```

```
object Solution {
    def kClosest(points: Array[Array[Int]], k: Int): Array[Array[Int]] = {
        
        def quickSort(low: Int, high: Int): Unit = {
            if(low < high) {
                val pivot = partition(low, high - 1, low - 1, high)
                quickSort(low, pivot - 1)
                quickSort(pivot + 1, high)
            }
        }

        def partition(low: Int, high: Int, i: Int, pivot: Int): Int = {
            (low, high) match {
                case (l, h) if l > h =>
                    swap(i + 1, pivot)
                    i + 1
                case (l, h) if dist(points(l)) < dist(points(pivot)) =>
                    swap(i + 1, l)
                    partition(l + 1, high, i + 1, pivot)
                case (l, h) => 
                    partition(l + 1, high, i, pivot)
            }
        }

        def dist(point: Array[Int]) = point(0) * point(0) + point(1) * point(1)

        def swap(i: Int, j: Int): Unit = {
            val temp = points(j)
            points(j) = points(i)
            points(i) = temp
        }

        quickSort(0, points.length - 1)

        points.take(k)
    }
}
```
