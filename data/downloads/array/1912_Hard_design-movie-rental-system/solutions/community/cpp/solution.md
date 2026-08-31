# c++ | easy | faster

**Author:** venomhighs7
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/2795167/](https://leetcode.com/problems/design-movie-rental-system/solutions/2795167/)

---



# Code
```
class MovieRentingSystem {
public:
   vector<set<pair<int, int>>> available = vector<set<pair<int, int>>> (10010);            
    vector<set<pair<int, int>>> getPrice = vector<set<pair<int, int>>> (10010);
    
    set<pair<int, pair<int, int>>> rented;
    
    MovieRentingSystem(int n, vector<vector<int>>& e){
        for(auto v: e){
            available[v[1]].insert({v[2], v[0]});            
            getPrice[v[1]].insert({v[0], v[2]});             
        }
    }
    
    vector<int> search(int movie){
        vector<int> ans;
        int i=0;
        for(auto d: available[movie]){                              
            ans.push_back(d.second);
            i++;
            if(i>=5){
                break;
            }
        }
        return ans;
    }
    
    void rent(int shop, int movie){
        
        auto it = getPrice[movie].lower_bound({shop, INT_MIN});   
        int price = (*it).second;
        
        available[movie].erase({price, shop});                      
        
        rented.insert({price, {shop, movie}});                     
    }
    
    void drop(int shop, int movie) {
        
        auto it = getPrice[movie].lower_bound({shop, INT_MIN});   
        int price = (*it).second;
        
        available[movie].insert({price, shop});                     
        
        rented.erase({price, {shop, movie}});                       
    }
    
    vector<vector<int>> report() {
        vector<vector<int>> ans;
        int i=0;
        for(auto d: rented){                                        
            ans.push_back({d.second.first, d.second.second});
            i++;
            if(i>=5){
                break;
            }
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