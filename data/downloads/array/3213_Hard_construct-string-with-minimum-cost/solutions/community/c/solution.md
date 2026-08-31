# 2 Dp + Trie Approaches|| Explained|| Top-Down Dp|| Optimized Ahocorasick Dp

**Author:** Sdas_1905
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5447456/](https://leetcode.com/problems/construct-string-with-minimum-cost/solutions/5447456/)

---

# Intuition
For a perticular index of target string there are two option one if
it is end of any string means it is an valid cost break the current trie iteration or continue the corrent iteration.

If a character does not present in root or current trienode it results 1e9 in root_take and root_non_take and return 1e9.

Finally return min(root_non_take ,root_take);
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

For recursion
```
 if (cur->children[target[ind]-'a']->cost != 1e9) {
            root_take =
                cur->children[target[ind]-'a']->cost + recsolve(target, ind + 1, root);
        }
        root_non_take = recsolve(target, ind + 1, cur->children[target[ind]-'a']);
        return min(root_take, root_non_take);

```

For Bottom -Up

```
for (int i = n - 1; i >= 0; --i) {
            TrieNode* current = root;
            for (int j = i; j < n; ++j) {
                if (!current->children[target[j]-'a']) {
                    break;
                }
                current = current->children[target[j]-'a'];
                if (current->isEndOfWord) {
                    dp[i] = min(dp[i], current->cost + dp[j + 1]);
                }
            }
        }


```

For Top-Down 

```
for (int j = ind; j < target.length(); j++) {
            if (!current->children[target[j]-'a']){
                break;
            }
            current = current->children[target[j]-'a'];
            if (current->isEndOfWord) {
                int cost = current->cost + solve(target, j + 1, root, dp);
                min_cost = min(min_cost, cost);
            }
        }

        dp[ind] = min_cost;

```
<!-- Describe your approach to solving the problem. -->

Dont why but only topodown will passed the test case instead of having same time complexisity
# Complexity
- Time complexity: O(n*k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n*k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```c++ []


class TrieNode {
public:
    bool isEndOfWord;
   // unordered_map<char, TrieNode*> children;
    TrieNode* children[26];
    int cost;
    TrieNode() {
        isEndOfWord = false;
        cost = 1e9;
        for (int i = 0; i < 26; i++)
            children[i] = NULL;
    }
};

class Trie {
private:
    TrieNode* root;

public:
    Trie() { root = new TrieNode(); }

    void insert(string word, int cost) {
        TrieNode* current = root;
        for (char ch : word) {
            if (!current->children[ch-'a'] ) {
                current->children[ch-'a'] = new TrieNode();
            }
            current = current->children[ch-'a'];
        }
        current->cost = min(current->cost, cost);
        current->isEndOfWord = true;
    }
    void print(TrieNode* temp) {
        TrieNode* current = temp;
        // for (auto it : current->children) {
        //     cout << it << "->";
        //     cout << it->cost << "->";
        //     // cout<<"|^"<<endl;;
        //     print(it.second);
        // }
        cout << endl;
    }
    void printtrie() { print(root); }
    

    //Recursion
    int recsolve(const string& target, int ind, TrieNode* cur) {
        if (ind == target.length()) {
            if (cur == NULL || cur == root)
                return 0;
            return 1e9;
        }

        if (!cur->children[target[ind]-'a']) {
            return 1e9;
        }
        int root_take = 1e9;
        int root_non_take = 1e9;

        if (cur->children[target[ind]-'a']->cost != 1e9) {
            root_take =
                cur->children[target[ind]-'a']->cost + recsolve(target, ind + 1, root);
        }
        root_non_take = recsolve(target, ind + 1, cur->children[target[ind]-'a']);
        return min(root_take, root_non_take);
    }


//Memoriazation

    int memosolve(const string& target, int ind, TrieNode* cur, vector<int> dp) {

        if (ind == target.length()) {
            if (cur == NULL || cur == root)
                return 0;
            return 1e9;
        }
        if (dp[ind] != -1)
            return dp[ind];
        if (!cur->children[target[ind]-'a']) {
            return 1e9;
        }
        int root_take = 1e9;
        int root_non_take = 1e9;

        if (cur->children[target[ind]-'a']->cost != 1e9) {
            root_take = cur->children[target[ind]-'a']->cost +
                        memosolve(target, ind + 1, root, dp);
        }
        root_non_take = memosolve(target, ind + 1, cur->children[target[ind]-'a'], dp);
        return dp[ind] = min(root_take, root_non_take);
    }


//Bottom-Up Dp    
    int bottom_upslove(const string& target, int ind, TrieNode* cur){
        int n = target.length();
        vector<int> dp(n + 1, 1e9);
        dp[n] = 0;  



        for (int i = n - 1; i >= 0; --i) {
            TrieNode* current = root;
            for (int j = i; j < n; ++j) {
                if (!current->children[target[j]-'a']) {
                    break;
                }
                current = current->children[target[j]-'a'];
                if (current->isEndOfWord) {
                    dp[i] = min(dp[i], current->cost + dp[j + 1]);
                }
            }
        }


        return dp[0];

    }



//Top-Down Dp


    int solve(const string& target, int ind, TrieNode* cur, vector<int>& dp) {
        if (ind == target.length()) {
            return 0;
        }
        if (dp[ind] != -1) {
            return dp[ind];
        }

        TrieNode* current = cur;
        int min_cost = 1e9;

        for (int j = ind; j < target.length(); j++) {
            if (!current->children[target[j]-'a']){
                break;
            }
            current = current->children[target[j]-'a'];
            if (current->isEndOfWord) {
                int cost = current->cost + solve(target, j + 1, root, dp);
                min_cost = min(min_cost, cost);
            }
        }

        dp[ind] = min_cost;
        return min_cost;
    }



    int mincost(string target) {
        int n = target.length();
        vector<int> dp(n + 1, -1);
        int ans = solve(target, 0, root,dp);
        return ans == 1e9 ? -1 : ans;
    }

    
};

class Solution {
public:
    int minimumCost(string target, vector<string>& words, vector<int>& costs) {
        class Trie trie;
        int n = words.size();
        for (int i = 0; i < n; i++) {
            trie.insert(words[i], costs[i]);
        }
        trie.printtrie();
        int ans = trie.mincost(target);
        return ans;
    }
};
```
```C []



typedef struct TrieNode {
    int isEndOfWord;
    struct TrieNode* children[26];
    int cost;
} TrieNode;

// Function to create a new TrieNode
TrieNode* createTrieNode() {
    TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
    node->isEndOfWord = 0;
    node->cost = INT_MAX;
    for (int i = 0; i < 26; i++) {
        node->children[i] = NULL;
    }
    return node;
}

// Trie structure
typedef struct Trie {
    TrieNode* root;
} Trie;

// Function to create a new Trie
Trie* createTrie() {
    Trie* trie = (Trie*)malloc(sizeof(Trie));
    trie->root = createTrieNode();
    return trie;
}

// Function to insert a word with its cost into the Trie
void insert(Trie* trie, char* word, int cost) {
    TrieNode* current = trie->root;
    while (*word) {
        if (current->children[*word - 'a'] == NULL) {
            current->children[*word - 'a'] = createTrieNode();
        }
        current = current->children[*word - 'a'];
        word++;
    }
    current->cost = cost < current->cost ? cost : current->cost;
    current->isEndOfWord = 1;
}

// Bottom-up DP function to find the minimum cost to form the target string
int bottom_upsolve(Trie* trie, char* target) {
    int n = strlen(target);
    int* dp = (int*)malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) {
        dp[i] = INT_MAX;
    }
    dp[n] = 0;

    for (int i = n - 1; i >= 0; i--) {
        TrieNode* current = trie->root;
        for (int j = i; j < n; j++) {
            if (current->children[target[j] - 'a'] == NULL) {
                break;
            }
            current = current->children[target[j] - 'a'];
            if (current->isEndOfWord) {
                if (dp[j + 1] != INT_MAX) {
                    dp[i] = dp[i] < current->cost + dp[j + 1] ? dp[i] : current->cost + dp[j + 1];
                }
            }
        }
    }

    int result = dp[0];
    free(dp);
    return result == INT_MAX ? -1 : result;
}

// Function to find the minimum cost to form the target string using the Trie
int mincost(Trie* trie, char* target) {
    return bottom_upsolve(trie, target);
}



// Helper function to deallocate memory for the Trie
void freeTrie(TrieNode* node) {
    for (int i = 0; i < 26; i++) {
        if (node->children[i]) {
            freeTrie(node->children[i]);
        }
    }
    free(node);
}

int minimumCost(char* target, char** words, int wordsSize, int* costs, int costsSize) {
    Trie* trie = createTrie();
    for (int i = 0; i < wordsSize; i++) {
        insert(trie, words[i], costs[i]);
    }
    return mincost(trie, target);
}

```

```java []


class TrieNode {
    boolean isEndOfWord;
    TrieNode[] children;
    int cost;

    public TrieNode() {
        isEndOfWord = false;
        cost = Integer.MAX_VALUE;
        children = new TrieNode[26];
    }
}

class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert(String word, int cost) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            if (current.children[ch - 'a'] == null) {
                current.children[ch - 'a'] = new TrieNode();
            }
            current = current.children[ch - 'a'];
        }
        current.cost = Math.min(current.cost, cost);
        current.isEndOfWord = true;
    }

    public int bottomUpSolve(String target) {
        int n = target.length();
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[n] = 0;

        for (int i = n - 1; i >= 0; --i) {
            TrieNode current = root;
            for (int j = i; j < n; ++j) {
                if (current.children[target.charAt(j) - 'a'] == null) {
                    break;
                }
                current = current.children[target.charAt(j) - 'a'];
                if (current.isEndOfWord) {
                    dp[i] = Math.min(dp[i], current.cost + dp[j + 1]);
                }
            }
        }

        return dp[0] == Integer.MAX_VALUE ? -1 : dp[0];
    }

    public int minCost(String target) {
        return bottomUpSolve(target);
    }
}
class Solution {
    public int minimumCost(String target, String[] words, int[] costs) {
         Trie trie = new Trie();
        for (int i = 0; i < words.length; i++) {
            trie.insert(words[i], costs[i]);
        }
        return trie.minCost(target);
    }
}

```

# **Optimized Ahocorasick Dp**

# Intution
Ahocorasick pattern searching handles faliure trie iteration searching so dont have to iterate on root again for each index.
For Understanding Ahocorasick pattern searching see ***Prepcoding 's yt video on Ahocorasick by Rohan Sir***

# Approach
For Current index if there exist any output link check the string also.And for not finding required charcter in current trienode it iterates on its suffix link

```

for(int i =0;i<n;i++){
          
            if(cur->children[target[i]-'a']){
                  cur = cur->children[target[i]-'a'];
                if(cur->pattern_ind>=0){
                    int stind = i- words[cur->pattern_ind].length() ;
                  // cout<<stind<<" "<<i<<" "<<target[i]<<" "<<cur->pattern_ind<<endl;
                    if(stind==-1)
                      dp[i]=min(dp[i],costs[cur->pattern_ind]);
                    else if(dp[stind]!=1e9)
                      dp[i]= min(dp[i],dp[stind]+costs[cur->pattern_ind]);
                }
                TrieNode *another_output = cur->output_link;
                while(another_output){
                     
                    int stind = i- words[another_output->pattern_ind].length() ;
                    //cout<<stind<<" "<<i<<" "<<target[i]<<" "<<another_output->pattern_ind<<endl;
                    if(stind==-1)
                      dp[i]=min(dp[i],costs[another_output->pattern_ind]);
                    else if(dp[stind]!=1e9){
                        dp[i] = min(dp[i],dp[stind]+costs[another_output->pattern_ind]);
                    }
                   another_output = another_output->output_link;
                }
            }else{
                
                while(cur!=root && !cur->children[target[i]-'a'])
                  cur = cur->suffix_link;
                if(cur->children[target[i]-'a'])
                  i--;
                else
                  return -1;
            }
        }

```




# Code

```C++ []

class TrieNode{
        public:
        TrieNode* suffix_link;
        TrieNode* output_link;
        int pattern_ind;
        TrieNode* children[26];
        TrieNode(){
            suffix_link = NULL;
            output_link = NULL;
            pattern_ind = -1;
            for(int i =0;i<26;i++){
                children[i] = NULL;
            }
        }
    };


class Ahocorasick{
    TrieNode* root;
    public:
    Ahocorasick(){
        root= new TrieNode();
    }
    void build_Trie(vector<string>&patterns ,vector<int>& costs){
        for(int i =0;i<patterns.size();i++){
            TrieNode* cur = root;
            for(int j =0;j<patterns[i].size();j++){
                char c = patterns[i][j];
                if(!cur->children[c-'a']){
                     cur->children[c-'a'] =new TrieNode() ;
                }
                cur = cur->children[c-'a'];
            }
            if(cur->pattern_ind ==-1)
              cur->pattern_ind = i;
            else if(costs[i]<costs[cur->pattern_ind])
              cur->pattern_ind = i;
              
        }
    }

    void build_suffix_and_output_links(){
        root->suffix_link = root;
        queue<TrieNode*>q;
        for(int i =0;i<26;i++){
            if(root->children[i]){
                q.push(root->children[i]);
                root->children[i]->suffix_link = root;
            }
        }
        while(!q.empty()){
            TrieNode* curstate = q.front();
            q.pop();
            for(int i =0;i<26;i++){
                if(curstate->children[i]){
                   // cout<<i<<endl;
                    TrieNode * curchild = curstate->children[i];
                    TrieNode *temp = curstate->suffix_link;
                    //cout<<temp<<endl;
                    while(!temp->children[i] && temp!= root){
                        temp  = temp->suffix_link;
                    }
                    if(temp->children[i])
                     curchild->suffix_link = temp->children[i];
                    else
                     curchild->suffix_link = root;
                    q.push(curchild);
                }
            }
            if(curstate->suffix_link->pattern_ind>=0)
              curstate->output_link = curstate->suffix_link;
            else
              curstate->output_link = curstate->suffix_link->output_link;
        }
    }

    int mincost(vector<int>& costs ,string target,vector<string>& words){
        int n = target.length();
        vector<int>dp(n,1e9);
        //dp[0]=0;
        TrieNode* cur = root;
        for(int i =0;i<n;i++){
          
            if(cur->children[target[i]-'a']){
                  cur = cur->children[target[i]-'a'];
                if(cur->pattern_ind>=0){
                    int stind = i- words[cur->pattern_ind].length() ;
                  // cout<<stind<<" "<<i<<" "<<target[i]<<" "<<cur->pattern_ind<<endl;
                    if(stind==-1)
                      dp[i]=min(dp[i],costs[cur->pattern_ind]);
                    else if(dp[stind]!=1e9)
                      dp[i]= min(dp[i],dp[stind]+costs[cur->pattern_ind]);
                }
                TrieNode *another_output = cur->output_link;
                while(another_output){
                     
                    int stind = i- words[another_output->pattern_ind].length() ;
                    //cout<<stind<<" "<<i<<" "<<target[i]<<" "<<another_output->pattern_ind<<endl;
                    if(stind==-1)
                      dp[i]=min(dp[i],costs[another_output->pattern_ind]);
                    else if(dp[stind]!=1e9){
                        dp[i] = min(dp[i],dp[stind]+costs[another_output->pattern_ind]);
                    }
                   another_output = another_output->output_link;
                }
            }else{
                
                while(cur!=root && !cur->children[target[i]-'a'])
                  cur = cur->suffix_link;
                if(cur->children[target[i]-'a'])
                  i--;
                else
                  return -1;
            }
        }
        // for(auto it:dp){
        //     cout<<it<<endl;
        // }
        return dp[n-1] == 1e9?-1:dp[n-1];
    }
};
class Solution {
public:
    int minimumCost(string target, vector<string>& words, vector<int>& costs) {
        Ahocorasick aho;
        aho.build_Trie(words,costs);
        aho.build_suffix_and_output_links();
        int ans = aho.mincost(costs,target,words);
        return ans;
    }
};
```
```C []

#define ALPHABET_SIZE 26

typedef struct TrieNode {
    struct TrieNode* suffix_link;
    struct TrieNode* output_link;
    int pattern_ind;
    struct TrieNode* children[ALPHABET_SIZE];
} TrieNode;

TrieNode* createNode() {
    TrieNode* node = (TrieNode*)malloc(sizeof(TrieNode));
    node->suffix_link = NULL;
    node->output_link = NULL;
    node->pattern_ind = -1;
    for (int i = 0; i < ALPHABET_SIZE; i++) {
        node->children[i] = NULL;
    }
    return node;
}

typedef struct {
    TrieNode* root;
} Ahocorasick;

Ahocorasick* createAhocorasick() {
    Ahocorasick* aho = (Ahocorasick*)malloc(sizeof(Ahocorasick));
    aho->root = createNode();
    return aho;
}

void build_Trie(Ahocorasick* aho, char** patterns, int* costs, int patternsSize) {
    for (int i = 0; i < patternsSize; i++) {
        TrieNode* cur = aho->root;
        for (int j = 0; j < strlen(patterns[i]); j++) {
            char c = patterns[i][j];
            if (!cur->children[c - 'a']) {
                cur->children[c - 'a'] = createNode();
            }
            cur = cur->children[c - 'a'];
        }
        if (cur->pattern_ind == -1)
            cur->pattern_ind = i;
        else if (costs[i] < costs[cur->pattern_ind])
            cur->pattern_ind = i;
    }
}

void build_suffix_and_output_links(Ahocorasick* aho) {
    TrieNode* root = aho->root;
    root->suffix_link = root;
    TrieNode** queue = (TrieNode**)malloc(sizeof(TrieNode*) * 10000);
    int front = 0, rear = 0;

    for (int i = 0; i < ALPHABET_SIZE; i++) {
        if (root->children[i]) {
            queue[rear++] = root->children[i];
            root->children[i]->suffix_link = root;
        }
    }

    while (front < rear) {
        TrieNode* curstate = queue[front++];
        for (int i = 0; i < ALPHABET_SIZE; i++) {
            if (curstate->children[i]) {
                TrieNode* curchild = curstate->children[i];
                TrieNode* temp = curstate->suffix_link;
                while (!temp->children[i] && temp != root) {
                    temp = temp->suffix_link;
                }
                if (temp->children[i])
                    curchild->suffix_link = temp->children[i];
                else
                    curchild->suffix_link = root;
                queue[rear++] = curchild;
            }
        }
        if (curstate->suffix_link->pattern_ind >= 0)
            curstate->output_link = curstate->suffix_link;
        else
            curstate->output_link = curstate->suffix_link->output_link;
    }
    free(queue);
}

int mincost(Ahocorasick* aho, int* costs, char* target, char** words, int wordsSize) {
    int n = strlen(target);
    int* dp = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++) {
        dp[i] = INT_MAX;
    }

    TrieNode* cur = aho->root;
    for (int i = 0; i < n; i++) {
        if (cur->children[target[i] - 'a']) {
            cur = cur->children[target[i] - 'a'];
            if (cur->pattern_ind >= 0) {
                int stind = i - strlen(words[cur->pattern_ind]);
                if (stind == -1)
                    dp[i] = costs[cur->pattern_ind];
                else if (dp[stind] != INT_MAX)
                    dp[i] = dp[stind] + costs[cur->pattern_ind];
            }
            TrieNode* another_output = cur->output_link;
            while (another_output) {
                int stind = i - strlen(words[another_output->pattern_ind]);
                if (stind == -1)
                    dp[i] = costs[another_output->pattern_ind];
                else if (dp[stind] != INT_MAX) {
                    dp[i] = dp[stind] + costs[another_output->pattern_ind];
                }
                another_output = another_output->output_link;
            }
        } else {
            while (cur != aho->root && !cur->children[target[i] - 'a'])
                cur = cur->suffix_link;
            if (cur->children[target[i] - 'a'])
                i--;
            else {
                free(dp);
                return -1;
            }
        }
    }

    int result = dp[n - 1] == INT_MAX ? -1 : dp[n - 1];
    free(dp);
    return result;
}
int minimumCost(char* target, char** words, int wordsSize, int* costs, int costsSize) {
      Ahocorasick* aho = createAhocorasick();
    build_Trie(aho, words, costs, wordsSize);
    build_suffix_and_output_links(aho);
    return mincost(aho, costs, target, words, wordsSize);
}

```
```Java []

class TrieNode {
    TrieNode suffixLink;
    TrieNode outputLink;
    int patternInd;
    TrieNode[] children;

    public TrieNode() {
        this.suffixLink = null;
        this.outputLink = null;
        this.patternInd = -1;
        this.children = new TrieNode[26];
    }
}

class Ahocorasick {
    TrieNode root;

    public Ahocorasick() {
        this.root = new TrieNode();
    }

    public void buildTrie(String[] patterns, int[] costs) {
        for (int i = 0; i < patterns.length; i++) {
            TrieNode cur = root;
            for (int j = 0; j < patterns[i].length(); j++) {
                char c = patterns[i].charAt(j);
                if (cur.children[c - 'a'] == null) {
                    cur.children[c - 'a'] = new TrieNode();
                }
                cur = cur.children[c - 'a'];
            }
            if (cur.patternInd == -1)
                cur.patternInd = i;
            else if (costs[i] < costs[cur.patternInd])
                cur.patternInd = i;
        }
    }

    public void buildSuffixAndOutputLinks() {
        root.suffixLink = root;
        Queue<TrieNode> queue = new LinkedList<>();

        for (int i = 0; i < 26; i++) {
            if (root.children[i] != null) {
                queue.add(root.children[i]);
                root.children[i].suffixLink = root;
            }
        }

        while (!queue.isEmpty()) {
            TrieNode curState = queue.poll();
            for (int i = 0; i < 26; i++) {
                if (curState.children[i] != null) {
                    TrieNode curChild = curState.children[i];
                    TrieNode temp = curState.suffixLink;

                    while (temp.children[i] == null && temp != root) {
                        temp = temp.suffixLink;
                    }

                    if (temp.children[i] != null) {
                        curChild.suffixLink = temp.children[i];
                    } else {
                        curChild.suffixLink = root;
                    }

                    queue.add(curChild);
                }
            }
            if (curState.suffixLink.patternInd >= 0) {
                curState.outputLink = curState.suffixLink;
            } else {
                curState.outputLink = curState.suffixLink.outputLink;
            }
        }
    }

    public int minCost(int[] costs, String target, String[] words) {
        int n = target.length();
        int[] dp = new int[n];
        Arrays.fill(dp, Integer.MAX_VALUE);

        TrieNode cur = root;
        for (int i = 0; i < n; i++) {
            if (cur.children[target.charAt(i) - 'a'] != null) {
                cur = cur.children[target.charAt(i) - 'a'];
                if (cur.patternInd >= 0) {
                    int stind = i - words[cur.patternInd].length();
                    if (stind == -1)
                        dp[i] = costs[cur.patternInd];
                    else if (dp[stind] != Integer.MAX_VALUE)
                        dp[i] = dp[stind] + costs[cur.patternInd];
                }
                TrieNode anotherOutput = cur.outputLink;
                while (anotherOutput != null) {
                    int stind = i - words[anotherOutput.patternInd].length();
                    if (stind == -1)
                        dp[i] = costs[anotherOutput.patternInd];
                    else if (dp[stind] != Integer.MAX_VALUE) {
                        dp[i] = dp[stind] + costs[anotherOutput.patternInd];
                    }
                    anotherOutput = anotherOutput.outputLink;
                }
            } else {
                while (cur != root && cur.children[target.charAt(i) - 'a'] == null)
                    cur = cur.suffixLink;
                if (cur.children[target.charAt(i) - 'a'] != null)
                    i--;
                else
                    return -1;
            }
        }
        return dp[n - 1] == Integer.MAX_VALUE ? -1 : dp[n - 1];
    }
}


```
