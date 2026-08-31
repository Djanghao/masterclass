# Three different C++ solutions. from O(n^2) to O(nlogn). faster than 99%.

**Author:** carman95
**Votes:** 427
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/427157/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/427157/)

---

I got this idea from @yjl1228 and @yomin. Next, I will give three solutions to the problem.
* **Solution1**: Much like insert sorting, the number `k` is the position we need to insert. **O(n^2)**.
* **Solution 2**. Instead of inserting everyone into the queue, we put everyone directly where they should be. **O(n^2)**.
* **Solution 3**. We use the **binary index tree** and **binary search** to find the location of each person. **O(nlogn)**.

### **Solution 1**:
We insert people one by one into an empty array. The number `k` is the position we need to insert. For everyone, we should first insert the  higher `h` person. For the person who has same `h` we should first insert the person has small `k` value. For each inserted person, it takes O(n) time to move the person behind him back one position, so it will take the O(n^2) time for all people.
E.g.
input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
sort: [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]
step1: [**[7,0]**]
step2: [[7,0], **[7,1]**]
step3: [[7,0], **[6,1],** [7,1]]
step4: [**[5,0]**, [7,0], [6,1], [7,1]]
step5: [[5,0], [7,0], **[5,2]**, [6,1], [7,1]]
step6: [[5,0], [7,0], [5,2], **[4,4]**, [6,1], [7,1]]
```cpp
class Solution {
public:
    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {
        sort(people.begin(), people.end(), cmp);
        vector<vector<int>> res;
        for(int i = 0; i < people.size(); i++){
            res.insert(res.begin()+people[i][1], people[i]);
        }
        return res;
    }
    static bool cmp(vector<int>& p1, vector<int>& p2){
        if(p1[0]!=p2[0]) return p1[0]>p2[0];
        else return p1[1]<p2[1];
    }
};
```

### **Solution 2**:
We put people in an array of length n. The number `k` means that we should put this person in the kth empty position from the beginning. The empty position mean that there will be higher or equal height person coming in here, so leave these positions out first. For everyone, we should first insert the  lower `h` person. For the person who has same `h` we should first insert the person has larger `k` value. For everyone to put in, it takes O(n) time to find kth empty position, so it will take the O(n^2) time for all people.
E.g.
input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
sort: [[4,4], [5,2], [5,0], [6,1], [7,1], [7,0]]
step1: [[&nbsp; ,&nbsp; ], [&nbsp; ,&nbsp; ], [&nbsp; ,&nbsp; ], [&nbsp; ,&nbsp; ], **[4,4]**, [&nbsp; ,&nbsp; ]]
step2: [[&nbsp; ,&nbsp; ], [&nbsp; ,&nbsp; ], **[5,2]**, [&nbsp; ,&nbsp; ], [4,4], [&nbsp; ,&nbsp; ]]
step3: [**[5,0]**, [&nbsp; ,&nbsp; ], [5,2], [&nbsp; ,&nbsp; ], [4,4], [&nbsp; ,&nbsp; ]]
step4: [[5,0], [&nbsp; ,&nbsp; ], [5,2], **[6,1]**, [4,4], [&nbsp; ,&nbsp; ]]
step5: [[5,0], [&nbsp; ,&nbsp; ], [5,2], [6,1], [4,4], **[7,1]**]
step6: [[5,0], **[7,0]**, [5,2], [6,1], [4,4], [7,1]]
```cpp
class Solution {
public:
    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {
        sort(people.begin(), people.end(), cmp);
        vector<vector<int>> res(people.size(), vector<int>());
        for(int i = 0; i < people.size(); i++){
            int cnt, j;
            for(cnt = 0, j = 0; j < res.size(); j++){ //empty count start from 0
                if(res[j].empty()){
                    if(cnt==people[i][1]) break;
                    cnt++;
                }
            }
            res[j]=people[i];
        }
        return res;
    }
    static bool cmp(vector<int>& p1, vector<int>& p2){
        if(p1[0]!=p2[0]) return p1[0]<p2[0];
        else return p1[1]>p2[1];
    }
};
```

### **Solution 3**:
This method is an optimization of method 2. In solution 2, it takes O(n) time to find kth empty position for everyone. If you can find the kth empty position using the **binary search** method, it will save a lot of time. To use a binary search, you need to have a data structure to record the current position is the nth empty positions. The easiest thing to think about is an array, but each time you put in a person, you need to update the empty count value after this position in the array. It's still takes O(n) time. If we use the **binary index tree**, we can get the nth information with the complexity of O(logn), and we can use the O(logn) complexity to update the subsequent position. 
I am very sorry for my bad English, I hope you can understand!
```cpp
class Solution {
public:
    vector<int> BIT;
    int n;
    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {
        n = people.size();
        BIT = vector<int>(n+1, 0); //BIT[i+1] recorded the res[i] information because BIT[0] is not used.
        for(int i = 2; i <= n; i++) update(i, 1);  // BIT[1] is the 0th empty position, so we didn't add 1
        sort(people.begin(), people.end(), cmp);
        vector<vector<int>> res(n, vector<int>());
        for(int i = 0; i < n; i++){
            int l=0, r=n;
            while(l<r){
                int mid=l+(r-l)/2;
                if(getsum(mid+1)<people[i][1]) l=mid+1; // we need get the index mid empty information, but actually it's stored in BIT[mid+1]
                else r=mid;
            }
            res[l]=people[i];
            update(l+1, -1);
        }
        return res;
    }
    void update(int x, int v){
        for(int i = x; i <= n; i+=(i&-i)){
            BIT[i]+=v;
        }
    }
    int getsum(int x){
        int sum=0;
        for(int i = x; i > 0; i-=(i&-i)){
            sum += BIT[i];
        }
        return sum;
    }
    static bool cmp(vector<int>& p1, vector<int>& p2){
        if(p1[0]!=p2[0]) return p1[0]<p2[0];
        else return p1[1]>p2[1];
    }
};
```

