# C++ || Custom Sorting Comparator for set || Explanation same as other posts

**Author:** mohanyash73
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/1298697/](https://leetcode.com/problems/design-movie-rental-system/solutions/1298697/)

---

I won't be explaining the approach as it's the same as other posts.
Just have a look at the custom comparator for set.

Also i realised it later that instead of custor comparator for set i could had simply used a tuple or vector of size 3 as explained in @votrubac 's post.
```
#define f first
#define s second
#define pi pair<int,int>
#define pii pair<int,pi>

//custom comparator for set
struct comp{
    bool operator() (const pii &a,const pii &b)const
    {
         if(a.s.s == b.s.s){
             if(a.f == b.f){
                 return a.s.f<b.s.f;
             }
             return a.f<b.f;
         }
        return a.s.s<b.s.s;
    }
};


class MovieRentingSystem {
    int n;
    
    //[movie] = set<{price,shop}>
    map<int,set<pi>> unrented;
    
    //[movie] = set<{price,shop}>
    map<int,set<pi>> rented;
    
    //set<shop,<movie,price>>
    set<pii,comp> _report;
    
    /*
        [{shop,movie}] = price 
        used this just so that finding price for rented,unrented,_report would be easy
    */
    map<pi,int> mp;
    
public:
    
    MovieRentingSystem(int n, vector<vector<int>>& entries) {
        ios_base::sync_with_stdio(false);
        cin.tie(nullptr);
        this->n = n;
        for(auto entry:entries){
            unrented[entry[1]].insert({entry[2],entry[0]});
            mp[{entry[0],entry[1]}] = entry[2];
        }
    }
    
    vector<int> search(int movie) {
        vector<int> ans;
        if(unrented[movie].empty()){
            return ans;
        }
        // if there are lesser than 5 unrented movie take total unrented movie as size 
        int size = min(5,(int)unrented[movie].size());
        int i=0;
        auto it = unrented[movie].begin();
        while(i<size){
            ans.push_back((it)->s);
            it++;//move forward
            i++;//increase index
        }
        return ans;
    }
    
    void rent(int shop, int movie) {
        int price = mp[{shop,movie}];
        unrented[movie].erase(unrented[movie].find({price,shop}));
        rented[movie].insert({price,shop});
        _report.insert({shop,{movie,price}});
    }
    
    void drop(int shop, int movie) {
        int price = mp[{shop,movie}];
        rented[movie].erase(rented[movie].find({price,shop}));
        unrented[movie].insert({price,shop});
        _report.erase(_report.find({shop,{movie,price}}));
    }
    
    vector<vector<int>> report() {
        vector<vector<int>> ans;  
        if(_report.empty()){
            return {};
        }
        // if there are lesser than 5 rented items take total rented movie as size 
        int size = min(5,(int)_report.size());
        int i=0;
        auto it = _report.begin();
        while(i<size){
            ans.push_back({it->f,it->s.f});
            it++;//move forward
            i++;//increase index
        }
        return ans;
    }
};

/**
 * Your MovieRentingSystem object will be instantiated and called as such:
 * MovieRentingSystem* obj = new MovieRentingSystem(n, entries);
 * vector<int> param_1 = obj->search(movie);
 * obj->rent(shop,movie);
 * obj->drop(shop,movie);
 * vector<vector<int>> param_4 = obj->report();
 */
```