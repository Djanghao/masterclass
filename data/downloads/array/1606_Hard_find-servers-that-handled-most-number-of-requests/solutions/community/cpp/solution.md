# Segment Tree Approach

**Author:** projjwalraj707
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/5236345/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/5236345/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For any request which arrives at `arrival[i]`, we need to find the first server starting from $$server_{(i\\%k)}$$ till the last server which becomes free at or before time `arrival[i]`.

# Approach
<!-- Describe your approach to solving the problem. -->
Create a SegTree which stores the point of time when each of the server becomes free. For example, if a server was alloted task $$i$$, then it would become free at $$arrival[i]+load[i]$$. Initialize all nodes of the segment tree with all zeros. Also implement a function `findServer(int l, int r, int target)` which finds the first server starting from $$server_l$$ till $$server_r$$ which becomes free on or before the `target` time. 


# Code
```
class SegTree {
public:
    int s, e, mini;
    SegTree* lChild, *rChild;
    SegTree(int l, int r) {
        s = l;
        e = r;
        if (s == e) {
            lChild = rChild = NULL;
            mini = 0;
        }
        else {
            int mid = (s+e)/2;
            lChild = new SegTree(s, mid);
            rChild = new SegTree(mid+1, e);
        }
    }
    void update(int ind, int newVal) {
        if (s == e) {
            mini = newVal;
        }
        else {
            int mid = (s+e)/2;
            if (ind<=mid) lChild->update(ind, newVal);
            else rChild->update(ind, newVal);
            mini = min(lChild->mini, rChild->mini);
        }
    }
    int findServer(int l, int r, int target) {
        if (l>e || r<s) return -1;
        if (l<=s && r>=e) {
            if (mini > target) return -1;
            if (s == e) return s;
            if (lChild->mini <= target) return lChild->findServer(l, r, target);
            return rChild->findServer(l, r, target);
        }
        int temp = lChild->findServer(l, r, target);
        if (temp != -1) return temp;
        return rChild->findServer(l, r, target);
    }
};

class Solution {
public:
    vector<int> busiestServers(int k, vector<int>& arrival, vector<int>& load) {
        SegTree* st = new SegTree(0, k-1);
        unordered_map<int,int> endTime;
        vector<int> ans(k);
        for (int i=0; i<arrival.size(); i++) {
            int server = st->findServer(i%k, arrival.size()-1, arrival[i]);
            if (server == -1) server = st->findServer(0, i%k-1, arrival[i]);
            if (server != -1) {
                endTime[server] = arrival[i] + load[i];
                st->update(server, arrival[i]+load[i]);
                ans[server]++;
            }
        }
        int maxi = *max_element(ans.begin(), ans.end());
        vector<int> finalAns;
        for (int i=0; i<ans.size(); i++) if (ans[i] == maxi) finalAns.push_back(i);
        return finalAns;
    }
};
```