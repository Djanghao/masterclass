# DP bhi lagega, Trie bhi lagega | Aaiye bc dekhte hai maza aaega

**Author:** yash_vish87
**Votes:** 74
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5788470/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5788470/)

---

Arre bhai log, aaja ab iss bkl problem ko discuss karte hai, jisme Trie ka magic aur DP ka swag mila ke solve karna hai! Tum log chill maaro, samjhaata hoon step-by-step meme style mein, maze ke saath. \uD83D\uDE0E

**Problem ka Scene:**
Tumko ek array diya gaya hai **words[]** jisme kuch strings hain, aur ek **target** string diya hai jo tumhe banani hai, but not like you can join any string randomly! Har string valid tabhi hai jab woh kisi bhi **words[]** ka prefix ho. Samjho "prefix" matlab starting se match hona chahiye, puri string koi bhi ho, bas start se match karna zaroori hai!

Ab tumhe ye dekhna hai ki minimum number of valid strings (from words) ka combination bana ke target ko form kar sakte ho ya nahi. Agar nahi kar sakte toh -1 return kar dena.

# **Intuition kya rahega? - The Strategy:**

**Trie + DP ka Combination - Ghode ka taakat aur haathi ka weight!**
Ab samajho bhidu, problem me kya karenge \u2014 tumko pata hai ki "prefix matching" karna hai, toh seedha Trie use karenge, kyunki Trie ka kaam hi yahi hai. Trie is best jab tumhe efficient tarike se strings ko prefix-wise store karna aur search karna ho.

Baat sirf itni hoti toh mast ho jaata, but target string ko form karna hai aur tumhe har baar check karna padega kitne prefix match karte hain. DP (Dynamic Programming) ko bulaya maidan mein kyunki ek baar prefix match ho gaya toh future ke liye value store karke rakh le, taaki baad me baar-baar calculation na karni pade.

**Plan of Attack - Step-by-Step Roadmap:**
**Trie ka Construction:**
Bhai, har string ko Trie me ghusa denge. Matlab Trie ka ek node create karke character by character traverse karenge, jab tak poora word insert nahi ho jaata.

**DP ka Bedi/Support:**
Tumhe ek DP array banani hai, jisme har index i pe yeh store karenge ki target ke ith index se minimum kitne prefixes ko use karke aage solve ho sakta hai. Jaise hi ek prefix mil gaya, aage ki calculation DP me store kar lenge.

**Recursive Solve Function:**
Tumhe ek recursive function likhna hai jo target ke har index se start karke valid prefix ko dhoondhe aur aage jaake us prefix ko use kar ke DP ko update kare.

**Breaking Condition:**
Agar tumhe target banane ka koi valid tarika nahi milta, to obvious baat hai -1 return kar dena hai!

