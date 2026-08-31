# Another accepted Java solution

**Author:** jeantimex
**Votes:** 223
**Link:** [https://leetcode.com/problems/pascals-triangle-ii/solutions/38584/](https://leetcode.com/problems/pascals-triangle-ii/solutions/38584/)

---

    public class Solution {
        public List<Integer> getRow(int k) {
            Integer[] arr = new Integer[k + 1];
            Arrays.fill(arr, 0);
            arr[0] = 1;
            
            for (int i = 1; i <= k; i++) 
                for (int j = i; j > 0; j--) 
                    arr[j] = arr[j] + arr[j - 1];
            
            return Arrays.asList(arr);
        }
    }