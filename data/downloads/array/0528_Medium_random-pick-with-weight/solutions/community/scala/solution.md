# An approach with a beautifully handcrafted binsearch and spicy explanation

**Author:** LiathHelvetica
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/5825794/](https://leetcode.com/problems/random-pick-with-weight/solutions/5825794/)

---

# Intuition
I like to think about this problem a bit geometrically. Consider a line with segments. Each segment is labelled (pickable index) and its length is proportional to weight. Picking a label (index) is essentially randomly choosing a location on this line and seeing to which section it belongs and which label (index) this section has.

We can construct this line like this
$$[0, w_{1}, w_{1} + w_{2}, ..., \\Sigma w]$$
Where each element marks segments of this line

Section $$[0, w_{1}]$$ corresponds to index 1
Section $$[w_{1}, w_{1} + w_{2}]$$ corresponds to index 2
etc.

Then we select a random point on this line $$[0, \\Sigma w]$$ and see to which segment it belongs

This idea somewhat draws inspiration from how Huffman coding works (cryptography)

# Approach
We construct an array of summed weights (line)
When pickIndex() is called we pick a random point and find to which section it belongs
Since the array of summed weights is sorted we can leverage binary search

# Complexity
- Time complexity: $$O(logn)$$ - binary search

- Space complexity: $$O(n)$$ - an auxiliary array of the same size as weight array

# Code
```scala []
import scala.annotation.tailrec
import scala.util.Random

class Solution(_w: Array[Int]) {

    val runningWeights = _w.scanLeft(0)((acc, w) => acc + w).drop(1)
    val weightSum = runningWeights.last
    val rand = new Random

    @tailrec
    private def binSearch(l: Int, r: Int, target: Int): Int = {
        val m = (l + r) / 2
        (l, r) match {
            case _ if l == r => l
            case _ if target < runningWeights(m) => binSearch(l, m, target)
            case _ if target >= runningWeights(m) => binSearch(m + 1, r, target) 
        }
    }

    def pickIndex(): Int = {
        binSearch(0, runningWeights.length - 1, rand.nextInt(weightSum))
    }

}

/**
 * Your Solution object will be instantiated and called as such:
 * val obj = new Solution(w)
 * val param_1 = obj.pickIndex()
 */
```