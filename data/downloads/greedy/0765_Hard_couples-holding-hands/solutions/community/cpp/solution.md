# Easy C++ solution || Two approach (Hashmap and union-find)

**Author:** thanoschild
**Votes:** 11
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/2081650/](https://leetcode.com/problems/couples-holding-hands/solutions/2081650/)

---

**Using Hashmap**  
```
class Solution {
public:
    int minSwapsCouples(vector<int>& row) {
       unordered_map<int, int>mp;
       for(int i = 0; i<row.size(); i++) mp[row[i]] = i;
       int count = 0;
       for(int i = 0; i<row.size(); i+=2){
           int first = row[i];
           int second = first ^ 1;
           if(row[i+1] != second){
               count++;
               int val = row[i+1];
               int x = mp[second];
               swap(row[i+1], row[x]);
               mp[second] = i+1;
               mp[val] = x;
           }
       } 
       return count;
    }
};
```
**Using Union-Find**
```
class Solution {
public:
    vector<int> parent;
    int find_set(int x){
        if(parent[x] == x) return x;
        return parent[x] = find_set(parent[x]);
    }

    bool make_union(int x, int y){
        int a = find_set(x);
        int b = find_set(y);
        if(a == b) return false;
        parent[b] = a;
        return true;
    }

    int minSwapsCouples(vector<int>& row) {
       int n = row.size();
       if(n == 0) return 0;
       parent.resize(n);
       for(int i = 0; i<n; i+=2){
           parent[row[i]] = row[i];
           parent[row[i+1]] = row[i];
       }
       int count = 0;
       for(int i = 0; i<n; i+=2){
           if(make_union(i, i+1)) count++;
       }
       return count;
    }
};
```