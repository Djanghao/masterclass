# C# solution

**Author:** Harishsuthar599
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/6018830/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/6018830/)

---



# Code
```csharp []
public class Solution {
    public int ValueAfterKSeconds(int n, int k) {
        int sum =0;
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i]=1;
        }
        while(k>0){
            for(int i=1;i<n;i++){
                arr[i] = arr[i]+arr[i-1];
                arr[i] = arr[i]%(Convert.ToInt32(Math.Pow(10,9))+7);
            }
            k--;
        }
        return arr[n-1]%(Convert.ToInt32(Math.Pow(10,9))+7);
    }
}
```