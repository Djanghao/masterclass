# scala immutable

**Author:** vititov
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/1631701/](https://leetcode.com/problems/minimum-height-trees/solutions/1631701/)

---

find center(s) of diameters(s)
```scala
object Solution {
  def findMinHeightTrees(n: Int, edges: Array[Array[Int]]): List[Int] = {
    if(n==1) List(0)
    else if(edges.size==1) edges.head.toList
    else {
      def increasePath(path: Seq[Int]): Seq[Seq[Int]] = {
        // println(s"  increasePath($path)")
        val h1 = path.head
        val h2 = path.tail.head
        val h0s = map(h1).filterNot(_==h2)
        h0s.map( _ +: path )
      }
      def longestPathsImpl(acc:Seq[Seq[Int]]): Seq[Seq[Int]] = {
        val newAcc = acc.flatMap{increasePath}
        if(newAcc.isEmpty) acc
        else longestPathsImpl(newAcc)
      }
      def longestPaths(node: Int): Seq[Seq[Int]] = {
        lazy val paths = map(node).toSeq.map{ node2 => Seq(node2,node) }.toSeq
        longestPathsImpl(paths)
      }

      lazy val map = edges.toSeq.flatMap{edge=> Seq(edge, edge.reverse)}
      .groupMap(_.apply(0))(_.apply(1)).map{kv=>kv._1 -> kv._2.toSeq}
      lazy val start = map.keys.head
      // println(s"  $map")
      lazy val endPoints = longestPaths(start).map(_.head)
      // println(s"  endPoints=${endPoints}")
      lazy val diameters = endPoints.map(longestPaths).maxBy(_.size)
      // println(s"  diameters=${diameters}")
      (if((diameters.head.size & 1) == 0 ) diameters.flatMap{d => d.drop((d.size>>1)-1).take(2) }
      else diameters.flatMap{d => d.drop((d.size>>1)).take(1) })
      .toSet.toList
    }
  }
}
```

More compact representation
```scala
object Solution {
  def findMinHeightTrees(n: Int, edges: Array[Array[Int]]): List[Int] = {
    def increasePath(path: Seq[Int]): Seq[Seq[Int]] =
      aMap(path.head).filterNot(_ == path.tail.head).map( _ +: path )
    def longestPathsImpl(acc:Seq[Seq[Int]]): Seq[Seq[Int]] =
      lazy val newAcc = acc.flatMap{increasePath}
      if(newAcc.isEmpty) acc else longestPathsImpl(newAcc)
    def longestPaths(node: Int): Seq[Seq[Int]] =
      longestPathsImpl(aMap(node).toSeq.map{node2 => Seq(node2,node)}.toSeq)
    lazy val aMap = edges.toSeq.flatMap{edge=> Seq(edge, edge.reverse)}
      .groupMap(_.apply(0))(_.apply(1)).map{kv=>kv._1 -> kv._2.toSeq}
    lazy val diameters = longestPaths(aMap.keys.head).map(_.head).map(longestPaths).maxBy(_.size)
    if(n==1) List(0)
    else if(edges.size==1) edges.head.toList
    else if((diameters.head.size&1)==0) diameters.flatMap{d=>d.drop((d.size>>1)-1).take(2)}.toSet.toList
    else diameters.flatMap{d => d.drop((d.size>>1)).take(1) }.toSet.toList
  }
}
```