# C++ DFS solution utilising symmetry of keypad

**Author:** a4444s
**Votes:** 3
**Link:** [https://leetcode.com/problems/android-unlock-patterns/solutions/418046/](https://leetcode.com/problems/android-unlock-patterns/solutions/418046/)

---

```
/*

https://www.geeksforgeeks.org/number-of-ways-to-make-mobile-lock-pattern/

*/

class Solution {
public:
    int ways(vector<vector<int>> &kp, vector<bool> visited, int start, int m) {
        if(m == 1) {
            return 1;
        }
        
        if(m < 1) {
            return 0;
        }
        
        int len = 0;
        visited[start] = true;
        for(int i=1; i<=9; i++) {
            if(!visited[i]) {
                if(kp[i][start]==0 || visited[kp[i][start]]) {
                    len += ways(kp, visited, i, m-1);
                }
            }
        }
        visited[start] = false;
        return len;
    }
    
    int numberOfPatterns(int m, int n) {
        vector<vector<int>> kp(10, vector<int>(10, 0));
        vector<bool> visited(10, false);
        int count = 0;
        
        // init keypad
        // kp[i][j] = kp[j][i] = "number" between "i" and "j" on keypad
        // if this "number" has been visited we can cross this "number" else we cannot cross
        kp[1][3] = kp[3][1] = 2;
        kp[1][7] = kp[7][1] = 4;
        kp[3][9] = kp[9][3] = 6;
        kp[9][7] = kp[7][9] = 8;
        kp[2][8] = kp[8][2] = 5;
        kp[4][6] = kp[6][4] = 5;
        kp[1][9] = kp[9][1] = 5;
        kp[3][7] = kp[7][3] = 5;
        
        if(m>n) {
            swap(m, n);
        }
        while(m<=n) {
            // start from 1 is similar to start from 1, 3, 7, 9
            count += 4*ways(kp, visited, 1, m);
            // start from 2 is similar to start from 2, 4, 6, 8
            count += 4*ways(kp, visited, 2, m);
            // 5 is at center and no other digit is symmetric for this case
            count += ways(kp, visited, 5, m);
            m++;
        }
        
        return count;
    }
};
```