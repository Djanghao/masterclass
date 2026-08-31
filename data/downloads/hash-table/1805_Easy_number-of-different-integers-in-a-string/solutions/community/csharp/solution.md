# 4 ways to solve in C# (beats 100%)

**Author:** yeuhoahuuco
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/4884070/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/4884070/)

---

![image.png](./images/0.png)

# Code
```
public class Solution {
    public int NumDifferentIntegers(string word) {
        int l = word.Length;
        if(l == 1)
        {
            return word[0] <= '9' ? 1 : 0;
        }
        
        // -- Solution 1:
        // var arr = word.ToCharArray();
     
        // if((arr[0] == '0' && arr[1] <= '9') || arr[0] > '9')
        // {
        //     arr[0] = ' ';
        // }

        // for(int i = 1; i < l; i++)
        // {
        //     if(i < l - 1 && arr[i] == '0' && arr[i - 1] == ' ' && arr[i + 1] <= '9')
        //     {
        //         arr[i] = ' ';
                
        //     }else if(arr[i] > '9')
        //     {
        //         arr[i] = ' ';
        //     }
        // }
        // -- Solution 1.1:
        // string str = string.Concat(arr);
        // return new HashSet<string>(str.Split(" ", StringSplitOptions.RemoveEmptyEntries)).Count;
        
        // -- Solution 1.2:
        // HashSet<string> set = new HashSet<string>();
        // StringBuilder num = new StringBuilder();
        // foreach (char c in arr) {
        //     if (c != ' ') {
        //         num.Append(c);
        //     } else if (num.Length > 0) {
        //         set.Add(num.ToString());
        //         num.Clear();
        //     }
        // }
        // if (num.Length > 0) {
        //     set.Add(num.ToString());
        // }    
        // return set.Count;
        
        // -- Solution 1.3:
        // HashSet<string> set = new HashSet<string>();
        // string num = "";
        // for (int i = 0; i < l; i++) {
        //     if (arr[i] != ' ') {
        //         num += arr[i];
        //     } else if (num.Length > 0) {
        //         set.Add(num);
        //         num = "";
        //     }
        // }
        // if (num.Length > 0) {
        //     set.Add(num);
        // }
        // return set.Count;
        
        // -- Solution 1.4: 
        // HashSet<string> set = new HashSet<string>();
        // int j = 0;
        // for(int i = 0; i < l; i++)
        // {
        //    if (arr[i] <= '9' && arr[i] >= '0')  // char.IsDigit(word[i])
        //     {
        //         j = i;
        //         while (j < l && arr[j] <= '9' && arr[j] >= '0') {
        //             j++;
        //         }
        //         set.Add(word.Substring(i, j - i)); 
        //         i = j;
        //     } 
        // }       
        // return set.Count;

    
        // -- Solution 2:
        HashSet<string> set = new HashSet<string>();
        int i = 0, j = 0;
        while (i < l) {
            if (word[i] <= '9')  // char.IsDigit(word[i])
            {
                j = i;
                while (j < l && word[j] <= '9') {
                    j++;
                }
                string num = word.Substring(i, j - i);
                set.Add(num.TrimStart('0')); 
                i = j;
            } else {
                i++;
            }
        }
        return set.Count;


        // -- Solution 3:
        // string arr = string.Concat(word.Select(c => (c <= '9') ? c : ' ')
        //                    .ToArray());
        // var brr = arr.Split(' ', System.StringSplitOptions.RemoveEmptyEntries);
        // return new HashSet<string>(brr.Select(num => num.TrimStart('0'))).Count;
    }
}
```