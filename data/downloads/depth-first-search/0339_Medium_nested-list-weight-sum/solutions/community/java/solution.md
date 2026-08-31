# Simple Java iterative solution 10 lines

**Author:** lilixi
**Votes:** 25
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/80012/](https://leetcode.com/problems/nested-list-weight-sum/solutions/80012/)

---

Using BFS.

    public class Solution {
        public int depthSum(List<NestedInteger> nestedList) {
            int level = 1, total = 0;
            while(nestedList.size() != 0){
                List<NestedInteger> next = new LinkedList<>();
                for(NestedInteger nInt : nestedList){
                    if(nInt.isInteger())
                        total += nInt.getInteger() * level;
                    else
                        next.addAll(nInt.getList());
                }
                level++;
                nestedList = next;
            }
            return total;
        }
    }