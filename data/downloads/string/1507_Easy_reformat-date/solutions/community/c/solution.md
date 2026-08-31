# C Solution 100% faster!! NO BUILTINS!!!!

**Author:** DebbieAlter
**Votes:** 4
**Link:** [https://leetcode.com/problems/reformat-date/solutions/815469/](https://leetcode.com/problems/reformat-date/solutions/815469/)

---

```
char * reformatDate(char * date)
{
    char *formated_date = malloc(11);
    char month[4];
    bool flag = false;
    size_t length = strlen(date);
    char *day = malloc(3);
    formated_date[10] =  '\\0';
    
	// reformat day
    if(isdigit(date[1]))
    {
        formated_date[8] = date[0];
        formated_date[9] = date[1];
    }
    else
    {
        formated_date[8] = '0';
        formated_date[9] = date[0];
        flag = true;
    }
	
    formated_date[7] = '-';
    
	
	// reformat month
    char *iter = flag ? date + 4 : date + 5;
   
    for(int i = 0; i < 3; i++)
    {
        month[i] = *iter;
        iter++;
    }
    month[3] = '\\0';
    
   if(strcmp(month, "Jan") == 0)
        day = "01";
   else if(strcmp(month, "Feb") == 0)
        day = "02";
   else if(strcmp(month, "Mar") == 0)
        day = "03";
   else if(strcmp(month, "Apr") == 0)
        day = "04";
   else if(strcmp(month, "May") == 0)
        day = "05";
   else if(strcmp(month, "Jun") == 0)        
        day = "06";
   else if(strcmp(month, "Jul") == 0)
        day = "07";
   else if(strcmp(month, "Aug") == 0)
        day = "08";
   else if(strcmp(month, "Sep") == 0)  
        day = "09";
   else if(strcmp(month, "Oct") == 0)
        day = "10";
   else if(strcmp(month, "Nov") == 0)
        day = "11";
   else if(strcmp(month, "Dec") == 0)
        day = "12";
          
    formated_date[5] = day[0];
    formated_date[6] = day[1];
    
    formated_date[4] = '-';
    
	// reformat year
    formated_date[3] = date[length - 1];
    formated_date[2] = date[length - 2];
    formated_date[1] = date[length - 3];
    formated_date[0] = date[length - 4];
    
    return formated_date;

}
```