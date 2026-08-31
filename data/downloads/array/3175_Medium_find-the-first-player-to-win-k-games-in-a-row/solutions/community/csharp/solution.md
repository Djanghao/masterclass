# not so hard

**Author:** jovamilenkovic
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5291655/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5291655/)

---

# Intuition simulation with queue
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int FindWinningPlayer(int[] s, int k) {
        Dictionary<int, int> d= new Dictionary<int,int>();
        d.Add(s[0],0);
        int max=s[0];
        int maxind=0;
        Queue<int> q= new Queue<int> ();
        for (int i=1; i< s.Length; i++){
            q.Enqueue(s[i]);
            d.Add(s[i],i);
            if(s[i]>max){max=s[i]; maxind=i;}
        }
        if(k>=s.Length) return maxind;
        int cur=s[0];
        int curv=0;

        while(q.Count!=0){
            int x=q.Dequeue();
            if(x<cur){  curv++; q.Enqueue(x);}
            else {q.Enqueue(cur); cur=x; curv=1;            }
            if(curv>=k) {return d[cur];}
        }
        return -1;
    }
}
```