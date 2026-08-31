# C++ | EXPLAINED with comments | unordered_map | O(nlogn)

**Author:** hg3994
**Votes:** 7
**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solutions/1396883/](https://leetcode.com/problems/array-of-doubled-pairs/solutions/1396883/)

---

```

/*

Harshit Gupta | 11th August, 2021
---------------------------------

Problem Statement:
    Given an array of integers arr of even length, return true if and only if it is possible to 
        reorder it such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2.

Example 1:
    Input: arr = [3,1,3,6]
    Output: false

Example 2:
    Input: arr = [2,1,2,6]
    Output: false

Example 3:
    Input: arr = [4,-2,2,-4]
    Output: true
    Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].

Example 4:
    Input: arr = [1,2,4,16,8,4]
    Output: false

------

Solution: 1. Sort on absolute Value

        arr[2 * i + 1] = 2 * arr[2 * i]

        i=0,    arr[1] = 2*arr[0]       => arr[0] = arr[1]/2
        i=1,    arr[3] = 2*arr[2]       => arr[2] = arr[3]/2
        i=2,    arr[5] = 2*arr[4]       => arr[4] = arr[5]/2
        ..
        i=n/2-1,  arr[n-1] = 2*arr[n-2] => arr[n-2] = arr[n-1]/2

    1. Take a umap and get the count of each variable.
    2. Sort it on the absolute values of the array since we want to tackle the smallest first
        - This is done on absolute value since if normal values are taken the algo fails for negative values
        - Ex: [4,-2,2,-4] after normal sorting becomes [-4,-2,2,4] and for -4 we start searching for -8 which is wrong.
        - We must search for elements -2 and 2 and pair them up with bigger values.
    3. For all the array elements 
        - If both arr[i] and 2*arr[i] exists, then decrement it's count in umap
        - If arr[i] exists and 2*arr[i] doesn't exist, then there is a problem and we return false!!
            - The reason why we need to check if arr[i] exists is that consider [1,2,...], for 1
                it will decrease both 1 and 2's frequency and then when we come for 2, it has 0 freq
                which is fine and we shouldn't return false here, we just move on to the next element.
                So, basically there is a problem when we can findarr[i] but not 2*arr[i], then we return false.
    4. If we are able to match for all the arr[] elements, then return true.
    

    TC: O(nlogn)
    SC: O(n) for map

Paradigm:
---
    NOTE: 

    Similar Questions:
        1.

*/




class Solution {
public:
    bool canReorderDoubled(vector<int>& arr) {
        unordered_map<int, int> umap;
        for(int i=0; i<arr.size(); i++)
            umap[arr[i]]++;
        
        sort(arr.begin(), arr.end(),[](int i, int j) {return abs(i) < abs(j);});
        
        
        for(int i=0; i<arr.size(); i++){
            if(umap[arr[i]]>0 && umap[2*arr[i]]>0){
                umap[arr[i]]--;
                umap[2*arr[i]]--;
            }
            else if (umap[arr[i]]>0 && umap[2*arr[i]]<=0){
                return false;
            }
        }
        return true;
        
    }
};
```