# HashMap N-ary Tree  Solution || C++ Solution With Comments || Beats 90% Online Submissions

**Author:** wa_survivor
**Votes:** 4
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/2658980/](https://leetcode.com/problems/throne-inheritance/solutions/2658980/)

---

```
class ThroneInheritance {
private:
    struct Tree{//Structure of N-ary Tree
        string name;//Storing names
        vector<Tree*> childrens;//storing childrens
    };
public:
    Tree* root;
    unordered_map<string,Tree*> mp;//HashMap to mark dead peoples
    ThroneInheritance(string kingName) {
        root=new Tree();
        root->name=kingName;
        mp[kingName]=root;
    }
    
    void birth(string parentName, string childName) {
        Tree* child=new Tree();
        child->name=childName;
        mp[parentName]->childrens.push_back(child);//Making Link from parent to newborn child
        mp[childName]=child;
    }
    
    void death(string name) {
        mp[name]=NULL;//Marking Dead peoples
    }
    void dfs(Tree* root,vector<string>& ans){//DFS call to get the inheritance order
        if(mp[root->name]!=NULL)    ans.push_back(root->name);//Checking if current people is dead, if dead then not including that person in our inheritance order
        for(int i=0;i<root->childrens.size();i++){//Childrens will be present in inheritance order doesn't matter if their parent is dead or alive
            dfs(root->childrens[i],ans);
        }
        return;
    }
    vector<string> getInheritanceOrder() {
        vector<string> ans;
        dfs(root,ans);
        return ans;
    }
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * ThroneInheritance* obj = new ThroneInheritance(kingName);
 * obj->birth(parentName,childName);
 * obj->death(name);
 * vector<string> param_3 = obj->getInheritanceOrder();
 */
```