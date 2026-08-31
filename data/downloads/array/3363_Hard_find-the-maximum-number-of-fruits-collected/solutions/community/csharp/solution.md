# C# dp

**Author:** lauel24
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solutions/6075936/](https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solutions/6075936/)

---

# Intuition
One starting from (0, 0) needs to follow main diagonal to reach (n-1, n-1) in n-1 steps.

Other 2 can use different paths, but only up to main diagonal, which is covered already. Use dp to find max value.

|||||||
|-|-|-|-|-|-|
|1|||||2|
||1|||2|2|
|||1|2|2|2|
|||3|1|2|2|
||3|3|3|1|2|
|3|3|3|3|3|1|


# Code
```csharp []
public class Solution {   
    public int MaxCollectedFruits(int[][] fruits) {
        int total = 0;
        int n = fruits.Length;
        int n1 = n - 1;

        for (int i = 0; i < n; i++) {
            total += fruits[i][i];
        }

        // Console.WriteLine(total);

        int[] sumsP = new int[0];
        for (int i = 0; i < n1; i++) {           
            int[] sums = GetArray(i, n, sumsP);
                
            for (int j = 0; j < sums.Length; j++) {
                sums[j] = fruits[i][n1 - j] + PreviousMax(j, sumsP);
            }

            sumsP = sums;
            // Console.WriteLine("sums: " + string.Join(", ", sumsP));
        }

        // Console.WriteLine(sumsP[0]);

        total += sumsP[0];

        sumsP = new int[0];
        for (int i = 0; i < n1; i++) {           
            int[] sums = GetArray(i, n, sumsP);
                
            for (int j = 0; j < sums.Length; j++) {
                sums[j] = fruits[n1 - j][i] + PreviousMax(j, sumsP);
            }

            sumsP = sums;
            // Console.WriteLine("sums: " + string.Join(", ", sumsP));
        }

        // Console.WriteLine(sumsP[0]);

        total += sumsP[0];

        return total;
    }

    private int[] GetArray(int i, int n, int[] sumsP) {
        int nh = n / 2;
        int nm = -1;
        if (n % 2 == 1) nm = nh;

        int[] sums;
        if (i < nh) {
            sums = new int[sumsP.Length + 1];
        } else if (i == nm) {
            sums = new int[sumsP.Length];
        } else {
            sums = new int[sumsP.Length - 1];
        }

        return sums;
    }

    private int PreviousMax(int j, int[] sumsP) {
        List<int> p = new();
        
        if (j > 0) {
            p.Add(sumsP[j - 1]);
        }

        if (j < sumsP.Length) {
            p.Add(sumsP[j]);
        }

        if (j + 1 < sumsP.Length) {
            p.Add(sumsP[j + 1]);
        }

        if (p.Any()) {
            return p.Max();
        }

        return 0;
    }
}
```