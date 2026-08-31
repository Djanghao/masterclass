# Sliding Window in Dart

**Author:** user7097xf
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/4981593/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/4981593/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> findAnagrams(String s, String p) {
   List<int> res =[];
   int slen = s.length;
   int plen= p.length;
   if(slen<plen){
    return [];
   }
    List<int> freq = List<int>.filled(26,0,growable:false);
    List<int> win = List<int>.filled(26,0,growable:false);

    for(int i =0; i<plen;i++){
        freq[p[i].codeUnitAt(0)-'a'.codeUnitAt(0)]++;
        win[s[i].codeUnitAt(0)-'a'.codeUnitAt(0)]++;
    }
    if(matchList(freq,win)){
        res.add(0);
    }
    
    for(int i=plen;i<slen;i++){
        win[s[i-plen].codeUnitAt(0)-"a".codeUnitAt(0)]--;
        win[s[i].codeUnitAt(0)-"a".codeUnitAt(0)]++;
        if(matchList(freq,win)){
            res.add(i-plen+1);
        }
    }
return res;
}

  bool matchList(List<int> l1, List<int> l2 ){
        for(int i=0; i<26;i++){
            if(l1[i]!=l2[i]){
            return false;
            }
        }
        return true;
    }
}
```