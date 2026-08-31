# Java Bit-manipulation + Map Solution 90ms

**Author:** Edwin_Z
**Votes:** 145
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/372385/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/372385/)

---

First of all, create a map to cache the frequency of the encoded word.

Next, loop the puzzles. During the inner loop, instead of loop through map's keyset (which cause TLE), use ``` sub = (sub - 1) & mask ``` to find all possible char combinations of current puzzel. 

We need update count only if combination contains first element of puzzle as well as map has a record of it (means this puzzle's char combination is as the same as one of the encoded word).

Time Compliexity: O( n * 2 ^ 7 +  m * k) = O(n + mk)
n = len(puzzles);
m = len(words);
k = len(single word)


```
class Solution {
    public List<Integer> findNumOfValidWords(String[] words, String[] puzzles) {
        
        Map<Integer, Integer> map = new HashMap<>();
        
        for(String w : words){
            int mask = 0;
            for(int i = 0; i < w.length(); i++){
                mask |= 1 << (w.charAt(i) - 'a');
            }
            map.put(mask, map.getOrDefault(mask, 0) + 1);
        }
        
        List<Integer> res = new ArrayList<>();
        
        for(String p : puzzles){
            int mask = 0;
            for(int i = 0; i < p.length(); i++){
                mask |= 1 << (p.charAt(i) - 'a');
            }
            int c = 0;
            int sub = mask;
            int first = 1 << (p.charAt(0) - 'a');
            while(true){
                if((sub & first) == first && map.containsKey(sub)){
                    c += map.get(sub);
                }
                
                if(sub == 0) break;
                
                sub = (sub - 1) & mask; // get the next substring
            }
            
            res.add(c);
        }
        
        return res;
    }
}
```