# C++ || Easy || Two Methods || Map, Set

**Author:** suniti0804
**Votes:** 41
**Link:** [https://leetcode.com/problems/destination-city/solutions/1192311/](https://leetcode.com/problems/destination-city/solutions/1192311/)

---

```
//First Method

string destCity(vector<vector<string>>& paths) 
    {
        int m = paths.size();
        
        unordered_map<string, int> mp;
        for(int i = 0; i < m; i++)
           mp[paths[i][0]]++;
        
        for(int i = 0; i < m; i++)
        {
            if(mp[paths[i][1]] < 1)
                return paths[i][1];
        }
        
        return "";   
    
    }
	
	
```
	//Second Method
	
	string destCity(vector<vector<string>>& paths) 
	{
			unordered_set<string> st;
			for(int i = 0; i < paths.size(); i++)
				st.insert(paths[i][0]);

			for(int i = 0; i < paths.size(); i++)
			{
				if(st.find(paths[i][1]) == st.end())
					return paths[i][1];
			}
        
                 return "";
     }		
```	
