# MYSQL simple - All approach with explanation

**Author:** AasthaChaudhary
**Votes:** 822
**Link:** [https://leetcode.com/problems/calculate-special-bonus/solutions/2489979/](https://leetcode.com/problems/calculate-special-bonus/solutions/2489979/)

---


# solution 1  ( union statement)
```
-- SOLUTION  - 1 :
        -- select entries with odd  employee id and name not start with M
            select employee_id , salary as bonus 
            from employees 
            where employee_id%2 <>0 and name not like 'M%'
            
        -- join both selection 
            union
            
        -- select remaining entries from table 
            select employee_id , 0 as bonus
            from employees
            where employee_id%2 = 0 or name like 'M%'
            order by employee_id;
            
```
# solution 2 ( simple )
# explanation : 
Here  '*' means simply multiply 
if employeeid is even then ( employee id %2 return 1 ) 
if( name is not start with M then it return 1 
else return 0 
if return value is zero , then on multiplying with salary bonus become 0 
else bonus is equal to salary 
```
    select employee_id , salary * ( employee_id%2 ) * ( name not like 'M%') as bonus
    from employees
    order by employee_id;
```

# solution 3 ( case statement )

```
   select employee_id , 
   case when employee_id%2 <>0 and name not like 'M%' then salary 
   else 0
   end 
   as bonus
   from employees
   order by employee_id;
```

*do upvote  and like this solution  : )
you guyzz can learn sql from this playlist ( basic to advance ) - https://www.youtube.com/playlist?list=PLciOSsgMIYtI0y8qXBJat4Phnes9Kgqd5