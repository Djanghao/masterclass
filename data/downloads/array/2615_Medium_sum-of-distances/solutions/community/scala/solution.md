# Straightforward with all explanation.

**Author:** ivan71pml27
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/4379115/](https://leetcode.com/problems/sum-of-distances/solutions/4379115/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

We will solve this problem with direct computation. 

# Approach
<!-- Describe your approach to solving the problem. -->
We group all similiar entries indices in the source array $$A$$. 

Imagine we have an array of entries: 
$$[j_1,...,j_m]$$ where $$j_k$$ is such that $$A[j_{k1}] = A[j_{k2}]$$, for all $$k1$$ an $$k2$$, so we need to compute $$|j_1 - i| + ... + |j_k -i| + |j_m - i|$$ for some $$k$$. 
To do that, we notice that $$i = j_k$$ and then we can lift the module, knowing that left to $$j_k$$ there would be negative numbers that would require to swap $$j$$ and $$i$$, and to the right of $$j_k$$ there would be no swap as numbers are posititve: 
$$ i - j_1 + ... + i - j_{k-1} + $$ 
$$ + i - j_k + $$
$$ + j_{k+1} - i +...+ j_{m} - i$$
We can regroup all of the $$j$$ into 2 parts: 
1: $$S_1(k) = -(j_1 + ... + j_{k-1})$$
2: $$S_2(k) = j_{k+1} +...+j_m$$
Then we can notice that 1 is a prefix sum of all elements till $$k-1$$, and, 2 is a suffix sum at $$k+1$$. Then, we must deal with $i$, so, there are exactly $k-1$ entrances of $$i$$ with positive sign and $m-k$  entrances with negative sign, so total is $$2k-m$$

We can compute prefix sums and suffix sums in two passes per one category, which overall, is still $$O(n)$$.

Then, in third pass, we use our formula for sum: 

$$S_1(k) + S_2(k) + i (2k-m)$$

Which is still $$O(n)$$, 

Albeit, we used $$O(n)$$ additional memory to store our additional buffers.  

Then, adapting that to working of scala scan method and accounting for additional $$i$$, we would get the following code, with renaming of variables and allowing overlap of sums. 

# Code
```
object Solution {
    def distance(nums: Array[Int]): Array[Long] = {
      val groupMap = nums.zipWithIndex.groupMap {case (num, idx) => num}{case (num, idx) => idx }

      val ret = new Array[Long](nums.length)
      groupMap.foreach{ case (number, indices) =>
        val prefixSum = indices.scanLeft(0L){case (a,b) => a + b.toLong}.tail
        val suffixSum = indices.scanRight(0L){(a,b) => a.toLong + b}.dropRight(1)
        indices.zipWithIndex.foreach{ case (sourceArrayIndex, internalIndex) =>
          val prefixsum = prefixSum(internalIndex)
          val suffixsum = suffixSum(internalIndex)
          val res = suffixsum - prefixsum + (2 * internalIndex.toLong - indices.length + 1) * sourceArrayIndex.toLong
          ret.update(sourceArrayIndex, res)
        }
      }
      ret
    }
}
```