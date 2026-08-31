# Scala trial at declarative solution + What I would have if haskell is allowed

**Author:** Abastro
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-array-given-subset-sums/solutions/1841162/](https://leetcode.com/problems/find-array-given-subset-sums/solutions/1841162/)

---

Methodology:
Consider the 1st and 2nd least sum of the numbers, denoted A and B. Then, A should be sum of all negative numbers in the list. Thus, compared to A, B either has some negatives excluded or some positives included. Excluding/Including one element is less difference than doing that for more elements. Since B is a least sum other than A, B should only differ with A by one element - call it x.
Hence, we first find the 2 least sums, subtract them to get "piv(ot)". Then, x is either excluded negative or included positive in B, so x = pivot (positive) or x = - pivot (negative). (pivot >= 0 by definition)
Nevertheless, sums could be paired up into (S, S+pivot) on wherher x is included or excluded. To decide the sign of x, consider the sum of empty set and sum of {x}. This gives a pair of (x, 0) or (0, x). If 0 comes in left of pair, x is positive and left sums are ones excluding x. If 0 comes in right of pair, right sums are ones excluding x.
Thus, we can find one element of the array and all sums of the remaining elements. Then, use recursion to find all the elements.

Algorithm: It reduces the entire sorted sequence while gathering lefts of the pairs into a sequence. To weed out the rights of the pairs, maintain an index to denote that its right counterpart is found. That is, for such index i, `0 to i-1` is where the right counterpart was found, and `i to L-1` is where such counterpart is yet to be found.
On each element `cur`, when the index is `i`, check if `cur == seq (i) + piv` (i-th right counterpart). If it is, do not add it into `seq`, and advance `i <- i+1`. If it is not, keep `i` and add `cur` into `seq` (as it is left of a pair).
Perhaps the most declarative part is the recursion, where I use unfold to construct the list recursively.
```scala
object Solution {
    def findOne (pos: IndexedSeq[Int]): Option[(Int, IndexedSeq[Int])] = {
        val piv = pos (1) - pos (0)
        val red = pos.foldLeft ((IndexedSeq.empty[Int], 0)) {
            case ((seq, idx), cur) =>
                if (idx < seq.length && cur == seq (idx) + piv) (seq, idx + 1)
                else (seq :+ cur, idx)
        }._1
        Some (if (red.contains (0)) (piv, red) else (-piv, red map (_ + piv)))
    }
    def recoverArray (n: Int, pos: Array[Int]): Array[Int] =
        Iterator.unfold (pos.sorted: IndexedSeq[Int]) (findOne).take (n).toArray
}
```


What I would have written in haskell, including error cases:
```haskell
import Data.List
import Data.Vector qualified as Vec
import Data.Sequence (Seq(..), (!?))
import Text.Printf

recoverFrom :: Vec.Vector Int -> Vec.Vector Int
recoverFrom sums = Vec.unfoldr step $ sort $ Vec.toList sums where
  step ssum = case take 2 ssum of
    [least, oneoff] -> let el = oneoff - least; lefts = fst <$> pairing el ssum
      in Just $ if 0 `elem` lefts then (el, lefts) else (-el, (+ el) <$> lefts)
    [0] -> Nothing;     l -> error $ printf "Error: encountered %s" (show l)

pairing :: Int -> [Int] -> [(Int, Int)]
pairing k = go Empty where
  go lefts [] = maybe [] (error . printf "No pairing for: %d") $ lefts !? 0
  go (left :<| lefts) (cand : ite) | cand == left + k = (left, cand) : go lefts ite
  go lefts (cand : ite) = go (lefts :|> cand) ite
```
11 lines excluding imports. Types consume 2 lines...