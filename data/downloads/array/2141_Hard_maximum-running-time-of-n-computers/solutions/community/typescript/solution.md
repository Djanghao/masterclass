# TypeScript and C# solution

**Author:** jacintolutrezehue
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/5951205/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/5951205/)

---

# Code

```typescript []
function maxRunTime(n: number, batteries: number[]): number {
    const totalBatteryLife = batteries.reduce((sum, battery) => sum + battery, 0);

    let low = 0;
    let high = totalBatteryLife;
    
    const canRunForTMinutes = (T: number): boolean => {
        let requiredBattery = 0;
        for (const battery of batteries) {
            requiredBattery += Math.min(battery, T); T
        }
        return requiredBattery >= n * T;
    };

    while (low < high) {
        const mid = Math.floor((low + high + 1) / 2);
        if (canRunForTMinutes(mid)) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }

    return low;
}
```
```csharp []
public class Solution {
    public long MaxRunTime(int n, int[] batteries) {
        long left = 0, right = 0;

        foreach (var battery in batteries) {
            right += battery;
        }

        while (left < right) {
            long mid = (left + right + 1) / 2;
            if (CanRun(n, batteries, mid)) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }

        return left;
    }

    private bool CanRun(int n, int[] batteries, long T) {
        long totalPower = 0;

        foreach (var battery in batteries) {
            totalPower += Math.Min(battery, T);
        }

        return totalPower >= n * T;
    }
}

```