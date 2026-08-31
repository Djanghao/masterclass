# DFS+DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/6039222/](https://leetcode.com/problems/jump-game-v/solutions/6039222/)

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
    private Dictionary<int, int> dictJump;
    private int resJump = 0;
    private int DFSJump(int[] arr, int idx, int d)
    {
        if (dictJump.ContainsKey(idx))
            return dictJump[idx];

        int low = Math.Max(idx - d, 0), high = Math.Min(idx + d, arr.Length - 1);
        int upCnt = 0;
        int downCnt = 0;
        int up = idx + 1, down = idx-1;
        while (up <= high && arr[idx] > arr[up])
        {
            upCnt =Math.Max(upCnt, 1+DFSJump(arr, up, d));
            up++;
        }

        while (down >= low && arr[idx] > arr[down])
        {
            downCnt = Math.Max(downCnt, 1 + DFSJump(arr, down, d));
            down--;
        }
        int curSumSteps = Math.Max(upCnt, downCnt) + (upCnt == 0 && downCnt == 0 ? 1 : 0);
        resJump = Math.Max(resJump, curSumSteps);
        dictJump.Add(idx, curSumSteps);
        return curSumSteps;
    }
    public int MaxJumps(int[] arr, int d) {
        dictJump = new Dictionary<int, int>();
        int len = arr.Length;
        if(len == 0 || d == 0)
            return 0;
        
        for(int i = 0; i < len; i++)
        {
            DFSJump(arr, i, d);
        }

        return resJump;
    }
}
```