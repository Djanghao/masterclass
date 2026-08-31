# Easy To Understand with complete Explaination c++ solution

**Author:** davemaharshi7
**Votes:** 64
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/417560/](https://leetcode.com/problems/day-of-the-week/solutions/417560/)

---

To find day for particular date, we need some refrence of day which is given in question as years are in range of 1971 to 2100. 
So my first step is to get day for 31st Dec 1970 which is Thrusday ( check in your calender)
Now we will calculate days from this date as refrence.

Step 1) Create static Array for Number of Day in particular Month -
```
        int months[13] = {0,31,28,31,30,31,30,31,31,30,31,30,31};

```
Step-2) Create Array of String for day names as follwing.
```
        string dayName[7] = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};

```
Step-3) Initialize count as 4 because 31st Dec 1970 is Thrusday, which is 4.
		In all we are calculating total number of day till the required Input Date. After the we can simply find particular day name. 
```
        int sum = 4;

```
Step-4) Calculating Number of days till last year. Also taking care for condition of Leap Year which handled as follows
```
		for(int i = 1971; i < year; i++){
            if(((i % 4 ==0) && (i % 100 != 0)) || (i%400 == 0)){
                sum += 366;
            }else{
                sum += 365;
            }
        }
```
Step-5) Calculating number of Day till last Month. Also handling for leap year as following.
```
		for(int i = 1; i < month; i++){
            if( i == 2 && (((year % 4 ==0) && (year % 100 != 0)) || (year % 400 == 0))){
                sum += 1;
            }
            sum += months[i];
        }
```
Step-6) Adding current Number of days for that particular month as following. Then simply returns Day name my using Modulo operator.
```
		sum += day;
        
        return dayName[sum%7];
```
Comments are welcomed.