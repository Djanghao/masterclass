# 7 lines scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3087851/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3087851/)

---

# Code
```
  def minOperations(nums1: Array[Int], nums2: Array[Int], k: Int): Long = {
    lazy val (_neg,_pos) = (nums1 zip nums2).toList.map{case (a,b) => a - b}
      .filter(_ != 0).groupBy(identity).mapValues(_.size).partition{_._1 < 0}
    lazy val (neg,pos) = (_neg.map{case (a,b) => -a -> b}.toMap, _pos.toMap)
    lazy val counts = List(neg,pos).map(_.map{case (x,v) => (x.toLong/k)*v}.sum)
    if(k==0) {if((nums1 zip nums2).forall{case (a,b) => a==b}) 0 else -1}
    else if(((neg.keys)++(pos.keys)).exists{x=>x%k!=0} || counts(0)!=counts(1)) -1
    else counts.head
  }
```