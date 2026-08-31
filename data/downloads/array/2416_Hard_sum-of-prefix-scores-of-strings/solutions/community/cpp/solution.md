# Simple step by step solution using Trie data structure

**Author:** Reddaiah12345
**Votes:** 85
**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830227/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5830227/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem can be effectively solved using a Trie (prefix tree) data structure. The Trie structure allows us to efficiently store and traverse the prefixes of words. Each node in the Trie keeps track of how many times a particular prefix has appeared. This enables us to calculate the prefix scores for each word by summing the count of nodes that match the word's prefix.

The main idea is to:

1. **Insert each word** into the Trie, where each node tracks how many times a prefix has been encountered.
1. **Query the prefix** score of each word by summing the prefix counts while traversing the Trie.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Trie Construction:

    - Each node of the Trie contains a count (to store the number of words that pass through this node) and an array to hold child nodes corresponding to each character (a-z).
    - When inserting a word, for each character in the word:
        - If the node for the character doesn\u2019t exist, create it.
        - Increment the count for the node to indicate that a word has passed through this node.
1. Prefix Score Calculation:

    - To calculate the prefix score for a word, traverse the Trie for each character in the word.
    - At each step, add the count of the node to the result, which will give the total number of words that share the prefix.
1. Efficiency:

    - Insertion and prefix calculation are both O(L) operations, where L is the length of the word. This ensures efficient processing even for larger input sizes.
1. **Steps:**
    - Insert all words into the Trie:
For each word in the input list, add it to the Trie, updating the count of each node.
    - Calculate the prefix scores:
For each word, traverse the Trie and sum the counts of the nodes along the way to calculate the total prefix score for that word.

# Complexity
- Time complexity:O(N*W)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N*W)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```java []
class Node {
    int count = 0;
    Node[] list = new Node[26];

    public boolean containKey(char ch) {
        return list[ch - 'a'] != null;
    }

    public Node get(char ch) {
        return list[ch - 'a'];
    }

    public void put(char ch, Node new_node) {
        list[ch - 'a'] = new_node;
    }

    public void inc(char ch) {
        list[ch - 'a'].count++;
    }

    public int retCount(char ch) {
        return list[ch - 'a'].count;
    }
}

class Solution {
    private Node root;

    public Solution() {
        root = new Node();
    }

    public void insert(String word) {
        Node node = root;
        for (char ch : word.toCharArray()) {
            if (!node.containKey(ch)) {
                node.put(ch, new Node());
            }
            node.inc(ch);
            node = node.get(ch);
        }
    }

    public int search(String word) {
        Node node = root;
        int preCount = 0;
        for (char ch : word.toCharArray()) {
            preCount += node.retCount(ch);
            node = node.get(ch);
        }
        return preCount;
    }

    public int[] sumPrefixScores(String[] words) {
        // This problem can be solved using the trie data structure
        for (String word : words) {
            insert(word);
        }
        int n = words.length;
        int[] res = new int[n];
        for (int i = 0; i < n; i++) {
            res[i] = search(words[i]);
        }
        return res;
    }
}

```
```python []
class Node:
    def __init__(self):
        self.count = 0
        self.list = [None] * 26

    def containKey(self, ch):
        return self.list[ord(ch) - ord('a')] is not None

    def get(self, ch):
        return self.list[ord(ch) - ord('a')]

    def put(self, ch, new_node):
        self.list[ord(ch) - ord('a')] = new_node

    def inc(self, ch):
        self.list[ord(ch) - ord('a')].count += 1

    def retCount(self, ch):
        return self.list[ord(ch) - ord('a')].count


class Solution:
    def __init__(self):
        self.root = Node()

    def insert(self, word):
        node = self.root
        for ch in word:
            if not node.containKey(ch):
                node.put(ch, Node())
            node.inc(ch)
            node = node.get(ch)

    def search(self, word):
        node = self.root
        preCount = 0
        for ch in word:
            preCount += node.retCount(ch)
            node = node.get(ch)
        return preCount

    def sumPrefixScores(self, words):
        # This problem can be solved using the trie data structure
        for word in words:
            self.insert(word)

        res = []
        for word in words:
            preCount = self.search(word)
            res.append(preCount)

        return res

```

```cpp []
struct Node{
    int count=0;
    Node *list[26]={NULL};
    bool containKey(char ch){
        return list[ch-'a']!=NULL;
    }
    Node *get(char ch){
        return list[ch-'a'];
    }
    void put(char ch,Node *new_node){
        list[ch-'a']=new_node;
    }
    void inc(char ch){
        list[ch-'a']->count+=1;
    }
    int retCount(char ch){
        return list[ch-'a']->count;
    }
};
class Solution {
private:
Node *root;
public:
    Solution(){
        root=new Node;
    }
    void insert(string word){
        Node *node=root;
        for(auto ch:word){
            if(!node->containKey(ch)){
                node->put(ch,new Node);
            }
            node->inc(ch);
            node=node->get(ch);
        }
    }
    int search(string word){
        Node *node=root;
        int preCount=0;
        for(auto ch:word){
            preCount+=node->retCount(ch);
            node=node->get(ch);
        }
        return preCount;
    }
    vector<int> sumPrefixScores(vector<string>& words) {
        //This problem can be solved using the trie data structure
        for(auto word:words){
            insert(word);
        }
        int n=words.size();
        vector<int>res(n);
        for(int i=0;i<n;i++){
            int preCount=search(words[i]);
            res[i]=preCount;
        }
        return res;
    }
};
```
![olyQ7KgeQD6C37Sea5Uptw.webp](./images/0.webp)
