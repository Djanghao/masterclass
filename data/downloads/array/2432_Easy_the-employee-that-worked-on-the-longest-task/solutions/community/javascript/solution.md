# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2687110/](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/solutions/2687110/)

---

**Java**
```
class Solution {
    public int hardestWorker(int n, int[][] logs) {
        int max_val = logs[0][1], id = logs[0][0];
        for(int i=1; i<logs.length; i++){
            int time_req = logs[i][1] - logs[i-1][1];
            if(time_req >= max_val){
                if(time_req == max_val){
                    id = Math.min(id, logs[i][0]);
                }else{
                    max_val = time_req;
                    id = logs[i][0];
                }
            }
        }
        return id;
    }
}
```
**JavaScript**
```
var hardestWorker = function(n, logs) {
    let max_val = logs[0][1], id = logs[0][0];
    for(let i=1; i<logs.length; i++){
        let time_req = logs[i][1] - logs[i-1][1];
        if(time_req >= max_val){
            if(time_req == max_val){
                id = Math.min(id, logs[i][0]);
            }else{
                max_val = time_req;
                id = logs[i][0];
            }
        }
    }
    return id;
};
```
**Python**
```
class Solution(object):
    def hardestWorker(self, n, logs):
        max_val, eid = logs[0][1], logs[0][0]
        for i in range(1, len(logs)):
            time_req = logs[i][1] - logs[i-1][1]
            if time_req >= max_val:
                if time_req == max_val:
                    eid = min(eid, logs[i][0])
                else:
                    max_val = time_req
                    eid = logs[i][0]
        return eid
```