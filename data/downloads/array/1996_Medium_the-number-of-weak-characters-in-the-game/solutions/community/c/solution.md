# C++ | Sorting (NlogN) Approach ✅

**Author:** prantik0128
**Votes:** 142
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551826/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551826/)

---

**Please upvote if you like the post :)**

**Intuition:**
Since we need to return number of **weak** characters and a character is said to be **weak** if any other character has both **attack** and **defense** levels **strictly** **greater** than this character's attack and defense levels, so we need to implement a **custom sort** here so that we can handle both the cases out here.

**Approach:**
* We `sort` the properties by the `first` element i.e `attack`( High->Low)
* So now we need to handle the `second` element only i.e `defense`.
* Iterate through the `back` and use a variable **maxTillNow** to store the maximum defense we saw till now.
* If at any point the **current** defense is `smaller` than the `maxTillNow` it clearly means that we have a property with both attack and defense greater than the current property so we can increase our `ans` else we just update our `maxTillNow`.

**C++:**
```
class Solution {
public:
    static bool comp(vector<int> &a,vector<int> &b){
        if(a[0]!=b[0])
            return a[0]>b[0];
        return a[1]<b[1];
    }
    int numberOfWeakCharacters(vector<vector<int>>& prop) {
        sort(prop.begin(),prop.end(),comp);
        int maxTillNow = INT_MIN;
        int ans=0;
        for(auto p:prop){
            if(maxTillNow>p[1]) ans++;
            else maxTillNow=p[1];
        }
        return ans;
    }
};
```
****
**Time Complexity:** **O(NlogN)**
**Space Complexity:** **O(1)**
****