# Java code with Explanation

**Author:** coderInUS
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/1002683/](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/solutions/1002683/)

---

Here we will make a map which contain first and last occurance of each character and then whenever we will encounter the first occurance of each character we will check its end and run a loop from that start till end .
Now between all the characters from start to end , if we encounter any charcter whose start is less than our start we will return -1 as it will be a invalid case . 
else we will return the last end . and we will check if this end is greater than the prevEmnd it means we found a new substring else , if this end is less than the prev end it means we found a shorter substring so we will update the last substring we found as now we have found a much shorter substring .
```
class Solution {
    public List<String> maxNumOfSubstrings(String s) {
        
        List<String> res=new ArrayList<>();
        
        Map<Character,int[]> map=new HashMap<>();
        
        for(int i=0;i<s.length();i++){
            if(map.containsKey(s.charAt(i))){
                map.get(s.charAt(i))[1]=i;
            }else{
                map.put(s.charAt(i),new int[]{i,i});
            }
        }
        
        int prevEnd=-1;
        for(int i=0;i<s.length();i++){
            
            int start=map.get(s.charAt(i))[0];
            //if i is the left most index of this character only then we can start a substring here
            if(start==i){
                int newEnd= getRightMost(s,map,i);
                if(newEnd!= -1){
                    //if a new substring is found
                    if(newEnd>prevEnd){
                        res.add("");
                    }
                    prevEnd=newEnd;
                    // if new end is less than the prev End which means inside prev substring we found a more shorter substring
                    res.set(res.size()-1,s.substring(i,prevEnd+1));     
                }
            }
            
            
        }
        
        return res;
      
    }
    
    public int getRightMost(String s,Map<Character,int[]> map,int start){
        int end=map.get(s.charAt(start))[1];
        
        for(int i=start;i<=end;i++){
            //if any inside substring has a start before this substring, then we will return -1,
            //which means we cannot start a substring at index i as it contains a char whose start
            //is less than this i .
            if(map.get(s.charAt(i))[0]<start) return -1;
            end=Math.max(end,map.get(s.charAt(i))[1]);              
        }
        
        return end;
    }
    
    
}
```