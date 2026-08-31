# Beats 99%, and do delete rows for saving space

**Author:** YC_MEWORY
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-sql/solutions/3759734/](https://leetcode.com/problems/design-sql/solutions/3759734/)

---

# Intuition
Map from string to array of rows, but use unordered_map to map rowId t row, along with an int for recording the current rowId.


# Code
```
class SQL {


private:

    unordered_map<string, pair<int, unordered_map<int, vector<string>>>> data;


public:

    SQL(vector<string>& names, vector<int>& columns) {
        
    }
    
    void insertRow(string name, vector<string> row) {
        
        data[name].first++;
        data[name].second[data[name].first]=row;
    }
    
    void deleteRow(string name, int rowId) {
        data[name].second.erase(rowId);
    }
    
    string selectCell(string name, int rowId, int columnId) {
        
        return  data[name].second[rowId][columnId-1];;
    }
};

