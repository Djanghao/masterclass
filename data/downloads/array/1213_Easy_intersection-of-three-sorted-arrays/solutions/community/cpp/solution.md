# 3 solutions : explained

**Author:** suryasispaulpro
**Votes:** 3
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/866586/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/866586/)

---

So there are three major ways in C++ to solve this problem. 
1. Counting : The idea is to keep a map(or an array) to check the occurence of a value in all three arrays. Sure you would not get O(1) in space but time complexity is O(m+n+o) which is the least you could do here.
```
vector<int> arraysIntersection(vector<int>& arr1, vector<int>& arr2, vector<int>& arr3) {
        map<int,int> firstMap;
        for(auto el : arr1)
        {
            if(firstMap[el] == 0)
                firstMap[el]++;;
        }
        for(auto el : arr2)
        {
            if(firstMap[el] == 1)
                firstMap[el]++;
        }
        for(auto el : arr3)
        {
            if(firstMap[el] == 2)
                firstMap[el]++;
        }
        vector<int> v;
        for(auto num : firstMap)
        {
            if(num.second == 3)
                v.push_back(num.first);
        }
       
        return v;
    }
```
2. Merging algorithm : Since the arrays are sorted, you could use the merging algorithm with three pointers to get the elements that are common.
```
class Solution {
public:
    vector<int> arraysIntersection(vector<int>& arr1, vector<int>& arr2, vector<int>& arr3) {
        vector<int> v;
        int i=0,j=0,k=0;
        while(i < arr1.size() && j < arr2.size() && k < arr3.size())
        {
            if(arr1[i] == arr2[j] && arr2[j] == arr3[k])
            {
                v.push_back(arr1[i]);
            }
            int mini = min(arr1[i],min(arr2[j],arr3[k]));
            if(arr1[i] == mini)
                i++;
            if(arr2[j] == mini)
                j++;
            if(arr3[k] == mini)
                k++;
        }
       
        return v;
    }
};
```
3. set intersection : Ok, so this is something I learnt with this question. Apparently, C++ stl has a library function to find the set_intersection between two sorted arrays. What that implies is you ony have to call that function twice to get your answer. 
```
class Solution {
public:
    vector<int> arraysIntersection(vector<int>& arr1, vector<int>& arr2, vector<int>& arr3) {
        std::vector<int>::iterator ls;
        vector<int> v(arr1.size()); // The size of intersected vector cannot be more than one array
        auto it = std::set_intersection(arr1.begin(),arr1.end(), arr2.begin(),arr2.end(),v.begin());
        v.resize(it - v.begin()); //Resizing is necessary because otherwise there might be zeros at the end
        vector<int> v2(arr2.size());
        //Repeat the same again.
        auto it2 = std::set_intersection(v.begin(),v.end(), arr3.begin(),arr3.end(),v2.begin());
        v2.resize(it2-v2.begin());
        return v2;
    }
};

```