# Java | HashMap | Easy to understand

**Author:** AaveshK
**Votes:** 44
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1598877/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1598877/)

---

* Count frequency of words in each array in two separate hashmaps.
* Iterating over either of the array, check if the value is 1 in both the hashmaps.
```
class Solution
{
    public int countWords(String[] words1, String[] words2)
    {
        HashMap<String, Integer> map1 = new HashMap<>();
        HashMap<String, Integer> map2 = new HashMap<>();
		
        for(String word : words1)
            map1.put(word,map1.getOrDefault(word,0)+1);
        for(String word : words2)
            map2.put(word,map2.getOrDefault(word,0)+1);
			
        int count = 0;
        for(String word : words1)
            if(map1.get(word) == 1 && map2.getOrDefault(word,0) == 1)
                count++;
        return count;
    }
}
```