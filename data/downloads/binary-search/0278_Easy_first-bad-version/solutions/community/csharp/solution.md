# C# Solution 👌

**Author:** AsiaShalaldah
**Votes:** 5
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/2414671/](https://leetcode.com/problems/first-bad-version/solutions/2414671/)

---

```
public class Solution : VersionControl {
    public int FirstBadVersion(int n) {
            int bad = 0;
            int low = 1;
            int high = n;
            while (low <= high)
            {
                int mid = low + (high - low) / 2;
                if (IsBadVersion(mid))
                {
                    bad = mid;
                    high = mid - 1;
                }
                else
                    low = mid + 1;
            }
            return bad;
    }
}