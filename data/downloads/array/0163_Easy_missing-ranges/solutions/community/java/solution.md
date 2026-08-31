# Accepted Java solution with explanation

**Author:** jeantimex
**Votes:** 194
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/50476/](https://leetcode.com/problems/missing-ranges/solutions/50476/)

---

    public List<String> findMissingRanges(int[] a, int lo, int hi) {
      List<String> res = new ArrayList<String>();
      
      // the next number we need to find
      int next = lo;
      
      for (int i = 0; i < a.length; i++) {
        // not within the range yet
        if (a[i] < next) continue;
        
        // continue to find the next one
        if (a[i] == next) {
          next++;
          continue;
        }
        
        // get the missing range string format
        res.add(getRange(next, a[i] - 1));
        
        // now we need to find the next number
        next = a[i] + 1;
      }
      
      // do a final check
      if (next <= hi) res.add(getRange(next, hi));
    
      return res;
    }
    
    String getRange(int n1, int n2) {
      return (n1 == n2) ? String.valueOf(n1) : String.format("%d->%d", n1, n2);
    }