# [C++] simple and easy solution with explanation

**Author:** siwaniagrawal18
**Votes:** 71
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/671632/](https://leetcode.com/problems/random-pick-with-weight/solutions/671632/)

---

For [1,3,4,6] the probablity of choosing index 0 is 1/14, 1 is 3/14, 2 is 4/14 and 3 is 6/14.
Using Prefix sum I have converted the weight vector into a vector v:- [1,1+3, 1+3+4, 1+3+4+6].
In case of random numbers from [0,14), if the number is 0 then I return index 0, if number lies between [1-4) I return index 1, if number lies between [4-8)  I return index 2 and if it lies in [8,14) I return index 3.
So, basically I'm returning the index of the upperbound of the random generated number from vector v.
```
class Solution {
public:
    vector<int> v;
    Solution(vector<int>& w) {
        v.push_back(w[0]);
        for(int i=1;i<w.size();i++){
            v.push_back(v[i-1]+w[i]);
        }
    }
    
    int pickIndex() {
        int n= rand()%v[v.size()-1];
        auto it=upper_bound(v.begin(),v.end(),n);
        return it-v.begin();
    }
};
```

Solution using lower_bound:-

```
class Solution {
public:
    vector<int> v;
    Solution(vector<int>& w) {
        v.push_back(w[0]);
        for(int i=1;i<w.size();i++){
            v.push_back(v[i-1]+w[i]);
        }
    }
    
    int pickIndex() {
        int n= rand()%v.back()+1;
        auto it=lower_bound(v.begin(),v.end(),n);
        return it-v.begin();
    }
};

```