# Complexity
- Time complexity:  $$O(n^2 + m)$$ isliye hai ki ek taraf tumko sab words ke characters Trie me daalne ka cost hai, aur dusri taraf DP solve ka. Jo badiya optimize karta hai future recursion ko avoid karne ke liye.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n + m)$$ Trie jitni badi hogi, utna bada memory space, aur DP array ka size bhi target.length ke equal hoga. So, bhai log, efficient hai, but handle carefully!
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```Java []
class TrieNode {
    TrieNode[] childs;
    TrieNode() {
        this.childs = new TrieNode[26];
    }
}

class Trie {
    TrieNode root;
    Trie() {
        this.root = new TrieNode();
    }
    public void insert(String word) {
        TrieNode temp = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (temp.childs[idx] == null) {
                temp.childs[idx] = new TrieNode();
            }
            temp = temp.childs[idx];
        }
    }
}

class Solution {
    int n;
    String target;
    int[] dp;

    private int solve(int i, TrieNode root) {
        if (i == n) return 0;
        if (dp[i] != -1) return dp[i];
        
        TrieNode temp = root;
        int res = Integer.MAX_VALUE;

        for (int j = i; j < n; j++) {
            int idx = target.charAt(j) - 'a';
            if (temp.childs[idx] == null) break;
            temp = temp.childs[idx];
            int t = solve(j + 1, root);
            if (t != Integer.MAX_VALUE) {
                res = Math.min(res, t + 1);
            }
        }
        return dp[i] = res;
    }

    public int minValidStrings(String[] words, String target) {
        Trie trie = new Trie();
        for (String word : words) {
            trie.insert(word);
        }
        this.n = target.length();
        this.target = target;
        this.dp = new int[n];
        Arrays.fill(dp, -1);

        int res = solve(0, trie.root);
        return res == Integer.MAX_VALUE ? -1 : res;
    }
}

```
```python []
class TrieNode:
    def __init__(self):
        self.childs = [None] * 26

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        temp = self.root
        for c in word:
            idx = ord(c) - ord('a')
            if temp.childs[idx] is None:
                temp.childs[idx] = TrieNode()
            temp = temp.childs[idx]

class Solution:
    def __init__(self):
        self.n = 0
        self.target = ""
        self.dp = []

    def solve(self, i, root):
        if i == self.n:
            return 0
        if self.dp[i] != -1:
            return self.dp[i]

        temp = root
        res = float('inf')

        for j in range(i, self.n):
            idx = ord(self.target[j]) - ord('a')
            if temp.childs[idx] is None:
                break
            temp = temp.childs[idx]
            t = self.solve(j + 1, root)
            if t != float('inf'):
                res = min(res, t + 1)

        self.dp[i] = res
        return res

    def minValidStrings(self, words, target):
        trie = Trie()
        for word in words:
            trie.insert(word)
        self.n = len(target)
        self.target = target
        self.dp = [-1] * self.n

        res = self.solve(0, trie.root)
        return -1 if res == float('inf') else res

```
```C++ []
class TrieNode {
public:
    TrieNode* childs[26];
    TrieNode() {
        for (int i = 0; i < 26; ++i) {
            childs[i] = nullptr;
        }
    }
};

class Trie {
public:
    TrieNode* root;
    Trie() {
        root = new TrieNode();
    }

    void insert(string word) {
        TrieNode* temp = root;
        for (char c : word) {
            int idx = c - 'a';
            if (temp->childs[idx] == nullptr) {
                temp->childs[idx] = new TrieNode();
            }
            temp = temp->childs[idx];
        }
    }
};

class Solution {
public:
    int n;
    string target;
    vector<int> dp;

    int solve(int i, TrieNode* root) {
        if (i == n) return 0;
        if (dp[i] != -1) return dp[i];

        TrieNode* temp = root;
        int res = INT_MAX;

        for (int j = i; j < n; ++j) {
            int idx = target[j] - 'a';
            if (temp->childs[idx] == nullptr) break;
            temp = temp->childs[idx];
            int t = solve(j + 1, root);
            if (t != INT_MAX) {
                res = min(res, t + 1);
            }
        }
        return dp[i] = res;
    }

    int minValidStrings(vector<string>& words, string target) {
        Trie trie;
        for (string word : words) {
            trie.insert(word);
        }
        n = target.size();
        this->target = target;
        dp = vector<int>(n, -1);

        int res = solve(0, trie.root);
        return res == INT_MAX ? -1 : res;
    }
};

```
```Javascript []
class TrieNode {
    constructor() {
        this.childs = new Array(26).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let temp = this.root;
        for (let c of word) {
            let idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!temp.childs[idx]) {
                temp.childs[idx] = new TrieNode();
            }
            temp = temp.childs[idx];
        }
    }
}

class Solution {
    constructor() {
        this.n = 0;
        this.target = "";
        this.dp = [];
    }

    solve(i, root) {
        if (i === this.n) return 0;
        if (this.dp[i] !== -1) return this.dp[i];

        let temp = root;
        let res = Infinity;

        for (let j = i; j < this.n; j++) {
            let idx = this.target.charCodeAt(j) - 'a'.charCodeAt(0);
            if (!temp.childs[idx]) break;
            temp = temp.childs[idx];
            let t = this.solve(j + 1, root);
            if (t !== Infinity) {
                res = Math.min(res, t + 1);
            }
        }
        this.dp[i] = res;
        return res;
    }

    minValidStrings(words, target) {
        let trie = new Trie();
        for (let word of words) {
            trie.insert(word);
        }
        this.n = target.length;
        this.target = target;
        this.dp = new Array(this.n).fill(-1);

        let res = this.solve(0, trie.root);
        return res === Infinity ? -1 : res;
    }
}

```


# **Final Thoughts \u2013 Tumhara DP-Trie ka Dabbang Combo!**
Tum Trie ko efficiently use kar rahe ho prefix matching ke liye, aur DP ko use kar rahe ho redundant calculations ko avoid karne ke liye.
Recursive approach handle karta hai multiple paths aur DP me unhe store karke result optimize karta hai.
Bhai log, yeh approach handle karega large constraints ko aur ensure karega ki TLE (Time Limit Exceeded) na aaye!
**
Result:** "Ab koi -1 ka error nahi, bas victory ka nasha! \uD83C\uDFC6"

Chalo bhidu, ho gaya! Ab jaake interview ya contest me isko deploy karo, aur full marks leke aao! \uD83D\uDE80