# Find all permutations - Easy to understand solution with steps

**Author:** tipsy03
**Votes:** 6
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/823706/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/823706/)

---

**Steps :**
1) Sort the input array
2) Find all the valid permutations and store in a list
3) Since the list is sorted, the last element in the list is our required timestamp
4) If list is empty then return an empty string

class Solution {
    public String largestTimeFromDigits(int[] A) {
        
        Arrays.sort(A);
                
        List<String> list = new ArrayList<>();
        
        findValidPermutations(A, list, new StringBuilder(), new boolean[A.length]);
        
        if(list.size() == 0)
            return "";
        
        String lastString = list.get(list.size() - 1);
        
        return formatTimeStamp(lastString);
        
    }
    
    private void findValidPermutations(int[] A, List<String> list, StringBuilder sb, boolean[] used){
        
        if(sb.length() == A.length){
            if(isValid(sb.toString()))
                list.add(sb.toString());
            return;
        }
        
        for(int i = 0; i < A.length; i++){
            
            if(used[i])
                continue;
            
            if(i > 0 && A[i] == A[i-1] && !used[i - 1])
                continue;
            
            used[i] = true;
            sb.append(A[i]);
            
            findValidPermutations(A, list, sb, used);
            
            sb.deleteCharAt(sb.length() - 1);
            used[i] = false;
        }
    }
    
    private boolean isValid(String str){
        
        int hour = Integer.valueOf( str.substring(0,2));
        int minute = Integer.valueOf( str.substring(2, 4));
 
        return hour < 24 && minute <= 59;
        
    }
    
    private String formatTimeStamp(String str){
        
        String hour = str.substring(0,2);
        String minute = str.substring(2,4);
        
        return hour + ":" + minute;
    }
}