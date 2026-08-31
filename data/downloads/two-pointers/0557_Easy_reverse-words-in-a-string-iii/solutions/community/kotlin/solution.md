# 🔥 [LeetCode The Hard Way] 🔥 Explained Line By Line

**Author:** tr1nity
**Votes:** 52
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/2607912/](https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/2607912/)

---

Please check out [LeetCode The Hard Way](https://wingkwong.github.io/leetcode-the-hard-way/) for more solution explanations and tutorials. 
I'll explain my solution line by line daily and you can find the full list in my [Discord](https://discord.gg/Nqm4jJcyBf).
If you like it, please give a star, watch my [Github Repository](https://github.com/wingkwong/leetcode-the-hard-way) and upvote this post.

---

**Approach 1: Split and Reverse**

**C++**

```cpp
class Solution {
public:
    // custom split template
    vector<string> split(string str, char delim) {
        string line;
        vector<string> res;
        stringstream ss(str);
        while (getline(ss, line, delim)) res.push_back(line);
        return res;
    }

    string reverseWords(string s) {
        // split by ' '
        vector<string> v = split(s, ' ');
        // reverse each string
        for(auto &x : v) reverse(x.begin(), x.end());
        // construct the answer
        string ans;
        for(int i = 0; i < v.size(); i++) {
            ans += v[i];
            // add space after each string except the last one
            if(i != v.size() - 1) ans += " ";
        } 
        return ans;
    }
};
```

**Python**

```py
class Solution:
    def reverseWords(self, s: str) -> str:
        # step1: split the string
        #   split() = ["Let's","take","LeetCode","contest"]
        # step2: reverse the list 
        #   s.split()[::-1] = ["contest","LeetCode","take","Let's"]
        # step3: convert each element to string separated by space
        #   ' '.join(s.split()[::-1]) = "contest LeetCode take Let's"
        # step4: reverse the string 
        #   ' '.join(s.split()[::-1])[::-1] = "s'teL ekat edoCteeL tsetnoc"
        return ' '.join(s.split()[::-1])[::-1]
```

**Go**

```go
func reverseWords(s string) string {
    // split by space
    w := strings.Split(s, " ")
    // iterate each word
    for k, v := range w {
        // convert to bytes array
        b := []byte(v)
        // length of current word
        n := len(v)
        // for each word, we iterate n / 2 times
        for i := 0; i < n / 2; i++ {
            // swap the characters
            b[i], b[n - 1 - i] = b[n - 1 - i], b[i]
            // w[k] here is the reversed version of v
            w[k] = string(b)
        }
    }
    // build the final string
    return strings.Join(w, " ")
}
```

**TypeScript**

```ts
function reverseWords(s: string): string {
    // step 1: split by space
    //  s.split(' ') = [ "Let's", 'take', 'LeetCode', 'contest' ]
    // step 2: for each element, reverse it 
    //  s.split(' ').map(w => w.split('').reverse().join('')) = [ "s'teL", 'ekat', 'edoCteeL', 'tsetnoc' ]
    // step 3: join them back
    //  s.split(' ').map(w => w.split('').reverse().join('')).join(' ') = "s'teL ekat edoCteeL tsetnoc"
    return s.split(' ').map(w => w.split('').reverse().join('')).join(' ')
};
```

**Kotlin**

```kotlin
class Solution {
    fun reverseWords(s: String): String {
        // step 1: split by space
        // s.split(" ") = [Let's, take, LeetCode, contest]
        // step 2: reverse each element
        // s.split(" ").map { it.reversed() } = [s'teL, ekat, edoCteeL, tsetnoc]
        // step 3: join them back
        // s.split(" ").map { it.reversed() }.joinToString(" ") = "s'teL ekat edoCteeL tsetnoc"
        return s.split(" ").map { it.reversed() }.joinToString(" ");
    }
}
```

**Approach 2: Two Pointers**

**C++**

```cpp
class Solution {
public:
    string reverseWords(string s) {
        int l = 0, r = 0, n = s.size();
        for (int i = 0; i < n; i++) {
            // looking for the space index
            if (s[i] == ' ' || i == n - 1) {
                // r is the index before the space
                // if s[i] is space, then we want to reverse s[l : i - 1]
                // if s[i] is the last character, then we want to reverse s[l : i]
                r = i == n - 1 ? i : i - 1;
                // swap the character
                // e.g. s = `Let's` where l is 0 and r is 4
                // Let's -> set'L -> s'teL
                while (l < r) swap(s[l++], s[r--]);
                // update left pointer which is i + 1
                // i.e. the first index of the next word if applicable
                l = i + 1;
            }
        }
        return s;
    }
};
```

**Java**

```java
class Solution {
    public String reverseWords(String s) {
        int l = 0, r = 0, n = s.length();
        char[] c = s.toCharArray();
        for (int i = 0; i < n; i++) {
            // looking for the space index
            if (c[i] == ' ' || i == n - 1) {
                // r is the index before the space
                // if s[i] is space, then we want to reverse s[l : i - 1]
                // if s[i] is the last character, then we want to reverse s[l : i]
                r = i == n - 1 ? i : i - 1;
                // swap the character
                // e.g. s = `Let's` where l is 0 and r is 4
                // Let's -> set'L -> s'teL
                while (l < r) {
                    char tmp = c[l];
                    c[l] = c[r];
                    c[r] = tmp;
                    l++;
                    r--;
                }
                // update left pointer which is i + 1
                // i.e. the first index of the next word if applicable
                l = i + 1;
            }
        }
        return new String(c);
    }
}
```