# Solution

**Author:** deleted_user
**Votes:** 440
**Link:** [https://leetcode.com/problems/odd-even-jump/solutions/3532976/](https://leetcode.com/problems/odd-even-jump/solutions/3532976/)

---

```C++ []
const int FAIL_LO=-1, FAIL_HI=1e5+1;
int dp[2][20001];
class Solution {
public:
    int oddEvenJumps(vector<int>& arr) {
        ios::sync_with_stdio(false);
        cin.tie(nullptr);
        int n=arr.size(), ans=1;
        map<int, int> sts;
        map<int, int>::iterator it;
        sts[arr[n-1]]=n-1;
        dp[0][n-1]=dp[1][n-1]=true;
        sts[FAIL_LO]=sts[FAIL_HI]=n;
        dp[0][n]=dp[1][n]=false;        
        for(int i=n-2; i>=0; --i) {
            it=sts.lower_bound(arr[i]);
            ans+=dp[1][i]=dp[0][it->second];
            dp[0][i]= it->first==arr[i] ? dp[1][it->second] : dp[1][(--it)->second];
            sts[arr[i]]=i;
        }
        return ans;
    }
};
```

```Python3 []
class Solution:
    def oddEvenJumps(self, A: 'List[int]') -> 'int':

        sorted_indexes = sorted(range(len(A)), key = lambda i: A[i])
        
        oddnext = self.makeStack(sorted_indexes)

        sorted_indexes.sort(key = lambda i: A[i], reverse = True)

        evennext = self.makeStack(sorted_indexes)

        odd = [False] * len(A)
        even = [False] * len(A)

        odd[len(A)-1] = even[len(A)-1] = True

        for i in range(len(A)-2, -1, -1):

            if oddnext[i] is not None:
                odd[i] = even[oddnext[i]]

            if evennext[i] is not None:
                even[i] = odd[evennext[i]]

        return sum(odd)
    
    def makeStack(self, sorted_indexes):
        result = [None] * len(sorted_indexes)
        stack = []
        for i in sorted_indexes:
            while stack and i > stack[-1]:
                result[stack.pop()] = i
            stack.append(i)
        del stack
        return result
```

```Java []
class Solution {
    public int oddEvenJumps(int[] arr) {
        int[] count = new int[100001];
        boolean[][] res = new boolean[2][arr.length];
        res[0][arr.length - 1] = true;
        res[1][arr.length - 1] = true;
        count[arr[arr.length - 1]] = arr.length;
        int min = arr[arr.length - 1], max = arr[arr.length - 1];
        int result = 1;
        for(int i = arr.length - 2; i >= 0; i--) {
            int nextSmallIndex = findNextSmall(count, min, max, arr[i]);
            int nextLargeIndex = findNextLarge(count, min, max, arr[i]);
            if(nextSmallIndex == -1) {
                res[0][i] = false;
            } else {
                res[0][i] = res[1][nextSmallIndex];
            }
            if(nextLargeIndex == -1) {
                res[1][i] = false;
            } else {
                res[1][i] = res[0][nextLargeIndex];
            }
            count[arr[i]] = i + 1;
            min = Math.min(min, arr[i]);
            max = Math.max(max, arr[i]);
            if(res[0][i]) {
                result++;
            }
        }
        return result;
    }
    int findNextSmall(int[] count, int min, int max, int val) {

        for(int i=val; i <= max; i++) {
            if(count[i] != 0) {
                return count[i]-1;
            }
        }
        return -1;
    }
    int findNextLarge(int[] count, int min, int max, int val) {

        for(int i=val; i >= min; i--) {
            if(count[i] != 0) {
                return count[i]-1;
            }
        }
        return -1;
    }
}
```
