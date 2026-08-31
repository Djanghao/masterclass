# ✔ | [ Cpp Csharp Kotlin] | Explained

**Author:** code_alone
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551986/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2551986/)

---


**`idea:` \u2728
`First, we sort the properties by the first element - attack. (highest to lowest)
Then, we only need to check the second element - defense.
Then, we iterate through the sorted properties and use a variable mx to store the maximum defense we saw so far.
If the current defense is smaller then mx, that means we have a property that both attack and defense are greater than the current property, so we can increase res.
Otherwise, update mx`**



---------------------------------------------------------
# Cpp Code
```
class Solution {
public:
    bool static comp(vector<int>&a, vector<int>&b){
        if(a[0]==b[0])return a[1]<b[1];
        return a[0]>b[0];
    }
    int numberOfWeakCharacters(vector<vector<int>>& pr) {
        sort(pr.begin(),pr.end(),comp);
        int mx=0;
        int ans=0;
        
        for(auto& v:pr){
            if(v[1]<mx)ans++;
            mx=max(mx,v[1]);
        }
        
        return ans;
    }
};
```

------------------------------------------------------------------------------------------------------------------
# Csharp Code

```
public class Solution {
    public int NumberOfWeakCharacters(int[][] properties) {
        properties = properties.OrderBy(x => -x[0]).ThenBy(x => x[1]).ToArray();
        
        var count = 0;
        var max = 0;
        
        foreach(var x in properties) {
            if(x[1] < max)count++;
            max = Math.Max(max, x[1]);
        }
        
        return count;
    }
}
```


---------------------------------------------------------------------------------------------------

# Kotlin Code
```
class Solution {
    fun numberOfWeakCharacters(properties: Array<IntArray>): Int {
        properties.sortWith(compareBy<IntArray>{ -it[0] }.thenBy{ it[1] })
        
        var mx = 0
        var ans = 0
        
        for(p in properties){
            if(p[1]<mx)ans++
            mx = kotlin.math.max(mx,p[1])
        }
        return  ans
    }
}
```