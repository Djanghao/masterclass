# Java Solution 100 % Faster using Stack code with full explanation!!!

**Author:** Akshay0406
**Votes:** 49
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/1299366/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/1299366/)

---

Approach: Step1 : Traverse through the string from 0th index and push the corresponding character in the stack until stack size is not equal part size
Step 2: When stack size is equal part size then traverse through part from last character and check if it is equal to the stack top characater if it is equal then pop from stack and check for next character
Step 3: If stack top is not equal part character then we have to fill the stack again so the inner loop will do that
Step 4 After above 3 steps your stack will remain with the string characters as a result of removal of all substring Now you will make yout string using stringbuilder from stack as shown in last 4 lines of code.

Do upvote if you like the explanation :) !!

 class Solution {
*   		public String removeOccurrences(String s, String part) {
			Stack<Character> st = new Stack<>();
 		int n = s.length();
        int m = part.length();
        for(int i=0;i<n;i++){
            st.push(s.charAt(i));
            if(st.size()>=m){
                String x="";
                for(int j=m-1;j>=0;j--){
                    char ch = part.charAt(j);
                    if(ch!=st.peek()){
                        for(int k=0;k<x.length();k++){
                            st.push(x.charAt(k));
                        }
                        break;
                    }
                    else{
                        x=st.peek()+x;
                        st.pop();
                    }
                }
            }
        }
        StringBuilder sb = new StringBuilder();
        while(st.size()!=0){
            sb.append(st.pop());
        }
        sb.reverse();
        return sb.toString();
    }
}'''
