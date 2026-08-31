# [C++] unordered_map solution O(reservedSeats)

**Author:** sarthaksadh01
**Votes:** 23
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/546530/](https://leetcode.com/problems/cinema-seat-allocation/solutions/546530/)

---

```
class Solution {
public:
    bool isVacant(int start,int end,vector<int>&row){
        for(int seat:row){
             if(seat>=start&&seat<=end)return false;
        }
        return true;
    }
    int maxNumberOfFamilies(int n, vector<vector<int>>& reservedSeats) {
        unordered_map<int,vector<int>>rows;
        for(auto seatLocation:reservedSeats) {
            if(seatLocation[1]==1||seatLocation[1]==10)continue;
            rows[seatLocation[0]].push_back(seatLocation[1]);
        }    
        int families = (n-rows.size())*2;
        for(auto &row:rows){
            if(isVacant(2,5,row.second)||isVacant(4,7,row.second)||isVacant(6,9,row.second))
                families++;   
        }
        return families;
    }
};
```