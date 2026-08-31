# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/word-squares/solutions/3359525/](https://leetcode.com/problems/word-squares/solutions/3359525/)

---

```C++ []
class Solution {
 private:
  struct TrieNode {
    std::vector<int> prefix;
    TrieNode* childs[26];
    TrieNode (void) {
      memset(childs, 0, sizeof(childs));
    }
    ~TrieNode() {
      for (int i = 0; i < 26; i++) {
        delete childs[i];
      }
    }
  };
 public:
  std::vector<std::vector<std::string>> wordSquares(const std::vector<std::string>& _words) {
    const int n = _words[0].size();
    TrieNode* root = build(_words);
    std::vector<std::vector<std::string>> res;
    std::vector<std::string> board(n);
    for (int i = 0, len = _words.size(); i < len; i++) {
      board[0] = _words[i];
      helper(res, board, _words, root, 1);
    }
    return res;
  }
 private:
  TrieNode* build(const std::vector<std::string>& _words) {
    TrieNode* root = new TrieNode();
    for (int i = 0, len = _words.size(); i < len; i++) {
      TrieNode* p = root;
      for (int j = 0, wlen = _words[i].size(); j < wlen; j++) {
        const int idx = _words[i][j] - 'a';
        if (!p->childs[idx]) {
          p->childs[idx] = new TrieNode();
        }
        p = p->childs[idx];
        p->prefix.push_back(i);
      }
    }
    return root;
  }
  void helper(std::vector<std::vector<std::string>>& res, std::vector<std::string>& board,
              const std::vector<std::string>& words, const TrieNode* root, const int row) {
        if (row == board.size()) {
            res.push_back(board);
            return;
        }
        const TrieNode* p = root;
        for (int i = 0; i < row; i++) {
            const int idx = board[i][row] - 'a';
            if (!p->childs[idx]) return;
            p = p->childs[idx];
        }
        const int next_row = row + 1;
        for (int i : p->prefix) {
            board[row] = words[i];
            helper(res, board, words, root, next_row);
        }
    }
};
```

```Python3 []
class Solution:
    def wordSquares(self, words: List[str]) -> List[List[str]]:
        n = len(words[0])

        prefix_map = collections.defaultdict(set)
        for word in words:
            for i in range(1, n):
                prefix = word[:i]
                prefix_map[prefix].add(word)

        res = []
        
        def backtrack(i, word_sqr):
            if i == n:
                res.append(word_sqr.copy())
                return
            
            prefix = ''
            for word in word_sqr:
                prefix += word[i]

            for word in prefix_map[prefix]:
                word_sqr.append(word)
                backtrack(i+1, word_sqr)
                word_sqr.pop()

        for word in words:
            word_sqr = [word]
            backtrack(1, word_sqr)
        
        return res
```

```Java []
class Solution {
    public List<List<String>> wordSquares(String[] words) {
        List<List<String>> res=new ArrayList();
        if(words==null || words.length==0 || words[0]==null || words[0].length()==0)
            return res;
        TrieNode root=new TrieNode();
        for(String w: words) 
            buildTrie(w, root);
        TrieNode[] rows=new TrieNode[words[0].length()];
        Arrays.fill(rows, root);
        findAllSquares(0, 0, rows, res);
        return res;
    }
    public void findAllSquares(int row, int col, TrieNode[] rows, List<List<String>> res) {
        if(row==rows.length) {
            List<String> temp=new ArrayList();
            for(int i=0; i<rows.length; i++)
                temp.add(rows[i].word);
            res.add(temp);
        } else if(col<rows.length) {
            TrieNode currRow=rows[row];
            TrieNode currCol=rows[col];
            for(int i=0; i<26; i++) {
                if(currRow.children[i]!=null && currCol.children[i]!=null) {
                    rows[row]=currRow.children[i];
                    rows[col]=currCol.children[i];
                    findAllSquares(row, col+1, rows, res);
                }
            }
            rows[row]=currRow;
            rows[col]=currCol;
        } else {
            findAllSquares(row+1, row+1, rows, res);
        }
    }
    public void buildTrie(String w, TrieNode root) {
        for(char c: w.toCharArray()) {
            int x=c-'a';
            if(root.children[x]==null)
                root.children[x]=new TrieNode();
            root=root.children[x];
        }
        root.word=w;
    }
}
class TrieNode{
    String word=null;
    TrieNode[] children=new TrieNode[26];
}
```
