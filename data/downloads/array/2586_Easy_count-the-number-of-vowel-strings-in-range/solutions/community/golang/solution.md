# Golang Solution

**Author:** Prabhakar_Boggala
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/5103790/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/5103790/)

---



# Code
```
func vowelStrings(words []string, left int, right int) int {
    count:=0
    for i:=left;i<=right;i++{
        str:=words[i]
        start:=false
        end:=false
        if str[0]=='a'|| str[0]=='e'||str[0]=='i' || str[0]=='o'||str[0]=='u'{
            start=true
        }
        if str[len(str)-1]=='a'|| str[len(str)-1]=='e'||str[len(str)-1]=='i' || str[len(str)-1]=='o'||str[len(str)-1]=='u'{
            end=true
        }
        if start && end{
            count++
        }
    }
    return count
    
}
```