# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/super-washing-machines/solutions/3385203/](https://leetcode.com/problems/super-washing-machines/solutions/3385203/)

---

```C++ []
class Solution {
public:
    int findMinMoves(vector<int>& ms) {
        int n = ms.size();
        int sum = 0;
        for (int &i : ms) sum += i;
        if (sum % n) return -1;
        int t = sum / n;
        int ans = 0, toRight = 0;
        for (int &i : ms) {
            toRight = toRight + i - t;
            ans = max(ans, max(abs(toRight), i - t));
        }
        return ans;
    }
};
```

```Python3 []
class Solution:
    def findMinMoves(self, machines: List[int]) -> int:

        ave, rem = divmod(sum(machines),len(machines))
        if rem: return -1
        
        machines = [m - ave for m in machines]
        abspref = max(map(abs,(accumulate(machines))))

        return max(max(machines),abspref)
```

```Java []
class Solution {
    public int findMinMoves(int[] machines) {
        int total = 0;
        for(int i: machines){
            total += i;
        } 
        if(total % machines.length != 0){
            return -1;
        }
        int avg = total / machines.length;
        int count = 0;
        int max = 0;
        for(int load: machines){
            count = count + load - avg;
            max = Math.max(Math.max(max, Math.abs(count)), load-avg);
        }
        return max;
    }
}
```
