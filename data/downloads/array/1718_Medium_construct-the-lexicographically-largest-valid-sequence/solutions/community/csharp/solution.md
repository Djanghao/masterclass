# C# Solution || Easy Solution using backtracking & bitmask

**Author:** mohamedAbdelety
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/3908275/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/3908275/)

---

```
public class Solution {
    public int[] ConstructDistancedSequence(int n) {
        int size = n * 2 - 1;
        int[] res = new int[size];
        int visit = 0;       
        bool solve(int idx){
            if(idx >= size) return true;
            if(res[idx] != 0) return solve(idx + 1);
            for(int i = n; i > 0;i--){
                if((visit & (1<<i)) > 0) continue;
                if(i != 1 && (idx + i >= size || res[idx] != res[i + idx])) continue;
                if(i != 1)res[idx] = res[i + idx] =  i;
                else res[idx] = 1;
                visit|= (1<<i);
                bool check = solve(idx + 1);
                if(check) return true;
                visit ^= (1<<i);;
                if(i != 1) res[idx] = res[i + idx] = 0;
                else res[idx] = 0;
            }
            return false;
        }
        solve(0);
        return res;
    }
}
```