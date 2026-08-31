# C++ || Easy Solution || Full Explanation

**Author:** TlTAN
**Votes:** 91
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/2211643/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/2211643/)

---

Time Complexity : **O(N^2)** , Space Complexity : **O(N)**

***Upvote if Found Helpful***

**Intuition :**

1. So here if we carefully observe we can notice that if we take any person  and `insert any other shorter person before or after him in queue then the number of people higher or equal to him before him doesn't change`. So we need to `place the taller people first in the queue and we can add the shorter people in between or after` them according to reqirement.
	* So we need to sort the array according to their height in decreasing order (Heighest at the first). 

2. Now think if 2 person has same height the person with lower (Ki) will be inserted before other. Because The person before will have at least 1 less number of equal or taller people before him than who is after.
	* So in case of equal heights (Hi) the person with lesser (Ki) will be placed first during sorting.

3. Now if we insert the person from the sorted array in the ans array in the position (Ki) then the people greater than or equal to him will be in his left and they total will be (Ki) in number (From 0 to (Ki-1)th position).  After that whatever we insert will be shorter (Which doesn't matter if inserted after or before the position) or if equal will have greater (Ki) than the present one i.e. will be inserted in the right.
	* So for each element in the sorted array we insert it at the (Ki)th position in the ans array.

**Example :**

```
 People = [[7,0], [4,4], [7,2], [5,0], [6,1], [5,4], [8,0]]
 Sorted People accordin to comp function : [[8,0], [7,0], [7,2], [6,1], [5,0], [5,4], [4,4]]]
 
 Now for each iteration in the loop ; (Ki of each man is included in ' ', and each inserted man in " ")
 
 man = [8,'0'] -> ans.insert(ans.begin()+'0', man) -> ans  = ["[8,0]"]
 man = [7,'0'] -> ans.insert(ans.begin()+'0', man) -> ans  = ["[7,0]", [8,0]]
 man = [7,'2'] -> ans.insert(ans.begin()+'2', man) -> ans  = [[7,0], [8,0], "[7,2]"]
 man = [6,'1'] -> ans.insert(ans.begin()+'1', man) -> ans  = [[7,0], "[6,1]", [8,0], [7,2]]
 man = [5,'0'] -> ans.insert(ans.begin()+'0', man) -> ans  = ["[5,0]", [7,0], [6,1], [8,0], [7,2]]
 man = [5,'4'] -> ans.insert(ans.begin()+'4', man) -> ans  = [[5,0], [7,0], [6,1], [8,0], "[5,4]", [7,2]]
 man = [4,'4'] -> ans.insert(ans.begin()+'4', man) -> ans  = [[5,0], [7,0], [6,1], [8,0], "[4,4]", [5,4], [7,2]]
 
 See the final ans array fullfills all the conditions.
```

**Working Code :**

```
class Solution {
public:
    static bool comp(vector<int>& a, vector<int>& b){ //Comparator function for the logic of sort
        if(a[0] == b[0]) return a[1] < b[1];
        return a[0] > b[0];
    }
    vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {   
        sort(people.begin(), people.end(), comp);  //Sorting the array according to comp function.
        vector<vector<int>> ans;                   //to store the final array to be returned
        for(auto man : people){
            ans.insert(ans.begin()+man[1], man);   //Inserting the element at desired position.
        }
        return ans;
    }
};
```

**Note :** Here sorting operation takes O(N log N) time and O(N) for each insert operation so the for loop takes O(N*N) time. So the total time becomes O(N^2). The ans vector takes O(N) space.