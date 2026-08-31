# ****

**Author:** erayerm
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/5986500/](https://leetcode.com/problems/longest-mountain-in-array/solutions/5986500/)

---

# Intuition 
Checking right and left for every item.
<!-- Describe your first thoughts on how to solve this problem. -->


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int LongestMountain(int[] arr) {
        if(arr.Length < 3) return 0;
        int left, right, currHeight;
        int maxHeight = 0;
        bool leftBool, rightBool;
        for(int i = 1; i < arr.Length - 1; i++){
            left = i - 1;
            right = i + 1;
            currHeight = 0;
            if(arr[left] >= arr[i] || arr[right] >= arr[i]) continue;
            while(true){
                leftBool = left >= 0 && arr[left+1] > arr[left];
                rightBool = right <= arr.Length-1 && arr[right-1] > arr[right];
                if(leftBool){
                    currHeight++;
                    left--;
                }
                if(rightBool){
                    currHeight++;
                    right++;
                }
                if(!leftBool && !rightBool) break;
                if(currHeight + 1 > maxHeight) maxHeight = currHeight + 1;
            }
        }
        return maxHeight;
    }
}
```