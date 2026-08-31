# O(n) simple sliding window solution

**Author:** avanibarmecha
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/5958852/](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/solutions/5958852/)

---

# Intuition
Simple sliding window solution

# Approach
The window size remains constant, Initially we can start with keeping all elements from left hand hide and get the sum. We can then shrink the window and include elements from the right hand side and calculate sum everytime. Maximum sum would be our answer.

# Complexity
- Time complexity:
O(n)

- Space complexity:
No extra space, O(1)

# Code
```csharp []
public class Solution {
    public int MaxScore(int[] cardPoints, int k) {
        int sum=0;
        int maxSum=0;
        int left = k-1;
        int right=cardPoints.Length-1;
        for(int i=0;i<k;i++){
            sum+= cardPoints[i];
        }
        maxSum = sum;
        if(k==cardPoints.Length) return sum;
        while(left>=0){
            sum = sum-cardPoints[left]+cardPoints[right];
            maxSum = Math.Max(sum, maxSum);
            left--;
            right--;
        }
        return maxSum;

        
    }
}
```