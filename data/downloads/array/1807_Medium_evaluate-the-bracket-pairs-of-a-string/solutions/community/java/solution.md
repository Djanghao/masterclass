# JAVA EASY Solution

**Author:** HIMANSHUCHHIKARA
**Votes:** 9
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1130695/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1130695/)

---

**Explanation:**
* Store all knowledge in HashMap to get words in O(1)
* Simple add of characters that are before or after bracket . 
* (key) found this key and replace through mapped value.

**CODE:**
```
 public String evaluate(String s, List<List<String>> knowledge) {
        StringBuilder sb=new StringBuilder();
        HashMap<String,String> map=new HashMap<>();
       
        for(List<String> str:knowledge){
          map.put(str.get(0),str.get(1));    
        }
        
         int i=0;
        while(i<s.length()){
            char ch=s.charAt(i);
            if(ch=='('){
                 i++; //we are at '(' to move to next character
                StringBuilder key=new StringBuilder();
                // (abcd) -> will cover abcd through this while loop
                while(i<s.length() && s.charAt(i)!=')'){
                    key.append(s.charAt(i));
                    i++;
                }
                sb.append(map.containsKey(key.toString())?map.get(key.toString()):"?");
                i++; // we are at ')' to move to next character
                continue;
            }
            sb.append(ch);    
            i++;
            
        }
        return sb.toString();
    }
```



Please **UPVOTE** if found it helpful and feel free to reach out to me or comment down if you have any doubt.