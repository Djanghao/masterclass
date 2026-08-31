# Share my 2ms intuitive-one pass-no multiplication solution

**Author:** lzb700m
**Votes:** 59
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/83649/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/83649/)

---

The idea is to pass the current found integer sum into the next level of recursion, and return it back again. So that we don't have to count the number of levels in the nested list.

I think code itself is quite self explanatory.




    public class Solution {
        public int depthSumInverse(List<NestedInteger> nestedList) {
            return helper(nestedList, 0);
        }
        
        private int helper(List<NestedInteger> niList, int prev) {
            int intSum = prev;
            List<NestedInteger> levelBreak = new ArrayList<>();
            
            for (NestedInteger ni : niList) {
                if (ni.isInteger()) {
                    intSum += ni.getInteger();
                } else {
                    levelBreak.addAll(ni.getList());
                }
            }
            
            int listSum = levelBreak.isEmpty()? 0 : helper(levelBreak, intSum);
    
            return listSum + intSum;
        }
    }