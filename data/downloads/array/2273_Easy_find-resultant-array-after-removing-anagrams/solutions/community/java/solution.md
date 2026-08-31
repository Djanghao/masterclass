# ✅Java | Easy | Two Methods | Clean | Simple

**Author:** kalinga
**Votes:** 95
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2040664/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/2040664/)

---

**Method 1**
```
class Solution {
    public List<String> removeAnagrams(String[] words) {
        String prev ="";
        List<String> li=new ArrayList<>();
        for(int i=0;i<words.length;i++){
            char[] ch=words[i].toCharArray();
            Arrays.sort(ch);
            String curr=String.valueOf(ch);
            if(!curr.equals(prev)){
                li.add(words[i]);
                prev=curr;
            }
        }
        return li;
    }
}
```

**Method 2**
```
class Solution {
    public List<String> removeAnagrams(String[] words) {
        Stack<String> stack = new Stack<>();
        for(int i = words.length-1;i>= 0;i--){
            String s = words[i];
            while(!stack.isEmpty() && anagram(stack.peek(),s) == true)stack.pop();
            stack.push(s);
        }
        List<String> res = new ArrayList<>();
        while(!stack.isEmpty())res.add(stack.pop());
        return res;
    }
    
    public boolean anagram(String p,String q){
        int arr[] = new int[26];
        for(char i : p.toCharArray())arr[i-'a']+=1;
        for(char i : q.toCharArray())arr[i-'a']-=1;
        for(int i : arr)if(i != 0)return false;
        return true;
    }
}
```
**IF YOU LIKED THE APPROACH PLEASE UPVOTE \uD83D\uDE4F\uD83D\uDE4F\uD83D\uDE4F**