# Javascript number to char array solution

**Author:** Seriously_Ridhi
**Votes:** 6
**Link:** [https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/608989/](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/solutions/608989/)

---

Follow the Comments for explaination
```
var maxDiff = function(num) {
    var max = [], min = [], flag = false, replace; //create 2 array for min and max
    num = num.toString(); //convert num to string
    num = num.split(""); // then to array
	
	//forming the max number applying the rules mentioned in the question
	//for the first occurence of number less than 9, push 9 to the max array. 
	//keep a replace variable to replace that number's occurences in the array of nums ahead. 
	//set a flag to true so that no other number is changed to 9
	
    for(var i=0;i<num.length;i++){
        if(Number(num[i])<9 && !flag){
            max.push('9');
            flag = true;
            replace = num[i];
        }else if (Number(replace) == Number(num[i])){
            max.push('9');
        }else{
            max.push(num[i]);
        }
    }
	//forming the min number applying the rules mentioned in the question
	//if first number is 1 then we cannot change to zero so iterate the array for find the occurence of first number greater that 1 and replace that by zero. 
	//keep that number in replace variable to replace that number's occurences with '0' in the array of nums ahead. 
	//if the first number is not 1 then change that number to 1
	//keep that number in replace variable to replace that number's occurences with '1' in the array of nums ahead. 
	
    flag = false;
    var replace2;
    if(num[0]==1){
        min.push(num[0]);
        for(var i=1;i<num.length;i++){
            if(Number(num[i])>=2 && !flag){
                min.push('0');
                flag = true;
                replace2 = num[i];
            }else if (replace2 !== undefined && Number(replace2) == Number(num[i])){
                min.push('0');
            }else{
                min.push(num[i]);
            }
        }
    }else{
        for(var i=0;i<num.length;i++){
            if(Number(num[i])>1 && !flag){
                min.push('1');
                flag = true;
                replace2 = num[i];
            }else if (replace2 !== undefined && Number(replace2) == Number(num[i])){
                min.push('1');
            }else{
                min.push(num[i]);
            }
        }
    }
    //join max and min and return difference as the result
    max = max.join("");
    min = min.join("");
    return Number(max) - Number(min)
};
```