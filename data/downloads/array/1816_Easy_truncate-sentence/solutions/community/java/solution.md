# JAVA 2 Solution || Split || without split

**Author:** HIMANSHUCHHIKARA
**Votes:** 78
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1141430/](https://leetcode.com/problems/truncate-sentence/solutions/1141430/)

---


**Approch 1:[using split]**
```
  public String truncateSentence(String s, int k) {
        String[] str=s.split(" ");
        StringBuilder truncatedSentence=new StringBuilder();
        for(int i=0;i<k-1;i++){
            truncatedSentence.append(str[i] +" ");
        }
        truncatedSentence.append(str[k-1]); //because we don't want  space for last word
        return truncatedSentence.toString();
    }
```
	Complexity:
	Time:O(n) and Space:O(n)
  ` Note: Split function will iterate over the string to split on the basis of "". thats why time is O(n) not O(k)`
  
**Approch 2:[without split]**  
**Code**
```
 public String truncateSentence(String s, int k) {
        int idx=0;
        int spaceCount=0;
        
        while(idx<s.length() && spaceCount<k){
            if(s.charAt(idx)==' ') spaceCount++;
            idx++;
        }
        // if(spaceCount<k) means we have to include whole string 
        return spaceCount==k?s.substring(0,idx-1):s;
    }
````
**Complexity:**
`Time:O(n) and O(1)` [Big O notation average time complexity is better than approch 1]
  
  Please **UPVOTE** if found it helpful and feel free to comment down or reach out to me if you have any doubt.