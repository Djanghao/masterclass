# Beats 100 % time and beats 100 % space. Best solution out there. No binary search needed.

**Author:** alklin
**Votes:** 76
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/398951/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/398951/)

---

1. For each word in words array find the fCount and increment the fCount array. The fCount array holds the number of words with current fCount.

2. For the fCount array find the running sum. This is the second for loop. At each index of running sum this is the number of words with fcount of [0, i].
3. Find the fCount for the word in queries. Since we want the number of fCount words that are greater than fCount of query the answer will be fCount[fCount.length -1] which is the number of all Fcounts - the number of all fCounts of queries of i.

```

class Solution {
    public int[] numSmallerByFrequency(String[] queries, String[] words) {
        
        int [] fCount = new int[11];
        
        for(String word : words){
            int count = getFCount(word);
            fCount[count]++;
        }
        
        
        int sum = 0;
        for(int i=0;i<fCount.length;i++){
            sum += fCount[i];
            fCount[i] = sum;
        }
        
        int [] res = new int[queries.length];
        
        for(int i=0;i<queries.length;i++){
            
            int count = getFCount(queries[i]);
            res[i] = fCount[fCount.length -1] - fCount[count];
        }
        
        return res; 
    }
    
    public int getFCount(String word){
        int [] count = new int[26];
            
        for(int i=0;i<word.length();i++){
            count[word.charAt(i)-'a']++;
        }

        for(int i=0;i<count.length;i++){            
            if(count[i] != 0){
                return count[i];
            }
        }
        
        return 0;
    }
}


```