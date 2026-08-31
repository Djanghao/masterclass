# scala recurson with memoization

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-repeating-integers/solutions/5791803/](https://leetcode.com/problems/distribute-repeating-integers/solutions/5791803/)

---

```scala []
object Solution {
  import scala.util.chaining._
  import collection.immutable.SortedMap
  def canDistribute(nums: Array[Int], quantity: Array[Int]): Boolean = {
    lazy val xMap0 = nums.groupMapReduce(identity)(_ => 1)(_ + _)
      .values.groupMapReduce(identity)(_ => 1)(_ + _).to(SortedMap)
    lazy val qMap0 = quantity.groupMapReduce(identity)(_ => 1)(_ + _).to(SortedMap)
    val cache = collection.mutable.Map.empty[(SortedMap[Int,Int],SortedMap[Int,Int]), Boolean]
    def f(xMap:SortedMap[Int,Int], qMap:SortedMap[Int,Int]
         ): Boolean = cache.getOrElse((xMap,qMap),{
      lazy val commonKeys = xMap.keySet & qMap.keySet
      lazy val List(xMap2,qMap2) = List(xMap,qMap).map{case aMap0:Map[Int,Int] =>
        commonKeys.toList.map(k => k -> (xMap(k) min qMap(k))).foldLeft(aMap0){case (aMap,(k,v0)) => aMap.updatedWith(k){
          case None => ???
          case Some(v1) if v1 == v0 => None
          case Some(v1) => Some(v1-v0)
        }}
      }
      lazy val k0 = qMap.last._1
      lazy val q2 = qMap.updatedWith(k0){case None|Some(1) => None; case Some(x) => Some(x-1)}
      if(qMap.isEmpty) true
      else if(commonKeys.nonEmpty) f(xMap2,qMap2)
      else if(qMap.last._1 > qMap.last._1) false
      else xMap.rangeFrom(qMap.last._1).exists{case (k1,_) =>
        lazy val x2 = xMap.updatedWith(k1){case None|Some(1) => None; case Some(x) => Some(x-1)}
          .updatedWith(k1-k0){
            case _ if (k1-k0)==0  => None;
            case _ if (k1-k0)<0  => ???;
            case None => Some(1);
            case Some(x) => Some(x+1)
          }
        f(x2,q2)
      }
    }).tap(rc => cache += (((xMap,qMap))-> rc))
    f(xMap0,qMap0)
  }
}

```