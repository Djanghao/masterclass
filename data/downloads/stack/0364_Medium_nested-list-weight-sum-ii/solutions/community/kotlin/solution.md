# C#, Kotlin, 100%, Queue, BFS

**Author:** leonenko
**Votes:** 3
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/295909/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/295909/)

---

C#
```
public int DepthSumInverse(IList<NestedInteger> nestedList) {
    var total = 0; var levelSum = 0;
    var q = new Queue<NestedInteger>(nestedList);
    while (q.Count > 0) {
        var count = q.Count;
        while(count-- > 0) {
            var cur = q.Dequeue();
            if (cur.IsInteger()) levelSum += cur.GetInteger();
            else foreach (var el in cur.GetList()) q.Enqueue(el);
        }
        total += levelSum;
    }
    return total;
}
```
Kotlin
```
fun depthSumInverse(nestedList: List<NestedInteger>): Int {
    var total = 0; var levelSum = 0;
    var q = LinkedHashSet<NestedInteger>(nestedList);
    while(!q.isEmpty()) {
        var count = q.size;
        while(count-- > 0) {
            val cur = q.first();
            q.remove(q.first());
            if (cur.isInteger()) levelSum += cur.getInteger();
            else q.addAll(cur.getList());
        }
        total += levelSum;
    }
    return total;
}
```