# Java Solution using Stack

**Author:** credit_card
**Votes:** 24
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/889488/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/889488/)

---

```
    public String smallestSubsequence(String s) {
        //character frequency
        int[] count = new int[26];
        for(char c : s.toCharArray()){
            count[c-'a']++;
        }
        //to keep track of visited character so that we don't use them if present in answer
        boolean[] visited = new boolean[26];
        
        //Stack store resulting characters
        Stack<Character> stack = new Stack<>();
        //traverse through string and add characters
        for(char c : s.toCharArray()){
            //dcrement the frequncy of character since we are using it in answer
            //!!! We have decrement the character frequncy before checking it is visited
            count[c - 'a']--;
            
            //if already present in tstack we dont need the character
            if(visited[c - 'a']){
                continue;
            }
            
            //traverse through the stack and check for larger characters
            //if found and it is not the last position then pop from stack
            //Eg: bcabc => if stack has bc, now a<b and curr b is not the last one 
            //if not in last position come out of loop and add curr character to stack
            while(!stack.isEmpty() && c < stack.peek() && count[stack.peek() - 'a'] > 0){
                //make the current character available for next operations
                visited[stack.pop() - 'a'] = false;
            }
            //add curr charatcer to string 
            stack.push(c);
            //mark it as vistied
            visited[c - 'a'] = true;
        }
        
        //Now characters are in reverse order in stack 
        //Use StringBuilder instead of String for storing result
        StringBuilder sb = new StringBuilder();
        while(!stack.isEmpty()){
            sb.append(stack.pop());
        }
        
        return sb.reverse().toString();
        
    }
```