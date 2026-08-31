# ✅C++ || EXPLAINED || BEATS 100% || OPTIMIZED

**Author:** ayushsenapati123
**Votes:** 33
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/2195235/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/2195235/)

---

**PLEASE UPVOTE IF YOU FIND MY APPROACH HELPFUL, MEANS A LOT \uD83D\uDE0A**

**Explanation:**

* Initialize an ordered map mp and vector vec.

* Traverse the 2D array and store the elements present with their frequency.
* Now check if the element.second (frequency) stored in the map is equal to the no. of rows in the array.
* If element.second == no. of rows then it implies that the element is present in every array.
* Push all the elements which satisfy this condition.
* Return the vector vec as it now contains the intersecting elements.

```
class Solution {
public:
    vector<int> intersection(vector<vector<int>>& nums) {
        int n = nums.size(); // gives the no. of rows
        map<int,int> mp; // we don't need unordered_map because we need the elements to be in sorted format.
        vector<int> vec;
        
        // traverse through the 2D array and store the frequency of each element
        for(int row=0;row<n;row++)
        {
            for(int col=0;col<nums[row].size();col++)
            {
                mp[nums[row][col]]++;
            }
        }
        
        // In the 2D array, intersection occurs when the elements are present in every row.
        // So the frequency of the element should match with the no. or rows in the 2D array.
        for(auto element : mp)
            if(element.second == n)
                vec.push_back(element.first);
        
        // return the intersecting elements
        return vec;
    }
};
```
