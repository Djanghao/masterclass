# Direct and fast approach (DP and math).

**Author:** thrillobit
**Votes:** 1
**Link:** [https://leetcode.com/problems/super-ugly-number/solutions/3653814/](https://leetcode.com/problems/super-ugly-number/solutions/3653814/)

---

# Intuition & Approach
As there is no hint to this particular problem - look [here](https://leetcode.com/problems/ugly-number-ii/solutions/). The [submitted solution](https://leetcode.com/problems/ugly-number-ii/submissions/974260600/) of that problem.

The idea is to calculate new UglyNumber (UN) based on previous UNs. To do so we keep indexes for each factor, calculate new UN based on some previous nums multiplied by each factor individually taking the minimum.

You may ask any questions below, if the code itself isn't enough. I will answer :)

(!) It is important to keep min variable as long, because of near int32.Max values, which could be exceeded in our calculations.

# Complexity 
- Time complexity: O(n*m)
- Space complexity: O(n)
- This code looks like absolute leader in terms of time/memory used according to Leetcode's statistics.

# Code
```
public class Solution {
    public int NthSuperUglyNumber(int n, int[] primes) {
        long[] nums = new long[n]; nums[0] = 1;
        int m = primes.Length; // Array.Sort(primes); - skipped
        int[] counts= new int[m];
        // Main cycle
        for (int i=1; i<n; i++){
            long min = long.MaxValue;
            for (int j=0; j<m; j++) {
                if (min>nums[counts[j]]*primes[j]) {
                    min = nums[counts[j]]*primes[j];
                }
            }
            nums[i] = min;
            for (int j=0; j<m; j++){
                if (min == nums[counts[j]]*primes[j]) counts[j]++;
            }
        }
        return (int) nums[n-1];    
    }
}
```