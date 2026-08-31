# Fastest Solution in C++, Java, and Python

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5686858/](https://leetcode.com/problems/count-almost-equal-pairs-ii/solutions/5686858/)

---

# Credit:
Special thanks to [bilyhurington](https://leetcode.com/u/bilyhurington) for his c++ solution which derives the other forms.

# Code
```c++ []
class Solution {
public:
    const int L=7;
    int countPairs(vector<int>& nums) {
        int n=nums.size();
        unordered_map<string,int> mp,id;
        int ans=0;
        for(int i=1;i<=n;i++){
            int x=nums[i-1];
            string s;
            for(int j=0;j<L;j++){
                s+=(x%10)+'0';
                x/=10;
            }
            ans+=mp[s];
            mp[s]++;
            id[s]=i;
            for(int p=0;p<L;p++){
                for(int q=p+1;q<L;q++){
                    if(s[p]==s[q]) continue;
                    swap(s[p],s[q]);
                    if(id[s]<i){
                        id[s]=i;
                        mp[s]++;
                    }
                    for(int r=p;r<L;r++){
                        for(int t=r+1;t<L;t++){
                            if(s[r]==s[t]) continue;
                            swap(s[r],s[t]);
                            if(id[s]<i){
                                id[s]=i;
                                mp[s]++;
                            }
                            swap(s[r],s[t]);
                        }
                    }
                    swap(s[p],s[q]);
                }
            }
        }
        return ans;
    }
};
```
```java []
class Solution {
    private static final int L = 7;

    public int countPairs(int[] nums) {
        int n = nums.length;
        Map<String, Integer> mp = new HashMap<>();
        Map<String, Integer> id = new HashMap<>();
        int ans = 0;

        for (int i = 1; i <= n; i++) {
            int x = nums[i - 1];
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < L; j++) {
                sb.append((char) (x % 10 + '0'));
                x /= 10;
            }
            String s = sb.toString();
            ans += mp.getOrDefault(s, 0);
            mp.put(s, mp.getOrDefault(s, 0) + 1);
            id.put(s, i);

            char[] chars = s.toCharArray();
            for (int p = 0; p < L; p++) {
                for (int q = p + 1; q < L; q++) {
                    if (chars[p] == chars[q]) continue;
                    swap(chars, p, q);
                    s = new String(chars);
                    if (id.getOrDefault(s, 0) < i) {
                        id.put(s, i);
                        mp.put(s, mp.getOrDefault(s, 0) + 1);
                    }
                    for (int r = p; r < L; r++) {
                        for (int t = r + 1; t < L; t++) {
                            if (chars[r] == chars[t]) continue;
                            swap(chars, r, t);
                            s = new String(chars);
                            if (id.getOrDefault(s, 0) < i) {
                                id.put(s, i);
                                mp.put(s, mp.getOrDefault(s, 0) + 1);
                            }
                            swap(chars, r, t);
                        }
                    }
                    swap(chars, p, q);
                }
            }
        }
        return ans;
    }

    private void swap(char[] array, int i, int j) {
        char temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
```
```python3 []
class Solution:
    def countPairs(self, nums):
        maxL = 7
        n = len(nums)
        mp = defaultdict(int)
        ids = {}
        ans = 0

        for i in range(1, n + 1):
            x = nums[i - 1]
            s = ''
            # convert x to a string s and pad with zeros
            # using str(x).zfill(maxL) also works here
            for _ in range(maxL):
                s += chr((x % 10) + ord('0'))
                x //= 10

            ans += mp[s] # efficiently count the matches.
            mp[s] += 1
            ids[s] = i

            s = list(s)

            for p in range(maxL):
                for q in range(p + 1, maxL):
                    if s[p] == s[q]:
                        continue
                    s[p], s[q] = s[q], s[p]
                    s_str = ''.join(s)
                    if ids.get(s_str, 0) < i:
                        ids[s_str] = i
                        mp[s_str] += 1
                    for r in range(p, maxL):
                        for t in range(r + 1, maxL):
                            if s[r] == s[t]:
                                continue
                            s[r], s[t] = s[t], s[r]
                            s_str = ''.join(s)
                            if ids.get(s_str, 0) < i:
                                ids[s_str] = i
                                mp[s_str] += 1
                            s[r], s[t] = s[t], s[r]
                    s[p], s[q] = s[q], s[p]
            
        return ans
```