# Java Sliding Window Approach, very easy to understand

**Author:** changgao
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/502379/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/502379/)

---

```
class Solution {
    public int minSwaps(int[] data) {
        
        // first count number of 1s in the array
        int numOnes = 0;
        for (int num : data) {
            if (num == 1) numOnes++;
        }
        
        // for every fixed window with size numOnes, the swaps need to do is the number of zeros within this window (or window size - number of ones)
        int k = numOnes;
        int maxOnes = 0;
        int windowOnes = 0;
        
        for (int l = 0, r = 0; r < data.length; r++) {
            
            windowOnes += data[r];
            
            if (r - l == k - 1) {
                maxOnes = Math.max(maxOnes, windowOnes);
                windowOnes -= data[l++];
            }
        }
        
        return k - maxOnes;
    }
}