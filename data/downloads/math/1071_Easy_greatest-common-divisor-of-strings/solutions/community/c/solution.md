# Beats 100% Easy with Video | Java C++ Python

**Author:** jeevankumar159
**Votes:** 69
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3124806/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3124806/)

---

# Intuition
Drawing analogy b/w string and numbers.
1.  Multiples: 

 Lets assume there is only 1 letter i.e A
		AAAAAA: A, AA, AAA, AAAAAA will be the multiples i.e the strings that can divide A similar to 6: 1,2,3,6
		AAA: A, AAA will be the multiples.

Now coming to multiple letter string take the same approach.
	How to check if 2 strings have a gcd or not?? 
	str1+str2 == str2+str1 this is because from whichever way we divide the string should be divisible completely.

# Approach
1. Check if STR1+STR2 == STR2+STR1
2. Find the gcd of s1.length and s2.length;
3. Return the substring 0,gcd

https://youtu.be/hthVDqYyydU

![image](./images/0.jpeg)


```
public String gcdOfStrings(String str1, String str2) {
        if (!(str1 + str2).equals(str2 + str1)) {
            return "";
        }
        int gcdLength = gcd(str1.length(), str2.length());
        return str1.substring(0, gcdLength);
    }
    
    public int gcd(int x, int y) {
            if (y == 0) {
                return x;
            } else {
                return gcd(y, x % y);
            }    
    }
```
```

    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""
        max_length = gcd(len(str1), len(str2))
        return str1[:max_length]
```

```
string gcdOfStrings(string str1, string str2) {
        if (str1 + str2 != str2 + str1) {
            return "";
        }

        int gcdLength = gcd(str1.size(), str2.size());
        return str1.substr(0, gcdLength);
    }
```


