# Easy solution using Java. Beats 100% in 0ms

**Author:** nmudunuri
**Votes:** 54
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/413352/](https://leetcode.com/problems/keyboard-row/solutions/413352/)

---

```
I created an array of size 26 which represents A-Z characters and stored the row 
number of the keyboard as value.
I iterated through the given String array and took the row of first character of current 
String and then verified if each other character in that String points to the same row 
number in my array.
```

```
int[] rows = {2,3,3,2,1,2,2,2,1,2,2,2,3,3,1,1,1,1,2,1,1,3,1,3,1,3};
        List<String> list = new ArrayList<>();
        for(String a: words){
           String s = a.toLowerCase();
            boolean isValid = true;
            int row = rows[s.charAt(0)-'a'];
            for(int i=1; i<s.length();i++){
               if(rows[s.charAt(i)-'a']!=row){
                    isValid = false;
                    break;
                }
            }
            if(isValid){
                list.add(a);
            }
            
        }
        return list.toArray(new String[0]);
```