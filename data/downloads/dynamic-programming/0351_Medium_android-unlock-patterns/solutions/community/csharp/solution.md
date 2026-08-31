# C# solution - Android unlock

**Author:** phumney89
**Votes:** 0
**Link:** [https://leetcode.com/problems/android-unlock-patterns/solutions/5627376/](https://leetcode.com/problems/android-unlock-patterns/solutions/5627376/)

---

# Intuition
As explained in this Java solution - https://leetcode.com/problems/android-unlock-patterns/solutions/82464/simple-and-concise-java-solution-in-69ms

# Code
```
public class Solution {
    int[,] jumps;
    bool[] visited;
    public int NumberOfPatterns(int m, int n) {
        jumps = new int[10,10];
        visited = new bool[10];

        jumps[1,3] = jumps[3,1] = 2;
        jumps[4,6] = jumps[6,4] = 5;
        jumps[7,9] = jumps[9,7] = 8;
        jumps[1,7] = jumps[7,1] = 4;
        jumps[2,8] = jumps[8,2] = 5;
        jumps[3,9] = jumps[9,3] = 6;
        jumps[1,9] = jumps[9,1] = jumps[3,7] = jumps[7,3] = 5;

        int count = 0;
        count += DFS(1,1,0,m,n) *4;
        count += DFS(2,1,0,m,n) *4;
        count += DFS(5,1,0,m,n);

        return count;
    }
    int DFS(int num, int len, int count, int m, int n){
        if(len>=m)
            count++;
        len++;
        if(len>n)
            return count;
        visited[num] = true;

        for(int next = 1 ; next<=9 ; next++){
            int jump = jumps[num,next];
            if(!visited[next] && (jump==0||visited[jump]))
                count = DFS(next, len, count, m, n);
        }
        visited[num] = false;
        return count;
    }
}
```