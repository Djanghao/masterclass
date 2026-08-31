# Easy C++ Solution

**Author:** arshad_codes
**Votes:** 26
**Link:** [https://leetcode.com/problems/reformat-date/solutions/730673/](https://leetcode.com/problems/reformat-date/solutions/730673/)

---

```
string reformatDate(string date) {
        string res;
        if(date.length()==13)
            res=date.substr(9,4)+'-'+ret(date.substr(5,3))+'-'+date.substr(0,2);
        else
            res=date.substr(8,4)+'-'+ret(date.substr(4,3))+'-'+'0'+date.substr(0,1);
        return res;
    }
    string ret(string s){
        if(s=="Jan")    return "01";
        else if(s=="Feb")   return "02";
        else if(s=="Mar")   return "03";
        else if(s=="Apr")   return "04";
        else if(s=="May")   return "05";
        else if(s=="Jun")   return "06";
        else if(s=="Jul")   return "07";
        else if(s=="Aug")   return "08";
        else if(s=="Sep")   return "09";
        else if(s=="Oct")   return "10";
        else if(s=="Nov")   return "11";
        else        return "12";
    }