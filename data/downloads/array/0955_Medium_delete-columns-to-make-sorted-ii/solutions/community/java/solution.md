# Solution

**Author:** deleted_user
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/3529312/](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/3529312/)

---

```C++ []
class Solution {
public:
    int minDeletionSize(vector<string>& strs) {
        auto strsLength = strs.size();
        auto strLength = strs[0].size();

        auto sortedStrs = vector<string>(strsLength, "");

        for (size_t i = 0u; i < strLength; ++i) {
            for (size_t j = 0u; j < strsLength; ++j) {
                sortedStrs[j] += strs[j][i];
            }
            auto prev = sortedStrs[0];
            auto sortStatus = 1;
            for (size_t j = 1u; j < sortedStrs.size(); ++j) {
                const auto current = sortedStrs[j];
                if (prev > current) {
                    sortStatus = -1;
                    break;
                } else if (prev == current) {
                    sortStatus = 0;
                }
                prev = current;
            }
            if (sortStatus == -1) {
                for (int j = 0; j < strsLength; j++) {
                    sortedStrs[j].pop_back();
                }
            } else if (sortStatus == 1) {
                return i - sortedStrs[0].size() + 1;
            }
        }
        return strLength - sortedStrs[0].size();
    }
};
```

```Python3 []
class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        m, n = len(strs), len(strs[0])
        res = 0
        unsorted = set(range(m - 1))
        for j in range(n):
            if any(strs[i][j] > strs[i+1][j] for i in unsorted):
                res += 1
            else:
                unsorted -= {i for i in unsorted if strs[i][j] < strs[i+1][j]}
        return res
```

```Java []
class Solution {
    public int minDeletionSize(String[] strs) {
        int cnt=0,j=0;
        boolean compared[]=new boolean[strs.length];
        for(int i=0;i<strs[0].length();i++){
            boolean currCompared[]=new boolean[strs.length];
            for(j=0;j<strs.length-1;j++){
                if(!compared[j]){ 
                    if(strs[j].charAt(i)>strs[j+1].charAt(i)){
                        cnt++;
                        break;
                    }
                    else if(strs[j].charAt(i)<strs[j+1].charAt(i))
                        currCompared[j]=true;
                }
            }
            if(j==strs.length-1)
                for(;j>0;j--) compared[j-1]|=currCompared[j-1];
        }
        return cnt;
    }
}
```
