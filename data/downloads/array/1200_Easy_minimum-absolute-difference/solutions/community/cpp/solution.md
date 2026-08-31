# [C++/Python] EASY TO SOLVE || Beginner Friendly with detailed explanations

**Author:** Cosmic_Phantom
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/1636903/](https://leetcode.com/problems/minimum-absolute-difference/solutions/1636903/)

---

# **One Pass Algorithm ||  O(nLogn) runtime**

**Intuition:-**
After analyzing the question we understood that we need to find the minimum absolute difference between the array elements and print all the pairs in ascending order w.r.t to the elements in the pair where given: a<b . 
So if we think a little bit we can come to understanding that if we sort our array first then we can the check difference of each pair of neighbouring elements. Because of the sort if you take any one element the minimum distance will be between it and the next element only, because every next element will be greater than a previous one - thus difference increases .
So talking about approach we can find the min difference by scaning the array and saving current minimum difference and update if we found a lower min difference than current. Then the second pass required to find every pair with such difference.
**Creation of One Pass:-**
Combining these two passes we can make a superior algo that can be: check for min difference as we go, adding to result list everytime our difference is equal to min difference and when we meet a new min difference we clear the result list and start a new one.

**Algorithm:-**
The best part of this algo is that we are finding the result on the go and changing the result . So let's go..
**1.** At first we will sort the array so min difference searching becomes easy.
**2.** After that Initialize a pair with a absolute min difference and our resultant vector .
**3.** while traversing the array , we can face three conditions :-
* **First**->The array elements that we subtracted are not the min diff i.e its larger so skip it and goto next
* **Second**->if `min diff == diff`, then add this to our result.
* **Third**->And lastly if diff is less than min diff i.e `diff<min diff`

**Code:**

* **C++:-**

```
// Upvote and Comment

class Solution {
public:
    vector<vector<int>> minimumAbsDifference(vector<int>& arr) {
        //sort the array using built in method which gives us a TC of O(nlogn)
        sort(arr.begin(),arr.end());
        //A pair which has difference and a vector of of two points which stores the min absolute difference
        pair<int,vector<vector<int>>> result(INT_MAX,{});
        //Traverse the given array takes O(n) time
        for(int i=0;i<arr.size()-1;++i) 
        {
            //if its not a min absolute difference then use continue and jump to next iteration
            if(arr[i+1]-arr[i]>result.first) continue;
            //min diff == diff then add the pair
            if(arr[i+1]-arr[i]==result.first) result.second.push_back({arr[i],arr[i+1]});
            //else diff<min diff 
            else result={arr[i+1]-arr[i],{{arr[i],arr[i+1]}}};    
        }
        return result.second;
    }
};
```

* **Python:-**
```
class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        #sort the array using built in method which gives us a TC of O(nlogn)
        arr.sort()
        #A pair which has difference and a result list of two points which stores the min absolute difference
        min_diff, result = sys.maxsize, []
        #Traverse the given array takes O(n) time
        for i, val in enumerate(arr[0:len(arr) - 1]):
            #if diff<min diff 
            if arr[i + 1] - val < min_diff:
                min_diff, result = arr[i + 1] - val, [[val, arr[i + 1]]]
            #min diff == diff then add the pair
            elif arr[i + 1] - val == min_diff:
                result.append([val, arr[i + 1]])
        return result
```


**Time Complexity :-** ***`O(nlogn) [It's O(nlogn) because of the built in sort functions we are using]`***
**Space Complexity:-** ***`O(n)[if resultant vector/list not considered than it is O(1)]`***
