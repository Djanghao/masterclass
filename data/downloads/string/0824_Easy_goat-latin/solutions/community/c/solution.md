# [C++/Python] Challenge me for shorter solution (1Line python & 3Line C++)

**Author:** codedayday
**Votes:** 7
**Link:** [https://leetcode.com/problems/goat-latin/solutions/801079/](https://leetcode.com/problems/goat-latin/solutions/801079/)

---

Idea:
Fuzzy grammar between string and set in python make coding simple.
C++ does not have such freedom as Python in this case.

Solution 1:
```
class Solution:
    def toGoatLatin(self, S: str) -> str:
        vowel='aeiouAEIOU'
        sList=S.strip().split()
        result = ''
        for i, w in enumerate(sList):
            if w[0] in vowel: result+=' ' + w + 'ma' + 'a'*(i+1)
            else:result +=' ' + w[1:] + w[0] + 'ma' + 'a'*(i+1)
        return '' if result == '' else result[1:]
```

Solution 2:
```
def toGoatLatin(self, S):
		#return ' '.join((w if w[0].lower() in 'aeiou' else w[1:] + w[0]) + 'ma' + 'a' * (i + 1) for i, w in enumerate(S.split()))
		return ' '.join((w if w[0].lower() in 'aeiou' else w[1:] + w[0]) + 'ma' + 'a' * i for i, w in enumerate(S.split(), 1)) #Thanks @PonomarevIK
```

Solution 3: the shortest one (Challenge me for shorter)
```
class Solution:
    def toGoatLatin(self, S: str) -> str:        
		return   ' '.join([w[1:] + w[0], w][w[0].lower() in 'aeiou'] + 'maa' + 'a' * i for i, w in enumerate(S.split())) # Thanks @susanxie123
		#return ' '.join([w[1:] + w[0], w][w[0] in 'aeiouAEIOU'] + 'maa' + 'a' * i for i, w in enumerate(S.split())) # shorter but takes more in checking vowel property
```

Solution 4: C++ 3-line version
```
class Solution {
public:
    string toGoatLatin(string S) {
        stringstream ss(S), oss;        
        for(string vowels("aeiouAEIOU"), word, a; ss>>word; oss <<"maa"<<a, a+='a')            
            vowels.find_first_of(word[0]) !=string::npos ?  oss<<' ' <<word: oss<<' '<< word.substr(1)<<word[0];
        return oss.str().substr(1);        
    }
};
```