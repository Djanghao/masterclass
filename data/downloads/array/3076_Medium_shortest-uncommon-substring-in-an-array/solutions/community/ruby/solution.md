# Beats 100% | Easy Java Solution | Less Code ✅✅

**Author:** Ikapoor123
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4851406/](https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/solutions/4851406/)

---

# Please Upvote \u2705\u2705

# Code
```
class Solution {
    
    private String Make(String sub, String data){
        
        int start = 0;
        String ans = "";
        
        for(int i=0;i<sub.length();i++){
            
            for(int j=i;j<sub.length();j++){
                String temp = sub.substring(i, j+1);
              
                if((!data.contains(temp) && ans.compareTo(temp)>0  && ans.length()>=temp.length() )||(!data.contains(temp) && ans == "") || (!data.contains(temp) && ans.length()>temp.length()  ))   ans = temp;
            }
            
        }
        
        return ans;
    }
    
    public String[] shortestSubstrings(String[] arr) {
        String[] ans = new String[arr.length];
        
        String data = "";
        
        
      
        
        for(int i = 0;i<arr.length;i++){
          
            
            String temp = Insert(arr, i);
            
            ans[i] = Make(arr[i], temp);
            
        }
        
        return ans;
    }
    
    private String Insert(String[] data, int k){
        String ans = "";
        for(int i = 0;i<data.length;i++){
            if(i != k ) ans+=data[i]+"-";
        }
        return ans;
    }
    
}
```