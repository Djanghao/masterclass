# C++ || Binary Search || Easy || with explained code

**Author:** is720463
**Votes:** 26
**Link:** [https://leetcode.com/problems/heaters/solutions/1666843/](https://leetcode.com/problems/heaters/solutions/1666843/)

---

```
class Solution {
public:
    
    bool blackBox(vector<int>& houses, vector<int>& heaters, int n, int m, int radius){
        int i=0, j=0; //2 pointers
        
        while(i<n){
            if(j == m){ 
                return false;//coz we have no heater left to cover rest of the houses, so this cant be answer
            }
            
            int l = heaters[j] - radius; //get the left range
            int r = heaters[j] + radius; //get the right range
            if(houses[i] < l or houses[i] > r){
                j++; //if current house is not in the range, check with next heater
            }
            else{
                i++; //if current heater can cover the current house then check for the next house
            }
        }
        
        return true; //if i==n states that we are able to cover all the houses with a given number of heater(can be 1 or all) so this mid as radiuse can be one answer
    }
    
    int findRadius(vector<int>& houses, vector<int>& heaters) {
        sort(houses.begin(),houses.end());
        sort(heaters.begin(),heaters.end());
        
        int n = houses.size();
        int m = heaters.size();
        
        int low = 0; //cann't define as 1, coz there will be a case where all the heaters will be at all the houses resp.
        int high = max(*max_element(houses.begin(),houses.end()),*max_element(heaters.begin(),heaters.end())); //to reduce search space, will also work if defined as 1e9
        
        int ans = 0;
        while(low <= high){
            int mid = low + (high-low)/2;
            cout<<mid<<endl;
            if(blackBox(houses,heaters,n,m,mid)==true){ //called the blackbox to find that is it possible for current radius to be the ans
                ans = mid;
                high = mid - 1; //to minimise the ans;
            }
            else{
                low = mid + 1; //go to the right coz this mid can't be one answer;
            }
        }
        return ans;
    }
};
```