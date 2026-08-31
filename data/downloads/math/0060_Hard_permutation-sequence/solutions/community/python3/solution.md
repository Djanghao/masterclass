# Solution

**Author:** deleted_user
**Votes:** 24
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/2992652/](https://leetcode.com/problems/permutation-sequence/solutions/2992652/)

---

```C++ []
class Solution {
public:
    string getPermutation(int n, int k) {
        vector<int> v={0};
        int tmp=1;
        for(int i=1;i<=n;i++){
            v.push_back(i);
            tmp*=i;
        }
        string s;
        cout<<tmp<<" ";
        for(int i=n;i>=2;i--){
            tmp/=i;
            int fl=(k+tmp-1)/tmp;
            s.push_back(v[fl]+'0');
            k-=(fl-1)*tmp;
            for(int j=fl;j<v.size()-1;j++){
                v[j]=v[j+1];
            }
        }
        s.push_back(v[1]+'0');   
        return s;
    }
};
```

```Python3 []
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        nums = [i for i in range(1, n+1)] # list of numbers from 1 to n
        factorial = [1] * n
        for i in range(1, n):
            factorial[i] = factorial[i-1] * i
        
        k -= 1
        result = []
        for i in range(n-1, -1, -1):
            index = k // factorial[i]
            result.append(str(nums[index]))
            nums.pop(index)
            k = k % factorial[i]
        
        return ''.join(result)
```

```Java []
class Solution {
    private static int[] fact = {0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};
    
    private String getPermutation(int n, int k, boolean[] nums, char[] str, int index) {
        int i = 0, m = nums.length;
        if(n == 1) {
            while(i < m && nums[i]) ++i;
            str[index++]=(char)('0'+i+1);
            return String.valueOf(str);
        }
        if(k == 0) {
            while(i < m) {
                if(!nums[i]) str[index++]=(char)('0'+i+1);
                ++i;
            }
            return String.valueOf(str);
        }
        
        int div = k/fact[n-1], mod = k%fact[n-1], j = -1;
        while(i < m-1 && div != j) {
            if(!nums[i]) ++j;
            if(j == div) break;
            ++i;
        }
        str[index++]=(char)('0'+i+1);
        if(i < m) nums[i]=true;
        return getPermutation(n-1, mod, nums, str, index); 
    }

    public String getPermutation(int n, int k) {
        boolean[] nums = new boolean[n];
        char[] charArr = new char[n];
        return getPermutation(n, k-1, nums, charArr, 0);
    }
}
```
