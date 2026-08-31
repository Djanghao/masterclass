# Easy C++ solution

**Author:** imran2018wahid
**Votes:** 11
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/1626296/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/1626296/)

---

```
class Solution {
public:
    vector<vector<string>> displayTable(vector<vector<string>>& orders) 
    {
        // 'ans' will be the final answer
        vector<vector<string>>ans;
        
        // In map 'm' the key is the table no. and value is another map where key food name and the value is it's quantity on that table
        map<int,map<string,int>>m;
        
        // 'food' is for storing unique food names
        set<string>food;
        
        // 'first' is the first row of our answer
        vector<string>first;
        
        // now iterate over the foods and fill the map as well as set
        for(int i=0;i<orders.size();i++)
        {
            food.insert(orders[i][2]);
            m[stoi(orders[i][1])][orders[i][2]]++;
        }
        
        first.push_back("Table");
        for(auto it:food)
        {
            first.push_back(it);
        }
        
        // Append the 'first' row in the answer
        ans.push_back(first);
        
        // Now fill the rest rows
        for(auto it:m)
        {
            // tmp stores the i'th row
            vector<string>tmp;
            
            // first append the table no.
            tmp.push_back(to_string(it.first));
            
            // then append the food quantity of each food on that table
            for(auto item:food)
            {
                // if a particular food is ordered on that table, append it's quantity
                if(it.second.find(item)!=it.second.end())
                {
                    tmp.push_back(to_string(it.second[item]));
                }
                
                // if a particular food is not ordered on that table, append "0"
                else
                {
                    tmp.push_back("0");
                }
            }
            
            // append the data of the table 
            ans.push_back(tmp);
        }
        
        // finally return the answer
        return ans;
    }
};
```
***Please upvote if you have got any help from my code. Thank you.***