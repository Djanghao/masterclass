# pure fp tailrec scala solution

**Author:** Anamorphism
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-ladder-ii/solutions/1363327/](https://leetcode.com/problems/word-ladder-ii/solutions/1363327/)

---

```scala
object Solution {
    private case class State(current: Int, visited: Set[Int], sol: List[Int])
    def findLadders(
        beginWord: String,
        endWord: String,
        wordList: List[String]
    ): List[List[String]] = {
        val nodes = (beginWord :: wordList).toSet.toList
        val patterns = nodes.indices.foldLeft(Map.empty[String, Set[Int]]) {case (m, i) => {
            nodes(i).indices.map(idx => nodes(i).updated(idx, '*')).foldLeft(m) {case (acc, p) => {
                acc + (p -> (acc.getOrElse(p, Set()) + i))
            }}
        }}
        val edges = nodes.indices.foldLeft(Map.empty[Int, Set[Int]]) {case (m, i) => {
            nodes(i).indices.map(idx => nodes(i).updated(idx, '*')).foldLeft(m) {case (acc, p) => {
                acc + (i -> (acc.getOrElse(i, Set()) ++ patterns(p) - i))
            }}
        }}
        val beginWordIdx = nodes.indexOf(beginWord)
        val endWordIdx = nodes.indexOf(endWord)
        
        
        @scala.annotation.tailrec
        def search(q: List[State], acc: List[List[Int]]): List[List[Int]] = {
            if(q.isEmpty) {
                acc
            } else if(q.exists(s => s.current == beginWordIdx)) {
                q
                .filter(s => s.current == beginWordIdx)
                .foldLeft(acc) {case (l, s) => {
                    s.sol :: l
                }}
            } else {
                search(
                    q.flatMap {s => {
                        edges
                        .getOrElse(s.current, Set()).toList
                        .filter(n => !s.visited.contains(n))
                        .map(n => State(n, s.visited + n, n :: s.sol))
                    }},
                    acc)
            }
        }
        
        val sol = search(List(State(endWordIdx, Set(endWordIdx), List(endWordIdx))), Nil)
        sol.map {l => {
            l.map(n => nodes(n))
        }}
    }
}
```