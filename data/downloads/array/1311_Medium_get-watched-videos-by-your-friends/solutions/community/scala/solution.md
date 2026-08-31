# 10 lines scala immutable bfs, also beats 100% despite inefficient groupBy

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/3060856/](https://leetcode.com/problems/get-watched-videos-by-your-friends/solutions/3060856/)

---

# Code
```
object Solution {
  def watchedVideosByFriends(watchedVideos: List[List[String]], friends: Array[Array[Int]], id: Int, level: Int): List[String] = {
    lazy val group = friends.iterator.zipWithIndex.map{case (fs, i) => i -> fs.toSet}.toMap
    def impl(lvl: Int, prev: Set[Int], visited: Set[Int]): Set[Int] = {
      def reducer(a: Set[Int], b: Set[Int]) = a ++ b
      lazy val next = prev.map(i => (group(i) -- visited).toSet).foldLeft(Set.empty[Int])(reducer)
      if(lvl == level) next
      else impl(lvl+1, next, visited ++ next)
    }
    lazy val x0 = impl(1, Set(id), Set(id))
    watchedVideos.zipWithIndex.filter{case (_,i) => x0.contains(i)}.flatMap(_._1)
      .groupBy(identity).mapValues(_.size).map{ case (x, y) => (y, x) }.toList.sorted.map(_._2)
  }
}
```