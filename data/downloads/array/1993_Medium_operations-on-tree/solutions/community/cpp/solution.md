# Hash Map Solution in CPP

**Author:** Sanket_Jadhav
**Votes:** 5
**Link:** [https://leetcode.com/problems/operations-on-tree/solutions/2520348/](https://leetcode.com/problems/operations-on-tree/solutions/2520348/)

---

```
class LockingTree {
public:
    unordered_map<int,int>m;
    vector<vector<int>>t;
    vector<int>p;
    
    
    LockingTree(vector<int>& parent) {
        p=parent;
        
        vector<vector<int>>temp(parent.size());
        
        for(int i=1;i<parent.size();i++){
            temp[parent[i]].push_back(i);
        }
        
        t=temp;
    }
    
    bool lock(int num, int user) {
        if(m.find(num)==m.end()){
            m[num]=user;
            return true;
        }
        
        return false;;
    }
    
    bool unlock(int num, int user) {
        if(m.find(num)!=m.end()){
            if(m[num]==user){
                m.erase(num);
                return true;
            }
            return false;
        }
        return false;
    }
    
    bool check(int num){
        if(m.find(num)!=m.end())return true;
        
        
        if(p[num]!=-1 && check(p[num]))return true;


        return false;
    }
    
    void decendent(int a,int &total){
        
        for(auto ele:t[a]){
            if(m.find(ele)!=m.end()){
                total++;
                m.erase(ele);
            }
            decendent(ele,total);
        }
    }
    
    bool upgrade(int num, int user) {
        if(m.find(num)!=m.end())return false;
        
        if(check(num))return false;
        
      
        int total=0;
        
        decendent(num,total);
        if(total==0)return false;
        
        m[num]=user;
        
        return true;
    }
};
