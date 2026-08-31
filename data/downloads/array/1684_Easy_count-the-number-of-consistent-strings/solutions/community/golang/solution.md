# [Java][Golang] Using o(n^2) and easy you understand

**Author:** Orcaa
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/2799518/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/2799518/)

---

# Code
```
//Java solution
class Solution {
    public int countConsistentStrings(String allowed, String[] words) {
    int count = 0;

        for(String str : words){
            int check = 0;
                for(int j = 0; j < str.length(); j++){
                    if(allowed.contains(String.valueOf(str.charAt(j)))){
                        check++;
                    }
                }
                if(check == str.length()){
                    count++;
                }
        } 
    
    
    return count;
    }
}

//Golang solution
//solution : 1
func countConsistentStrings(allowed string, words []string) int {
    count := 0
    for _, s := range words {
        for i, v := range s {
            if strings.Contains(allowed, string(v)) == false {
                    break
            }
            if i == len(s)-1 {count++}    
        }
    }

    return count
}
//solution : 2
func countConsistentStrings(allowed string, words []string) int {
    count := 0

    for _, v := range words {
        for _, n := range allowed {
            v = strings.ReplaceAll(v, string(n), "")
        }
        if len(v) == 0 {
            count++
        }
    }


    return count
}
```