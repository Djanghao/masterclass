# Optimal Solution | Formal PROOF str1 + str2 == str2 + str1 Implies GCD Exists

**Author:** JamieDWilliams
**Votes:** 20
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/4155016/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/4155016/)

---

# Foreword
Approach 2 in the [Editorial](https://leetcode.com/problems/greatest-common-divisor-of-strings/editorial/) relies on `str1 + str2 == str2 + str1`, implying the existence of a common divisible string. As myself and other users have noticed, they do not prove this in their post. This post will formally show it is true.

# Theorem
>$$For \\ all \\ n \\in \\mathbb{N}, \\ for \\ any \\ \	extbf{strings} \\ a, b \\ \\ s.t. \\ 0 < length(a) \\le length(b) = n,\\\\ if \\ a + b = b + a, \\ then \\ a,b \\ have \\ a \\ common \\ divisible \\ string \\ d.$$

Note, if at least one common divisible string exists, then a greatest common divisible string exists.

# Proof
We will prove the theorem above by strong induction on $$n$$.

**Induction:** Fix some $$n \\ge 1$$. Assume our theorem holds for all *strings* $$a',b'$$ where
$$0 < length(a') \\le length(b') < n$$.
That is, all *strings* $a',b' \\ \\ s.t. \\ a'+b'=b'+a'$ with length strictly smaller than $$n$$ have a common divisible string $$d$$.

Suppose we have some *strings* $$a,b \\ \\ s.t \\ 0 < length(a) \\le length(b) = n$$ with
$$a+b=b+a$$.

Clearly, $$a$$ is a leading substring of $$b+a$$.
Furthermore, as $$length(a) \\le length(b)$$, $$a$$ is a leading substring of $$b$$.
So, we have $$b = a + c$$ for some 
 $$c$$.
It follows that $$a+a+c=a+c+a$$. This can be simplified by removing the leading $$a$$,
$$a+c=c+a$$.

**Case 1:** $$c$$ is empty ($$c=``"$$).
Trivially, this implies $$b=a+``"$$.
Hence, $$a=b$$ and we are done as $$a$$ is a common divisible string of $$a$$ and $$b$$. 

**Case 2:** $$c$$ is a non-empty *string*.
From $$b=a+c$$, it follows, $$length(a), \\ length(c)<length(b)=n$$.
Since, $$a,c$$ are strings with length strictly smaller than $$n$$ and $$a+c=c+a$$, we can apply our inducive hypothesis.
Hence, $$a,c$$ has a common divisible string $$d$$.
Therefore, $$a=i*d$$ and $$c=j*d$$, for some $$i,j \\in \\mathbb{N}$$.
Finally, $$b=a+c=(i+j)*d$$, meaning $$a$$ and $$b$$ have a common divisible string $$d$$.

# Conclusion
We have proven our theorem by induction! Other proofs are available but, personally, I found this to be the most intuitive. From here we just need to find the greatest common divisible string, the [Editorial](https://leetcode.com/problems/greatest-common-divisor-of-strings/editorial/) has further guidance on this.

If you have any questions or feedback, please leave a comment. Thank you for reading!

# Code
```C++ []
class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        if (str1 + str2 != str2 + str1) {
            return "";
        }

        int gcdLen = gcd(str1.size(), str2.size());
        return str1.substr(0, gcdLen);
    }
};
```
```Java []
class Solution {
    //function to find greatest common divisor
    public int GCD(int n1, int n2) {
        while (n1 != 0 && n2 != 0)
        {
            if (n1 > n2){
                n1 %= n2;
            } 
            else {
                n2 %= n1;
            }
        }

        return n1 | n2; 
    }
    
    public String gcdOfStrings(String str1, String str2) {
        if (!(str1 + str2).equals(str2 + str1)) {
            return "";
        }
        
        int gcdLen = GCD(str1.length(), str2.length());
        return str1.substring(0, gcdLen);
    }
}
```
```Python3 []
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if str1 + str2 != str2 + str1:
            return ""

        gcdLen = gcd(len(str1), len(str2))
        return str1[:gcdLen]
```        
```C# []
public class Solution {
    //function to find greatest common divisor
    public int GCD(int n1, int n2){
        while (n1 != 0 && n2 != 0)
        {
            if (n1 > n2){
                n1 %= n2;
            } 
            else {
                n2 %= n1;
            }
        }

        return n1 | n2;
    }

    public string GcdOfStrings(string str1, *string* str2) {
        if(str1 + str2 != str2 + str1){
            return "";
        }

        int gcdLen = GCD(str1.Length, str2.Length);
        return str1.Substring(0, gcdLen);
    }
}
```
## Complexity
- Time complexity: O(n).
- Space complexity: O(n).