# Java Solution. Two Pass

**Author:** czonzhu
**Votes:** 694
**Link:** [https://leetcode.com/problems/find-the-celebrity/solutions/71227/](https://leetcode.com/problems/find-the-celebrity/solutions/71227/)

---

The first pass is to pick out the candidate. If candidate knows i, then switch candidate. The second pass is to check whether the candidate is real.
    
    
    public class Solution extends Relation {
        public int findCelebrity(int n) {
            int candidate = 0;
            for(int i = 1; i < n; i++){
                if(knows(candidate, i))
                    candidate = i;
            }
            for(int i = 0; i < n; i++){
                if(i != candidate && (knows(candidate, i) || !knows(i, candidate))) return -1;
            }
            return candidate;
        }
    }