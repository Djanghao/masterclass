# ✅ Lexicographical smallest || One Pass

**Author:** Rowque
**Votes:** 21
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2678850/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2678850/)

---

On the Way , we just need to update **lexicographical small id** with greatest duration.

> If the array was unsorted in terms of leaving time, then we would have sorted it , so as to get the time in increasing order.

# C++
    int hardestWorker(int n, vector<vector<int>>& A) {
        int len = a[0][1], id = a[0][0];
        for (int i = 1; i < size(A); i++){
            int curr = A[i][1] - A[i - 1][1];
            if (curr > len || curr == len and id > A[i][0])  len = curr, id = A[i][0]; 
        }
        return id;
    }
# Java
    public int hardestWorker(int n, int[][] a) {
        int len = a[0][1], id = a[0][0];
        for (int i = 1; i < a.length; i++){
            int curr = a[i][1] - a[i - 1][1];
            if (curr > len || curr == len && id > a[i][0]){
                len = curr;
                id = a[i][0];
            }
        }
        return id;
    }
# Python
    def hardestWorker(self, n: int, logs: List[List[int]]) -> int:
        # smallest id with longest time
        time , i_d = logs[0][1] , logs[0][0]  
        for i in range(1,len(logs)):
            gap= logs[i][1] - logs[i-1][1]
            if gap > time or gap == time and i_d > logs[i][0]:
                time , i_d = gap , logs[i][0]
        return i_d
Time - O(`n`)
Space - O(`1`)