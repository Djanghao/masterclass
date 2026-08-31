# Simple Beats 100 %  c#

**Author:** Vicky19Vicky
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/4706938/](https://leetcode.com/problems/maximum-split-of-positive-even-integers/solutions/4706938/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(finalSum/2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(result.Count) same as O(finalSum/2)
# Code
```
public class Solution {
    public IList<long> MaximumEvenSplit(long finalSum) {
      
         if (finalSum % 2 != 0) return new List<long>();
        
        List<long> result = new ();
        
        long sum = 0;
        for (long i = 2; sum < finalSum; i += 2) {
            result.Add(i);
            sum += i;
        }
        
        long difference = sum - finalSum;//trick is the exceeded amount must be removed from list
      result.Remove(difference);
        
        return result;
    }
}
```