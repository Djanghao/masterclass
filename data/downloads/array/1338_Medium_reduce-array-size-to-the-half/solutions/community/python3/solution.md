# Easy to understand | C++ | PYTHON |

**Author:** dharmeshkporiya
**Votes:** 4
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2443490/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/2443490/)

---

**C++ | O(nlog(n))**

```
class Solution {
public:
    int minSetSize(vector<int>& arr) {
        unordered_map<int,int> freq;
        for(int ele : arr)
            freq[ele]++;
        
        vector<int> v;
        for(auto it : freq)
            v.push_back(it.second);
        
        sort(v.begin(),v.end(),greater<int>());
        int ans = 0,n = 0;
        while(arr.size()/2>n)
            n += v[ans++];
        
        return ans;
    }
};
```

**PYTHON**

```
class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        freq = Counter(arr);
        f = [];
        for val in freq.values():
            f.append(val);
        f.sort(reverse=True)
        ans = 0;
        n = 0;
        while(len(arr)//2>n):
            n += f[ans];
            ans += 1;
        return ans;
```

**Please UPVOTE if you LIKE!!**