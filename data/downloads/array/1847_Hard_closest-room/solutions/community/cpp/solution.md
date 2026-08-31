# sorting in C++ Vs sorting in JAVA || Speed Analysis

**Author:** nithish_2001_
**Votes:** 4
**Link:** [https://leetcode.com/problems/closest-room/solutions/1189111/](https://leetcode.com/problems/closest-room/solutions/1189111/)

---

Can anyone please explain the time difference in Sort function in C++ and Java in this problem?

I have implemented the same concept in Java and C++.
In Java, the soln is Accepted.
But in C++, it is showing TLE.


**JAVA: Accepted**
```

class Solution {
    public int[] closestRoom(int[][] rooms, int[][] queries) {
        int diff = 0, min = Integer.MAX_VALUE, min_id = 0;
        Arrays.sort(rooms, (a,b) -> Integer.compare(a[1],b[1]));
        int[] res = new int[queries.length];
        for(int i=0;i<queries.length;i++){
            for(int j=rooms.length-1;j>=0;j--){
                if(rooms[j][1]>=queries[i][1]){
                    diff = Math.abs(rooms[j][0]-queries[i][0]);
                    if(diff<min){
                        min = diff;
                        min_id = rooms[j][0];
                    }
                    else if(diff==min){
                        min_id = (min_id < rooms[j][0]) ? min_id : rooms[j][0];
                    }
                }
                else break;
            }
            if(min == Integer.MAX_VALUE) min_id = -1;
            res[i] = min_id;
            min_id = 0;
            min = Integer.MAX_VALUE;
        }
        return res;
    }
}
```
**C++: Time Limit Exceeded**
```
class Solution {
public:
    static bool cmp(const vector<int>&a,const vector<int>&b){
        return a[1]>b[1]; 
    }
    vector<int> closestRoom(vector<vector<int>>& arr, vector<vector<int>>& q) {
    int diff = 0, min = INT_MAX, min_id = 0;
    sort(arr.begin(),arr.end(),cmp);
    int n=arr.size(),m=q.size();
    
    vector<int>ans(m);
        
    for(int j=0;j<m;j++){
        for(int i=0;i<n;i++){
            if(q[j][1]<=arr[i][1]){
                diff = abs(arr[i][0]-q[j][0]);
                    if(diff<min){
                        min = diff;
                        min_id = arr[i][0];
                    }
                    else if(diff==min){
                        min_id = (min_id < arr[i][0]) ? min_id : arr[i][0];
                    }
            }
            else
                break;
            
        }
        if(min == INT_MAX) min_id = -1;
            ans[j] = min_id;
            min_id = 0;
            min =INT_MAX;
    }
    return ans;
    
    }

    
};
```