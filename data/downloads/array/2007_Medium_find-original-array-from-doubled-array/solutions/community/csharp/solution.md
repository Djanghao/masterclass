# Counting Sort

**Author:** ramnov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/4745430/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/4745430/)

---

# Code
```
public class Solution {
    public int[] FindOriginalArray(int[] changed) {
       // It can't be doubled array, if the size is odd
        if (changed.Length % 2 == 1) {
            return new int[0];
        }
        
        int maxNum = 0;
        // Find the max element in the array
        foreach(int num in changed) {
            maxNum = Math.Max(maxNum, num);
        }
        
        int[] freq = new int[2 * maxNum + 1];
        // Store the frequency in the map
        foreach(int num in changed) {
            freq[num]++;
        }
        
        int[] original = new int[changed.Length / 2];
        int index = 0;
        for (int num = 0; num <= maxNum; num++) {
            // If element exists
            if (freq[num] > 0) {
                freq[num]--;
                
                int twiceNum = num * 2;
                if (freq[twiceNum] > 0) {
                    // Pair up the elements, decrement the count
                    freq[twiceNum]--;
                    // Add the original number to answer
                    original[index++] = num;
                    num--;
                } else {
                    return new int[0];
                }
            }
        }
        
        return original;
    }
}
```