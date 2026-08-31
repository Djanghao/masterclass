# Solution

**Author:** deleted_user
**Votes:** 3
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/3491505/](https://leetcode.com/problems/shifting-letters/solutions/3491505/)

---

```C++ []
class Solution {
public:
    Solution() {
        ios::sync_with_stdio(false); 
        cin.tie(nullptr);
        cout.tie(nullptr);
    }
    string shiftingLetters(string s, vector<int>& shifts) {
        long long ps=0;
        for(int i=s.length()-1;i>=0;i--){
            ps+=shifts[i];
            s[i]=(char)((((s[i]-'a')+ps)%26)+'a');
        }
        return s;
    }
};
```

```Python3 []
class Solution:
    def shiftingLetters(self, s: str, shifts: List[int]) -> str:
        s=list(s)
        alphabet="abcdefghijklmnopqrstuvwxyz"
        store={'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25}
        sums=sum(shifts)
        for i in range(len(s)):
            index=store[s[i]]
            index=index+sums
            index=index%26
            s[i]=alphabet[index]
            sums-=shifts[i]
        return "".join(s)
```

```Java []
class Solution {
    public String shiftingLetters(String s, int[] shifts) {        
        char arr[]=s.toCharArray();
        int total_shifts=0;
        int i = s.length() -1;
        while(i>=0){
            total_shifts += shifts[i]%26;
            arr[i]=(char)((arr[i] - 'a' + total_shifts)%26 + 'a');
            i--;
        }
        return String.valueOf(arr);
    }
}
```
