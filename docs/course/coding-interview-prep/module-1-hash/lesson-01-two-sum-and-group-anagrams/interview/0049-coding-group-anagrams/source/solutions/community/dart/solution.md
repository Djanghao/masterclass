# Group Anagrams solution by dart

**Author:** M4RZB4Ni
**Votes:** 2
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/2745976/](https://leetcode.com/problems/group-anagrams/solutions/2745976/)

---



# Code
```
class Solution {
  List<List<String>> groupAnagrams(List<String> strs)
{
  Map<String,List<String>> map={};
  strs.forEach((s) {
        //sould convert it to arrray
        List<String> tmp=s.split('');
        //sort It
        tmp.sort((a, b) => a.compareTo(b));
        //convert back it to String
        String join=tmp.join('');
        //check is it contains map
        if(map.containsKey(join))
        {
             //yes -> add it into Map
                 map[join]!.add(s);
        }else{
             //no -> insert it into map as new item
            map[join]=[s];

    }
    });

  return map.values.toList();

}
}
```