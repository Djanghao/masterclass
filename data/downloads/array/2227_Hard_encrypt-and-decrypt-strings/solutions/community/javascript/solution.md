# java solutions

**Author:** Infox_92
**Votes:** 7
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/2778107/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/2778107/)

---

```
class Encrypter {
    class TrieNode{
        int count;
        TrieNode[] letter;
        public TrieNode(){
            letter=new TrieNode[26];
            count=0;
        }
        
        public void add(String s){
            TrieNode p=this;
            for(int i=0;i<s.length();i++){
                char ch=s.charAt(i);
                if(p.letter[ch-97]==null){
                    p.letter[ch-97]=new TrieNode();
                }
                p=p.letter[ch-97];
            }
            p.count++;
        }
        
    }
    Map<Character,String> charMap;
    Map<String,Set<Character>> valueMap;
    TrieNode root;
    public Encrypter(char[] keys, String[] values, String[] dictionary) {
        charMap=new HashMap<>();
        valueMap=new HashMap<>();
        root=new TrieNode();
        for(int i=0;i<keys.length;i++){
            charMap.put(keys[i],values[i]);
            valueMap.computeIfAbsent(values[i],key->new HashSet<>()).add(keys[i]);
        }
        for(String word:dictionary){
            String encrypted=encrypt(word);
            if(null!=encrypted)
                root.add(encrypted);
        }
    }
    public String encrypt(String word1) {
        StringBuilder sb=new StringBuilder();
        for(int i=0;i<word1.length();i++){
            if(charMap.get(word1.charAt(i))==null)
                return null;
            sb.append(charMap.get(word1.charAt(i)));
        }
        return sb.toString();
    }
    public int decrypt(String word2) {
        TrieNode p=root;
        for(int i=0;i<word2.length();i++){
            p=p.letter[word2.charAt(i)-97];
            if(p==null)
                return 0;
        }
        return p.count;
    }
}
```