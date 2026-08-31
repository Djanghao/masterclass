# Java Trie + hashMap easy to understand

**Author:** gooooooogle
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-abbreviation/solutions/4466450/](https://leetcode.com/problems/word-abbreviation/solutions/4466450/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m * n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m * n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    // n, m
    // m * (n * m) n * m ^ 2
    public List<String> wordsAbbreviation(List<String> words) {
        List<String> res = new ArrayList<>();
        Map<String, Trie> map = new HashMap<>();
        for(String word : words){
            String key = "" + word.charAt(word.length() - 1) + word.length();
            map.putIfAbsent(key, new Trie());
            map.get(key).insert(word);
        }
        for(int i = 0; i < words.size(); i++){
            String word = words.get(i);
            String key = "" + word.charAt(word.length() - 1) + word.length();
            int preLen = map.get(key).searchUniquePrefix(words.get(i));
            if(preLen + 2 >= words.get(i).length()){
                res.add(words.get(i));
            }else{
                res.add(words.get(i).substring(0, preLen) + (words.get(i).length() - preLen - 1) + words.get(i).charAt(words.get(i).length() - 1));
            }
        }
        return res;
    }
}
class Trie{
    Node root;
    public Trie(){
        root = new Node();
    }
    public void insert(String s){
        Node t = root;
        for(char c : s.toCharArray()){
            t.cnt++;
            if(!t.children.containsKey(c)){
                t.children.put(c, new Node());
            }
            t = t.children.get(c);
        }
        t.cnt++;
        t.isLeaf = true;
    }
    public int searchUniquePrefix(String s){
        Node t = root;
        int len = 0;
        for(char c : s.toCharArray()){
            t = t.children.get(c);
            len++;
            if(t.cnt == 1){
                break;
            }
        }
        return len;
    }
}
class Node{
    Map<Character, Node> children;
    boolean isLeaf;
    int cnt;
    public Node(){
        children = new HashMap<>();
        isLeaf = false;
        cnt = 0;
    }
}
```