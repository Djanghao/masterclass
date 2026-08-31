# C# Solution

**Author:** phumney89
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/5440306/](https://leetcode.com/problems/unique-word-abbreviation/solutions/5440306/)

---


# Code
```
public class ValidWordAbbr {
    Dictionary<string, string> wordAbr = new();
    Dictionary<string, int> abrCount = new();

    public ValidWordAbbr(string[] dictionary) {
        foreach(string str in dictionary){
            if(wordAbr.ContainsKey(str))
                continue;
            string abrv = Abreviate(str);

            if(!wordAbr.ContainsKey(str))
                wordAbr.Add(str, abrv);
            
            if(!abrCount.ContainsKey(abrv))
                abrCount.Add(abrv, 0);
            abrCount[abrv]++;
        }    
    }
    
    public bool IsUnique(string word) {
        
        string abrv = Abreviate(word);

        if(!abrCount.ContainsKey(abrv))
            return true;
        else{
            return wordAbr.ContainsKey(word) && abrCount[abrv]==1;
        }
    }

    string Abreviate(string str){
        if(str.Length==1){
            return str;
        }
            
        StringBuilder ab = new StringBuilder();
        ab.Append(str[0]);
        int count = 0;
        for(int i = 1; i < str.Length-1; i++){
            count++;
        }
        if(count>0) ab.Append(count);
        ab.Append(str[str.Length-1]);

        string abrv = ab.ToString();

        return abrv;
    }
}

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * ValidWordAbbr obj = new ValidWordAbbr(dictionary);
 * bool param_1 = obj.IsUnique(word);
 */
```