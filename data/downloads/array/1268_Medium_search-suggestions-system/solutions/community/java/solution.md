# Java Priority Queue No Sort or Trie

**Author:** gregorioospina
**Votes:** 110
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/471718/](https://leetcode.com/problems/search-suggestions-system/solutions/471718/)

---

I found much more intuitive to iterate through every substring (0, k) of S asking each word in the product array if it starts with the substring, if it does, I add it to a PriorityQueue which is comparing lexographhically, that way you just need to poll() 3 times to find the most accurate results.
```
class Solution {
public List<List<String>> suggestedProducts(String[] products, String searchWord) {
  PriorityQueue<String> pq = new PriorityQueue<>(3, (s1,s2) -> s1.compareTo(s2)); 
  List<List<String>> list = new ArrayList<>();
  
  for(int i = 1; i<=searchWord.length(); i++){
    String temp = searchWord.substring(0, i);
    for(String s : products){
      if(s.startsWith(temp)){
        pq.offer(s);
      }
    }
    List<String> temp_list = new ArrayList<>();
    for(int j = 0; j<3; j++){
      if(pq.peek() != null){
        temp_list.add(pq.poll());
      }
    }
    pq.clear();
    list.add(temp_list);
  }
  return list;
  }
}
```