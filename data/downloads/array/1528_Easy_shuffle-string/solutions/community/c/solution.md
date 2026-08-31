# C++ easy O(N) time, O(1) space

**Author:** harkanwalkalra
**Votes:** 75
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/773250/](https://leetcode.com/problems/shuffle-string/solutions/773250/)

---

**Solution 1(Inplace):**

*Intuition:*

Change positions to place items correctly. 
If we could place one element in its correct position and swap it with the element in that position, we would have atleast one element that is in correct place.

*Algorithm:*

loop till` i<indices.size()`
* if `indices[i]==i` is true, as when true means item is already in right place.
* else:
	* swap `s[i]` and `s[indices[i]]`, which corrects the place of item `s[i]` in original string 
	* swap `indices[i]` and `indices[indices[i]]`, which corrects the place of item `indices[i]` in indices array
* return original string 

Time: O(N)
Space: O(1)

```
string restoreString(string s, vector<int>& indices) {
        int i=0;
        while(i!=indices.size()){
            if(indices[i]==i)i++;
            else {
                swap(s[i],s[indices[i]]);
                swap(indices[i],indices[indices[i]]);
            }
        }
        return s;
    }
```

**Solution 2(Extra space):**

Easier than Solution 1.
Requires just placing correct item at correct place using extra space.   
Time: O(N)
Space: O(N)
```
string restoreString(string s, vector<int>& indices) {
		string ans = s;
        for(int i =0; i < indices.size() ; i++) ans[indices[i]] = s[i];
        return ans;
    }
```