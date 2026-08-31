# my code

**Author:** ugurakbas
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/6019814/](https://leetcode.com/problems/total-hamming-distance/solutions/6019814/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int TotalHammingDistance(int[] nums) {
        int distance = 0;
        int maxLength = 0;
        int one =0;
        int zero = 0;
        string[] binnums = new string[nums.Length];
        // decimal olarak verilen say\u0131lar\u0131 binary'e d\xF6n\xFC\u015Ft\xFCrme
        if(nums.Length>1){
                for(int i = 0; i<nums.Length; i++){
                    string binaryNumber = Convert.ToString(nums[i], 2);
                    binnums[i] = binaryNumber;
                    maxLength = Math.Max(maxLength, binnums[i].Length);
            }
                // binary say\u0131lar\u0131n soluna 0 ekleme
            for (int i = 0; i < binnums.Length; i++) {
                    binnums[i] = binnums[i].PadLeft(maxLength, '0');
            }
            for(int ii = 0; ii < maxLength; ii++){
                one = 0;
                zero = 0;
                for(int i = 0; i<binnums.Length; i++){
                    if(binnums[i][ii] == '1'){
                        one++;
                    }
                    else{
                        zero++;
                    }
                }
                distance += zero * one;

            }
        }
        return distance;
    }
}
```