# Simple Java solution::Backtracking

**Author:** 20184152
**Votes:** 13
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/1251853/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/1251853/)

---

DO UPVOTE INCASE YOU FIND IT HELPFUL!
```
class Solution {
    List<String> list=new ArrayList<>();
    StringBuilder sb = new StringBuilder();
    public String getHappyString(int n, int k) {
        backtrack(n,' ');
        Collections.sort(list);
        if(list.size()<k) return "";
        else return list.get(k-1);
    }
    void backtrack(int n, char prev){
        if(sb.length()==n){
            list.add(sb.toString());
            return;
        }
        else{
            for(char  ch='a';ch<='c';ch++){
              if(ch!=prev){
                sb.append(ch);
                backtrack(n,ch);
                sb.delete(sb.length()-1,sb.length());
              }
                
            }
        }
    }
}