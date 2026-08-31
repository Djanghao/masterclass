# scala brute force solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/3186777/](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/solutions/3186777/)

---

# Code
```
object Solution {
  def reinitializePermutation(n: Int): Int = {
    lazy val x0 = (0 until n).toVector
    def impl(perm: Seq[Int], iter: Int): Int =
      if(perm == x0 && iter>0) iter 
      else impl((0 until n).map{i => if(i%2 == 0) perm(i/2) else perm(n/2 + (i-1)/2)}.toVector,iter+1)
    impl(x0,0)
  }
}
```