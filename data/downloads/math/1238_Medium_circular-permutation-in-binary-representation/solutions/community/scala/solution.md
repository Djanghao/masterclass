# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/2423781/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/2423781/)

---

```
  def circularPermutation(n: Int, start: Int): List[Int] = 
    (0 until 1 << n).foldLeft(List[Int]())((acc, i)=>{
      (start ^ i ^ i >> 1) +: acc
    }).reverse
  
```