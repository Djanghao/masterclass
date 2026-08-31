# 🥇 C++ | PYTHON | JAVA || EXPLAINED || ; ] ✅

**Author:** karan_8082
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4330526/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4330526/)

---

# Intuition
Iterate over the String to get all the substrings.
Find Consonants and Vowels -> ```c, v```
Perform the check ```c == v & ( c * v ) % k == 0```

# Approach
We donot actually need to create substring.
We only require the number of vowels and consonants in it.

Hence we can convert this question into sliding window.

* Create ```c = 0``` to store number of consonants, and ```v = 0``` for vowels.
* We do iteration starting from ```j``` and on string size ```i```.
For every increment in string size i.e. ```i++``` -> we check that if that new character in string is a vowel or not and accordingly increase the vowel or consonant count.
* For each ```j``` and ```i```, we will have a new substring,
Perform check on count of ```c, v``` -> ```c == v & (c * v) % k == 0```

# Complexity
- Time complexity: O ( n^2 )

- Space complexity: O ( 1 ) -> Only constants used

```Python []
class Solution:
    def beautifulSubstrings(self, s: str, k: int) -> int:
        n = len(s)
        res = 0
        cc = ['a','e','i','o','u']
        for j in range(n):
            c,v=0,0
            for i in range(j,n):
                if s[i] in cc:
                    v += 1
                else:
                    c += 1
                if c==v and (c*v)%k==0:
                    res += 1
        return res
```
```C++ []
class Solution {
public:
    int beautifulSubstrings(string s, int k) {
        int n = s.length();
        int res = 0;
        vector<char> cc = {'a', 'e', 'i', 'o', 'u'};

        for (int j = 0; j < n; ++j) {
            int c = 0, v = 0;
            for (int i = j; i < n; ++i) {
                if (std::find(cc.begin(), cc.end(), s[i]) != cc.end())
                    v += 1;
                else
                    c += 1;

                if (c == v && (c * v) % k == 0)
                    res += 1;
            }}
        return res;
    }
};
```
```JAVA []
class Solution {
    public int beautifulSubstrings(String s, int k) {
        int n = s.length();
        int res = 0;
        char[] cc = {'a', 'e', 'i', 'o', 'u'};
        Set<Character> vowelSet = new HashSet<>();
        for (char c : cc)
            vowelSet.add(c);

        for (int j = 0; j < n; ++j) {
            int c = 0, v = 0;
            for (int i = j; i < n; ++i) {
                if (vowelSet.contains(s.charAt(i)))
                    v += 1;
                else
                    c += 1;

                if (c == v && (c * v) % k == 0)
                    res += 1;
            }
        }
        return res;
    }
}
```

![IMG_3740.JPG](./images/0.jpeg)


