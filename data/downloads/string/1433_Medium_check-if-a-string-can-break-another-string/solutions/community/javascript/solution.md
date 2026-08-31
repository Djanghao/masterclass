# Javascript sort and compare solution

**Author:** Seriously_Ridhi
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/608968/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/608968/)

---

Follow the comments for explaination
```
var checkIfCanBreak = function(s1, s2) {
    var r1=[],r2=[];  //form 2 arrays (r1 and r2) having the numeric values of each alphabet of s1 and s2
    for(var i = 0; i<s1.length;i++){
        r1.push(s1.charCodeAt(i) - 97);
        r2.push(s2.charCodeAt(i) - 97);
    }
    r1.sort(function(a,b){return a-b});
    r2.sort(function(a,b){return a-b});
    var s1Big = false, s2Big = false; 
	//keep 2 flags to check for the flow of the array that is if r1[i]>r2[i] then it should be same throughout the array. 
	//if that's not the case return false. 
	//Check for r1[i]<r2[i] as well.
    for(var i = 0; i<r1.length;i++){
        if(r1[i]==r2[i]){
            continue;
        }else if(r1[i]>r2[i]){
            s1Big = true;
            if(s2Big == true){
                return false;
            }else{
                continue;
            }
        }else{
            s2Big = true;
            if(s1Big == true){
                return false;
            }else{
                continue;
            }
        }
    }
    return true;
};
```