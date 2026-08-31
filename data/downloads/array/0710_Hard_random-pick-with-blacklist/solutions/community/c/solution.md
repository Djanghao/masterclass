# ✅ C++ |  Simple Solution

**Author:** BahubaIi
**Votes:** 16
**Link:** [https://leetcode.com/problems/random-pick-with-blacklist/solutions/1820277/](https://leetcode.com/problems/random-pick-with-blacklist/solutions/1820277/)

---

```
// idea is to map blacklist numbers with non blacklist numbers
// now i will generate a random number if that number is in the 
// blacklist i will return a number mapped to this number 
// that is not in our blacklist 
// ex :- n = 7 , blacklist  = {2,3,5}
//  2 -> 4
//  3 -> 6

//5 -> 7 this case will never happen because i am limiting
// the random generated values from 0 - 4 ( n - number of blacklisted)

// now i will pick random numbers from 0 , 4 if
// that random number is in blacklist i will return the 
// mapped value to that blackedlisted number and the 
// mapped value is not in blacklist 



unordered_map<int,int> mp;
    int valid_nums=0;
    Solution(int n, vector<int>& blacklist) {
        
        set<int> st;
        
        for(auto &x : blacklist) st.insert(x);
		
        valid_nums = n-st.size();
        int idx = valid_nums; 
        
        for(auto &x:st)
        {
            if(x<valid_nums)
            {
                while(st.count(idx)) idx++; 
				mp[x] = idx++;
            }      
        } 
    }
    
    int pick() {
        int ans = rand()%valid_nums;
        
        if(mp.count(ans))
            return mp[ans];
        
        return ans;
        
    }
```