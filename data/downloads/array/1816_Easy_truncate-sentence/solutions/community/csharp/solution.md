# C# very easy solution.Beats 92.39%

**Author:** aloneguy
**Votes:** 3
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/3389984/](https://leetcode.com/problems/truncate-sentence/solutions/3389984/)

---



![photo_2023-04-07_15-49-00.jpg](./images/0.jpeg)


# Code
```
public class Solution {
    public string TruncateSentence(string s, int k) {
        string[] arr=s.Split(' ');
        StringBuilder st=new();
        for(int i=0;i<k-1;i++)
        st.Append(arr[i]+" ");
        st.Append(arr[k-1]);
        return st.ToString();
    }   //if you like it,please vote
}
```